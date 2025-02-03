interface Props {
  type: string;
  src: string;
  style: string;
}

function Works({ type, src, style }: Props) {
  return (
    <div className={`${style} overflow-hidden mx-auto`}>
      {type === "image" && (
        <img src={src} alt="Project" className="w-full h-auto" />
      )}
      {type === "video" && (
        <video src={src} controls className="w-full h-auto" />
      )}
      {type === "iframe" && (
        <iframe src={src} className="w-full h-auto"></iframe>
      )}
    </div>
  );
}

export default Works;
