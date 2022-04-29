/* eslint-disable @next/next/no-img-element */
// import NextImage from "next/image";

interface PropTypes {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  className?: string;
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
