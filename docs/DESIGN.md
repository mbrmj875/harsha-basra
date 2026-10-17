# DESIGN.md - شركة هرشة الزراعية

## 🎨 نظام التصميم

### الهوية البصرية

**المفهوم**: تصميم حديث يمزج بين الأصالة العراقية والتقنية المتطورة، يعكس جذور الشركة الزراعية العميقة وتطلعاتها المستقبلية.

---

## 🎨 لوحة الألوان

### الألوان الرئيسية

```css
/* الأخضر الزراعي - اللون الأساسي */
--primary-dark: #2D5016;      /* أخضر داكن - للعناوين والعناصر الهامة */
--primary: #4A7C2C;           /* أخضر متوسط - اللون الرئيسي */
--primary-light: #6B9D47;     /* أخضر فاتح - للخلفيات الفاتحة */

/* البني التمري - اللون الثانوي */
--secondary-dark: #8B4513;    /* بني التمر الداكن */
--secondary: #D2691E;         /* بني فاتح - الأكسنت */
--secondary-light: #E9B88A;   /* بيج تمري */

/* الذهبي - للفخامة */
--accent-gold: #DAA520;       /* ذهبي */
--accent-gold-light: #F4E4C1; /* بيج ذهبي فاتح */

/* الألوان المحايدة */
--neutral-white: #FFFFFF;
--neutral-light: #F8F9FA;
--neutral-gray: #E9ECEF;
--neutral-dark: #343A40;
--neutral-black: #1A1A1A;
```

### استخدام الألوان

| العنصر | اللون | الاستخدام |
|--------|-------|-----------|
| الخلفية الرئيسية | `--neutral-white` | خلفية الصفحة |
| العناوين الكبيرة | `--primary-dark` | H1, Hero Title |
| العناوين الفرعية | `--primary` | H2, H3 |
| النصوص | `--neutral-dark` | Paragraph, Body |
| الأزرار الأساسية | `--primary` → `--primary-dark` | CTA Buttons (hover) |
| الأزرار الثانوية | `--secondary` | Secondary Actions |
| الروابط | `--primary` | Links |
| الأكسنت | `--accent-gold` | Icons, Badges |
| الحدود | `--neutral-gray` | Borders, Dividers |

---

## 📝 الطباعة (Typography)

### عائلات الخطوط

```css
/* الخط العربي الرئيسي */
--font-arabic: 'Cairo', 'Tajawal', 'Noto Sans Arabic', sans-serif;

/* الخط الإنجليزي */
--font-english: 'Montserrat', 'Inter', sans-serif;

/* الخط الزخرفي (للعناوين الخاصة) */
--font-display: 'Amiri', 'Scheherazade', serif;
```

### مقاييس الخطوط

```css
/* أحجام الخطوط */
--text-xs: 0.75rem;    /* 12px - ملاحظات صغيرة */
--text-sm: 0.875rem;   /* 14px - نص ثانوي */
--text-base: 1rem;     /* 16px - نص أساسي */
--text-lg: 1.125rem;   /* 18px - نص كبير */
--text-xl: 1.25rem;    /* 20px - عناوين صغيرة */
--text-2xl: 1.5rem;    /* 24px - H3 */
--text-3xl: 1.875rem;  /* 30px - H2 */
--text-4xl: 2.25rem;   /* 36px - H1 */
--text-5xl: 3rem;      /* 48px - Hero Title */
--text-6xl: 3.75rem;   /* 60px - Display Title */

/* أوزان الخطوط */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;

/* ارتفاع السطر */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;
--leading-loose: 2;
```

### قواعد الطباعة

- **العناوين الكبيرة (Hero)**: `--text-5xl` / `--font-bold` / `--primary-dark`
- **العناوين H1**: `--text-4xl` / `--font-bold` / `--primary-dark`
- **العناوين H2**: `--text-3xl` / `--font-semibold` / `--primary`
- **العناوين H3**: `--text-2xl` / `--font-semibold` / `--primary`
- **النص الأساسي**: `--text-base` / `--font-normal` / `--neutral-dark`
- **النص الثانوي**: `--text-sm` / `--font-normal` / `--neutral-gray`

---

## 🔲 التباعد والمسافات

```css
/* نظام التباعد (8px base) */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */

/* الحواف */
--container-padding: var(--space-4);  /* موبايل */
--container-padding-md: var(--space-8);  /* تابلت */
--container-padding-lg: var(--space-12); /* ديسكتوب */

/* عرض الحاوية */
--container-max: 1200px;
```

---

## 🎭 المكونات (Components)

### الأزرار (Buttons)

