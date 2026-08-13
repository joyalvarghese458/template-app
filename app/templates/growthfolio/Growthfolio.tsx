"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, ChevronDown, Link, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import * as data from "./_data/portfolio";
import styles from "./theme.module.css";

const reveal = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 }, transition: { duration: 0.55 } };

function Heading({ index, eyebrow, children }: { index: string; eyebrow: string; children: React.ReactNode }) {
  return <motion.header className={styles.heading} {...reveal}><span>{index} / {eyebrow}</span><h2>{children}</h2></motion.header>;
}

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return <div className={styles.marquee} aria-label={items.join(", ")}><div className={reverse ? styles.marqueeReverse : styles.marqueeTrack}>{[...items, ...items].map((item, i) => <span key={`${item}-${i}`}>{item}<b>+</b></span>)}</div></div>;
}

export default function Growthfolio() {
  const reduced = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.body.classList.add(styles.bodyLock);
    return () => document.body.classList.remove(styles.bodyLock);
  }, []);

  const nav = ["about", "services", "work", "experience", "contact"];
  const anim = reduced ? {} : reveal;

  return (
    <div className={styles.root}>
      <a href="#main" className={styles.skip}>Skip to content</a>
      <nav className={styles.nav} aria-label="Primary navigation">
        <a className={styles.brand} href="#top" onClick={() => setMenuOpen(false)}>AJ<span>.</span></a>
        <div className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ""}`}>
          {nav.map(item => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        </div>
        <a className={styles.navCta} href={`mailto:${data.profile.email}`}>Let&apos;s talk <ArrowUpRight size={16} /></a>
        <button className={styles.menu} onClick={() => setMenuOpen(v => !v)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <main id="main">
        <section className={styles.hero} id="top">
          <motion.div className={styles.heroCopy} initial={reduced ? false : "hidden"} animate="show" variants={{ show: { transition: { staggerChildren: .08 } } }}>
            <motion.p variants={{ hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } }} className={styles.kicker}><span /> {data.profile.title} · {data.profile.location}</motion.p>
            <motion.h1 variants={{ hidden: { opacity: 0, y: 35 }, show: { opacity: 1, y: 0 } }}>Performance Marketing <em>That Drives Growth.</em></motion.h1>
            <motion.p variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className={styles.heroSummary}>{data.profile.summary}</motion.p>
            <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }} className={styles.actions}>
              <a className={styles.primary} href={`mailto:${data.profile.email}?subject=Free consultation`}>Get a Free Consultation <ArrowUpRight /></a>
              <a className={styles.secondary} href="#work">View Case Studies <ArrowDownRight /></a>
            </motion.div>
          </motion.div>
          <motion.div className={styles.portrait} initial={reduced ? false : { clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0% 0 0 0)" }} transition={{ duration: 1, delay: .25 }} aria-label="Ashwin James identity panel">
            <Image src="/templates/growthfolio/ashwin-james.png" alt="Ashwin James" fill priority sizes="(max-width: 900px) 100vw, 360px" /><p>{data.profile.name}</p><small>Dubai · UAE</small>
          </motion.div>
          <a className={styles.scroll} href="#about">Scroll to explore <ArrowDownRight /></a>
        </section>

        <Marquee items={data.expertise} />

        <section className={styles.about} id="about">
          <div className={styles.aboutVisual}><Image src="/templates/growthfolio/ashwin-james.png" alt="Ashwin James holding a professional pose" fill sizes="(max-width: 900px) 100vw, 460px" /><small>{data.profile.name}</small></div>
          <motion.div className={styles.aboutCopy} {...anim}>
            <div className={styles.knock}><h2>Knock, Knock!</h2><p>Who&apos;s there?</p></div>
            <p className={styles.lead}>Growth comes from connecting the whole system: demand, messaging, conversion paths, measurement, and the decisions made after launch.</p>
            <p>Based in Dubai, Ashwin builds performance marketing systems that make lead quality visible, reduce wasted spend, and create a clearer route from attention to revenue.</p>
            <blockquote>“{data.profile.quote}”</blockquote>
          </motion.div>
        </section>

        <section className={styles.statement}><p>Whether you are building demand or fixing conversion,<br /><strong>I am here to help you grow.</strong></p></section>

        <section className={styles.section} id="services">
          <Heading index="02" eyebrow="Services"><em>Services</em> Offered</Heading>
          <div className={styles.serviceList}>{data.services.map(service => <motion.article key={service.number} className={styles.service} {...anim}><span>{service.number}</span><h3>{service.title}</h3><p>{service.detail}</p><strong>{service.outcome}</strong><ArrowUpRight /></motion.article>)}</div>
        </section>

        <section className={styles.hiring}>
          <div><h2>Why Hiring Me as Your<br /><em>Performance Marketer</em><br />Is a Smart Choice</h2><p>Strong digital growth is not simply about spending more. It requires clear measurement, qualified demand, focused conversion paths, and consistent optimization.</p></div>
          <div className={styles.hiringMark}><Image src="/templates/growthfolio/ashwin-james.png" alt="Portrait of Ashwin James" fill sizes="(max-width: 900px) 100vw, 360px" /></div>
          <p>Ashwin connects media, analytics, CRM signals, landing pages, and reporting so businesses can improve the quality of growth, not only the volume.</p>
        </section>

        <section className={styles.tools}>
          <p>Platforms and tools</p><Marquee items={data.tools.slice(0, 6)} /><Marquee items={data.tools.slice(6)} reverse />
        </section>

        <section className={styles.framework}>
          <div className={styles.frameworkTitle}><Heading index="03" eyebrow="Method">The Growth<br /><em>Framework.</em></Heading><p>Six connected steps. One accountable growth system.</p></div>
          <div className={styles.steps}>{data.framework.map(step => <motion.article key={step.number} className={styles.step} {...anim}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></motion.article>)}</div>
        </section>

        <section className={styles.section} id="work">
          <Heading index="04" eyebrow="Case studies">Measured<br /><em>Progress.</em></Heading>
          <div className={styles.cases}>{data.caseStudies.map((study, i) => <motion.article key={study.sector} className={styles.case} {...anim}><div className={styles.caseTop}><span>0{i + 1}</span><p>{study.sector}</p></div><small>{study.context}</small><h3>{study.title}</h3><div className={styles.stats}>{study.stats.map(stat => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div><footer>Focus · {study.focus}</footer></motion.article>)}</div>
        </section>

        <section className={styles.timelineSection} id="experience">
          <Heading index="05" eyebrow="Career">Experience<br /><em>In Motion.</em></Heading>
          <div className={styles.timeline}>{data.career.map(job => <motion.article key={job.date + job.role} {...anim}><time>{job.date}</time><div><h3>{job.role}</h3><h4>{job.company}</h4><p>{job.detail}</p></div></motion.article>)}</div>
        </section>

        <section className={styles.section}>
          <Heading index="06" eyebrow="Capabilities">Skills That<br /><em>Compound.</em></Heading>
          <div className={styles.skills}>{data.skillGroups.map((group, i) => <motion.article key={group.title} {...anim}><span>0{i + 1}</span><h3>{group.title}</h3><p>{group.items.join(" · ")}</p></motion.article>)}</div>
        </section>

        <section className={styles.credentials}>
          <div><Heading index="07" eyebrow="Credentials">My<br /><em>Certifications.</em></Heading><div className={styles.badges}>{data.certifications.map(c => <motion.span key={c} {...anim}>{c}<ArrowUpRight /></motion.span>)}</div></div>
          <div><Heading index="08" eyebrow="Education">The<br /><em>Foundation.</em></Heading><div className={styles.education}>{data.education.map(e => <motion.article key={e.course} {...anim}><time>{e.date}</time><h3>{e.course}</h3><p>{e.school}</p></motion.article>)}</div></div>
        </section>

        {/* TODO: Replace these placeholders only after source testimonials and articles are verified. */}
        <section className={styles.placeholders} aria-label="Additional content">
          <div><Heading index="09" eyebrow="Testimonials">Client<br /><em>Perspective.</em></Heading><p>Verified client stories coming soon.</p></div>
          <div><Heading index="10" eyebrow="Insights">Working<br /><em>Notes.</em></Heading><p>Verified articles coming soon.</p></div>
        </section>

        {/* TODO: Replace the pending answers only after source FAQ copy is verified. */}
        <section className={styles.faq}>
          <Heading index="11" eyebrow="FAQ">Common<br /><em>Questions.</em></Heading>
          <div className={styles.faqList}>{["What does a consultation cover?", "Which channels are the right fit?", "How is lead quality measured?"].map((q, i) => <div key={q} className={styles.faqItem}><button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>{q}<ChevronDown /></button>{openFaq === i && <p>Answer pending confirmation from the source site.</p>}</div>)}</div>
        </section>

        <section className={styles.contact} id="contact">
          <p className={styles.kicker}><span /> Available for consultations in the UAE</p>
          <h2>Ready to Generate<br /><em>Better Leads?</em></h2>
          <div className={styles.contactGrid}>
            <div><p>Start with the business goal, then build the system around it.</p><a className={styles.primary} href={`mailto:${data.profile.email}?subject=Free consultation`}>Get a Free Consultation <ArrowUpRight /></a></div>
            <form className={styles.contactForm} action={`mailto:${data.profile.email}`} method="post" encType="text/plain"><h3>Ping me with a <em>HI</em></h3><label>Your name<input name="name" required /></label><label>Your email<input name="email" type="email" required /></label><label>Subject<input name="subject" required /></label><label>Your message<textarea name="message" rows={3} /></label><button type="submit">Submit</button></form>
          </div>
          <address className={styles.contactDetails}><a href={`mailto:${data.profile.email}`}><Mail />{data.profile.email}</a><a href={`tel:${data.profile.phoneHref}`}><Phone />{data.profile.phone}</a><span><MapPin />{data.profile.location}</span></address>
        </section>
      </main>
      <footer className={styles.footer}><a href="#top">AJ<span>.</span></a><p>© {new Date().getFullYear()} Ashwin James</p><a href={data.profile.site} target="_blank" rel="noreferrer">ashwinjames.com</a></footer>
      <a className={styles.whatsapp} href={`https://wa.me/${data.profile.phoneHref.replace("+", "")}`} target="_blank" rel="noreferrer" aria-label="Chat with Ashwin on WhatsApp"><MessageCircle /></a>
      <div className={styles.socialRail} aria-label="Social links"><a href={`https://wa.me/${data.profile.phoneHref.replace("+", "")}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a><a href={data.profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Link /></a><a href={`mailto:${data.profile.email}`} aria-label="Email"><Mail /></a></div>
    </div>
  );
}
