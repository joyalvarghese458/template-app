"use client";

import { useState } from "react";

import type { Trainer } from "../../data/trainer";
import RevealBlock from "../common/RevealBlock";
import SectionLabel from "../common/SectionLabel";
import styles from "../../styles.module.css";

const dayOrder = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

export default function Schedule({ trainer }: { trainer: Trainer }) {
  const [openDay, setOpenDay] = useState<string>("Mon");

  return (
    <section id="schedule" className={styles.section}>
      <div className={styles.sectionInner}>
        <RevealBlock className={styles.sectionHeader}>
          <SectionLabel>Schedule</SectionLabel>
          <h2 className={styles.sectionHeading}>Weekly Class Schedule</h2>
        </RevealBlock>

        <div className={styles.scheduleTable}>
          {dayOrder.map((day) => (
            <div key={day} className={styles.scheduleColumn}>
              <div className={styles.scheduleDay}>{day}</div>
              <div className={styles.scheduleCellStack}>
                {trainer.schedule[day].length ? (
                  trainer.schedule[day].map((slot) => (
                    <div key={`${day}-${slot.name}-${slot.time}`} className={styles.scheduleCell}>
                      <span className={styles.scheduleClass}>{slot.name}</span>
                      <span className={styles.scheduleTime}>{slot.time}</span>
                      <span className={styles.scheduleDuration}>{slot.duration}</span>
                    </div>
                  ))
                ) : (
                  <div className={`${styles.scheduleCell} ${styles.scheduleCellEmpty}`}>–</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.scheduleAccordion}>
          {dayOrder.map((day) => {
            const isOpen = openDay === day;

            return (
              <div key={day} className={styles.accordionItem}>
                <button
                  type="button"
                  className={styles.accordionToggle}
                  onClick={() => setOpenDay(isOpen ? "" : day)}
                  aria-expanded={isOpen}
                >
                  <span>{day}</span>
                  <span>{isOpen ? "−" : "+"}</span>
                </button>
                <div
                  className={`${styles.accordionPanel} ${
                    isOpen ? styles.accordionPanelOpen : ""
                  }`}
                >
                  <div className={styles.accordionPanelInner}>
                    {trainer.schedule[day].length ? (
                      trainer.schedule[day].map((slot) => (
                        <div
                          key={`${day}-${slot.name}-${slot.time}`}
                          className={styles.accordionSlot}
                        >
                          <span className={styles.scheduleClass}>{slot.name}</span>
                          <span className={styles.scheduleTime}>{slot.time}</span>
                          <span className={styles.scheduleDuration}>{slot.duration}</span>
                        </div>
                      ))
                    ) : (
                      <div className={styles.accordionSlotMuted}>No class scheduled</div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <RevealBlock className={styles.scheduleCta}>
          <p className={styles.scheduleHeadline}>
            Join Any Class Free — First Session on Me
          </p>
          <a href="#contact" className={styles.primaryButton}>
            Claim Your Spot
          </a>
        </RevealBlock>
      </div>
    </section>
  );
}
