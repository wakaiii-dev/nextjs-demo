"use client";
import Link from "next/link";
import React from "react";
import Header from "./header";
import { usePathname } from "next/navigation";

export default function Silderbar() {
  const pathname = usePathname();
  const linkmap = [
    { path: "/", name: "Home" },
    { path: "/dashboard", name: "Dashboard" },
    { path: "/chat", name: "Chat" },
  ];
  return (
    <div className="sticky top-4 h-screen">
      <Header />
      <div className="flex flex-col gap-2">
        {/* <Link className='bg-white p-2 rounded-lg' href="/">Home</Link>
          <Link className='bg-white p-2 rounded-lg' href="/dashboard">Dashboard</Link>
          <Link className='bg-white p-2 rounded-lg' href="/chat">Chat</Link> */}

        {linkmap.map((link: { path: string; name: string }) => (
          <Link
            key={link.path}
            href={link.path}
            className={`p-2 rounded-lg ${
              pathname === link.path ? "bg-white" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
