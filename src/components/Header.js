import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  const activeClass = 'bg-emerald-600 text-white shadow-lg';
  const inactiveClass = 'text-gray-300 hover:text-emerald-400 hover:bg-gray-700';
  const customMixActiveClass = 'bg-yellow-500 text-white shadow-lg';
  const customMixInactiveClass = 'text-gray-300 hover:text-yellow-400 hover:bg-gray-700';

  return (
    <header className="bg-gray-900 bg-opacity-80 backdrop-blur-sm p-4 shadow-xl fixed w-full z-20 transition-all duration-300">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-3xl font-extrabold mb-4 md:mb-0 cursor-pointer">
            <span className="text-emerald-400">TOP </span><span className="text-yellow-400">DJ</span><span className="text-emerald-400"> CRATES</span>
          </a>
        </Link>
        <ul className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
          <li><Link href="/" legacyBehavior><a className={`text-md px-3 py-1 rounded-full transition-all duration-300 ${router.pathname === '/' ? activeClass : inactiveClass}`}>Home</a></Link></li>
          <li><Link href="/music" legacyBehavior><a className={`text-md px-3 py-1 rounded-full transition-all duration-300 ${router.pathname === '/music' ? activeClass : inactiveClass}`}>Music</a></Link></li>
          <li><Link href="/about" legacyBehavior><a className={`text-md px-3 py-1 rounded-full transition-all duration-300 ${router.pathname === '/about' ? activeClass : inactiveClass}`}>About</a></Link></li>
          <li><Link href="/custom-mix" legacyBehavior><a className={`text-md px-3 py-1 rounded-full transition-all duration-300 ${router.pathname === '/custom-mix' ? customMixActiveClass : customMixInactiveClass}`}>Custom Mix</a></Link></li>
          <li><Link href="/contact" legacyBehavior><a className={`text-md px-3 py-1 rounded-full transition-all duration-300 ${router.pathname === '/contact' ? activeClass : inactiveClass}`}>Contact</a></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
