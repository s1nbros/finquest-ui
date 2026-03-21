import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import finquestLogo from '@/assets/finquest-logo.png'

/* ── Scroll-reveal hook ── */
function useReveal(threshold = 0.18) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) blur(0)' : 'translateY(20px)',
        filter: visible ? 'blur(0px)' : 'blur(4px)',
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms, filter 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

/* ── Logo ── */
function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <img src={finquestLogo} alt="FinQuest logo" className="h-9 w-9 rounded-xl object-contain" />
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-tight">FinQuest</div>
        <div className="text-[12px] text-white/60">FinTech x EdTech RPG</div>
      </div>
    </div>
  )
}

/* ── Section title ── */
function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <Reveal>
      <div className="mx-auto max-w-2xl text-center">
        {eyebrow ? <div className="text-xs font-semibold text-indigo-300">{eyebrow}</div> : null}
        <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {description ? <p className="mt-4 text-pretty text-white/70">{description}</p> : null}
      </div>
    </Reveal>
  )
}

/* ── Icons ── */
function Icon({ name }: { name: 'spark' | 'brain' | 'shield' | 'map' | 'coin' | 'users' }) {
  const cls = "text-indigo-200"
  const props = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" as const, "aria-hidden": true as const, className: cls }
  const s = { stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round" as const, strokeLinejoin: "round" as const }
  if (name === 'spark') return <svg {...props}><path d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2Z" {...s}/><path d="M20 13l.8 2.8L23 17l-2.2.8L20 21l-.8-3.2L17 17l2.2-1.2L20 13Z" {...s}/><path d="M4 12l.9 2.4L7 15l-2.1.6L4 18l-.9-2.4L1 15l2.1-.6L4 12Z" {...s}/></svg>
  if (name === 'brain') return <svg {...props}><path d="M9 4a3 3 0 0 0-3 3v1a2 2 0 0 0 0 4v1a3 3 0 0 0 3 3" {...s}/><path d="M15 4a3 3 0 0 1 3 3v1a2 2 0 0 1 0 4v1a3 3 0 0 1-3 3" {...s}/><path d="M9 4c0 1.2.7 2 3 2s3-.8 3-2" {...s}/><path d="M9 12h6" {...s}/></svg>
  if (name === 'map') return <svg {...props}><path d="M10 6 4 9v12l6-3 4 3 6-3V6l-6 3-4-3Z" {...s}/><path d="M10 6v12" {...s}/><path d="M14 9v12" {...s}/></svg>
  if (name === 'coin') return <svg {...props}><path d="M12 3c5 0 9 2 9 4s-4 4-9 4-9-2-9-4 4-4 9-4Z" {...s}/><path d="M21 7v10c0 2-4 4-9 4s-9-2-9-4V7" {...s}/><path d="M7.5 12.5c1.2 1 2.8 1.5 4.5 1.5s3.3-.5 4.5-1.5" {...s}/></svg>
  if (name === 'users') return <svg {...props}><path d="M16 20v-2c0-1.1-1-2-2.2-2H10.2C9 16 8 16.9 8 18v2" {...s}/><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" {...s}/><path d="M20 20v-2c0-1-1-1.8-2.1-2" {...s}/><path d="M17.5 4.7a4 4 0 0 1 0 7.1" {...s}/></svg>
  return <svg {...props}><path d="M12 2 20 6v7c0 5-3.5 9-8 9s-8-4-8-9V6l8-4Z" {...s}/><path d="M9.5 12.3 11.3 14l3.5-4" {...s}/></svg>
}

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="text-xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-white/70">{label}</div>
    </div>
  )
}

function FeatureCard({ icon, title, description, delay = 0 }: { icon?: ReactNode; title: string; description: string; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft transition-[box-shadow,transform] duration-300 hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)] hover:-translate-y-1">
        {icon ? <div className="h-10 w-10 rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-300/20 flex items-center justify-center">{icon}</div> : null}
        <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
      </div>
    </Reveal>
  )
}

function FAQItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden transition-colors duration-200 hover:bg-white/[0.07]">
      <button type="button" className="w-full p-5 text-left" onClick={onToggle} aria-expanded={open}>
        <div className="flex items-start justify-between gap-4">
          <div className="text-[15px] font-semibold tracking-tight">{q}</div>
          <div className="mt-0.5 text-indigo-200 transition-transform duration-200" style={{ transform: open ? 'rotate(45deg)' : 'rotate(0)' }}>+</div>
        </div>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: open ? '200px' : '0', opacity: open ? 1 : 0 }}
      >
        <div className="px-5 pb-5 text-sm text-white/70">{a}</div>
      </div>
    </div>
  )
}

