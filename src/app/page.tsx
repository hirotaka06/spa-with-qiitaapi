"use client";

import React from "react";
import { useArticles } from "@/hooks/useArticles";

export default function HomePage() {
  const { data, error, isLoading } = useArticles();

  if (error) return <div>An error has occurred.</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return <div></div>;
}
