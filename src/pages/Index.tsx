import { useMemo, useState, type ReactNode } from 'react'

function LogoMark() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow-soft">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2.5c3.6 0 7 2.2 7 6 0 3.6-2.8 5.6-7 12.9C7.8 14.1 5 12 5 8.5c0-3.8 3.4-6 7-6Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9.2 9.1c.8-1 2-1.6 3.4-1.6 1.3 0 2.4.5 3.2 1.4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M9 13.1c.9.8 2.1 1.3 3.4 1.3 1.4 0 2.6-.6 3.4-1.4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-tight">FinQuest</div>
        <div className="text-[12px] text-white/60">FinTech x EdTech RPG</div>
      </div>
    </div>
  )
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? <div className="text-xs font-semibold text-indigo-300">{eyebrow}</div> : null}
      <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-pretty text-white/70">{description}</p> : null}
    </div>
  )
}

function Icon({ name }: { name: 'spark' | 'brain' | 'shield' | 'map' | 'coin' | 'users' }) {
  if (name === 'spark') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-indigo-200">
        <path d="M12 2l1.2 5.2L18 9l-4.8 1.8L12 16l-1.2-5.2L6 9l4.8-1.8L12 2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 13l.8 2.8L23 17l-2.2.8L20 21l-.8-3.2L17 17l2.2-1.2L20 13Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12l.9 2.4L7 15l-2.1.6L4 18l-.9-2.4L1 15l2.1-.6L4 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (name === 'brain') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-indigo-200">
        <path d="M9 4a3 3 0 0 0-3 3v1a2 2 0 0 0 0 4v1a3 3 0 0 0 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 4a3 3 0 0 1 3 3v1a2 2 0 0 1 0 4v1a3 3 0 0 1-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 4c0 1.2.7 2 3 2s3-.8 3-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (name === 'map') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-indigo-200">
        <path d="M10 6 4 9v12l6-3 4 3 6-3V6l-6 3-4-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 6v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 9v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (name === 'coin') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-indigo-200">
        <path d="M12 3c5 0 9 2 9 4s-4 4-9 4-9-2-9-4 4-4 9-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 7v10c0 2-4 4-9 4s-9-2-9-4V7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.5 12.5c1.2 1 2.8 1.5 4.5 1.5s3.3-.5 4.5-1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (name === 'users') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-indigo-200">
        <path d="M16 20v-2c0-1.1-1-2-2.2-2H10.2C9 16 8 16.9 8 18v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 20v-2c0-1-1-1.8-2.1-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.5 4.7a4 4 0 0 1 0 7.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  // shield
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-indigo-200">
      <path d="M12 2 20 6v7c0 5-3.5 9-8 9s-8-4-8-9V6l8-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.5 12.3 11.3 14l3.5-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function StatPill({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
      <div className="text-xl font-semibold tracking-tight">{value}</div>
      <div className="mt-1 text-xs text-white/70">{label}</div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon?: ReactNode
  title: string
  description: string
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
      {icon ? <div className="h-10 w-10 rounded-2xl bg-indigo-500/15 ring-1 ring-indigo-300/20 flex items-center justify-center">{icon}</div> : null}
      <h3 className="mt-4 text-lg font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
    </div>
  )
}

function FAQItem({
  q,
  a,
  open,
  onToggle,
}: {
  q: string
  a: string
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
      <button type="button" className="w-full p-5 text-left" onClick={onToggle} aria-expanded={open}>
        <div className="flex items-start justify-between gap-4">
          <div className="text-[15px] font-semibold tracking-tight">{q}</div>
          <div className="mt-0.5 text-indigo-200">{open ? '–' : '+'}</div>
        </div>
      </button>
      {open ? <div className="px-5 pb-5 text-sm text-white/70">{a}</div> : null}
    </div>
  )
}

