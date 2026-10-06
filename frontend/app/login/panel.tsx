const steps = [
  {
    title: "Connect once",
    body: "Add your social accounts one time and you are set. No more logging into each one.",
  },
  {
    title: "Reply from one place",
    body: "Every message and comment lands in a single inbox, so you do not have to check each app.",
  },
  {
    title: "Publish everywhere",
    body: "Write your post once and send it to all your accounts together.",
  },
];

export default function PanelSteps() {
  return (
    <ol className="space-y-4">
      {steps.map(({ title, body }, i) => (
        <li
          key={title}
          className="flex gap-4 border-t border-white/10 pt-5 first:border-t-0 first:pt-0"
        >
          <span className="pt-0.5 font-mono text-sm text-slate-400">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-medium text-white">{title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-300">
              {body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
