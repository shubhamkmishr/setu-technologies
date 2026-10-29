import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const approaches = [
  ["01", "Starter Website", "Discuss your requirements", "A focused starting point for a new or refreshed online presence."],
  ["02", "Business Website", "Get a tailored estimate", "A considered website shaped around your content, audience, and goals."],
  ["03", "Software & Automation", "Let’s scope your project", "Custom tools and workflows planned around your business requirements."],
];

export default function Pricing() {
  return (
    <section className="pricing section-space" id="pricing">
      <div className="section-shell">
        <div className="section-heading"><div><p className="eyebrow">A transparent start</p><h2>Every project is its own.</h2></div><p>We scope work around what you need, not a one-size-fits-all package. Start with a conversation and get a clear estimate before work begins.</p></div>
        <div className="pricing-list">{approaches.map(([number, name, action, summary]) => <article key={number}><span>{number}</span><div><h3>{name}</h3><p>{summary}</p></div><Link href="#contact">{action}<ArrowUpRight size={16} /></Link></article>)}</div>
        <p className="pricing-note">Final pricing depends on scope, features, integrations, content, and any ongoing support agreed for the project.</p>
      </div>
    </section>
  );
}