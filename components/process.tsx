const steps = [
  ["01", "Discover", "Understand your business, the challenge, and what success needs to mean for you."],
  ["02", "Plan", "Agree on scope, useful features, priorities, and a practical path forward."],
  ["03", "Design", "Shape the experience and visual direction before development begins."],
  ["04", "Build", "Develop, review, and test the solution with regular communication."],
  ["05", "Launch & improve", "Deploy the agreed work, then monitor and improve where included."],
];

export default function Process() {
  return (
    <section className="process section-shell section-space" id="process">
      <div className="section-heading"><div><p className="eyebrow">A clear path from idea to launch</p><h2>Good work, without<br />the guesswork.</h2></div><p>Each project starts with a conversation. We define a shared direction, then make progress in clear, reviewable steps.</p></div>
      <ol className="process-list">
        {steps.map(([number, name, description]) => <li key={number}><span className="process-number">{number}</span><div><h3>{name}</h3><p>{description}</p></div></li>)}
      </ol>
    </section>
  );
}