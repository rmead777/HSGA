import NextLink, { LinkProps } from "next/link";
import styles from "./styles.module.css";
import cx from "classnames";
import { PropsWithChildren } from "react";

interface PropTypes extends PropsWithChildren<LinkProps> {
  className?: string;
}

export default function Link(props: PropTypes) {
  const { children, className, ...rest } = props;

  return (
    <NextLink {...rest}>
      <a className={cx(className, styles.link, "text-primary-2")}>{children}</a>
    </NextLink>
  );
}
