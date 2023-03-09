import { allImages, ImageType } from "@/data/allImages";
import Image from "next/image";
import { CSSProperties } from "react";

export type Props = {
  imageSrc: string;
  maxWidth?: number;
  maxHeight?: number;
  [key: string]: any;
};

export default function SizedImage({
  imageSrc,
  maxWidth,
  maxHeight,
  ...props
}: Props) {
  const { alt, borderRadius, ...image }: ImageType = allImages[imageSrc];
  const divStyle: { [key: string]: string } = {
    display: "flex",
    justifyContent: "center",
  };
  const imageStyle: CSSProperties = {
    maxWidth: "100%",
    height: "auto",
    objectFit: "contain",
  };

  if (maxWidth !== undefined) {
    divStyle.maxWidth = `${maxWidth}px`;
  } else if (maxHeight !== undefined) {
    divStyle.maxHeight = `${maxHeight}px`;
  } else {
    divStyle.width = "100%";
    divStyle.height = "100%";
  }

  imageStyle.borderRadius = borderRadius ? borderRadius : "5px";

  return (
    <div style={divStyle}>
      <Image alt={alt} {...image} style={imageStyle} {...props} />
    </div>
  );
}
