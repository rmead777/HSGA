import cx from "classnames";
import Image from "../../components/atoms/Image";
import styles from "./styles.module.css";
import RoutesService from "../../services/RoutesService";
import { EXTERNAL_LINKS } from "../../constants";
import Link from "../../components/atoms/Link";


export default function Footer() {
  return (
    <footer
      className={cx(
        styles.footer,
        "flex justify-between container p-3 max-w-7xl mx-auto text-xs"
      )}
    >
      <span>&copy; HighScoreWinsMoney 2022</span>
      <div>
      <Link className="text-white text-uppercase font-bold text-lg " href="/terms">TERMS AND CONDITIONS</Link>

      </div>
      {/* <div className={cx(styles["social-media-links"], "flex space-x-2")}>
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
      </div> */}
    </footer>
  );
}
