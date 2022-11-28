import Image, { ImageProps } from "next/image";

export const ArticleImage = (props: ImageProps) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-xl shadow-lg inline-flex">
        <Image
          // @ts-ignore
          alt={props.alt}
          className={`rounded-xl m-b aspect-[5/3] object-cover ${props.className}`}
          height={props.height ?? 600}
          width={props.width ?? 1000}
          {...props}
        />
      </div>
    </div>
  );
};
