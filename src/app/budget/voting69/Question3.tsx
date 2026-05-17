"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { RiTrophyLine } from "@remixicon/react";
import { Pie, PieChart } from "recharts";

const q3ChartConfig = {
  agree: {
    label: "เห็นชอบ",
    color: "var(--chart-1)",
  },
  disagree: {
    label: "ไม่เห็นชอบ",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;
const q3ChartData = [
  { name: "agree", amount: 34, fill: "var(--color-agree)" },
  { name: "disagree", amount: 3, fill: "var(--color-disagree)" },
];

export function Question3() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>มติเห็นชอบตะกร้าและกระปุกบริจาค</CardTitle>
        <CardDescription>
          การหยอดเงินตามกำลังศรัทธาสำหรับของไม่มีเจ้าของ
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="sm:grid sm:grid-cols-2">
          <ChartContainer config={q3ChartConfig} className="max-h-100">
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent />} />
              <Pie data={q3ChartData} dataKey={"amount"} nameKey={"name"} />
              <ChartLegend content={<ChartLegendContent />} />
            </PieChart>
          </ChartContainer>
          {/* Sumary */}
          <div className="mt-5 sm:mt-0 flex flex-col justify-center items-end">
            <Alert>
              <RiTrophyLine />
              <AlertTitle>
                สรุป ผลมติ
                <h2 className="text-xl font-extrabold">เห็นชอบ</h2>
              </AlertTitle>
              <AlertDescription>
                ด้วยคะแนนเสียงข้างมาก 34 จาก 37 เสียง
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
