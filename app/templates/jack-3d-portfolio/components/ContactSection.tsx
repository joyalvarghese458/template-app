'use client';

import { FadeIn, ContactButton } from './ui';

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
                mt-20 sm:mt-28 md:mt-40
                px-8 sm:px-16 md:px-24
                pt-20 sm:pt-28 md:pt-36
                pb-20 sm:pb-28 md:pb-36"
        >
            <FadeIn delay={0} y={40}>
                <div className="flex flex-col items-center gap-6 sm:gap-8 text-center">

                    {/* Heading */}
                    <h2
                        className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight"
                        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
                    >
                        Contact
                    </h2>

                    {/* Subtitle */}
                    <p
                        className="text-[#0C0C0C] font-light leading-relaxed text-center mx-auto max-w-[580px]"
                        style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', opacity: 0.6 }}
                    >
                        Have a project in mind? Let&apos;s build something striking and unforgettable
                        together. Reach out and let&apos;s start the conversation.
                    </p>

                    {/* Button */}
                    <ContactButton />

                    {/* Email */}
                    <a
                        href="mailto:hello@jack3d.studio"
                        className="text-[#0C0C0C] font-light text-sm tracking-widest uppercase
                            transition-opacity duration-200 hover:opacity-80"
                        style={{ opacity: 0.4 }}
                    >
                        hello@jack3d.studio
                    </a>

                </div>
            </FadeIn>
        </section>
    );
}
