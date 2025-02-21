"use client";

import React from "react";
import { useArticleById } from "@/hooks/useArticleById";
import { useParams } from "next/navigation";

export default function ArticlePage() {
  const { id } = useParams();
  const { data, error, isLoading } = useArticleById(id as string);

  if (error) return <div>An error has occurred.</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return <div></div>;
}
