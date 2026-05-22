import { Space } from "@/components/EndSpace";
import { Header } from "@/components/Header";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header>SKT M.2/10</Header>
      <main>
        <section className="flex flex-col sm:grid sm:grid-cols-2 gap-5 px-5 pt-5">
          <div>
            <Card>
              <CardHeader>
                <CardTitle>การนำทาง</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Link
                  href={"/budget"}
                  className={buttonVariants({ className: "d-block w-full" })}
                >
                  กลุ่มเหรัญญิกห้อง
                </Link>
                <Link
                  href={"/tasks"}
                  className={buttonVariants({
                    variant: "secondary",
                    className: "d-block w-full",
                  })}
                >
                  Assignments Center
                </Link>
                <Link
                  href={"/docs/schedule"}
                  className={buttonVariants({
                    variant: "outline",
                    className: "d-block w-full",
                  })}
                >
                  ตารางเรียน
                </Link>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>ช่องทางการติดตาม</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <Link
                  href={"https://www.instagram.com/sktm.210"}
                  className={buttonVariants({ className: "d-block w-full" })}
                >
                  Instagram
                </Link>
                <Link
                  href={"https://sk-thonburi.ac.th/"}
                  className={buttonVariants({
                    variant: "secondary",
                    className: "d-block w-full",
                  })}
                >
                  เว็บไซต์โรงเรียน
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Space />
    </>
  );
}
