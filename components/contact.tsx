"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import WhatsAppLink from "@/components/whatsapp-link";
import { BUSINESS_EMAIL, SERVICE_OPTIONS } from "@/lib/site";

export default function Contact() {
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState<"error" | "success" | "">("");
  const [draftPrepared, setDraftPrepared] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (draftPrepared) return;
    if (data.get("website")) {
      setFeedbackType("error");
      setFeedback("Unable to prepare the enquiry. Please try again.");
      return;
    }

    const subject = `Project enquiry from ${String(data.get("name"))}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Business email: ${data.get("email")}`,
      `Service: ${data.get("service")}`,
      "",
      "Project details:",
      String(data.get("message")),
    ].join("\n");
    setDraftPrepared(true);
    window.location.href = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFeedbackType("success");
    setFeedback(`Your email app should open with a draft. Review it and press Send. If it does not open, email ${BUSINESS_EMAIL}. This website has not sent your enquiry.`);
  }

  return (
    <section className="contact section-space" id="contact">
      <div className="section-shell contact-layout">
        <div className="contact-copy"><p className="eyebrow">A good project starts here</p><h2>Have an idea?<br /><em>Let&apos;s build</em> something meaningful.</h2><p>Tell us about your business challenge, and let&apos;s explore the right digital solution.</p><a className="contact-email-link" href={`mailto:${BUSINESS_EMAIL}`}><Mail size={17} />{BUSINESS_EMAIL}</a><WhatsAppLink className="button button-whatsapp contact-whatsapp" /></div>
        <form className="contact-form" onSubmit={handleSubmit} onChange={() => { setFeedback(""); setFeedbackType(""); setDraftPrepared(false); }} onInvalid={(event) => {
          const field = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
          setFeedbackType("error");
          const label = field.labels?.[0]?.childNodes[0]?.textContent?.trim() || "required";
          if (field.validity.valueMissing) {
            setFeedback(`Please complete the ${label} field.`);
          } else if (field.validity.typeMismatch) {
            setFeedback("Please enter a valid email address.");
          } else if (field.validity.tooShort) {
            setFeedback(`Please add more detail to the ${label} field.`);
          } else {
            setFeedback(`Please check the ${label} field.`);
          }
        }}>
          <label>Name<input name="name" autoComplete="name" required maxLength={120} /></label>
          <label>Email<input type="email" name="email" autoComplete="email" required maxLength={254} /></label>
          <label>Service Required<select name="service" defaultValue="" required><option value="" disabled>Select a service</option>{SERVICE_OPTIONS.map((service) => <option key={service}>{service}</option>)}</select></label>
          <label>Message<textarea name="message" rows={4} required minLength={10} maxLength={3000} placeholder="Tell us a little about what you need." /></label>
          <label className="form-trap" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
          <button className="button button-lime form-submit" type="submit" disabled={draftPrepared}>{draftPrepared ? "Draft prepared" : "Prepare email draft"} <ArrowUpRight size={17} /></button>
          <p className={`form-note${feedbackType ? ` form-note-${feedbackType}` : ""}`} role={feedbackType === "error" ? "alert" : "status"} aria-live={feedbackType === "error" ? "assertive" : "polite"}>{feedback || `This opens a draft addressed to ${BUSINESS_EMAIL}. Review and send it in your email app; this website does not transmit enquiries.`}</p>
        </form>
      </div>
    </section>
  );
}