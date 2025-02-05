interface Props {
  title: string;
}

function Works({ title }: Props) {
  return (
    <div className="w-full flex justify-center">
      <h2 className="text-black text-3xl">{title}</h2>
    </div>
  );
}

export default Works;