/* ── Main Page ── */
export default function Index() {
  const nav = useMemo(() => [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Modules', href: '#modules' },
    { label: 'UX & Trust', href: '#trust' },
    { label: 'FAQ', href: '#faq' },
  ], [])

  /* Intro animation state */
  const [introDone, setIntroDone] = useState(false)
  const [showContent, setShowContent] = useState(false)
  useEffect(() => {
    const t1 = setTimeout(() => setShowContent(true), 2400)
    const t2 = setTimeout(() => setIntroDone(true), 3200)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  /* Navbar scroll state */
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

      <main id="content">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-240px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
            <div className="absolute -left-24 top-40 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
            <div className="absolute -right-24 top-72 h-64 w-64 rounded-full bg-fuchsia-400/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:pb-20 sm:pt-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <Reveal delay={0}>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
                    <span className="inline-block h-2 w-2 rounded-full bg-indigo-300 animate-pulse" />
                    Strategic analysis of gamification for financial education
                  </div>
                </Reveal>

                <Reveal delay={100}>
                  <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl" style={{ lineHeight: '1.1' }}>
                    Financial literacy as an epic quest.
                  </h1>
                </Reveal>

                <Reveal delay={200}>
                  <p className="mt-4 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
                    FinQuest combines RPG simulation (inspired by Cashflow) with psychology-driven gamification:
                    autonomy, competence, and relatedness. The goal isn't "a game for points" — it's lasting financial habits.
                  </p>
                </Reveal>

                <Reveal delay={300}>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a href="#modules" className="inline-flex items-center justify-center rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-indigo-400 active:scale-[0.97] transition-all duration-200">
                      Explore Demo Vision
                    </a>
                    <a href="#how-it-works" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 active:scale-[0.97] transition-all duration-200">
                      See How It Works
                    </a>
                  </div>
                </Reveal>

                <Reveal delay={400}>
                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    <StatPill value="5–10 min" label="micro-lesson sessions" />
                    <StatPill value="Just-in-Time" label="learning on demand" />
                    <StatPill value="No RNG" label="logic-based scenarios" />
                  </div>
                </Reveal>
              </div>

              {/* Command Center Mock */}
              <Reveal delay={200}>
                <div className="relative">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-soft">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-semibold text-white/60">Command Center</div>
                        <div className="mt-1 text-lg font-semibold">North Star: "Buy a Home"</div>
                      </div>
                      <div className="rounded-2xl bg-indigo-500/15 px-3 py-2 text-xs font-semibold text-indigo-200 ring-1 ring-indigo-300/20">
                        Financial Readiness: 72%
                      </div>
                    </div>

                    <div className="mt-5 space-y-3">
                      <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <div className="text-sm font-semibold">Daily Quest #1</div>
                            <div className="text-xs text-white/60">Identify the interest in "compound interest"</div>
                          </div>
                          <div className="rounded-xl bg-emerald-500/15 px-3 py-2 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-300/20">
                            Done
                          </div>
                        </div>
                        <div className="mt-3 h-2 w-full rounded-full bg-white/10 overflow-hidden">
                          <div className="h-2 w-[70%] rounded-full bg-indigo-400 transition-all duration-1000" />
                        </div>
                      </div>

                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                          <div className="text-xs font-semibold text-white/60">Next Mission</div>
                          <div className="mt-1 text-sm font-semibold">Choose "Avalanche"</div>
                          <div className="mt-2 text-xs text-white/60">for faster debt clearance</div>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                          <div className="text-xs font-semibold text-white/60">Tip</div>
                          <div className="mt-1 text-sm font-semibold">Just-in-Time Lesson</div>
                          <div className="mt-2 text-xs text-white/60">where risk matters most</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 rounded-2xl bg-gradient-to-r from-indigo-500/15 via-cyan-400/10 to-fuchsia-500/10 p-4 ring-1 ring-white/10">
                      <div className="text-xs font-semibold text-white/60">Why This Works</div>
                      <div className="mt-1 text-sm text-white/80">
                        When progress is visible instantly, competence grows, autonomy remains your choice, and
                        the community keeps you motivated.
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:pb-20">
          <SectionTitle
            eyebrow="FinQuest in 60 Seconds"
            title="A learning system that builds habits"
            description={'Not just "read and memorize" — practice decisions in a simulation, see the consequences, and get a lesson in the moment.'}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} delay={i * 80} />
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <SectionTitle
              eyebrow="Core Loop"
              title="How a mission unfolds"
              description="Example flow: from onboarding to simulation, academy, and social support."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-5">
              {steps.map((s, idx) => (
                <Reveal key={s.title} delay={idx * 100}>
                  <div className="h-full lg:col-span-1 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft transition-[box-shadow] duration-300 hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)]">
                    <div className="flex items-center gap-3">
                      <div className="text-xs font-bold tracking-wide text-indigo-200 ring-1 ring-indigo-300/20 bg-indigo-500/15 px-3 py-1 rounded-full">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="mt-4 text-lg font-semibold tracking-tight">{s.title}</div>
                    <div className="mt-2 text-sm text-white/70">{s.description}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Modules */}
        <section id="modules" className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:pb-20">
          <SectionTitle
            eyebrow="Academy Modules"
            title="Curriculum as a knowledge map"
            description={'Six "worlds" from basics to financial freedom. Each module is tied to a specific simulation mechanic.'}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {modules.map((m, i) => (
              <Reveal key={m.key} delay={i * 80}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft transition-[box-shadow,transform] duration-300 hover:shadow-[0_14px_40px_rgba(0,0,0,0.45)] hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-white/90">{m.title}</div>
                      <div className="mt-2 text-xs font-semibold text-indigo-200 ring-1 ring-indigo-300/20 bg-indigo-500/15 inline-flex rounded-full px-3 py-1">
                        Mechanic: {m.mechanic}
                      </div>
                    </div>
                    <div className="h-10 w-10 rounded-2xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-indigo-200 font-bold">
                      {m.key === 'survival' ? 'SF' : m.key === 'debt' ? 'DS' : m.key === 'budget' ? 'AR' : m.key === 'invest' ? 'IV' : m.key === 'guard' ? 'GD' : 'WT'}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Trust */}
        <section id="trust" className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <SectionTitle
              eyebrow="UX & Trust"
              title="Playing seriously"
              description="Financial topics demand transparency and respect. That's why the gamification is subtle: it encourages without manipulating."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <Reveal delay={0}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                  <h3 className="text-lg font-semibold tracking-tight">Trust Architecture</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Instead of dark patterns, FinQuest uses clear messaging, unobtrusive security indicators, and progressive disclosure of details.
                    This keeps learning engaging, not stressful.
                  </p>
                  <div className="mt-5 space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                      <div className="text-sm font-semibold">Progressive Disclosure</div>
                      <div className="mt-1 text-sm text-white/70">Dashboard overview + details in 1–2 clicks.</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                      <div className="text-sm font-semibold">Accessibility</div>
                      <div className="mt-1 text-sm text-white/70">Sufficient contrast, clear focus states, and comfortable navigation.</div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                  <h3 className="text-lg font-semibold tracking-tight">Ethical Gamification</h3>
                  <p className="mt-2 text-sm text-white/70">
                    Confetti and visual rewards are the "frame" for progress, but behavior is directed toward sustainable decisions.
                    Scenarios test your strategy (e.g., emergency fund), not your luck.
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                      <div className="text-xs font-semibold text-white/60">Reward</div>
                      <div className="mt-1 text-sm font-semibold text-emerald-200">for the right move</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                      <div className="text-xs font-semibold text-white/60">Lesson</div>
                      <div className="mt-1 text-sm font-semibold text-indigo-200">at the right moment</div>
                    </div>
                  </div>
                  <div className="mt-5 rounded-2xl bg-gradient-to-r from-indigo-500/15 via-cyan-400/10 to-fuchsia-500/10 p-4 ring-1 ring-white/10">
                    <div className="text-xs font-semibold text-white/60">Call to Action</div>
                    <div className="mt-1 text-sm text-white/80">
                      Want to see a prototype? Click "Explore Demo Vision" and browse the modules below.
                    </div>
                    <a href="#modules" className="mt-3 inline-flex items-center justify-center rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15 active:scale-[0.97] transition-all">
                      Go to Modules
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:pb-20">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Quick answers about the approach, simulations, and what you gain after training."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faq.map((item, idx) => (
              <Reveal key={item.q} delay={idx * 60}>
                <FAQItem
                  q={item.q}
                  a={item.a}
                  open={openFaqIndex === idx}
                  onToggle={() => setOpenFaqIndex((cur) => (cur === idx ? -1 : idx))}
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <Reveal>
                <div>
                  <div className="text-xs font-semibold text-indigo-200">FinQuest • Early Vision</div>
                  <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                    Be the first to see the quest in action.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/70">
                    Leave your email to get prototype access and updates. (This form is a demo.)
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                  <form
                    onSubmit={(e) => { e.preventDefault(); alert('Thank you! This is a demo form for the landing page.') }}
                    className="space-y-3"
                  >
                    <label className="block text-sm font-semibold text-white/90">
                      Email
                      <input
                        required
                        type="email"
                        placeholder="name@example.com"
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-indigo-300 transition-colors"
                      />
                    </label>
                    <button type="submit" className="w-full rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400 active:scale-[0.97] transition-all duration-200">
                      Sign Me Up for Prototype
                    </button>
                    <div className="text-xs text-white/60">
                      By clicking "Sign Me Up," you acknowledge this is a demonstration landing page.
                    </div>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <LogoMark />
              <div className="mt-3 text-sm text-white/65">
                Financial literacy turned into practice through RPG-inspired gamification.
              </div>
            </div>
            <div className="grid gap-2 text-sm text-white/70">
              <a className="hover:text-white transition-colors" href="#how-it-works">How It Works</a>
              <a className="hover:text-white transition-colors" href="#modules">Modules</a>
              <a className="hover:text-white transition-colors" href="#faq">FAQ</a>
              <a className="hover:text-white transition-colors" href="mailto:hello@finquest.app">Contact</a>
            </div>
          </div>
          <div className="mt-8 text-xs text-white/45">
            © {new Date().getFullYear()} FinQuest. Demo landing page.
          </div>
        </div>
      </footer>
    </div>
  )
}
