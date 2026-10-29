import Link from "next/link";
import { ArrowUpRight, BarChart3, Globe2, Workflow } from "lucide-react";

const concepts = [
  { name: "Business Website", kind: "WEBSITE DEVELOPMENT", number: "01", icon: Globe2, style: "concept-site" },
  { name: "Operations Dashboard", kind: "CUSTOM SOFTWARE", number: "02", icon: BarChart3, style: "concept-dashboard" },
  { name: "Enquiry Workflow", kind: "AUTOMATION CONCEPT", number: "03", icon: Workflow, style: "concept-flow" },
];

export default function Work() {
  return (
    <section className="work section-space" id="work">
      <div className="section-shell">
        <div className="section-heading work-heading">
          <div><p className="eyebrow">Selected directions</p><h2>Ideas made tangible.</h2></div>
          <p>These are demonstration concepts, created to show possible directions rather than completed client projects.</p>
        </div>
        <div className="work-grid">
          {concepts.map(({ name, kind, number, icon: Icon, style }) => (
            <article className="work-card" key={number}>
              <div className={`concept-preview ${style}`} aria-hidden="true">
                <div className="concept-label"><Icon size={14} /> CONCEPT PROJECT</div>
                {style === "concept-site" && <div className="site-preview"><div className="site-preview-nav"><b>studio.</b><span>ABOUT&nbsp;&nbsp; WORK&nbsp;&nbsp; CONTACT</span></div><div className="site-preview-title">A little more<br /><i>considered.</i></div><div className="site-preview-image"><span /><span /></div></div>}
                {style === "concept-dashboard" && <div className="dashboard-preview"><div className="dash-sidebar"><i /><i /><i /><i /></div><div className="dash-content"><b>Overview</b><div className="dash-metrics"><i /><i /><i /></div><div className="dash-chart"><span /><span /><span /><span /><span /><span /><span /><span /></div><div className="dash-table"><i /><i /><i /></div></div></div>}
                {style === "concept-flow" && <div className="flow-preview"><div className="flow-box"><span>@</span>New enquiry</div><div className="flow-line" /><div className="flow-box"><span><Icon size={15} /></span>Review details</div><div className="flow-line" /><div className="flow-box"><span>✓</span>Team follow-up</div></div>}
              </div>
              <div className="work-card-bottom"><div><span className="project-kind">{kind} · {number}</span><h3>{name}</h3></div><Link href="#contact" aria-label={`Discuss a project like ${name}`}><ArrowUpRight size={18} /></Link></div>
            </article>
          ))}
        </div>
        <p className="concept-disclaimer">Concept visuals only. Project scope and final implementation are shaped around each client’s needs.</p>
      </div>
    </section>
  );
}