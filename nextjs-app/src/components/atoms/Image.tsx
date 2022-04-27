/* eslint-disable @next/next/no-img-element */
// import NextImage from "next/image";

interface PropTypes {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Image(props: PropTypes) {
  return <img {...props} alt={props.alt} />;
}
