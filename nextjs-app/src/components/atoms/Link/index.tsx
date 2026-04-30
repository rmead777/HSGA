import NextLink, { LinkProps } from "next/link";
import styles from "./styles.module.css";
import cx from "classnames";
import { PropsWithChildren, AnchorHTMLAttributes } from "react";

type Props = PropsWithChildren<LinkProps & AnchorHTMLAttributes<HTMLAnchorElement> & { className?: string }>;

export default function Link(props: Props) {
  const { children, className, ...rest } = props;
  // ensure href goes to NextLink and all other anchor props (style, onMouseEnter, etc.) go to <a>
  const { href, ...anchorProps } = rest as any;

  return (
    <NextLink href={href}>
      <a className={cx(className, styles.link, "text-primary-2")} {...anchorProps}>
        {children}
      </a>
    </NextLink>
  );
}
