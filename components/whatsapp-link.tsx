import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

type WhatsAppLinkProps = {
  className?: string;
  floating?: boolean;
};

export default function WhatsAppLink({ className = "", floating = false }: WhatsAppLinkProps) {
  return (
    <a
      className={`${floating ? "whatsapp-floating" : "whatsapp-link"} ${className}`.trim()}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={floating ? "Chat with SETU Technologies on WhatsApp" : undefined}
    >
      <MessageCircle size={floating ? 22 : 17} aria-hidden="true" />
      {floating ? <span className="whatsapp-floating-label">WhatsApp</span> : <span>Chat on WhatsApp</span>}
    </a>
  );
}