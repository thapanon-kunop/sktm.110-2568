"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { RiFileUnknowLine } from "@remixicon/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CleaningDutyPage() {
  const router = useRouter();
  return (
    <main className="mt-5 flex justify-center px-5">
      <Empty className="border border-dashed max-w-sm">
        <EmptyHeader>
          <EmptyMedia variant={"icon"}>
            <RiFileUnknowLine />
          </EmptyMedia>
          <EmptyTitle>ยังไม่มีข้อมูล</EmptyTitle>
          <EmptyDescription>
            ยังไม่มีใครทำตารางเวรให้คุณได้เห็น
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent className="flex-row gap-1 justify-center">
          <Link href={"/"} className={buttonVariants()}>
            กลับหน้าหลัก
          </Link>
          <Button onClick={() => router.refresh()} variant={"secondary"}>
            Refresh
          </Button>
        </EmptyContent>
      </Empty>
    </main>
  );
}
