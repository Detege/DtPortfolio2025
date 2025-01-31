import experiences from "../copy/Experiences.json";
import ExperienceSection from "../components/ExperienceSection";

export default function About() {
  return (
    <div className="flex flex-col max-w-4xl mx-auto space-y-18 text-left text-black dark:text-white">
      <h1 className="text-2xl">About</h1>
      <div className="space-y-6">
        <img src="/src/images/Avatar.jpg" className="size-16" />
        <p>
          I’m Daniel Terol, a Visual Designer driven by a passion for crafting
          creative solutions that inspire action and deliver impact.
        </p>
      </div>

      <ExperienceSection
        title="Work Experience"
        experiences={experiences.filter((exp) => exp.section === "experience")}
      />

      <ExperienceSection
        title="Education"
        experiences={experiences.filter((exp) => exp.section === "education")}
      />

      <ExperienceSection
        title="Skills"
        experiences={experiences.filter((exp) => exp.section === "skills")}
      />
    </div>
  );
}
