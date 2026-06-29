"use client";

import { useEffect } from "react";

export function useSnapViewport() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflowX = html.style.overflowX;
    const previousBodyOverflowX = body.style.overflowX;

    html.style.overflowX = "hidden";
    body.style.overflowX = "hidden";

    return () => {
      html.style.overflowX = previousHtmlOverflowX;
      body.style.overflowX = previousBodyOverflowX;
    };
  }, []);
}
