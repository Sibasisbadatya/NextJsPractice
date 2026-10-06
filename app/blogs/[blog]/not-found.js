"use client"

import { usePathname } from "next/navigation";

export default function NotFound() {
const a = usePathname();
console.log(a)//retuns the pathname of the current page
  return (
    <>
      <h1>Blog Page Not FOund</h1>
    </>
  );
}
