interface Props {
  src: string;
}

function Works({ src }: Props) {
  return (
    <div className="w-full flex justify-center">
      <img src={src} alt="Project" className="w-full h-auto rounded-3xl" />
    </div>
  );
}

export default Works;
