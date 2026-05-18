import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import React from "react";

export const announcementHeader: React.ReactNode = (
  <>ประกาศเรื่องการจัดซื้อเครื่องใช้ภายในห้อง</>
);

export function Announcement() {
  return (
    <>
      จะจัดซื้อเครื่องใช้ โดยมีรายละเอียดดังนี้
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>1.</TableCell>
            <TableCell>
              เน้นข้อความด้วย<b>สีเขียว</b> หมายถึง กำลังดำเนินการสั่งซื้อ
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2.</TableCell>
            <TableCell>
              เน้นข้อความด้วย<b>สีเหลือง</b> หมายถึง รอดูสถานการณ์
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>3.</TableCell>
            <TableCell>
              เน้นข้อความด้วย<b>สีฟ้า</b> หมายถึง ครั้งหน้า
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
