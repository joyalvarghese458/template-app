"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import { Button } from "./ui/button";

export type DetailDialogProps = {
  open: boolean;
  title: string;
  eyebrow: string;
  body: string;
  bullets: string[];
  onClose: () => void;
};

export function DetailDialog({
  open,
  title,
  eyebrow,
  body,
  bullets,
  onClose,
}: DetailDialogProps) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close dialog"
            className="absolute inset-0 bg-slate-950/72 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-xl rounded-[28px] border border-white/14 bg-[#111827]/96 p-5 text-white shadow-2xl shadow-black/40 sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-[#d6a85f]">
                  {eyebrow}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                  {title}
                </h3>
              </div>
              <Button
                type="button"
                variant="ghost"
                className="h-10 w-10 rounded-full p-0"
                onClick={onClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/74">{body}</p>
            <div className="mt-5 space-y-3">
              {bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm leading-6 text-white/82"
                >
                  {bullet}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
