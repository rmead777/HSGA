/* eslint-disable @next/next/no-img-element */
// import NextImage from "next/image";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

interface PropTypes
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  width?: number;
  height?: number;
  zoom?: number;
}

export default function Image(props: PropTypes) {
  const zoom = props.zoom || 1;

  const optional = {
    width: 1,
    height: 1,
  };

  if (props.width) {
    optional.width = props.width * zoom;
  }

  if (props.height) {
    optional.height = props.height * zoom;
  }

  return <img {...props} {...optional} alt={props.alt} />;
}
