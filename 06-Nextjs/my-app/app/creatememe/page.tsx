"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const Creatememe = () => {
  const searchParams = useSearchParams();

  const url: string = searchParams.get("url") || "";
  const id: string = searchParams.get("id") || "";
  const box_count: string = searchParams.get("boxCount") || "";
  console.log(url, id , box_count);

  return (
    <>
      <h1>Creatememe</h1>
      <Image src={url} alt={id} width={300} height={300} />
    </>
  );
};

export default Creatememe;
