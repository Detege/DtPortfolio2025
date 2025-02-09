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
          <WorkTitle title={project.title} subheader={project.subheader} />
          {project.rows
            .filter(
              (row) =>
                selectedFilters.includes("All") ||
                row.tags.some((tag) => selectedFilters.includes(tag))
            )
            .map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-6 md:grid-cols-12 gap-8 lg:gap-16"
              >
                {row.content.map((item, itemIndex) => (
                  <Works
                    key={itemIndex}
                    colspan={item.colspan}
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

export default Home;
