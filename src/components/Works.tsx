interface Props {
  type: string;
  src: string;
}

function Works({ type, src }: Props) {
  return (
    <div className="w-full flex justify-center">
      {type === "image" && (
        <img src={src} alt="Project" className="w-full h-auto rounded-3xl" />
      )}
      {type === "video" && (
        <video src={src} controls className="w-full h-auto rounded-3xl" />
      )}
      {type === "iframe" && (
        <iframe src={src} className="w-full h-auto rounded-3xl"></iframe>
      )}
    </div>
  );
}

export default Works;
