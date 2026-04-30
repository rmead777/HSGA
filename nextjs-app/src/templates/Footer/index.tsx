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
      <span>&copy; HighScoreGameArcade 2025</span>
      <div>
      <Link className="text-white text-uppercase font-bold text-lg " href="/terms">TERMS AND CONDITIONS</Link>

      </div>
      
    </footer>
  );
}
