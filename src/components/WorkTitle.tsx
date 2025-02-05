interface Props {
  title: string;
}

function Works({ title }: Props) {
  return (
    <div className="flex w-full justify-center">
      <h2 className="text-3xl text-black">{title}</h2>
    </div>
  );
}

export default Works;
