import { prompt_font } from "@/app/layout";
import Image from "next/image";
import React from "react";

export function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header className="relative">
      <Image
        src={"/group_pic110.jpg"}
        alt="รูปภาพรวม"
        width={"1080"}
        height={"355"}
        className="w-full"
      ></Image>
      <div className="flex justify-center items-end absolute top-0 left-0 bg-black/60 text-white w-full h-full">
        <h1 className={`mb-3 text-3xl ${prompt_font.className}`}>{children}</h1>
      </div>
    </header>
  );
}
