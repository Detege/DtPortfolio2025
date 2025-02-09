interface Props {
  colspan: string;
  type: string;
  src: string;
  style: string;
}

function Works({ colspan, type, src, style }: Props) {
  return (
    <div className={`${colspan} mx-auto w-full overflow-hidden`}>
      {type === "image" && (
        <img src={src} alt="Project" className={`flex ${style} h-auto`} />
      )}
      {type === "video" && (
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className={`${style} h-auto w-full`}
        />
      )}
      {type === "iframe" && (
        <div className={`flex ${style} mx-auto h-auto overflow-hidden`}>
          <iframe width="412" height="930" src={src}></iframe>
        </div>
      )}
    </div>
  );
}

export default Works;
