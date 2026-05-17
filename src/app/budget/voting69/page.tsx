// shadcn
import { Badge } from "@/components/ui/badge";

import { Question1 } from "./Question1";
import { Question2 } from "./Question2";
import { Question3 } from "./Question3";

// Configs
export interface QuestionDataCounting {
  [name: string]: number;
}
export const barRedius = 4;

export default function Voting69Page() {
  return (
    <>
      <header className="text-center my-5">
        <h1 className="text-xl sm:text-2xl">สรุปผลการลงมติภายในห้องเรียน</h1>
        <div className="flex justify-center gap-2 flex-wrap">
          <Badge variant={"default"}>ผู้มีสิทธิ์โหวตทั้งหมด: 37 คน</Badge>
          <Badge variant={"secondary"}>ไม่ประสงค์ลงคะแนน: 2 คน</Badge>
          <Badge variant={"outline"}>งดออกเสียง: 1 คน</Badge>
        </div>
      </header>
      <main className="flex flex-col items-center gap-5">
        <section className="px-5 w-full max-w-5xl">
          <Question1 />
        </section>
        <section className="px-5 w-full max-w-5xl">
          <Question2 />
        </section>
        <section className="px-5 w-full max-w-5xl">
          <Question3 />
        </section>
      </main>
    </>
  );
}