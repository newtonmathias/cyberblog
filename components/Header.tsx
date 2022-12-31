import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div>
        <Link href="/">
          <Image
            className="rounded-full"
            src="/profile.png"
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>Hacker News</h1>
      </div>

      <div>
        <Link
          href="/"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#39FF14] flex items-center rounded-full text-center"
        >
          there is nothin here
        </Link>
      </div>
    </header>
  );
}

export default Header;
