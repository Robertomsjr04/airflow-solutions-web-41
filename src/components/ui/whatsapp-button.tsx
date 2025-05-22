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
          
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-[#25D366] text-white border-[#128C7E]">
          <p>Fale conosco pelo WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>;
}