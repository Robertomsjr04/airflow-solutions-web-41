
import React from 'react';
import { Phone } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
}

export function WhatsAppButton({ phoneNumber, message = "Olá! Gostaria de saber mais sobre seus serviços." }: WhatsAppButtonProps) {
  const formattedNumber = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none cursor-pointer"
            aria-label="Entre em contato pelo WhatsApp"
          >
            <Phone size={28} className="stroke-[2.5px]" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-[#25D366] text-white border-[#128C7E]">
          <p>Fale conosco pelo WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
