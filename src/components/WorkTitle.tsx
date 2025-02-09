interface Props {
  title: string;
  subheader: string;
}

function Works({ title, subheader }: Props) {
  return (
    <div className="flex flex-col space-y-4 w-full justify-center">
      <h2 className="text-3xl text-black">{title}</h2>
      <p className="text-md text-black">{subheader}</p>
    </div>
  );
}

export default Works;
