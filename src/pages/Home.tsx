import Works from "../components/Works";
import WorkTitle from "../components/WorkTitle";
import projectsData from "../copy/Projects.json";

interface Props {
  selectedFilters: string[];
}

function Home({ selectedFilters }: Props) {
  const filteredProjects = selectedFilters.includes("All")
    ? projectsData
    : projectsData.filter((project) =>
        project.tags.some((tag) => selectedFilters.includes(tag))
      );

  return (
    <div className="space-y-100">
      {filteredProjects.map((project, index) => (
        <div key={index} className="space-y-30">
          <WorkTitle title={project.title} />
          {project.rows.map((row, rowIndex) => (
            <div key={rowIndex} className={getGridClass(row.layout)}>
              {row.content.map((item, itemIndex) => (
                <Works
                  key={itemIndex}
                  type={item.type}
                  src={item.src}
                  style={item.style}
                />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function getGridClass(layout: string) {
  switch (layout) {
    case "two-col":
      return "grid grid-cols-1 md:grid-cols-2 gap-8";
    case "three-col":
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8";
    default:
      return "grid grid-cols-1";
  }
}

export default Home;
