import NextLink, { LinkProps } from "next/link";
import RoutesService from "../../services/RoutesService";

type PropTypes = React.PropsWithChildren<LinkProps>;

export default function Link(props: PropTypes) {
  const href =
    typeof props.href === "string"
      ? RoutesService.createRelativePath(props.href)
      : props.href;

  return <NextLink {...props} href={href} />;
}
