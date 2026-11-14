import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownLeft,
  ArrowUpLeft,
  ArrowUpRight,
  Menu,
  X,
  MessageCircle,
  Sparkles,
  Gem,
  PenTool,
  Check,
  Upload,
  Plus,
  Globe as Globe2,
  Mail,
} from 'lucide-react';
import './styles.css';

const WHATSAPP_NUMBER = '966560080038';
const INSTAGRAM_URL = 'https://www.instagram.com/saeed_alshathly';
const EMAIL_ADDRESS = 'saeedgold@gmail.com';

const copy = {
  ar: {
    navShop: 'التصميم حسب الطلب',
    navStory: 'عن Saeed Gold',
    navContact: 'تواصل معنا',
    heroTitle: 'حيث تتحول الأحلام \n إلى مجوهرات',
    heroText: 'نحوّل أفكارك وتفاصيلك الخاصة إلى مجوهرات مصممة لك وحدك.',
    start: 'ابدأ تصميم قطعتك',
    explore: 'اكتشف الفكرة',
    note: 'كل قطعة تبدأ بفكرة… وتنتهي بذكرى.',
    sectionEyebrow: 'DESIGNED AROUND YOU',
    sectionTitle: 'ليست قطعة جاهزة.\nإنها قصتك.',
    sectionText:
      'سواء كانت فكرة في بالك، صورة ألهمتك، أو قطعة تحمل معنى خاصًا؛ نساعدك على تحويلها إلى تصميم يناسب ذوقك.',
    categoriesTitle: 'ماذا تريد أن تصمّم؟',
    categoriesText: 'اختر نوع القطعة، ثم أخبرنا بالتفاصيل التي تجعلها لك.',
    ring: 'خواتم',
    necklace: 'سلاسل',
    bracelet: 'أساور',
    other: 'تصميم آخر',
    formEyebrow: 'YOUR CUSTOM PIECE',
    formTitle: 'ابدأ طلب التصميم',
    formText:
      'املأ التفاصيل الأساسية. سنراجع طلبك ونتواصل معك لتأكيد المواصفات والسعر النهائي.',
    fieldName: 'الاسم',
    namePlaceholder: 'اكتب اسمك',
    fieldPhone: 'رقم الجوال / واتساب',
    phonePlaceholder: '05xxxxxxxx',
    fieldType: 'نوع القطعة',
    fieldGold: 'لون الذهب',
    yellow: 'أصفر',
    white: 'أبيض',
    rose: 'وردي',
    fieldKarat: 'العيار',
    fieldBudget: 'الميزانية التقريبية',
    budget1: 'أقل من 1,000 ريال',
    budget2: '1,000 – 3,000 ريال',
    budget3: '3,000 – 5,000 ريال',
    budget4: 'أكثر من 5,000 ريال',
    budget5: 'حسب التصميم',
    fieldDetails: 'صف فكرتك',
    detailsPlaceholder: 'مثال: خاتم ناعم بواجهة بيضاوية ونقش حرف...',
    fieldImage: 'صورة مرجعية (اختياري)',
    uploadText: 'ارفع صورة أو اسحبها هنا',
    uploadHint: 'PNG أو JPG — حتى 8MB',
    submit: 'إرسال الطلب عبر واتساب',
    privacy:
      'إرسال الطلب لا يعني تأكيد السعر أو بدء التصنيع. يتم اعتماد التفاصيل والتكلفة معك أولًا.',
    aboutEyebrow: 'THE ART OF PERSONAL',
    aboutTitle: 'تفاصيل تشبهك.',
    aboutText:
      'في Saeed Gold، نؤمن أن المجوهرات الأجمل هي التي تحمل معنى لصاحبها. نعمل على تنفيذ التصاميم الخاصة وفق التفاصيل والميزانية المتفق عليها.',
    ctaTitle: 'لديك فكرة مختلفة؟',
    ctaText: 'حتى لو كانت مجرد رسم أو صورة، أرسلها لنا ولنبدأ الحديث.',
    ctaButton: 'تحدث معنا',
    footerLine: 'مجوهرات حسب الطلب، صُممت لتكون لك.',
    footerRights: 'جميع الحقوق محفوظة',
    required: 'يرجى تعبئة الاسم ورقم الجوال ووصف التصميم.',
    imageTooLarge: 'حجم الصورة يتجاوز 8MB.',
    imageType: 'يرجى اختيار صورة بصيغة PNG أو JPG.',
    menuOpen: 'فتح القائمة',
    menuClose: 'إغلاق القائمة',
    removeImage: 'حذف الصورة',
  },
  en: {
    navShop: 'Custom Design',
    navStory: 'Our Story',
    navContact: 'Contact',
    heroTitle: 'Where dreams,\nTurn into jewelry.',
    heroText:
      'We turn your ideas and personal details into jewelry designed just for you.',
    start: 'Create your piece',
    explore: 'Explore the idea',
    note: 'Every piece begins with an idea — and becomes a memory.',
    sectionEyebrow: 'DESIGNED AROUND YOU',
    sectionTitle: 'Not off the shelf.\nA story of your own.',
    sectionText:
      "A thought, a reference image, or a piece with a special meaning — let's turn it into a design that feels like you.",
    categoriesTitle: 'What would you like to create?',
    categoriesText: 'Choose a piece, then tell us what makes it yours.',
    ring: 'Rings',
    necklace: 'Necklaces',
    bracelet: 'Bracelets',
    other: 'Something else',
    formEyebrow: 'YOUR CUSTOM PIECE',
    formTitle: 'Start a design request',
    formText:
      "Share the essentials. We'll review your request and contact you to confirm specifications and final pricing.",
    fieldName: 'Name',
    namePlaceholder: 'Your name',
    fieldPhone: 'Mobile / WhatsApp',
    phonePlaceholder: '+966 5xxxxxxxx',
    fieldType: 'Piece type',
    fieldGold: 'Gold color',
    yellow: 'Yellow',
    white: 'White',
    rose: 'Rose',
    fieldKarat: 'Karat',
    fieldBudget: 'Approximate budget',
    budget1: 'Under SAR 1,000',
    budget2: 'SAR 1,000–3,000',
    budget3: 'SAR 3,000–5,000',
    budget4: 'Over SAR 5,000',
    budget5: 'To be discussed',
    fieldDetails: 'Tell us about your idea',
    detailsPlaceholder:
      'Example: a delicate ring with an oval top and an engraved initial...',
    fieldImage: 'Reference image (optional)',
    uploadText: 'Upload an image or drop it here',
    uploadHint: 'PNG or JPG — up to 8MB',
    submit: 'Send request via WhatsApp',
    privacy:
      'Submitting a request does not confirm pricing or start production. Details and cost are agreed with you first.',
    aboutEyebrow: 'THE ART OF PERSONAL',
    aboutTitle: 'Details that feel like you.',
    aboutText:
      'At Saeed Gold, we believe the most meaningful jewelry tells a personal story. We create custom pieces based on the details and budget agreed with you.',
    ctaTitle: 'Have an idea of your own?',
    ctaText: 'Even a sketch or reference image is a great place to start.',
    ctaButton: 'Talk to us',
    footerLine: 'Custom jewelry, made personal.',
    footerRights: 'All rights reserved',
    required: 'Please add your name, mobile number, and design description.',
    imageTooLarge: 'Image must be smaller than 8MB.',
    imageType: 'Please choose a PNG or JPG image.',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    removeImage: 'Remove image',
  },
};

