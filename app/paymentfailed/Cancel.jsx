"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

import Container from "../components/Container";

export default function Cancel() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => router.push("/"), [2000]);
  }, [router]);

  return (
    <Container>
      <h3>Payment Failed!, Try again </h3>
    </Container>
  );
}