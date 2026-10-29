import { ArrowUpRight, Blocks, MessagesSquare, ScanSearch, Sprout } from "lucide-react";
import Link from "next/link";

const reasons = [
  { icon: ScanSearch, title: "Start with the problem", body: "We take time to understand the work before recommending a technology solution." },
  { icon: MessagesSquare, title: "Keep the conversation clear", body: "Shared priorities and regular check-ins keep decisions visible as the work progresses." },
  { icon: Blocks, title: "Build for real use", body: "Useful, maintainable software matters more than complexity for its own sake." },
  { icon: Sprout, title: "Leave room to grow", body: "We consider how your needs may change and keep the path forward in view." },
];

export default function WhySetu() {
  return (
    <section className="why-setu section-space">
      <div className="section-shell why-layout">
        <div className="why-intro"><p className="eyebrow">Why SETU</p><h2>Bridge the gap between what is and what could be.</h2><p>Good technology is not about adding more tools. It is about making the right work easier.</p><Link className="text-link" href="#contact">Start a conversation <ArrowUpRight size={16} /></Link></div>
        <div className="reason-grid">{reasons.map(({ icon: Icon, title, body }) => <article key={title}><Icon size={20} strokeWidth={1.7} /><h3>{title}</h3><p>{body}</p></article>)}</div>
      </div>
    </section>
  );
}