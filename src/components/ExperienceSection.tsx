import { useState } from "react";

type ExperienceSegment = {
  text: string;
  bold: boolean;
};

type ExperienceDetail = ExperienceSegment[];

type Experience = {
  id: number;
  expandDefault: boolean;
  section: string;
  title: string;
  company?: string;
  location?: string;
  period?: string;
  details: ExperienceDetail[];
};

type ExperienceSectionProps = {
  title: string;
  experiences: Experience[];
};

export default function ExperienceSection({
  title,
  experiences,
}: ExperienceSectionProps) {
  const [expandedIds, setExpandedIds] = useState<number[]>(
    experiences.filter((exp) => exp.expandDefault).map((exp) => exp.id)
  );

  function toggleExpand(id: number) {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="uppercase">{title}</h2>
      {experiences.map((exp) => (
        <div key={exp.id} className="space-y-3 pb-4">
          {expandedIds.includes(exp.id) ? (
            <div className="space-y-3">
              <button
                onClick={() => toggleExpand(exp.id)}
                className="text-left w-full cursor-pointer hover:text-neutral-500"
              >
                <h3 className="font-bold">{exp.title}</h3>
              </button>
              <p>
                {exp.company ? `${exp.company}` : ""}
                {exp.location ? `, ${exp.location}` : ""}
                {exp.location ? <br /> : ""}

                {exp.period ? `${exp.period}` : ""}
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
            <div className="space-y-2">
              <button
                onClick={() => toggleExpand(exp.id)}
                className="text-left w-full"
              >
                <h3 className="font-bold">
                  {exp.title}

                  <span className="font-normal pl-1">
                    {exp.company ? `${exp.company}` : ""}
                  </span>
                </h3>
              </button>
              <button
                onClick={() => toggleExpand(exp.id)}
                className="underline text-sm cursor-pointer"
              >
                See {exp.section}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
