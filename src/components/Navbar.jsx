import React from "react";

const Navbar = () => {
  return (
    <nav className="border border-gray-300 flex px-6 py-6 items-center justify-between shadow-lg">
      <div className="flex items-center gap-15">
        {/* App Name */}
        <div className="text-2xl font-bold text-orange-400">CRUD APP</div>

        {/* Links */}
        <div className="flex gap-15">
          <a
            href="/create"
            className="hover:underline text-orange-400 text-lg font-medium"
          >
            Create Post
          </a>
          <a
            href="post"
            className="hover:underline text-orange-400 text-lg font-medium"
          >
            All Posts
          </a>
        </div>
      </div>

      {/* search bar */}
      <div className="">
        <input
          type="text"
          placeholder="Search..."
          className="px-6 w-[500px]  py-2 rounded focus:outline-none text-orange-400 border border-gray-300 border border-orange-400"
        />
      </div>
    </nav>
  );
};

export default Navbar;
