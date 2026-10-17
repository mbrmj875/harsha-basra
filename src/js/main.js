(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const captions = {
    grove: "صفوف النخيل في بساتين البصرة. الصورة تتبدّل مع اختيارك.",
    dates: "تمور منتقاة من موسم البصرة، جاهزة للجملة والتجزئة.",
    dibs: "دبس تمر طبيعي كثيف القوام للمنازل والمصانع.",
    vinegar: "خلّ تمر نقي للطبخ والاستخدام الغذائي.",
    pack: "خطوط تعبئة وتغليف تحفظ الطزاجة والمظهر.",
    farm: "واحات النخيل تحت سماء الجنوب العراقي.",
  };

  const stageImgs = [...document.querySelectorAll(".stage__img")];
  const captionEl = document.getElementById("stageCaption");
  const chips = [...document.querySelectorAll(".chip[data-pick]")];
  const productHits = [...document.querySelectorAll(".plist__hit[data-pick]")];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const setStage = (key) => {
    if (!key) return;
    stageImgs.forEach((img) => {
      img.classList.toggle("is-active", img.dataset.stage === key);
    });
    if (captionEl && captions[key]) captionEl.textContent = captions[key];
    chips.forEach((chip) => {
      const on = chip.dataset.pick === key;
      chip.classList.toggle("is-active", on);
      chip.setAttribute("aria-pressed", on ? "true" : "false");
    });
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => setStage(chip.dataset.pick));
  });
  productHits.forEach((btn) => {
    btn.addEventListener("click", () => setStage(btn.dataset.pick));
  });

  /* Section-driven quiet crossfade on the sticky stage */
  const sections = [...document.querySelectorAll("[data-stage-section]")];
  if ("IntersectionObserver" in window && sections.length && !reduceMotion) {
    const io = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (top) setStage(top.target.getAttribute("data-stage-section"));
      },
      { rootMargin: "-35% 0px -40% 0px", threshold: [0.2, 0.45] }
    );
    sections.forEach((s) => io.observe(s));
  }

  /* Gallery: one frame, contents change */
  const frame = document.getElementById("galleryFrame");
  const frameImgs = frame ? [...frame.querySelectorAll(".frame__img")] : [];
  const frameCap = document.getElementById("galleryCap");
  const frameCaps = frameImgs.map((img) => img.getAttribute("alt") || "");
  let frameIndex = 0;

  const showFrame = (i) => {
    if (!frameImgs.length) return;
    frameIndex = (i + frameImgs.length) % frameImgs.length;
    frameImgs.forEach((img, n) => img.classList.toggle("is-active", n === frameIndex));
    if (frameCap) frameCap.textContent = frameCaps[frameIndex];
  };

  if (frame && frameImgs.length) {
    frame.addEventListener("click", () => showFrame(frameIndex + 1));
    frame.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showFrame(frameIndex + 1);
      }
    });
    if (!reduceMotion) {
      let timer = window.setInterval(() => showFrame(frameIndex + 1), 2800);
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          window.clearInterval(timer);
          timer = 0;
        } else if (!timer) {
          timer = window.setInterval(() => showFrame(frameIndex + 1), 2800);
        }
      });
    }
  }

  const form = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");
  if (form && formNote) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      formNote.hidden = false;
      form.reset();
    });
  }
})();
