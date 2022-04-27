import NextLink, { LinkProps } from "next/link";

type PropTypes = React.PropsWithChildren<LinkProps>;

export default function Link(props: PropTypes) {
  return <NextLink {...props} />;
}
