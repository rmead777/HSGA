import NextLink, { LinkProps } from "next/link";
import styles from "./styles.module.scss";
import cx from "classnames";

interface PropTypes extends React.PropsWithChildren<LinkProps> {
  className?: string;
}

export default function Link(props: PropTypes) {
  const { children, className, ...rest } = props;

  return (
    <NextLink {...rest}>
      <a className={cx(className, styles.link)}>{children}</a>
    </NextLink>
  );
}
