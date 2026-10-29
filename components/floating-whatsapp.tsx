"use client";

import { useEffect, useState } from "react";
import WhatsAppLink from "@/components/whatsapp-link";

export default function FloatingWhatsApp() {
  const [isCoveredByContact, setIsCoveredByContact] = useState(false);

  useEffect(() => {
    const contactSection = document.querySelector("#contact");
    const footer = document.querySelector(".site-footer");
    if (!contactSection || !footer) return;
    const visibleTargets = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleTargets.add(entry.target);
          else visibleTargets.delete(entry.target);
        });
        setIsCoveredByContact(visibleTargets.size > 0);
      },
      { threshold: 0.01 },
    );

    observer.observe(contactSection);
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return isCoveredByContact ? null : <WhatsAppLink floating />;
}