"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const questions = [
  ["What services does SETU provide?", "Website development, custom software, and practical automation planning and implementation. The right service depends on the business need and project scope."],
  ["How does a project begin?", "We start with a conversation about your business, the challenge, and what you want the work to achieve. From there, we can define a suitable scope and next steps."],
  ["How is project pricing determined?", "Estimates are based on the agreed scope, features, integrations, content requirements, and any ongoing support. You will have a chance to review the scope before work begins."],
  ["Can an existing website be improved?", "Yes. We can discuss a refresh, performance or usability improvements, new pages, or a more substantial rebuild after understanding the current site and your goals."],
  ["Can custom features and integrations be developed?", "Potentially. We assess each request based on the systems involved, available access, security needs, and technical feasibility before confirming what can be delivered."],
  ["How can I contact SETU?", "Use the project form below to prepare an enquiry. It opens a draft in your email app only when a contact email has been configured; this website does not send the message itself."],
];

export default function Faq() {
  return (
    <section className="faq section-shell section-space" id="faq">
      <div className="faq-heading"><p className="eyebrow">A few useful answers</p><h2>Questions, meet clarity.</h2><p>Still wondering about something? <Link href="#contact">Start a conversation <ArrowUpRight size={14} /></Link></p></div>
      <Accordion type="single" collapsible className="faq-list">{questions.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`}><AccordionTrigger>{question}</AccordionTrigger><AccordionContent>{answer}</AccordionContent></AccordionItem>)}</Accordion>
    </section>
  );
}