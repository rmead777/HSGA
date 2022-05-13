import { useEffect, useState } from "react";
import cx from "classnames";
import fonts from "@ui/styles/fonts.module.css";
import Image from "../../components/atoms/Image";
import Link from "../../components/atoms/Link";
import RoutesService from "../../services/RoutesService";
import styles from "./styles.module.css";

type PropTypes = {
  username?: string;
};
export default function Header({ username }: PropTypes) {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (!username) {
      setTimeout(() => setShowWarning(true), 500);
    }
  }, [username]);

  return (
    <div>
      <div className={cx(styles.warning, showWarning && styles.show)}>
        WARNING: YOU NEED TO
        <Link className="text-white" href="/signin">
          &nbsp;SIGN IN&nbsp;
        </Link>
        TO SAVE YOUR HIGH SCORE
      </div>
      <header
        className={cx(
          fonts.header,
          "flex justify-between container p-3 max-w-7xl mx-auto font-bold text-lg uppercase"
        )}
      >
        <Link className="chubby-choo-vertical-fix" href="/">
          <Image
            src={RoutesService.getIconPath("hswm")}
            alt="twitter-icon"
            width={25}
            height={29}
          />
        </Link>
        {username ? (
          <span className="flex space-x-2">
            <span className="chubby-choo-vertical-fix">{username}</span>
            <Link href="/logout" className="chubby-choo-vertical-fix">
              Logout
            </Link>
            <Link href="/settings">
              <Image
                src={RoutesService.getIconPath("gear")}
                alt="twitter-icon"
                width={24}
                height={24}
              />
            </Link>
          </span>
        ) : (
          <div
            className={cx(
              fonts.button,
              "text-primary-2 mb-5 text-lg font-size-3"
            )}
          >
            <Link href="/signin">sign in</Link>
            <span className={styles.divider}>{` / `}</span>
            <Link href="/signup">register</Link>
          </div>
        )}
      </header>
    </div>
  );
}
