import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Bot, Globe2, LayoutDashboard, Workflow } from "lucide-react";
import WhatsAppLink from "@/components/whatsapp-link";

export default function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> SOFTWARE <i /> AUTOMATION <i /> DIGITAL PRODUCTS</p>
        <h1>Bridging business challenges <em>with technology.</em></h1>
        <p className="hero-lede">We build thoughtful digital experiences, practical automation, and custom software that help businesses work smarter and grow.</p>
        <div className="hero-actions">
          <Link className="button button-lime" href="#contact">Discuss Your Project <ArrowUpRight size={17} /></Link>
          <WhatsAppLink className="button button-whatsapp hero-whatsapp" />
          <Link className="text-link" href="#services">Explore Our Services <ArrowRight size={16} /></Link>
        </div>
        <div className="hero-footnote"><span className="footnote-line" />A technology partner for ideas in motion</div>
      </div>
      <div className="hero-art" aria-label="Illustration of connected website, software, and automation interfaces">
        <div className="art-grid" />
        <div className="art-orbit orbit-one" />
        <div className="art-orbit orbit-two" />
        <div className="art-node node-web"><Globe2 size={17} /><span>WEB</span></div>
        <div className="art-node node-ai"><Bot size={17} /><span>AI</span></div>
        <div className="art-node node-software"><LayoutDashboard size={17} /><span>SOFTWARE</span></div>
        <div className="mock-window">
          <div className="mock-top"><span className="mock-dots"><b /><b /><b /></span><span>your-business.site</span><ArrowUpRight size={13} /></div>
          <div className="mock-page">
            <div className="mock-brand"><span /> your business <small>MENU</small></div>
            <div className="mock-heading">Make room for<br /><strong>what matters.</strong></div>
            <div className="mock-copy" />
            <div className="mock-button">Explore <ArrowRight size={11} /></div>
            <div className="mock-art-block"><div /><span /></div>
          </div>
        </div>
        <div className="workflow-card">
          <div className="workflow-head"><Workflow size={15} /> ENQUIRY WORKFLOW <span>DEMO</span></div>
          <div className="workflow-step"><span className="step-icon step-mail">@</span><span>New enquiry<small>Website form</small></span><i /></div>
          <div className="workflow-connector" />
          <div className="workflow-step"><span className="step-icon step-ai"><Bot size={14} /></span><span>Prepare a reply<small>Assistant draft</small></span><i /></div>
          <div className="workflow-connector" />
          <div className="workflow-step"><span className="step-icon step-check">✓</span><span>Review &amp; send<small>Human approval</small></span></div>
        </div>
        <div className="art-caption">A connected digital foundation</div>
      </div>
      <Link href="#about" className="hero-scroll" aria-label="Scroll to learn about SETU"><ArrowDown size={16} /></Link>
    </section>
  );
}