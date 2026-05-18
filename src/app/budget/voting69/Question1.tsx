"use client";

// Shadcn
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Icon
import { RiTrophyLine } from "@remixicon/react";

// Chart
import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { barRedius, QuestionDataCounting } from "./page";

// Data
const q1Raw =
  "10 บาท (เหมือนเดิม) | 50 บาท | 10 บาท (เหมือนเดิม) | 10 บาท (เหมือนเดิม) | 10 บาท (เหมือนเดิม) | 15 บาท | 20 บาท | 20 บาท | 10 บาท (เหมือนเดิม) | 20 บาท | 20 บาท | 15 บาท | 10 บาท (เหมือนเดิม) | 20 บาท | 20 บาท | 20 บาท | 20 บาท | 20 บาท | 20 บาท | 15 บาท | 5 บาท | 10 บาท (เหมือนเดิม) | 10 บาท (เหมือนเดิม) | 40 บาท | 20 บาท | 10 บาท (เหมือนเดิม) | 10 บาท (เหมือนเดิม) | 10 บาท (เหมือนเดิม) | 10 บาท (เหมือนเดิม) | 10 บาท (เหมือนเดิม) | 10 บาท (เหมือนเดิม) | 10 บาท (เหมือนเดิม) | 20 บาท | 20 บาท | 10 บาท (เหมือนเดิม) | 10 บาท (เหมือนเดิม) | 10 บาท (เหมือนเดิม)";
const q1: QuestionDataCounting = {};
q1Raw.split(" | ").forEach((data) => {
  q1[data] = (q1[data] || 0) + 1;
});
q1["10 บาท"] = q1["10 บาท (เหมือนเดิม)"];
delete q1["10 บาท (เหมือนเดิม)"];

const q1ChartConfig = {
  amount: {
    label: "Amount",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;
const q1ChartData = Object.entries(q1)
  .sort((a, b) => +b[0].replace(" บาท", "") - +a[0].replace(" บาท", ""))
  .map((pair) => ({
    name: pair[0],
    amount: pair[1],
  }));

export function Question1() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>จำนวนเงินเก็บเข้าห้องต่อสัปดาห์</CardTitle>
        <CardDescription>ข้อมูลแสดงความถี่ของจำนวนเงินที่เสนอ</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="sm:grid sm:grid-cols-10 sm:gap-1">
          {/* Chart */}
          <div className="flex justify-center col-span-6">
            <ChartContainer config={q1ChartConfig} className="max-w-100 w-full">
              <BarChart accessibilityLayer data={q1ChartData} layout="vertical">
                <XAxis type="number" dataKey={"amount"} hide />
                <YAxis dataKey={"name"} type="category" />
                <Bar dataKey={"amount"} fill="var(--color-amount)" radius={barRedius} />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ChartContainer>
          </div>
          {/* Sumary */}
          <div className="mt-5 sm:mt-0 col-span-4 flex flex-col justify-center items-end">
            <Alert>
              <RiTrophyLine />
              <AlertTitle>
                ผลสรุป (ชนะผลโหวต)
                <h2 className="text-xl font-extrabold">10 บาท (เหมือนเดิม)</h2>
              </AlertTitle>
              <AlertDescription>คะแนนโหวต: 19 เสียง</AlertDescription>
            </Alert>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
