"use client";

import { useEffect, useRef } from "react";

type Props = {
  html: string;
  className?: string;
};

const ICON_ATTRS = 'xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';

const COPY_ICON = `<svg ${ICON_ATTRS}><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>`;
const CHECK_ICON = `<svg ${ICON_ATTRS}><path d="M20 6 9 17l-5-5"/></svg>`;

export default function ArticleContent({ html, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const buttons: HTMLButtonElement[] = [];

    container.querySelectorAll("pre").forEach((pre) => {
      if (pre.parentElement?.classList.contains("code-block-wrap")) return;

      const wrap = document.createElement("div");
      wrap.className = "code-block-wrap relative group";
      pre.parentNode?.insertBefore(wrap, pre);
      wrap.appendChild(pre);

      const btn = document.createElement("button");
      btn.type = "button";
      btn.innerHTML = COPY_ICON;
      btn.title = "คัดลอกโค้ด";
      btn.setAttribute("aria-label", "คัดลอกโค้ด");
      btn.className =
        "copy-code-btn absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-md bg-slate-700/80 text-slate-200 hover:bg-slate-600 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer";
      btn.addEventListener("click", () => {
        const text = (pre.textContent ?? "").replace(/\s+$/, "");
        const reset = () => {
          btn.innerHTML = COPY_ICON;
          btn.title = "คัดลอกโค้ด";
          btn.classList.remove("text-green-400");
          btn.classList.add("text-slate-200");
        };
        const done = () => {
          btn.innerHTML = CHECK_ICON;
          btn.title = "คัดลอกแล้ว!";
          btn.classList.remove("text-slate-200");
          btn.classList.add("text-green-400");
          setTimeout(reset, 1500);
        };
        const fail = () => {
          btn.title = "คัดลอกไม่สำเร็จ กด Ctrl+C แทน";
          setTimeout(reset, 1500);
        };
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(done).catch(fail);
        } else {
          fail();
        }
      });

      wrap.appendChild(btn);
      buttons.push(btn);
    });

    return () => {
      buttons.forEach((btn) => btn.remove());
    };
  }, [html]);

  return (
    <article
      ref={ref}
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
