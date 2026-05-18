"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function TaskPage() {
  useEffect(() => {
    window.location.href = "https://myskttask.my.canva.site/";
  });

  return (
    <></>
    // <iframe src="https://www.canva.com/design/DAHBfldklS4/i573TvS_2CyRLb29MzclHg/view?embed" className="" width="100%"></iframe>
  );
}
