import Link from "next/link";
import { ArrowUpRight, Bot, Code2, MonitorSmartphone } from "lucide-react";

const services = [
  {
    number: "01",
    name: "Website Development",
    intro: "A first impression that makes it easy for the right people to take the next step.",
    problem: "Hard-to-find information and dated experiences can make a good business easy to overlook.",
    benefit: "Give customers a clear, responsive way to understand your offer and get in touch.",
    items: ["Business websites", "Landing pages", "Portfolio & e-commerce", "Responsive experiences"],
    icon: MonitorSmartphone,
    link: "Discuss a website",
  },
  {
    number: "02",
    name: "AI Automation",
    intro: "Make repetitive work more manageable with thoughtfully scoped automation.",
    problem: "Manual handoffs and repeat tasks can take attention away from customers and higher-value work.",
    benefit: "Explore practical ways to simplify workflows, with people kept in control of important decisions.",
    items: ["Workflow mapping", "AI assistant concepts", "Enquiry workflows", "Repetitive task automation"],
    icon: Bot,
    link: "Explore an automation idea",
  },
  {
    number: "03",
    name: "Custom Software Development",
    intro: "Purpose-built tools shaped around the way your business actually operates.",
    problem: "Off-the-shelf tools do not always fit a team’s process, data, or day-to-day decisions.",
    benefit: "Bring important workflows into a focused application that can evolve with your needs.",
    items: ["Business dashboards", "Admin panels & CRM tools", "Custom web applications", "Internal business tools"],
    icon: Code2,
    link: "Scope a software project",
  },
];

export default function Services() {
  return (
    <section className="services section-shell section-space" id="services">
      <div className="section-heading">
        <div><p className="eyebrow">What we can build together</p><h2>Technology that moves<br />your business forward.</h2></div>
        <p>From your first digital storefront to the tools behind your operations, we connect the right solution to the real need.</p>
      </div>
      <div className="service-grid">
        {services.map(({ number, name, intro, problem, benefit, items, icon: Icon, link }) => (
          <article className="service-card" key={number}>
            <div className="service-card-top"><span className="service-icon"><Icon size={21} strokeWidth={1.7} /></span><span className="service-number">{number}</span></div>
            <h3>{name}</h3><p className="service-intro">{intro}</p>
            <div className="service-explainer"><span>THE CHALLENGE</span><p>{problem}</p></div>
            <div className="service-explainer"><span>THE OUTCOME</span><p>{benefit}</p></div>
            <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            {number === "02" && <p className="service-note">Automation scope depends on your systems, data, and requirements. Capabilities are assessed per project.</p>}
            <Link href="#contact" className="service-link">{link} <ArrowUpRight size={15} /></Link>
          </article>
        ))}
      </div>
    </section>
  );
}