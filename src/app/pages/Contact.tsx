import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowUpRight, CheckCircle2, FileText, Download, Loader2, Linkedin } from "lucide-react";
import resumePdf from "../../imports/Lalithapriya_K_Resume.pdf";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitState, setSubmitState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [focused, setFocused] = useState<string | null>(null);

  // Live India Time Clock
  const [time, setTime] = useState("");
  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
      });
      setTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitState("sending");

    // Mock submit for demo
    await new Promise((res) => setTimeout(res, 1400));
    setSubmitState("done");
  };

  const handleReset = () => {
    setForm({ name: "", email: "", subject: "", message: "" });
    setSubmitState("idle");
  };

  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 500], [0, 150]);
  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="pt-32 pb-32 overflow-hidden min-h-screen relative">
      <div className="max-w-[1400px] mx-auto px-6 relative z-20 lg:px-10">
        
        {/* ── Page Header ─────────────────────────────────────────── */}
        <div className="mb-10 md:mb-12">
          <h1 className="font-display text-[clamp(3rem,8vw,7rem)] font-bold leading-none tracking-tight mb-6">
            Let's Talk.
          </h1>
          <p className="font-mono-jb text-[0.75rem] uppercase tracking-[0.3em] text-foreground">
            Lalithapriya K <span className="text-muted-foreground/40 mx-3">|</span> <span className="text-primary">UI/UX Designer</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Architectural Contact Info */}
          <div className="lg:col-span-6 flex flex-col order-2 lg:order-1 h-full">
            <div className="flex h-full flex-col gap-8 lg:gap-10">
              <div>
                <p className="font-mono-jb text-sm font-bold uppercase tracking-[0.2em] mb-3 text-muted-foreground/60">Local Time</p>
                <div className="font-display text-4xl md:text-5xl font-light tracking-tighter text-foreground">
                  {time || "..."} <span className="text-xl text-muted-foreground ml-2">IST</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">Tiruvannamalai, Tamil Nadu, India</div>
              </div>

              <div>
                <p className="font-mono-jb text-sm font-bold uppercase tracking-[0.2em] mb-3 text-muted-foreground/60">Direct</p>
                <a href="mailto:lalithapriyakumaravel@gmail.com" className="group block mb-3 transition-opacity hover:opacity-70">
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    lalithapriyakumaravel@gmail.com
                  </div>
                </a>
                <a href="tel:+918925490563" className="group block transition-opacity hover:opacity-70">
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    +91 89254 90563
                  </div>
                </a>
              </div>

              <div>
                <p className="font-mono-jb text-sm font-bold uppercase tracking-[0.2em] mb-3 text-muted-foreground/60">Socials</p>
                <div className="flex flex-col gap-3">
                  {[
                    { text: "LinkedIn", url: "https://www.linkedin.com/in/lalithapriyakumaravel/", icon: Linkedin },
                    { 
                      text: "Behance", 
                      url: "https://www.behance.net/lalithapriyakumaravel",
                      icon: ({ size, className }: any) => (
                        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.546-1.436-2.352-2.461-2.352-1.502 0-2.205.837-2.504 2.352zm-8.314-1.898c-.287-.58-.598-1.226-1.127-1.564-1.226-.782-3.136-.598-4.598-.598v9.06c1.696 0 4.137.288 5.485-1.128 1.134-1.196 1.171-2.909.117-4.148-.553-.65-1.496-1.15-2.259-1.258 1.455-.414 2.684-1.825 2.382-3.364zm-4.726-1.102h1.688c1.371 0 2.227.423 2.227 1.545 0 1.259-.974 1.579-2.122 1.579h-1.793v-3.124zm0 6.643v-3.522h1.726c1.199 0 2.668.211 2.668 1.761 0 1.637-1.516 1.761-2.825 1.761h-1.569z" />
                        </svg>
                      )
                    },
                    {
                      text: "Medium",
                      url: "https://medium.com/@lalithapriyakumaravel",
                      icon: ({ size, className }: any) => (
                        <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor">
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                        </svg>
                      )
                    }
                  ].map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 w-fit">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/80 text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                        <link.icon size={18} />
                      </div>
                      <span className="font-display text-[1.15rem] font-medium text-foreground transition-colors group-hover:text-primary">{link.text}</span>
                      <ArrowUpRight size={18} className="text-primary opacity-0 -translate-x-3 translate-y-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                <p className="font-mono-jb text-sm font-bold uppercase tracking-[0.2em] mb-3 text-muted-foreground/60">Resume</p>
                <a
                  href={resumePdf}
                  download="Lalithapriya_K_Resume.pdf"
                  className="group relative inline-flex w-full items-center justify-between overflow-hidden rounded-2xl border border-border bg-card px-6 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <FileText size={18} />
                    </div>
                    <div>
                      <p className="font-display text-[0.95rem] font-medium tracking-tight text-foreground">Download Resume</p>
                      <p className="font-mono-jb text-[0.6rem] uppercase tracking-[0.15em] text-muted-foreground mt-1">PDF Version</p>
                    </div>
                  </div>
                  <Download size={18} className="text-muted-foreground transition-all group-hover:text-primary group-hover:translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Minimalist Form & Success State */}
          <div className="lg:col-span-6 order-1 lg:order-2 relative min-h-[500px] flex flex-col h-full">
            <AnimatePresence mode="wait">
              {submitState === "done" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 rounded-[2rem] border border-border bg-card/30"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                    className="mb-8"
                  >
                    <CheckCircle2 size={100} className="text-green-500" />
                  </motion.div>
                  <h3 className="font-display text-4xl md:text-5xl font-bold mb-4 tracking-tight text-foreground">
                    Message Sent!
                  </h3>
                  <p className="font-display text-lg mb-10 max-w-md mx-auto text-muted-foreground">
                    Thank you for reaching out. I've received your message and will get back to you shortly.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleReset}
                    className="px-12 py-4 rounded-full font-mono-jb font-bold uppercase tracking-widest text-sm bg-primary text-primary-foreground transition-shadow hover:shadow-xl hover:shadow-primary/20"
                  >
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit} 
                  className="flex flex-col flex-1 gap-12 h-full w-full"
                >
                  <div className="grid md:grid-cols-2 gap-12">
                    {(["name", "email"] as const).map((field) => (
                      <div key={field} className="relative group">
                        <label className={`block mb-2 font-mono-jb text-[0.75rem] uppercase tracking-[0.15em] font-bold transition-colors duration-300 ${focused === field ? "text-primary" : "text-muted-foreground"}`}>
                          {field === "name" ? "01. What's your name?" : "02. Your email address"}
                        </label>
                        <input
                          type={field === "email" ? "email" : "text"}
                          value={form[field]}
                          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                          onFocus={() => setFocused(field)}
                          onBlur={() => setFocused(null)}
                          placeholder={field === "name" ? "John Doe" : "john@doe.com"}
                          required
                          className="w-full py-5 border-b-2 bg-transparent font-display text-xl outline-none transition-colors duration-300 placeholder-muted-foreground/30 text-foreground border-transparent"
                        />
                        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-border transition-colors duration-300" />
                        <motion.div 
                          className="absolute bottom-0 left-0 h-[2px] bg-primary z-10"
                          initial={{ width: "0%" }}
                          animate={{ width: focused === field ? "100%" : "0%" }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="relative group">
                    <label className={`block mb-2 font-mono-jb text-[0.75rem] uppercase tracking-[0.15em] font-bold transition-colors duration-300 ${focused === "subject" ? "text-primary" : "text-muted-foreground"}`}>
                      03. Subject
                    </label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused(null)}
                      placeholder="Website Redesign, Mobile App, etc."
                      className="w-full py-5 border-b-2 bg-transparent font-display text-xl outline-none transition-colors duration-300 placeholder-muted-foreground/30 text-foreground border-transparent"
                    />
                    <div className="absolute bottom-0 left-0 h-[2px] w-full bg-border transition-colors duration-300" />
                    <motion.div 
                      className="absolute bottom-0 left-0 h-[2px] bg-primary z-10"
                      initial={{ width: "0%" }}
                      animate={{ width: focused === "subject" ? "100%" : "0%" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>

                  <div className="relative group">
                    <label className={`block mb-2 font-mono-jb text-[0.75rem] uppercase tracking-[0.15em] font-bold transition-colors duration-300 ${focused === "message" ? "text-primary" : "text-muted-foreground"}`}>
                      04. Your Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      placeholder="Tell me about your project, timeline, and budget..."
                      rows={4}
                      required
                      className="w-full py-5 border-b-2 bg-transparent font-display text-xl outline-none transition-colors duration-300 placeholder-muted-foreground/30 resize-none text-foreground border-transparent"
                    />
                    <div className="absolute bottom-1 left-0 h-[2px] w-full bg-border transition-colors duration-300" />
                    <motion.div 
                      className="absolute bottom-1 left-0 h-[2px] bg-primary z-10"
                      initial={{ width: "0%" }}
                      animate={{ width: focused === "message" ? "100%" : "0%" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>

                  <div className="mt-auto flex flex-col gap-4">
                    {submitState === "error" && (
                      <p className="text-red-500 text-sm">There was an error sending your message. Please try again or use direct email.</p>
                    )}
                    <motion.button
                      type="submit"
                      disabled={submitState === "sending"}
                      whileHover={submitState !== "sending" ? { scale: 1.02 } : {}}
                      whileTap={submitState !== "sending" ? { scale: 0.98 } : {}}
                      className="w-full h-[50px] rounded-full font-mono-jb font-semibold text-[0.8rem] uppercase tracking-[0.18em] text-primary-foreground bg-primary transition-all duration-500 relative overflow-hidden group shadow-lg shadow-primary/25 hover:shadow-primary/40 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {submitState === "sending" ? (
                          <>
                            <Loader2 size={24} className="animate-spin" /> Sending...
                          </>
                        ) : "Send Message"}
                      </span>
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
