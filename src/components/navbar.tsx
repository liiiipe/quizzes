import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

import Avatar from "./avatar";

function Navbar() {
  const { data: sessionData } = useSession();

  const [showDropdown, setShowDropdown] = useState(false);

  if (!sessionData) {
    return null;
  }

  return (
    <nav className="flex justify-between bg-gradient-to-b from-[#5aa7ff] to-[#0f7efd] px-5 font-bold text-white">
      <ul className="flex items-center py-5">
        <li>
          <Link
            className="p-5 transition-all hover:bg-white hover:bg-opacity-10"
            href="home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="p-5 transition-all hover:bg-white hover:bg-opacity-10"
            href="turmas"
          >
            Turmas
          </Link>
        </li>
        <li>
          <Link
            className="p-5 transition-all hover:bg-white hover:bg-opacity-10"
            href="quizzes"
          >
            Quizzes
          </Link>
        </li>
      </ul>
      <div className="relative">
        <button
          className="flex items-center gap-3 p-3 hover:bg-white hover:bg-opacity-10"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <svg
            className="h-4 w-4"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <h4>{sessionData.user?.name}</h4>
          <Avatar widht="small" src={sessionData.user?.image} />
        </button>
        {showDropdown ? (
          <div className="divide-gray-100 dark:bg-gray-700 dark:divide-gray-600 absolute right-0 z-10 w-44 divide-y rounded bg-slate-600">
            <ul className="text-gray-700 dark:text-gray-400 py-1 text-sm">
              <li>
                <a
                  href="#"
                  className="dark:hover:bg-gray-600 block py-2 px-4 hover:bg-slate-500 dark:hover:text-white"
                >
                  Perfil
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dark:hover:bg-gray-600 block py-2 px-4 hover:bg-slate-500 dark:hover:text-white"
                >
                  Configurações
                </a>
              </li>
            </ul>
            <div className="py-1">
              <Link
                href="/"
                className="text-gray-700 dark:hover:bg-gray-600 dark:text-gray-400 block py-2 px-4 text-sm hover:bg-slate-500 dark:hover:text-white"
                onClick={() => signOut()}
              >
                Desconectar
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
