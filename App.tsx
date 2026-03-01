import { useState } from "react";

/* ───────── Icons as SVG components ───────── */
const IconHammer = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15.12 7.88c1.36-1.36 3.56-1.36 4.92 0l.5.5-7.42 7.42-.5-.5c-1.36-1.36-1.36-3.56 0-4.92l2.5-2.5z" />
    <path d="M12.62 10.38 3.5 19.5l1 1 9.12-9.12" />
  </svg>
);

// removed unused IconBricks

const IconPaint = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 3H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
    <path d="M12 11v4" />
    <path d="M10 15h4l-1 6h-2l-1-6z" />
  </svg>
);

const IconFloor = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="1" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="12" y1="2" x2="12" y2="12" />
    <line x1="7" y1="12" x2="7" y2="22" />
    <line x1="17" y1="12" x2="17" y2="22" />
  </svg>
);

const IconCeiling = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8l9-5 9 5" />
    <line x1="3" y1="8" x2="3" y2="20" />
    <line x1="21" y1="8" x2="21" y2="20" />
    <line x1="3" y1="20" x2="21" y2="20" />
    <circle cx="12" cy="13" r="2" />
    <line x1="12" y1="8" x2="12" y2="11" />
  </svg>
);

const IconElectric = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconRoof = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-6h6v6" />
  </svg>
);

const IconLandscape = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20" />
    <path d="M5 20c0-4 3-7 7-7s7 3 7 7" />
    <path d="M12 13V6" />
    <path d="M9 8c1-1 2-2 3-2s2 1 3 2" />
  </svg>
);

const IconWindow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="3" y1="12" x2="21" y2="12" />
  </svg>
);

const IconSpecial = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IconFurniture = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="8" width="18" height="8" rx="2" />
    <path d="M5 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
    <line x1="5" y1="16" x2="5" y2="20" />
    <line x1="19" y1="16" x2="19" y2="20" />
  </svg>
);

const IconDesign = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
);

const IconPackage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const IconUrgent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconTelegram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconRuler = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.59 11.59l-9.18-9.18a2 2 0 0 0-2.82 0L2.41 9.59a2 2 0 0 0 0 2.82l9.18 9.18a2 2 0 0 0 2.82 0l7.18-7.18a2 2 0 0 0 0-2.82z" />
    <line x1="7" y1="10" x2="10" y2="7" />
    <line x1="10" y1="13" x2="13" y2="10" />
    <line x1="13" y1="16" x2="16" y2="13" />
  </svg>
);

const IconContract = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const IconExp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const IconShield = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const IconClose = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconArrowDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 inline-block animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="7 13 12 18 17 13" />
    <line x1="12" y1="18" x2="12" y2="6" />
  </svg>
);

