'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNavbar = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white py-8">
      <div className="px-4 container flex items-center justify-between mx-auto">
        <button
          type="button"
          onClick={toggleNavbar}
          className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <div className="flex px-1 justify-end">
          <Link
            className="text-white font-bold text-3xl ml-3"
            href="/"
          >
            MovHub
          </Link>
        </div>
        <div className="hidden sm:flex sm:items-center sm:ml-6">
          <div className="flex space-x-6 text-gray-400">
            <Link
              className="hover:text-white"
              href="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-white"
              href="/movies"
            >
              Movies
            </Link>
            <Link
              className="hover:text-white"
              href="/tvshows"
            >
              TV Shows
            </Link>
          </div>
        </div>
        <div className="relative items-center ml-auto hidden sm:flex">
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-black rounded-full py-2 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
          />
          <button className="absolute right-0 top-0 bottom-0 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full">
            <FaSearch size={24} />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden flex flex-col  items-center">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-2">
            <Link
              className="text-gray-400 hover:text-white block text-2xl font-medium"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-gray-400 hover:text-white block text-2xl font-medium"
              href="/movies"
            >
              Movies
            </Link>
            <Link
              className="text-gray-400 hover:text-white block text-2xl font-medium"
              href="/tvshows"
            >
              TV Shows
            </Link>
          </div>
          <div className="flex items-center">
            <div className="relative items-center">
              <input
                type="text"
                placeholder="Search"
                className="bg-white text-black rounded-full py-2 px-4 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xl"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-full">
                <FaSearch size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
