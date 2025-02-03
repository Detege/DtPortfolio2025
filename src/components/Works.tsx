interface Props {
  colspan: string;
  type: string;
  src: string;
  style: string;
}

function Works({ colspan, type, src, style }: Props) {
  return (
    <div className={`${colspan} w-full overflow-hidden mx-auto`}>
      {type === "image" && (
        <img src={src} alt="Project" className={`flex ${style} h-auto`} />
      )}
      {type === "video" && (
        <video src={src} controls className="w-full h-auto" />
      )}
      {type === "iframe" && (
        <div className={`flex ${style} h-auto overflow-hidden mx-auto`}>
          <iframe width="412" height="930" src={src}></iframe>
        </div>
      )}
    </div>
  );
}

export default Works;
