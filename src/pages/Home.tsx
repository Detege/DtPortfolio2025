import Works from "../components/Works";
import WorkTitle from "../components/WorkTitle";

interface ContentItem {
  id: number;
  type: "image" | "video" | "iframe";
  src: string;
}

interface Section {
  title: string;
  tags: string[];
  rows: { layout: string; content: ContentItem[] }[];
}

interface Props {
  selectedFilters: string[];
}

function Home({ selectedFilters }: Props) {
  const sections: Section[] = [
    {
      title: "Web Design",
      tags: ["Web"],
      rows: [
        {
          layout: "full",
          content: [{ id: 1, type: "image", src: "/src/images/web1.png" }],
        },
      ],
    },
    {
      title: "Email Campaigns",
      tags: ["Email"],
      rows: [
        {
          layout: "full",
          content: [{ id: 2, type: "image", src: "/src/images/email1.png" }],
        },
      ],
    },
    {
      title: "Editorial Work",
      tags: ["Editorial"],
      rows: [
        {
          layout: "two-col",
          content: [
            { id: 3, type: "image", src: "/src/images/editorial1.png" },
            { id: 4, type: "image", src: "/src/images/editorial2.png" },
          ],
        },
      ],
    },
    {
      title: "Mixed Media",
      tags: ["Motion", "Print", "Web", "Email"],
      rows: [
        {
          layout: "three-col",
          content: [
            { id: 5, type: "video", src: "/src/videos/motion1.mp4" },
            { id: 6, type: "image", src: "/src/images/print1.png" },
          ],
        },
        {
          layout: "full",
          content: [{ id: 7, type: "iframe", src: "https://example.com" }],
        },
      ],
    },
  ];

  const filteredSections = selectedFilters.includes("All")
    ? sections
    : sections.filter((section) =>
        section.tags.some((tag) => selectedFilters.includes(tag))
      );

  return (
    <div className="space-y-100">
      {filteredSections.map((section, index) => (
        <div key={index} className="space-y-30">
          <WorkTitle title={section.title} />
          {section.rows.map((row, rowIndex) => (
            <div key={rowIndex} className={getGridClass(row.layout)}>
              {row.content.map((item) => (
                <Works key={item.id} type={item.type} src={item.src} />
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
