import Image from "../../components/atoms/Image";
import Link from "../../components/atoms/Link";
import RoutesService from "../../services/RoutesService";

export default function Footer() {
  return (
    <header className="flex justify-between container p-3 max-w-7xl mx-auto font-bold text-lg uppercase">
      <Link href="/">Home</Link>
      <span className="flex space-x-2">
        <span>Logout</span>
        <Link href="/settings">
          <Image
            src={RoutesService.createAssetsPath("icons/icon-gear.png")}
            alt="twitter-icon"
            width={24}
            height={24}
          />
        </Link>
      </span>
    </header>
  );
}
