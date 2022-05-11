import { useEffect, useState } from "react";
import cx from "classnames";
import fonts from "@ui/styles/fonts.module.css";
import Image from "../../components/atoms/Image";
import Link from "../../components/atoms/Link";
import RoutesService from "../../services/RoutesService";
import client from "../../clients/HSWM";
import styles from "./styles.module.css";

export default function Footer() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    client
      .fetchCurrentUserInfo()
      .then((result) => {
        if (result.data) {
          setUsername(result.data?.username);
        }
      })
      .catch((err) => {
        console.error(err);
        setUsername("");
      });
  }, []);

  return (
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
  );
}
