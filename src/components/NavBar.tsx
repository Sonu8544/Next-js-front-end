"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link"

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"} >
          <MenuItem setActive={setActive} active={active} item="Home">
            {/* <HoveredLink href="/">Web DEV</HoveredLink> */}
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="All Course's">
          <div className="flex flex-col space-y-4 text-sm ">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic music</HoveredLink>
            <HoveredLink href="/courses">Advance composition</HoveredLink>
            <HoveredLink href="/courses">Sonu writing</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact US">
            {/* <HoveredLink href="/contact">Contact US</HoveredLink> */}
          </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}