export default function Index() {
  const nav = useMemo(
    () => [
      { label: 'Как работи', href: '#how-it-works' },
      { label: 'Модули', href: '#modules' },
      { label: 'UX & доверие', href: '#trust' },
      { label: 'FAQ', href: '#faq' },
    ],
    [],
  )

  const features = useMemo(
    () => [
      { icon: <Icon name="brain" />, title: 'Психология, не "точки"', description: 'Геймификация, водена от самоопределение: автономия, компетентност и свързаност – с обратна връзка в точния момент.' },
      { icon: <Icon name="spark" />, title: 'Незабавна награда', description: 'Прогресът се вижда веднага: визуални сигнали за действията ти и обучение, което "влиза" когато имаш нужда.' },
      { icon: <Icon name="map" />, title: 'Скелето на сложността', description: 'Разбиваме финансовите концепции на малки, постижими цели, които се надграждат към "финансова свобода".' },
      { icon: <Icon name="users" />, title: 'Общност по цели', description: 'Кланове (guilds) и съвместни мисии, които мотивират без да създават токсично сравнение.' },
      { icon: <Icon name="coin" />, title: 'Симулация с причина', description: 'Демонстрираме ефекта от решенията (като "лихва", "дълг" и "паричен поток") чрез интерактивни сценарии.' },
      { icon: <Icon name="shield" />, title: 'Доверие и сигурност', description: 'Проектиранo с прозрачност: ясни съобщения, достъпност и UX, който уважава сериозността на финансите.' },
    ],
    [],
  )

  const steps = useMemo(
    () => [
      { title: 'Onboarding & "Дигитален близнак"', description: 'Кратък оценъчен тест определя стартовото ниво и настройва трудността на симулацията.' },
      { title: 'Команден център', description: 'Daily quests + "Health Bar" за прогрес към финансовото ти благосъстояние.' },
      { title: 'Simulation Arena (Core Loop)', description: 'Виртуално време, бюджетиране чрез drag-and-drop и "жизнени" решения с реалистични последствия.' },
      { title: 'Academy: Just-in-Time обучение', description: 'Когато играта те "срещне", веднага ти показва урок, който решава конкретния проблем.' },
      { title: 'Social Hub', description: 'Кланове, които тренират навици заедно – с предизвикателства, ориентирани към устойчив прогрес.' },
    ],
    [],
  )

  const modules = useMemo(
    () => [
      { key: 'survival', title: '1. Основи на оцеляването', mechanic: '30-дневен детокс', desc: 'Приходи/разходи, нужди срещу желания и авариен фонд.' },
      { key: 'debt', title: '2. Debt Slayer', mechanic: 'Лавина срещу "снежна топка"', desc: 'Видове дълг, лихви и стратегии за излизане.' },
      { key: 'budget', title: '3. Бюджетиране и планиране', mechanic: 'Построй бюджета си', desc: '50/30/20, прогнозиране на паричните потоци и сценарии.' },
      { key: 'invest', title: '4. Инвестиране 101', mechanic: 'Портфолио с учебна симулация', desc: 'Риск, възвръщаемост и сложна лихва без реален пазарен риск.' },
      { key: 'guard', title: '5. Защита и сигурност', mechanic: 'Scenario Quests', desc: 'Разпознаване на измами, застраховане и кибер хигиена.' },
      { key: 'wealth', title: '6. Финансова свобода', mechanic: 'Fast Track режим', desc: 'Пасивни доходи, FIRE, данъчно планиране и недвижими имоти.' },
    ],
    [],
  )

  const faq = useMemo(
    () => [
      { q: 'Точки и класации ли са основата?', a: 'Не. Точките са само "визуална осветеност" на прогреса. В центъра е мотивацията (автономия/компетентност/свързаност) и обучение, което те води да вземаш по-добри решения.' },
      { q: 'Това игра за хазарт ли е?', a: 'Симулациите са учебни: резултатите следват логиката на решенията ти (риск/доходност/ресурси), а не RNG, който наказва или "случайно" награждава.' },
      { q: 'Колко време трябват ми?', a: 'Дизайнът е за микро-уроци и "сесии" около 5–10 минути. Всяка сесия завършва с конкретен напредък и лесен следващ ход.' },
      { q: 'Има ли достъпност и уважение към потребителя?', a: 'Да. Доверие означава ясни съобщения, достъпни интерфейси и UX без "тъмни модели". Стремим се към сериозен, но ангажиращ дизайн.' },
      { q: 'Какво получавам реално след обучение?', a: 'Не само знания, а навици: по-добро бюджетиране, устойчиви решения и прогрес към финансови цели, измерим чрез "Financial Wellness Score".' },
    ],
    [],
  )

  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-slate-900"
      >
        Към съдържанието
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="rounded-xl p-1 hover:bg-white/5" aria-label="FinQuest">
            <LogoMark />
          </a>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Навигация">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-white/70 hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? 'Затвори' : 'Меню'}
          </button>
        </div>

        {mobileOpen ? (
          <div className="md:hidden">
            <div className="mx-auto max-w-6xl px-4 pb-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </header>

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
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/80">
                  <span className="inline-block h-2 w-2 rounded-full bg-indigo-300" />
                  Стратегически анализ на геймификацията за обучение по финанси
                </div>

                <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
                  Финансовата грамотност като епична мисия.
                </h1>
                <p className="mt-4 text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
                  FinQuest комбинира RPG симулация (вдъхновена от Cashflow) с геймификация, водена от психология:
                  автономия, компетентност и свързаност. Целта не е "игра за точки", а устойчиви финансови навици.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#modules"
                    className="inline-flex items-center justify-center rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-indigo-400 active:scale-[0.97] transition-all"
                  >
                    Започни демо визия
                  </a>
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 active:scale-[0.97] transition-all"
                  >
                    Виж как работи
                  </a>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  <StatPill value="5–10 мин" label="сесии за микро-уроци" />
                  <StatPill value="Just-in-Time" label="обучение при нужда" />
                  <StatPill value="Нe RNG" label="учебни сценарии по логика" />
                </div>
              </div>

              {/* Command Center Mock */}
              <div className="relative">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-soft">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-white/60">Команден център</div>
                      <div className="mt-1 text-lg font-semibold">North Star: "Купуване на дом"</div>
                    </div>
                    <div className="rounded-2xl bg-indigo-500/15 px-3 py-2 text-xs font-semibold text-indigo-200 ring-1 ring-indigo-300/20">
                      Финансова готовност: 72%
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold">Daily Quest #1</div>
                          <div className="text-xs text-white/60">Разпознай лихвата в "сложна лихва"</div>
                        </div>
                        <div className="rounded-xl bg-emerald-500/15 px-3 py-2 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-300/20">
                          Готово
                        </div>
                      </div>
                      <div className="mt-3 h-2 w-full rounded-full bg-white/10">
                        <div className="h-2 w-[70%] rounded-full bg-indigo-400" />
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                        <div className="text-xs font-semibold text-white/60">Следваща мисия</div>
                        <div className="mt-1 text-sm font-semibold">Избери "Лавина"</div>
                        <div className="mt-2 text-xs text-white/60">за по-бързо изчистване на дълга</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                        <div className="text-xs font-semibold text-white/60">Съвет</div>
                        <div className="mt-1 text-sm font-semibold">Just-in-Time урок</div>
                        <div className="mt-2 text-xs text-white/60">където рискът е най-важен</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl bg-gradient-to-r from-indigo-500/15 via-cyan-400/10 to-fuchsia-500/10 p-4 ring-1 ring-white/10">
                    <div className="text-xs font-semibold text-white/60">Защо това работи</div>
                    <div className="mt-1 text-sm text-white/80">
                      Когато прогресът е видим веднага, компетентността расте, автономията остава твоят избор, а
                      общността те държи мотивиран.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-4 sm:pb-20">
          <SectionTitle
            eyebrow="FinQuest в 60 секунди"
            title="Система за обучение, която изгражда навици"
            description={'Не просто "прочети и запомни", а практикувай решения в симулация, виж последствията и получи урок в момента.'}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-t border-white/10 bg-white/0">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <SectionTitle
              eyebrow="Core Loop"
              title="Как минава една мисия"
              description="Примерен поток: от onboarding до симулация, академия и социална подкрепа."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-5">
              {steps.map((s, idx) => (
                <div key={s.title} className="lg:col-span-1 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="text-xs font-bold tracking-wide text-indigo-200 ring-1 ring-indigo-300/20 bg-indigo-500/15 px-3 py-1 rounded-full">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="mt-4 text-lg font-semibold tracking-tight">{s.title}</div>
                  <div className="mt-2 text-sm text-white/70">{s.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modules */}
        <section id="modules" className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:pb-20">
          <SectionTitle
            eyebrow="Academy Modules"
            title="Учебна програма като карта на знанието"
            description="Шест "света" от основи до финансова свобода. Всеки модул е прикрепен към конкретна механика в симулацията."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {modules.map((m) => (
              <div key={m.key} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-white/90">{m.title}</div>
                    <div className="mt-2 text-xs font-semibold text-indigo-200 ring-1 ring-indigo-300/20 bg-indigo-500/15 inline-flex rounded-full px-3 py-1">
                      Механика: {m.mechanic}
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-2xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-indigo-200 font-bold">
                    {m.key === 'survival' ? 'SF' : m.key === 'debt' ? 'DS' : m.key === 'budget' ? 'AR' : m.key === 'invest' ? 'IV' : m.key === 'guard' ? 'GD' : 'WT'}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust */}
        <section id="trust" className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <SectionTitle
              eyebrow="UX & доверие"
              title="Играем сериозно"
              description="Финансовите теми изискват прозрачност и уважение. Затова геймификацията е фина: насърчава, без да манипулира."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                <h3 className="text-lg font-semibold tracking-tight">Trust Architecture</h3>
                <p className="mt-2 text-sm text-white/70">
                  Вместо "тъмни модели", FinQuest използва ясни съобщения, ненатрапчиви индикатори за сигурност и прогресивно разкриване на детайли.
                  Така обучението остава ангажиращо, а не стресиращо.
                </p>
                <div className="mt-5 space-y-3">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                    <div className="text-sm font-semibold">Progressive Disclosure</div>
                    <div className="mt-1 text-sm text-white/70">Начално табло + детайли в 1–2 клика.</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                    <div className="text-sm font-semibold">Accessibility</div>
                    <div className="mt-1 text-sm text-white/70">Достатъчен контраст, ясни focus states и удобна навигация.</div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                <h3 className="text-lg font-semibold tracking-tight">Етична геймификация</h3>
                <p className="mt-2 text-sm text-white/70">
                  Конфетите и визуалните награди са "рамка" за прогрес, но поведението се насочва към устойчиви решения.
                  Сценариите тестват стратегията ти (например авариен фонд), а не късмета.
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                    <div className="text-xs font-semibold text-white/60">Награда</div>
                    <div className="mt-1 text-sm font-semibold text-emerald-200">за правилния ход</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                    <div className="text-xs font-semibold text-white/60">Урок</div>
                    <div className="mt-1 text-sm font-semibold text-indigo-200">в точния момент</div>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl bg-gradient-to-r from-indigo-500/15 via-cyan-400/10 to-fuchsia-500/10 p-4 ring-1 ring-white/10">
                  <div className="text-xs font-semibold text-white/60">Призив</div>
                  <div className="mt-1 text-sm text-white/80">
                    Искаш да видиш прототип? Натисни "Започни демо визия" и разгледай модулите по-долу.
                  </div>
                  <a
                    href="#modules"
                    className="mt-3 inline-flex items-center justify-center rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/15"
                  >
                    Към модулите
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:pb-20">
          <SectionTitle
            eyebrow="FAQ"
            title="Често задавани въпроси"
            description="Кратки отговори за подхода, симулациите и това, което получаваш след обучението."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faq.map((item, idx) => (
              <FAQItem
                key={item.q}
                q={item.q}
                a={item.a}
                open={openFaqIndex === idx}
                onToggle={() => setOpenFaqIndex((cur) => (cur === idx ? -1 : idx))}
              />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="text-xs font-semibold text-indigo-200">FinQuest • Early Vision</div>
                <h2 className="mt-2 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Бъди първият, който ще види "мисията" в действие.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Остави имейл, за да получиш прототипен достъп и updates. (Формата тук е демо.)
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-soft">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    alert('Благодарим! Това е демо форма за landing page.')
                  }}
                  className="space-y-3"
                >
                  <label className="block text-sm font-semibold text-white/90">
                    Имейл
                    <input
                      required
                      type="email"
                      placeholder="name@example.com"
                      className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-indigo-300"
                    />
                  </label>
                  <button
                    type="submit"
                    className="w-full rounded-2xl bg-indigo-500 px-5 py-3 text-sm font-semibold text-white hover:bg-indigo-400 active:scale-[0.97] transition-all"
                  >
                    Запиши ме за прототип
                  </button>
                  <div className="text-xs text-white/60">
                    Като натиснеш "Запиши ме", приемаш че това е демонстрационна landing страница.
                  </div>
                </form>
              </div>
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
                Финансовата грамотност, превърната в практика чрез геймификация, вдъхновена от RPG.
              </div>
            </div>
            <div className="grid gap-2 text-sm text-white/70">
              <a className="hover:text-white" href="#how-it-works">Как работи</a>
              <a className="hover:text-white" href="#modules">Модули</a>
              <a className="hover:text-white" href="#faq">FAQ</a>
              <a className="hover:text-white" href="mailto:hello@finquest.app">Контакт</a>
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
