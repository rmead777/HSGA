import NextLink, { LinkProps } from "next/link";
import RoutesService from "../../services/RoutesService";

type PropTypes = React.PropsWithChildren<LinkProps>;

export default function Link(props: PropTypes) {
  return <NextLink {...props} />;
}
