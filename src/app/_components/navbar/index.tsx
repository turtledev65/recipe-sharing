import Link from "next/link";
import ThemeSelect from "./theme-select";
import Account from "./account";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white px-4 py-2 dark:bg-slate-900">
      <Link href="/" className="text-2xl font-bold">
        Recipe Sharing
      </Link>
      <div className="flex gap-6">
        <ThemeSelect />
        <Account />
      </div>
    </nav>
  );
};
export default Navbar;
