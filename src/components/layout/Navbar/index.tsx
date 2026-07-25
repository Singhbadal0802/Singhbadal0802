import React from "react";

function Navbar() {
  const navItems = [
    {
      name: "Profile",
      href: "/",
    },
    {
      name: "Work",
      href: "/projects",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="p-4 md:p-6 w-full flex items-center justify-center fixed z-[1] top-0">
      <div id='navlinks-wrapper' className="flex flex-row w-max rounded-full g-white/10 backdrop-blur-md border border-text-secondary shadow-xl">
        {navItems.map((item, index) => (
          <div className="flex w-max text-black hover:scale-90 transition-all duration-500 hover:bg-primary rounded-full" key={index}>
            <a
              key={index+1}
              href={item.href}
              tabIndex={index + 1}
              accessKey={item.name?.[0]?.toLowerCase()}
              className="px-4 py-2 md:px-8 md:py-4 text-md md:text-xl font-bold text-primary hover:text-text-secondary"
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
