import { prompt_font } from "@/app/layout";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import {
  RiArrowDownSLine,
  RiBankCardLine,
  RiDeleteBin5Line,
  RiHome4Line,
  RiInstagramLine,
  RiMenuFill,
  RiSchoolLine,
  RiTable3,
} from "@remixicon/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import React from "react";

interface MenuItem {
  icon?: React.ReactElement;
  title: string;
  href: string;
  external?: boolean;
  hideInComputer?: boolean;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menu: MenuCategory[] = [
  {
    title: "หน้าอื่น ๆ",
    items: [
      {
        icon: <RiHome4Line />,
        title: "หน้าหลัก",
        href: "/",
        hideInComputer: true,
      },
      {
        icon: <RiBankCardLine />,
        title: "กลุ่มบริหารงบประมาณ",
        href: "/budget",
      },
    ],
  },
  {
    title: "เอกสาร",
    items: [
      {
        icon: <RiTable3 />,
        title: "ตารางเรียน",
        href: "/docs/schedule",
      },
      {
        icon: <RiDeleteBin5Line />,
        title: "ตารางเวรประจำวัน",
        href: "/docs/cleaning-duty",
      },
    ],
  },
  {
    title: "ช่องทางการติดต่อ",
    items: [
      {
        icon: <RiInstagramLine />,
        title: "Instagram",
        href: "https://www.instagram.com/sktm.210",
        external: true,
      },
      {
        icon: <RiSchoolLine />,
        title: "เว็บไซต์โรงเรียน",
        href: "https://sk-thonburi.ac.th/",
        external: true,
      },
    ],
  },
];

export function Navbar() {
  return (
    <nav className="bg-card text-card-foreground px-3 py-2 flex justify-between sticky">
      {/* Navbar Brand */}
      <Link href={"/"} className="flex items-center gap-2 font-bold">
        <Image
          src={"/profile.png"}
          alt=""
          className="ml-1 rounded-full"
          width={"30"}
          height={"30"}
        />
        <span className={`font-medium ${prompt_font.className}`}>SKTM.210</span>
      </Link>
      {/* Navigation */}
      <div>
        {/* Big Screen */}
        <div className="hidden sm:flex items-center gap-1">
          <Link href={"/"} className={buttonVariants({ variant: "secondary" })}>
            <RiHome4Line />
            หน้าหลัก
          </Link>
          {menu.map((item, index) => {
            return (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary">
                    <div className="flex">
                      {item.title} <RiArrowDownSLine />
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.items.map((link, link_index) => {
                    if (link.hideInComputer) return;
                    const display = (
                      <DropdownMenuItem>
                        {link.icon} {link.title}
                      </DropdownMenuItem>
                    );
                    const external = link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {};
                    return (
                      <Link href={link.href} key={link_index} {...external}>
                        {display}
                      </Link>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          })}
        </div>
        {/* Small Device */}
        <div className="sm:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <div>
                  <RiMenuFill />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {menu.map((item, index) => {
                return (
                  <DropdownMenuGroup key={index}>
                    <DropdownMenuLabel>{item.title}</DropdownMenuLabel>

                    {item.items.map((link, link_index) => {
                      const display = (
                        <DropdownMenuItem>
                          {link.icon} {link.title}
                        </DropdownMenuItem>
                      );
                      const external = link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {};
                      return (
                        <Link href={link.href} key={link_index} {...external}>
                          {display}
                        </Link>
                      );
                    })}
                  </DropdownMenuGroup>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
