import Link from "../../components/atoms/Link";

export default function Footer() {
  return (
    <header className="flex justify-between container p-3 max-w-7xl mx-auto font-bold text-lg uppercase">
      <Link href="/">Home</Link>
      <span>Logout</span>
    </header>
  );
}
