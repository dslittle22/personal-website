import { all_images, ImageType } from "@/data/allImages";
import Image from "next/image";
import { CSSProperties } from "react";

export type Props = {
  image_src: string;
  maxWidth?: number;
  maxHeight?: number;
  center?: boolean;
  border_radius?: string;
  [key: string]: any;
};

export default function SizedImage({
  image_src,
  maxWidth,
  maxHeight,
  center,
  border_radius: props_border_radius,
  ...props
}: Props) {
  const {
    alt,
    borderRadius: image_border_radius,
    ...image
  }: ImageType = all_images[image_src];
  let borderRadius = "5px";
  image_border_radius && (() => (borderRadius = image_border_radius))();
  props_border_radius && (() => (borderRadius = props_border_radius))();

  const imageStyle: CSSProperties = {
    maxWidth: "100%",
    height: "auto",
    objectFit: "contain",
    borderRadius,
  };

  const image_component = (
    <Image alt={alt} {...image} style={imageStyle} {...props} />
  );
  if (!maxWidth && !maxHeight && !center) {
    return image_component;
  }

  const divStyle: CSSProperties = {
    margin: center ? "0 auto" : "",
  };

  if (maxWidth !== undefined) {
    divStyle.maxWidth = `${maxWidth}px`;
  } else if (maxHeight !== undefined) {
    divStyle.maxHeight = `${maxHeight}px`;
  }

  return (
    <div className={"sized-image"} style={divStyle}>
      {image_component}
    </div>
  );
}
