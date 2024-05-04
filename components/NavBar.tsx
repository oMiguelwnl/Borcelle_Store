"use client";

import { CircleUserIcon, Menu, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { UserButton, useUser } from "@clerk/nextjs";
import { useState } from "react";

const NavBar = () => {
  const { user } = useUser();

  const [dropdownMenu, setDropdownMenu] = useState(false);

  return (
    <div className="sticky top-0 z-10 py-2 px-10 flex justify-between items-center">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={130} height={100} />
      </Link>

      <div>
        <Link href="/home">Home</Link>
      </div>

      <div className="flex gap-3 items-center relative">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white"
        >
          <ShoppingCart />
          <p className="text-base-bold">Cart (0)</p>
        </Link>

        {user && (
          <Menu
            className="cursor-pointer"
            onClick={() => setDropdownMenu(!dropdownMenu)}
          />
        )}

        {user && dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold lg:hidden">
            <Link href="/wishlist" className="hover:text-red-1">
              wishlist
            </Link>
            <Link href="/orders" className="hover:text-red-1">
              orders
            </Link>
          </div>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserIcon />
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
