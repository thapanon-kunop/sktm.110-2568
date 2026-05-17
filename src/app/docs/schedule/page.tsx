import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function SchdulePage() {
  return (
    <main className="px-5 flex flex-col gap-2">
      <Link href={"https://bit.ly/skt2026-sched210"} target="_blank" rel="noopener noreferrer" className={`block w-full ${buttonVariants()}`}>ดูหน้าเว็บเต็ม</Link>
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSkz5v1QJBrD3lxR1lVhV0UQ4wjYp5itsG16ysQOKVqoQKxDF2QCwkbicOSYG27-7dORZf7YID5EF60/pubhtml?widget=true&amp;headers=false"
        className="h-screen"
      ></iframe>
    </main>
  );
}