const categories = [
  { id: 'ring', image: '/ring.jpg' },
  { id: 'necklace', image: '/necklace.jpg' },
  { id: 'bracelet', image: '/bracelet.jpg' },
];

function App() {
  const [lang, setLang] = useState('ar');
  const [menuOpen, setMenuOpen] = useState(false);
  const [piece, setPiece] = useState('ring');
  const [gold, setGold] = useState('yellow');
  const [karat, setKarat] = useState('21');
  const [budget, setBudget] = useState('budget2');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const t = copy[lang];
  const isAr = lang === 'ar';

  const scrollToForm = () => {
    document
      .getElementById('custom-request')
      ?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const selectCategory = (id) => {
    setPiece(id);
    scrollToForm();
  };

  const onImage = (file) => {
    if (!file) return;
    if (!['image/jpeg', 'image/png'].includes(file.type))
      return setError(t.imageType);
    if (file.size > 8 * 1024 * 1024) return setError(t.imageTooLarge);
    setError('');
    const reader = new FileReader();
    reader.onload = () => setImage({ name: file.name, data: reader.result });
    reader.readAsDataURL(file);
  };

  const sendRequest = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !details.trim())
      return setError(t.required);
    setError('');
    const msg = [
      'طلب تصميم جديد — Saeed Gold',
      `الاسم: ${name}`,
      `الجوال: ${phone}`,
      `نوع القطعة: ${t[piece] || piece}`,
      `لون الذهب: ${t[gold]}`,
      `العيار: ${karat}`,
      `الميزانية: ${t[budget]}`,
      `التفاصيل: ${details}`,
      image ? `الصورة المرجعية: ${image.name} (يرجى إرفاقها في المحادثة)` : '',
    ]
      .filter(Boolean)
      .join('\n');
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      msg
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const navItems = [
    { label: t.navShop, href: '#custom-request' },
    { label: t.navStory, href: '#about' },
    { label: t.navContact, href: '#contact' },
  ];

  return (
    <div className={isAr ? 'app rtl' : 'app ltr'} dir={isAr ? 'rtl' : 'ltr'}>
      <header className="header">
        <a className="brand" href="#top" aria-label="Saeed Gold home">
          <img className="logo-img" src="/logo-s.svg" alt="Saeed Gold" />
        </a>
        <nav className="desktop-nav">
          {navItems.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="lang-btn"
            onClick={() => setLang(isAr ? 'en' : 'ar')}
            aria-label="Change language"
          >
            <Globe2 size={16} />
            <span>{isAr ? 'EN' : 'عربي'}</span>
          </button>
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t.menuClose : t.menuOpen}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>
                {n.label}
              </a>
            ))}
            <button onClick={() => setLang(isAr ? 'en' : 'ar')}>
              {isAr ? 'English' : 'العربية'}
            </button>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="eyebrow-line" />
              {t.heroEyebrow}
            </span>
            <h1>{t.heroTitle}</h1>
            <p>{t.heroText}</p>
            <div className="hero-actions">
              <button className="btn btn-dark" onClick={scrollToForm}>
                {t.start} <ArrowUpLeft size={17} />
              </button>
              <a className="text-link" href="#categories">
                {t.explore} <ArrowDownLeft size={16} />
              </a>
            </div>
            <div className="hero-note">
              <Sparkles size={15} />
              {t.note}
            </div>
          </div>
          <div className="hero-visual">
            <img src="/hero.jpg" alt="Saeed Gold jewelry" />
            <div className="image-caption">
              <span>SG / 001</span>
              <span>ONE OF A KIND</span>
            </div>
          </div>
          <span className="hero-index">01 — 04</span>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="intro-image">
            <img
              src="/about.jpg"
              alt="Saeed Gold craftsmanship"
              loading="lazy"
            />
          </div>
          <div className="intro-copy">
            <span className="eyebrow">{t.sectionEyebrow}</span>
            <h2>{t.sectionTitle}</h2>
            <p>{t.sectionText}</p>
            <div className="signature">
              <span>SAEED GOLD</span>
              <i />
            </div>
          </div>
        </section>

        <section className="categories section-wrap" id="categories">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE CUSTOM COLLECTION</span>
              <h2>{t.categoriesTitle}</h2>
            </div>
            <p>{t.categoriesText}</p>
          </div>
          <div className="category-grid">
            {categories.map((c, i) => (
              <button
                className={`category-card ${piece === c.id ? 'selected' : ''}`}
                key={c.id}
                onClick={() => selectCategory(c.id)}
              >
                <div className="category-photo">
                  <img src={c.image} alt={t[c.id]} loading="lazy" />
                  <span className="category-number">0{i + 1}</span>
                  <span className="category-arrow">
                    <ArrowUpLeft size={18} />
                  </span>
                </div>
                <div className="category-label">
                  <span>{t[c.id]}</span>
                  <span>+</span>
                </div>
              </button>
            ))}
            <button
              className={`other-category ${
                piece === 'other' ? 'selected' : ''
              }`}
              onClick={() => selectCategory('other')}
            >
              <Plus size={25} />
              <span>{t.other}</span>
              <small>MAKE IT YOURS</small>
            </button>
          </div>
        </section>

        <section className="statement">
          <div className="statement-mark">
            <Gem size={28} />
          </div>
          <span className="eyebrow">{t.aboutEyebrow}</span>
          <h2>{t.aboutTitle}</h2>
          <p>{t.aboutText}</p>
        </section>

        <section className="request section-wrap" id="custom-request">
          <div className="request-heading">
            <span className="eyebrow">{t.formEyebrow}</span>
            <h2>{t.formTitle}</h2>
            <p>{t.formText}</p>
            <div className="request-aside">
              <PenTool size={18} />
              <span>PERSONAL DESIGN SERVICE</span>
            </div>
          </div>
          <form className="request-form" onSubmit={sendRequest}>
            <div className="form-row">
              <label>
                {t.fieldName}
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  required
                />
              </label>
              <label>
                {t.fieldPhone}
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t.phonePlaceholder}
                  inputMode="tel"
                  required
                />
              </label>
            </div>
            <label>
              {t.fieldType}
              <select value={piece} onChange={(e) => setPiece(e.target.value)}>
                {['ring', 'necklace', 'bracelet', 'other'].map((x) => (
                  <option value={x} key={x}>
                    {t[x]}
                  </option>
                ))}
              </select>
            </label>
            <div className="form-row">
              <fieldset>
                <legend>{t.fieldGold}</legend>
                <div className="choice-row">
                  {[
                    ['yellow', '#C8A45C'],
                    ['white', '#C9C9C4'],
                    ['rose', '#C98E82'],
                  ].map(([v, color]) => (
                    <button
                      type="button"
                      key={v}
                      className={`color-choice ${gold === v ? 'active' : ''}`}
                      onClick={() => setGold(v)}
                    >
                      <i style={{ background: color }} />
                      {t[v]}
                    </button>
                  ))}
                </div>
              </fieldset>
              <label>
                {t.fieldKarat}
                <select
                  value={karat}
                  onChange={(e) => setKarat(e.target.value)}
                >
                  {['18', '21'].map((k) => (
                    <option key={k} value={k}>
                      {k}K
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              {t.fieldBudget}
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                {['budget1', 'budget2', 'budget3', 'budget4', 'budget5'].map(
                  (b) => (
                    <option key={b} value={b}>
                      {t[b]}
                    </option>
                  )
                )}
              </select>
            </label>
            <label>
              {t.fieldDetails}
              <textarea
                rows="4"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={t.detailsPlaceholder}
                required
              />
            </label>
            <div className="upload-wrap">
              <span className="field-label">{t.fieldImage}</span>
              <label className="upload-box">
                <input
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={(e) => onImage(e.target.files?.[0])}
                />
                {image ? (
                  <>
                    <Check size={20} />
                    <span>{image.name}</span>
                  </>
                ) : (
                  <>
                    <Upload size={20} />
                    <span>{t.uploadText}</span>
                    <small>{t.uploadHint}</small>
                  </>
                )}
              </label>
              {image && (
                <button
                  type="button"
                  className="remove-image"
                  onClick={() => setImage(null)}
                >
                  {t.removeImage} ×
                </button>
              )}
              {image && (
                <img
                  className="upload-preview"
                  src={image.data}
                  alt="Reference preview"
                />
              )}
            </div>
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            <button className="btn btn-dark submit-btn" type="submit">
              {t.submit}
              <ArrowUpLeft size={17} />
            </button>
            <small className="privacy-note">{t.privacy}</small>
          </form>
        </section>

        <section className="closing">
          <span className="eyebrow">SAEED GOLD — CUSTOM MADE</span>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
          <button className="btn btn-light" onClick={scrollToForm}>
            {t.ctaButton}
            <ArrowUpLeft size={17} />
          </button>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="footer-top">
          <div>
            <a className="brand footer-brand" href="#top">
              SAEED GOLD<span>.</span>
            </a>
            <p>{t.footerLine}</p>
          </div>
          <div className="footer-links">
            <a href="#custom-request">{t.navShop}</a>
            <a href="#about">{t.navStory}</a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram <ArrowUpRight size={13} />
            </a>
          </div>
          <div className="footer-contact">
            <span>GET IN TOUCH</span>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
            <a href={`mailto:${EMAIL_ADDRESS}`}>
              <Mail size={15} /> {EMAIL_ADDRESS}
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} SAEED GOLD. {t.footerRights}.
          </span>
          <span>MADE WITH INTENTION.</span>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <MessageCircle size={23} />
      </a>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
