import Works from "../components/Works";

interface Props {
  selectedFilters: string[];
}

function Home({ selectedFilters }: Props) {
  const imageRows = [
    {
      layout: "full",
      images: [{ id: 1, src: "/src/images/web1.png", tags: ["Web"] }],
    },
    {
      layout: "full",
      images: [{ id: 2, src: "/src/images/email1.png", tags: ["Email"] }],
    },
    {
      layout: "two-col",
      images: [
        { id: 3, src: "/src/images/editorial1.png", tags: ["Editorial"] },
        { id: 4, src: "/src/images/editorial2.png", tags: ["Editorial"] },
      ],
    },
    {
      layout: "three-col",
      images: [
        { id: 5, src: "/src/images/interface1.jpg", tags: ["Motion"] },
        { id: 6, src: "/src/images/interface2.png", tags: ["Print"] },
        { id: 7, src: "/src/images/interface3.png", tags: ["Web", "Email"] },
      ],
    },
    {
      layout: "full",
      images: [
        { id: 8, src: "/src/images/print1.png", tags: ["Email", "Print"] },
      ],
    },
  ];

  const filteredRows = selectedFilters.includes("All")
    ? imageRows
    : imageRows.filter((row) =>
        row.images.some((img) =>
          img.tags.some((tag) => selectedFilters.includes(tag))
        )
      );

  return (
    <div className="space-y-8">
      {filteredRows.map((row, index) => (
        <div key={index} className={getGridClass(row.layout)}>
          {row.images.map((image) => (
            <Works key={image.id} src={image.src} />
          ))}
        </div>
      ))}
    </div>
  );
}

function getGridClass(layout: string) {
  switch (layout) {
    case "two-col":
      return "grid grid-cols-1 md:grid-cols-2 gap-4";
    case "three-col":
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4";
    default:
      return "grid grid-cols-1";
  }
}

export default Home;
