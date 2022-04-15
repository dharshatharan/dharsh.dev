import { useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";
import LinkIcon from "@components/Icons/LinkIcon";

interface FaviconImageProps extends ImageProps {
  height: string | number | undefined;
  width: string | number | undefined;
}
export const FaviconImage = ({
  src,
  height,
  width,
  alt,
  ...imageProps
}: FaviconImageProps) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    setIsVisible(true);
  }, [src]);
  return isVisible ? (
    <Image
      height={height}
      width={width}
      src={`http://www.google.com/s2/favicons?domain=${src}`}
      onError={() => {
        setIsVisible(false);
      }}
      alt={alt}
    />
  ) : (
    <span className="flex h-6 w-6 items-center justify-center">
      <LinkIcon height={height} width={width} />
    </span>
  );
};
