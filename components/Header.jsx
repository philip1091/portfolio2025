import Link from 'next/link';
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo  */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Philip<span className="text-accent italic text-3xl">dev</span>
          </h1>
        </Link>
        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile navigations */}
        <div className="xl:hidden">mobile nav</div>
      </div>
    </header>
  );
}

export default Header
