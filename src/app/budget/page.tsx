import { Header } from "@/components/Header";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Announcement, announcementHeader } from "./Announcement";
import { Space } from "@/components/EndSpace";

export default function BudgetPage() {
  return (
    <>
      <Header>กลุ่มบริหารงานงบประมาณ</Header>
      <main className="mt-5 flex flex-col gap-5">
        <section className="px-5">
          <Card>
            <CardHeader>
              <CardTitle>แบบบันทึกการเก็บเงินห้อง ม.2/10</CardTitle>
              <CardDescription>
                ต้องใช้ Email โรงเรียนในการเปิดเท่านั้น
              </CardDescription>
              <CardAction>
                <Link
                  href={"https://bit.ly/4q4i4rO"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "outline",
                    className: "text-card-foreground",
                  })}
                >
                  เปิด
                </Link>
              </CardAction>
            </CardHeader>
            <CardContent>
              <iframe
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSLSSExVKmYb2zLU4O1FTR-IBGo5PwwQRcFdFgniWIVRAO2Zj-gfAR5mmKb0aN3aAz4SDU2TmuAoPq5/pubhtml?widget=true&amp;headers=false"
                className="w-full h-100"
              ></iframe>
            </CardContent>
          </Card>
        </section>
        <div className="px-5 flex flex-col sm:grid sm:grid-cols-2 gap-5">
          <section>
            <Card>
              <CardHeader>
                <CardTitle>ประกาศ</CardTitle>
                <CardDescription>
                  ประกาศล่าสุดจากกลุ่มบริหารงานงบประมาณ
                </CardDescription>
                <CardAction>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant={"outline"} disabled>อ่าน</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{announcementHeader}</DialogTitle>
                        <DialogDescription>ประกาศวันที่ 15 พ.ค. 2569</DialogDescription>
                      </DialogHeader>
                      <Announcement />
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button>ปิด</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardAction>
              </CardHeader>
            </Card>
          </section>
          <section>
            <Card>
              <CardHeader>
                <CardTitle>การโหวต</CardTitle>
                <CardDescription>
                  บันทึกการโหวตการสั่งซื้อสิ่งของเครื่องใช้ในแต่ละครั้ง
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link
                  href={"/budget/voting69"}
                  className={buttonVariants({ variant: "link" })}
                >
                  Voting 69
                </Link>
                {/* <Separator />
                <Link
                  href={"/budget/voting69"}
                  className={buttonVariants({ variant: "link" })}
                >
                  Voting 69
                </Link> */}
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
      <Space />
    </>
  );
}