/* ───────── Data ───────── */
const services = [
  {
    icon: <IconHammer />,
    title: "Общестроительные работы",
    items: [
      "Демонтажные работы — полный демонтаж перегородок, покрытий, сантехники с вывозом мусора",
      "Черновые строительные работы — выравнивание стен, стяжка полов, гидроизоляция",
      "Возведение перегородок и облицовка — ГКЛ, блоки, кирпич",
    ],
  },
  {
    icon: <IconPaint />,
    title: "Отделочные работы",
    items: [
      "Финишная отделка «под ключ» — шпаклёвка, покраска, обои, декоративные штукатурки",
      "Капитальный ремонт интерьера — полный комплекс работ",
      "Косметический ремонт — локальная реставрация и мелкие работы",
    ],
  },
  {
    icon: <IconFloor />,
    title: "Полы и покрытия",
    items: [
      "Устройство стяжки и наливных полов с армированием",
      "Монтаж паркета, ламината, плитки, ПВХ-плитки",
    ],
  },
  {
    icon: <IconCeiling />,
    title: "Потолки и стены",
    items: [
      "Монтаж натяжных и подвесных потолков, многоуровневые конструкции",
      "Штукатурка и декоративная отделка стен",
    ],
  },
  {
    icon: <IconElectric />,
    title: "Инженерные системы",
    items: [
      "Электромонтажные работы — щитки, розетки, освещение",
      "Сантехнические работы — водопровод, канализация, смесители",
      "Отопление и тёплые полы",
      "Вентиляция и кондиционирование",
    ],
  },
  {
    icon: <IconRoof />,
    title: "Кровля и фасад",
    items: [
      "Кровельные работы — ремонт, замена, водосточные системы",
      "Фасадные работы и утепление",
    ],
  },
  {
    icon: <IconLandscape />,
    title: "Наружные и ландшафтные работы",
    items: [
      "Благоустройство участка и террас — плитка, козырьки, заборы",
      "Навесы, веранды, беседки, садовые постройки",
    ],
  },
  {
    icon: <IconWindow />,
    title: "Окна, двери и остекление",
    items: [
      "Замена и монтаж окон/балконов — ПВХ, алюминий, дерево",
      "Установка входных и межкомнатных дверей",
    ],
  },
  {
    icon: <IconSpecial />,
    title: "Специальные работы",
    items: [
      "Реставрация и ремонт после ЧП — пожар, залив, грибок",
      "Антисептическая обработка и защита от плесени",
      "Звуко- и теплоизоляция стен и потолков",
    ],
  },
  {
    icon: <IconFurniture />,
    title: "Столярные и мебельные услуги",
    items: [
      "Изготовление и установка мебели на заказ — кухни, шкафы, лестницы",
      "Ремонт лестниц и перил",
    ],
  },
  {
    icon: <IconDesign />,
    title: "Дизайн и проектирование",
    items: [
      "Архитектурное и интерьерное проектирование, 3D визуализация",
      "Авторский надзор и управление проектом",
    ],
  },
  {
    icon: <IconPackage />,
    title: "Услуги «под ключ» и пакеты",
    items: [
      "Ремонт под ключ — эконом / стандарт / премиум",
      "Комплексная реконструкция коттеджа",
    ],
  },
  {
    icon: <IconUrgent />,
    title: "Дополнительные сервисы",
    items: ["Срочные и аварийные выезды — оперативная помощь 24/7"],
  },
];

const advantages = [
  {
    icon: <IconRuler />,
    title: "Бесплатный замер",
    text: "Выезд специалиста и расчёт стоимости — бесплатно",
  },
  {
    icon: <IconContract />,
    title: "Работаем по договору",
    text: "Фиксированные цены, прозрачная смета и юридические гарантии",
  },
  {
    icon: <IconExp />,
    title: "Стаж 15 лет",
    text: "Сотни реализованных проектов по всей России",
  },
  {
    icon: <IconShield />,
    title: "Гарантия качества",
    text: "Гарантия на выполненные работы по договору",
  },
];

const portfolioItems = [
  { label: "Гостиная — до / после" },
  { label: "Кухня — до / после" },
  { label: "Санузел — до / после" },
  { label: "Спальня — до / после" },
];

