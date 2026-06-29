"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Arrow from "../_components/Arrow";
import theme from "../_components/theme.module.css";
import styles from "./styles.module.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <div className={styles.formWrap}>
      <AnimatePresence mode="wait">
        {status === "idle" ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className={styles.form}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            <label className={styles.field}>
              <span>Name</span>
              <input type="text" name="name" required placeholder="Your full name" />
            </label>
            <label className={styles.field}>
              <span>Email</span>
              <input type="email" name="email" required placeholder="you@company.com" />
            </label>
            <label className={styles.field}>
              <span>Message</span>
              <textarea name="message" required rows={4} placeholder="What would you like to discuss?" />
            </label>
            <button type="submit" className={`${theme.btn} ${theme.btnPrimary} ${styles.submit}`}>
              Send message
              <Arrow className={theme.btnArrow} />
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            className={styles.success}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className={styles.successDot} />
            <p>
              Thank you — your message has been noted. The office will follow up within two
              business days.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
