
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({
  phoneNumber = "5561999124752",
  message = "Olá! Gostaria de saber mais sobre seus serviços de emergência.",
  className,
  children
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    // Format phone number (remove any non-digit characters)
    const formattedPhone = phoneNumber.replace(/\D/g, '');
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`;
    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');
  };

  if (children) {
    return (
      <button onClick={handleWhatsAppClick} className={className}>
        {children}
      </button>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button 
            onClick={handleWhatsAppClick}
            className={`bg-green-500 p-3 rounded-full text-white ${className}`}
            aria-label="Contato via WhatsApp"
          >
            <MessageCircle size={24} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Contato via WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
