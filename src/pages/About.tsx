import { useState } from "react";
import experiences from "../copy/Experiences.json";

export default function About() {
  const [expandedIds, setExpandedIds] = useState<number[]>([experiences[0].id]); // First item expanded by default

  function toggleExpand(id: number) {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    ); // Add/remove id from array
  }

  return (
    <div className="flex flex-col space-y-18 text-left text-black dark:text-white">
      <h1 className="text-2xl">About</h1>

      <div className="space-y-6">
        <img src="/src/images/Avatar.jpg" className="size-16" />
        <p>
          I’m Daniel Terol, a Visual Designer driven by a passion for crafting
          creative solutions that inspire action and deliver impact.
        </p>
      </div>

      <div className="space-y-8">
        <h2 className="uppercase">Work Experience</h2>

        {experiences.map((exp) => (
          <div key={exp.id} className="space-y-3 pb-4">
            {expandedIds.includes(exp.id) ? (
              // Expanded view
              <div className="space-y-3">
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="text-left w-full cursor-pointer hover:text-neutral-500"
                >
                  <h3 className="font-bold">{exp.title}</h3>
                </button>
                <p>
                  {exp.company}, {exp.location}
                  <br />
                  {exp.period}
                </p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.details.map((sentence, index) => (
                    <li key={index}>
                      {sentence.map((segment, i) =>
                        segment.bold ? (
                          <strong key={i} className="font-semibold">
                            {segment.text}
                          </strong>
                        ) : (
                          <span key={i}>{segment.text}</span>
                        )
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              // Collapsed view
              <div className="space-y-2">
                <h3 className="font-bold">
                  {exp.title}{" "}
                  <span className="font-normal pl-1">{exp.company}</span>
                </h3>
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="underline text-sm"
                >
                  See experience
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
