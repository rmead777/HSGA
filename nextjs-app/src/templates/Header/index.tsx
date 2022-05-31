import { useEffect, useState } from "react";
import cx from "classnames";
import fonts from "@ui/styles/fonts.module.css";
import Image from "../../components/atoms/Image";
import Link from "../../components/atoms/Link";
import RoutesService from "../../services/RoutesService";
import { EXTERNAL_LINKS } from "../../constants";

import client from "../../clients/HSWM";
import styles from "./styles.module.css";
import { builtinModules } from "module";

export default function Footer() {
  const [username, setUsername] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [userRank, setUserRank] = useState({score:0, place:0})

  useEffect(() => {
    client
      .fetchCurrentUserInfo()
      .then((result) => {
        const { data } = result;
        if (typeof data !== "string" && data?.username) {
          // console.log("User Dataaaaa", data)
          setUsername(data.username);
          setUserRank(data.user_rank)
        } else {
          setShowWarning(true);
        }
      })
      .catch((err) => {
        console.error(err);
        setUsername("");
        setShowWarning(true);
      });
  }, []);

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
        
        <div className={cx(styles["social-media-links"],styles.ml_45, "flex space-x-2  ")}>
        <a href={EXTERNAL_LINKS.twitter} target="_blank" rel="noreferrer">
          <Image
            src={RoutesService.getIconPath("twitter")}
            alt="twitter-icon"
            width={24}
            height={24}
          />
        </a>
        <a href={EXTERNAL_LINKS.instagram} target="_blank" rel="noreferrer">
          <Image
            src={RoutesService.getIconPath("instagram")}
            alt="instagram-icon"
            width={24}
            height={24}
          />
        </a>
        <a href={EXTERNAL_LINKS.discord} target="_blank" rel="noreferrer">
          <Image
            src={RoutesService.getIconPath("discord")}
            alt="discord-icon"
            width={24}
            height={24}
          />
        </a>
      </div>
        {username ? (
          <span className="flex space-x-2">
            <span className="chubby-choo-vertical-fix text-primary-2">{userRank && userRank.score} {" "} (#{userRank && userRank.place}) </span>
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
              "text-primary-2  text-lg font-size-3"
            )}
          >
            <Link href="/signin">sign in</Link>
            <span className={styles.divider}>{` / `}</span>
            <Link href="/signup">register</Link>
          </div>
        )}
      </header>
      {/* Secondary Header */}
      <header
        className={cx(
          fonts.header, styles.bg_blue, styles.h30, styles.mb5,
          "flex justify-between px-5   w-100  font-bold text-lg uppercase"
        )}
      >
        <Link className="chubby-choo-vertical-fix" href="/">
          <Image
         
          className={cx(styles.mt_29,'img-fluid')}
            src={"https://hswm.imgix.net/images/HS_logo.png?auto=format&auto=compress"}
            alt="HS"
            width={80}
            height={80}
          />
        </Link>
       
        
          <div
            className={cx(
              fonts.button,
              "text-primary-2 mr-5 pr-5  text-lg font-size-3"
            )}
          >
            <Link className="text-white" href="/about">About</Link>
            <span className={styles.divider}>{` / `}</span>
            <Link className="text-black" href="/contactus">Contact Us</Link>
          </div>
       
      </header>
    </div>
  );
}
