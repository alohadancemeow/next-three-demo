import Link from "next/link";
import { Logo } from "@/public/assets/images";

const Navbar = () => {
  return (
    <header className="header">
      <Link href="/">
        <div className="w-18 h-18 object-contain">
          <Logo />
        </div>
        {/* <img src={Logo} alt="logo" className="w-18 h-18 object-contain" /> */}
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <Link href="/about" className={"active:text-blue-600 text-black"}>
          About
        </Link>
        <Link href="/projects" className={"active:text-blue-600 text-black"}>
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
