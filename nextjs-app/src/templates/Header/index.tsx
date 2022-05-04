import Image from "../../components/atoms/Image";
import Link from "../../components/atoms/Link";
import RoutesService from "../../services/RoutesService";
import cx from "classnames";
import fonts from "@ui/styles/fonts.module.css";

export default function Footer() {
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
          width={24}
          height={24}
        />
      </Link>
      <span className="flex space-x-2">
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
    </header>
  );
}
