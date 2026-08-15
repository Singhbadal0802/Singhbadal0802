"use client"
import React, { useEffect, useState } from "react";
import style from "./style";
import { cn } from "@/utilities/utility";

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

  const [currentTab, setCurrentTab] = useState<string>('');

    useEffect(() => {
      if (typeof window !== "undefined") {
        setCurrentTab(window.location.pathname ?? "/")
      }
    },[])

  return (
    <div className="p-4 md:p-6 w-full flex items-center justify-center fixed z-[1] top-0">
      <div id='navlinks-wrapper' className="flex flex-row w-max rounded-full g-white/10 backdrop-blur-md border border-text-secondary shadow-xl">
        {navItems.map((item, index) => (
          <div className={
            cn({
              [style.navLinkButton] : true,
              ["hover:bg-secondary hover:scale-90"] : currentTab !== item.href,
              ["bg-primary scale-90"] : currentTab === item.href

            })} key={index}>
            <a
              key={index+1}
              href={item.href}
              tabIndex={index + 1}
              accessKey={item.name?.[0]?.toLowerCase()}
              className={
                cn({
                  [style.navLinkAnchor] : true,
                  ["text-text-secondary"] : currentTab === item.href
                })
              }
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
