
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
  // Return null to effectively remove the button
  return null;
}