```css
/* الزر الأساسي */
.btn-primary {
  background: var(--primary);
  color: var(--neutral-white);
  padding: var(--space-3) var(--space-6);
  border-radius: 8px;
  font-weight: var(--font-semibold);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(74, 124, 44, 0.3);
}

/* الزر الثانوي */
.btn-secondary {
  background: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: var(--space-3) var(--space-6);
  border-radius: 8px;
}

.btn-secondary:hover {
  background: var(--primary);
  color: var(--neutral-white);
}
```

### البطاقات (Cards)

```css
.card {
  background: var(--neutral-white);
  border-radius: 12px;
  padding: var(--space-6);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

/* بطاقة المنتج */
.product-card {
  border: 1px solid var(--neutral-gray);
  border-radius: 16px;
  overflow: hidden;
}

.product-card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
```

### الأقسام (Sections)

```css
.section {
  padding: var(--space-16) 0;
}

.section-hero {
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(45, 80, 22, 0.95),
    rgba(74, 124, 44, 0.85)
  );
  color: var(--neutral-white);
}

.section-light {
  background: var(--neutral-light);
}

.section-dark {
  background: var(--neutral-dark);
  color: var(--neutral-white);
}
```

---

## 🎬 الحركة والتأثيرات

### المدة والتسهيل

```css
--transition-fast: 0.15s;
--transition-base: 0.3s;
--transition-slow: 0.5s;

--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### الحركات الشائعة

```css
/* حركة الظهور من الأسفل */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* حركة التكبير */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* حركة الانزلاق */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

---

## 🖼️ الصور والوسائط

### معالجة الصور

```css
/* تأثير التراكب للصور */
.image-overlay {
  position: relative;
}

.image-overlay::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
}

/* صورة دائرية */
.image-circle {
  border-radius: 50%;
  border: 4px solid var(--neutral-white);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* نسب الصور */
--ratio-square: 1 / 1;
--ratio-landscape: 16 / 9;
--ratio-portrait: 3 / 4;
```

---

## 📱 الاستجابة (Responsive)

### نقاط التوقف (Breakpoints)

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* موبايل كبير */
--breakpoint-md: 768px;   /* تابلت */
--breakpoint-lg: 1024px;  /* ديسكتوب صغير */
--breakpoint-xl: 1280px;  /* ديسكتوب كبير */
--breakpoint-2xl: 1536px; /* شاشات واسعة */
```

### قواعد الاستجابة

```css
/* موبايل (افتراضي) */
.hero-title {
  font-size: var(--text-4xl);
}

/* تابلت فما فوق */
@media (min-width: 768px) {
  .hero-title {
    font-size: var(--text-5xl);
  }
}

/* ديسكتوب فما فوق */
@media (min-width: 1024px) {
  .hero-title {
    font-size: var(--text-6xl);
  }
}
```

---

## 🎨 الأنماط الخاصة

### الزخارف العربية

```css
/* إطار زخرفي */
.arabic-frame {
  border: 2px solid var(--accent-gold);
  border-radius: 4px;
  position: relative;
  padding: var(--space-6);
}

.arabic-frame::before,
.arabic-frame::after {
  content: '✦';
  color: var(--accent-gold);
  position: absolute;
  font-size: var(--text-2xl);
}

.arabic-frame::before {
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--neutral-white);
  padding: 0 var(--space-2);
}
```

### شارة الجودة

```css
.quality-badge {
  background: linear-gradient(135deg, var(--accent-gold), var(--accent-gold-light));
  color: var(--neutral-white);
  padding: var(--space-2) var(--space-4);
  border-radius: 20px;
  font-size: var(--text-sm);
  font-weight: var(--font-bold);
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  box-shadow: 0 2px 8px rgba(218, 165, 32, 0.3);
}
```

---

## ✅ قواعد التصميم

### افعل:
- ✅ استخدم الأخضر والبني كألوان أساسية
- ✅ اجعل الصور كبيرة وعالية الجودة
- ✅ استخدم مساحات بيضاء كافية
- ✅ اجعل الأزرار واضحة وكبيرة
- ✅ استخدم الخط العربي الواضح والمقروء
- ✅ أضف حركات سلسة ومهنية

### لا تفعل:
- ❌ لا تستخدم ألوان صارخة أو غير متناسقة
- ❌ لا تزدحم الصفحة بالمعلومات
- ❌ لا تستخدم صور منخفضة الجودة
- ❌ لا تستخدم حركات سريعة أو مزعجة
- ❌ لا تهمل تجربة الموبايل
- ❌ لا تستخدم خطوط صعبة القراءة

---

## 🎯 الهدف البصري

**الانطباع المطلوب**: أصالة، جودة، احترافية، طبيعة، ثقة

**الشعور المستهدف**: دفء، طمأنينة، فخامة طبيعية، خبرة عريقة

---

**آخر تحديث**: 2026-10-17
