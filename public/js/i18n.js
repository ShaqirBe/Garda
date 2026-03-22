const copy = window.__SITE_COPY__ || {};
const phone = window.__SITE_PHONE__ || "";
const phoneDisplay = window.__SITE_PHONE_DISPLAY__ || "";

const getStoredLang = () => localStorage.getItem("site_lang") || "de";
const setStoredLang = (lang) => localStorage.setItem("site_lang", lang);

const resolveKey = (obj, key) =>
  key.split(".").reduce((acc, part) => (acc ? acc[part] : undefined), obj);

const applyCopy = (lang) => {
  const langCopy = copy[lang] || copy.de || {};
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = resolveKey(langCopy, key);
    if (typeof value === "string") {
      el.textContent = value;
    }
  });

  const callLinks = document.querySelectorAll(".call-link");
  callLinks.forEach((link) => {
    if (phone) {
      link.setAttribute("href", `tel:${phone}`);
    } else {
      link.setAttribute("href", "#");
      link.textContent = lang === "de" ? "Telefon folgt" : "Phone coming soon";
    }
  });

  const callLabel = document.querySelector(".hero-actions .call-link");
  if (callLabel && phoneDisplay) {
    callLabel.textContent = `${langCopy.callLabel}: ${phoneDisplay}`;
  }

  document
    .querySelectorAll(".lang")
    .forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === lang));
};

const initLang = () => {
  const lang = getStoredLang();
  applyCopy(lang);

  document.querySelectorAll(".lang").forEach((btn) => {
    btn.addEventListener("click", () => {
      const selected = btn.dataset.lang || "de";
      setStoredLang(selected);
      applyCopy(selected);
    });
  });
};

initLang();
