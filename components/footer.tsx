import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import WhatsAppLink from "@/components/whatsapp-link";
import { BUSINESS_EMAIL } from "@/lib/site";

const links = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Our Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-main">
        <div><Link href="#home" className="wordmark footer-wordmark"><span className="wordmark-mark" aria-hidden="true">S</span><span>SETU <small>TECHNOLOGIES</small></span></Link><p>Bridging Ideas and Technology.</p><span className="footer-tagline">Thoughtful digital work for what comes next.</span></div>
        <div className="footer-links"><p>EXPLORE</p>{links.map((link) => <Link key={link.href} href={link.href}>{link.name}</Link>)}</div>
        <div className="footer-contact"><p>HAVE SOMETHING IN MIND?</p><Link href="#contact">Let&apos;s talk about it <ArrowUpRight size={16} /></Link><a className="footer-email" href={`mailto:${BUSINESS_EMAIL}`}>{BUSINESS_EMAIL}</a><WhatsAppLink className="footer-whatsapp" /></div>
      </div>
      <div className="section-shell footer-bottom"><span>© {new Date().getFullYear()} SETU Technologies</span><span>Bridging Ideas and Technology.</span></div>
    </footer>
  );
}