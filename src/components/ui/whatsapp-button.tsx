
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}
export function WhatsAppButton({
  phoneNumber,
  message = "Olá! Gostaria de saber mais sobre seus serviços."
}: WhatsAppButtonProps) {
  const formattedNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
  return <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href={whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed right-6 bottom-6 z-50 bg-[#25D366] hover:bg-[#20c05c] text-white p-3.5 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
            aria-label="Contato WhatsApp"
          >
            <MessageCircle size={28} />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-[#25D366] text-white border-[#128C7E]">
          <p>Fale conosco pelo WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>;
}
