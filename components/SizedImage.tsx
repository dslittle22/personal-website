import { all_images, ImageType } from "@/data/all_images";
import Image, { ImageProps } from "next/image";
import { CSSProperties } from "react";

type Props = {
  src: string;
  maxWidth?: number;
  maxHeight?: number;
  center?: boolean;
  border_radius?: string;
  [key: string]: any;
};

export default function SizedImage({
  src,
  maxWidth,
  maxHeight,
  center,
  borderRadius: props_border_radius,
  ...props
}: Props & Omit<ImageProps, "alt">) {
  const {
    alt,
    borderRadius: image_border_radius,
    ...image
  }: ImageType = all_images[src];
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