/* ───────── Modal ───────── */
function Modal({
  open,
  onClose,
  title,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="bg-chocolate-900 border border-gold-500/30 rounded-2xl p-8 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gold-400 hover:text-gold-300 transition-colors"
        >
          <IconClose />
        </button>
        <h3 className="text-2xl font-bold text-gold-400 mb-6">{title}</h3>
        {submitted ? (
          <div className="text-center py-8">
            <div className="text-gold-400 mb-3 flex justify-center">
              <IconCheck />
            </div>
            <p className="text-chocolate-100 text-lg">
              Спасибо! Мы свяжемся с вами в ближайшее время.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Ваше имя"
              required
              className="w-full px-4 py-3 rounded-lg bg-chocolate-800 border border-chocolate-600 text-chocolate-50 placeholder:text-chocolate-400 focus:outline-none focus:border-gold-500 transition"
            />
            <input
              type="tel"
              placeholder="Ваш телефон"
              required
              className="w-full px-4 py-3 rounded-lg bg-chocolate-800 border border-chocolate-600 text-chocolate-50 placeholder:text-chocolate-400 focus:outline-none focus:border-gold-500 transition"
            />
            <button
              type="submit"
              className="w-full py-3 bg-gold-500 hover:bg-gold-600 text-chocolate-950 font-bold rounded-lg transition-colors text-lg"
            >
              Отправить заявку
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

/* ───────── Service Card (expandable) ───────── */
function ServiceCard({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-chocolate-800/60 border border-chocolate-700/50 rounded-2xl p-6 hover:border-gold-500/40 transition-all duration-300 cursor-pointer group"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start gap-4">
        <div className="text-gold-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-chocolate-50 group-hover:text-gold-300 transition-colors leading-snug">
            {title}
          </h3>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              open ? "max-h-96 mt-3 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-2">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="text-chocolate-200 text-sm leading-relaxed flex items-start gap-2"
                >
                  <span className="text-gold-500 mt-1 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-chocolate-400 text-xs mt-2">
            {open ? "Свернуть ↑" : "Подробнее ↓"}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ───────── Main App ───────── */
export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Заказать звонок");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const openModal = (title: string) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const navLinks = [
    { href: "#services", label: "Услуги" },
    { href: "#portfolio", label: "Портфолио" },
    { href: "#advantages", label: "Преимущества" },
    { href: "#contacts", label: "Контакты" },
  ];

  return (
    <div className="min-h-screen bg-chocolate-950 text-chocolate-100">
      {/* ── Header ── */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-chocolate-950/90 backdrop-blur-md border-b border-chocolate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg bg-gold-500 flex items-center justify-center text-chocolate-950 font-black text-sm">
              DLX
            </div>
            <span className="text-gold-400 font-bold text-lg hidden sm:block">
              DLX Ремонт
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-chocolate-200 hover:text-gold-400 transition-colors text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openModal("Заказать звонок")}
              className="hidden sm:block px-5 py-2 bg-gold-500 hover:bg-gold-600 text-chocolate-950 font-bold rounded-lg transition-colors text-sm"
            >
              Заказать звонок
            </button>
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden text-gold-400"
            >
              {mobileMenu ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenu && (
          <div className="md:hidden bg-chocolate-900 border-t border-chocolate-800 px-4 py-4 space-y-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenu(false)}
                className="block text-chocolate-200 hover:text-gold-400 transition-colors font-medium py-1"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenu(false);
                openModal("Заказать звонок");
              }}
              className="w-full mt-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-chocolate-950 font-bold rounded-lg transition-colors"
            >
              Заказать звонок
            </button>
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section className="relative pt-16 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,212,59,0.15) 35px, rgba(255,212,59,0.15) 36px)`,
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-medium">
            Ремонт от DLX Ремонт
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-chocolate-50 mb-6">
            Ремонт квартир
            <br />
            и домов{" "}
            <span className="text-gold-400 relative">
              под ключ
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gold-500/40 rounded-full" />
            </span>
          </h1>
          <p className="text-chocolate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Полный комплекс строительных и отделочных работ — от дизайн-проекта
            до финишной уборки. Гарантия качества, прозрачные цены, опыт 15 лет.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => openModal("Бесплатный замер")}
              className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-chocolate-950 font-bold rounded-xl transition-all text-lg shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-105"
            >
              Бесплатный замер
            </button>
            <a
              href="#services"
              className="px-8 py-4 border-2 border-chocolate-600 hover:border-gold-500/40 text-chocolate-200 hover:text-gold-400 font-semibold rounded-xl transition-all text-lg"
            >
              Наши услуги <IconArrowDown />
            </a>
          </div>
        </div>
        {/* Decorative gradient bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-chocolate-950 to-transparent" />
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gold-400 mb-4">
              Услуги и цены
            </h2>
            <p className="text-chocolate-300 text-lg max-w-xl mx-auto">
              Полный спектр строительных, отделочных и инженерных работ
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <ServiceCard key={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ── */}
      <section
        id="portfolio"
        className="py-20 sm:py-28 bg-chocolate-900/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gold-400 mb-4">
              Портфолио
            </h2>
            <p className="text-chocolate-300 text-lg">
              Примеры наших работ — до и после ремонта
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {portfolioItems.map((item, i) => (
              <div key={i} className="group relative">
                <div className="aspect-square rounded-2xl bg-chocolate-800 border border-chocolate-700/50 overflow-hidden flex items-center justify-center relative group-hover:border-gold-500/40 transition-all">
                  {/* Placeholder image pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `linear-gradient(135deg, rgba(255,212,59,0.08) 25%, transparent 25%), linear-gradient(225deg, rgba(255,212,59,0.08) 25%, transparent 25%), linear-gradient(45deg, rgba(255,212,59,0.08) 25%, transparent 25%), linear-gradient(315deg, rgba(255,212,59,0.08) 25%, transparent 25%)`,
                        backgroundSize: "40px 40px",
                        backgroundPosition:
                          "10px 0, 10px 0, 0 0, 0 0",
                      }}
                    />
                  </div>
                  <div className="text-center z-10 p-4">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-chocolate-700/60 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-chocolate-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <polyline points="21 15 16 10 5 21" />
                      </svg>
                    </div>
                    <span className="text-chocolate-400 text-sm font-medium">
                      Фото {i + 1}
                    </span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <span className="text-chocolate-200 font-semibold text-sm sm:text-base">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Advantages ── */}
      <section id="advantages" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gold-400 mb-4">
              Наши преимущества
            </h2>
            <p className="text-chocolate-300 text-lg">
              Почему клиенты выбирают DLX Ремонт
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((a, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-2xl bg-chocolate-800/40 border border-chocolate-700/40 hover:border-gold-500/30 transition-all group"
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500/20 group-hover:scale-110 transition-all">
                  {a.icon}
                </div>
                <h3 className="text-xl font-bold text-chocolate-50 mb-2">
                  {a.title}
                </h3>
                <p className="text-chocolate-300 text-sm leading-relaxed">
                  {a.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacts ── */}
      <section
        id="contacts"
        className="py-20 sm:py-28 bg-chocolate-900/40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gold-400 mb-4">
              Контакты
            </h2>
            <p className="text-chocolate-300 text-lg">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Contact info */}
            <div className="space-y-8">
              <a
                href="tel:+79999999999"
                className="flex items-center gap-5 p-6 rounded-2xl bg-chocolate-800/50 border border-chocolate-700/40 hover:border-gold-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500/20 transition shrink-0">
                  <IconPhone />
                </div>
                <div>
                  <div className="text-chocolate-400 text-sm mb-1">
                    Телефон
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-chocolate-50">
                    +7 999 999-99-99
                  </div>
                </div>
              </a>

              <a
                href="https://t.me/+79999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-6 rounded-2xl bg-chocolate-800/50 border border-chocolate-700/40 hover:border-gold-500/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500/20 transition shrink-0">
                  <IconTelegram />
                </div>
                <div>
                  <div className="text-chocolate-400 text-sm mb-1">
                    Telegram
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-chocolate-50">
                    +7 999 999-99-99
                  </div>
                </div>
              </a>

              <div className="p-6 rounded-2xl bg-gold-500/5 border border-gold-500/20">
                <p className="text-gold-300 font-medium text-center text-lg">
                  ⏰ Работаем ежедневно с 8:00 до 21:00
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="p-8 rounded-2xl bg-chocolate-800/50 border border-chocolate-700/40">
              <h3 className="text-2xl font-bold text-chocolate-50 mb-6">
                Оставить заявку
              </h3>
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="text-gold-400 mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center">
                      <IconCheck />
                    </div>
                  </div>
                  <p className="text-chocolate-100 text-xl font-semibold mb-2">
                    Заявка отправлена!
                  </p>
                  <p className="text-chocolate-300">
                    Мы перезвоним в течение 15 минут
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div>
                    <label className="text-chocolate-300 text-sm mb-2 block">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3.5 rounded-xl bg-chocolate-900 border border-chocolate-700 text-chocolate-50 placeholder:text-chocolate-500 focus:outline-none focus:border-gold-500 transition text-lg"
                    />
                  </div>
                  <div>
                    <label className="text-chocolate-300 text-sm mb-2 block">
                      Ваш телефон
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-3.5 rounded-xl bg-chocolate-900 border border-chocolate-700 text-chocolate-50 placeholder:text-chocolate-500 focus:outline-none focus:border-gold-500 transition text-lg"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-chocolate-950 font-bold rounded-xl transition-all text-lg shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-[1.02]"
                  >
                    Отправить заявку
                  </button>
                  <p className="text-chocolate-500 text-xs text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных
                    данных
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-chocolate-800/60 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-gold-500 flex items-center justify-center text-chocolate-950 font-black text-[10px]">
              DLX
            </div>
            <span className="text-chocolate-400 text-sm">
              © {new Date().getFullYear()} DLX Ремонт. Все права защищены.
            </span>
          </div>
          <a
            href="tel:+79999999999"
            className="text-chocolate-300 hover:text-gold-400 transition-colors text-sm"
          >
            +7 999 999-99-99
          </a>
        </div>
      </footer>

      {/* ── Floating CTA (mobile) ── */}
      <div className="fixed bottom-5 right-5 sm:hidden z-30">
        <button
          onClick={() => openModal("Заказать звонок")}
          className="w-14 h-14 rounded-full bg-gold-500 shadow-lg shadow-gold-500/30 flex items-center justify-center text-chocolate-950 hover:bg-gold-600 transition-all active:scale-95"
        >
          <IconPhone />
        </button>
      </div>

      {/* ── Modal ── */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      />
    </div>
  );
}
