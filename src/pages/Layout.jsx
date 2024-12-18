import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";

const Layout = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <nav>
        <ul className="flex bg-black border-b-2 border-zinc-900 text-white items-center">
          <li>
            <Link>
              <h1 className="text-2xl pr-10 p-3 font-serif">Pedia</h1>
            </Link>
          </li>
          <li className="p-3 hover:bg-zinc-900 hidden md:block">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 hover:bg-zinc-900 hidden md:block">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="p-3 hover:bg-zinc-900 hidden md:block">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-3 hover:bg-zinc-900 hidden md:block">
            <Link to="/news">News</Link>
          </li>
          <li>
            <input
              type="text"
              name=""
              id=""
              placeholder="search anything"
              className="ml-10 pr-auto bg-zinc-900 outline-none rounded p-1"
            />
          </li>
          <div className="flex ml-auto">
            <li className="p-3 hover:bg-zinc-900 hidden md:block">
              <Link to="/login">Login</Link>
            </li>
            <li className="p-3 hover:bg-zinc-900 hidden md:block">
              <Link to="/signup">SingUp</Link>
            </li>
          </div>
          <li>
            <button
              onClick={() => setIsOpenMenu(!isOpenMenu)}
              className="md:hidden ml-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                class="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </button>
          </li>
        </ul>
        <ul
          className={`bg-zinc-950 gap-5 mr-auto text-white md:hidden h-0 ${
            isOpenMenu ? "overflow-auto h-full fixed" : "overflow-hidden"
          }`}
        >
          <li className="p-3 pr-10 pl-10 hover:bg-zinc-900 md:hidden">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3 pr-10 pl-10 hover:bg-zinc-900 md:hidden">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="p-3 pr-10 pl-10 hover:bg-zinc-900 md:hidden">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-3 pr-10 pl-10 hover:bg-zinc-900 md:hidden border-b-2 border-zinc-800">
            <Link to="/news">News</Link>
          </li>
          <li className="p-3 pr-10 pl-10 hover:bg-zinc-900 md:hidden">
            <Link to="/login">Login</Link>
          </li>
          <li className="p-3 pr-10 pl-10 hover:bg-zinc-900 md:hidden">
            <Link to="/signup">SingUp</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
