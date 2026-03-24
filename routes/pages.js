const express = require("express");
const openingHours = require("../config/openingHours");
const { formatHoursCards } = require("../utils/isOpenNow");
const menuData = require("../data/menu.json");

const router = express.Router();
const SITE_URL = "";

const WEEK_DAYS = [
  { key: 1, label: "Montag" },
  { key: 2, label: "Dienstag" },
  { key: 3, label: "Mittwoch" },
  { key: 4, label: "Donnerstag" },
  { key: 5, label: "Freitag" },
  { key: 6, label: "Samstag" },
  { key: 0, label: "Sonntag" }
];

router.use((req, res, next) => {
  res.locals.currentPath = req.path;
  res.locals.siteUrl = SITE_URL;
  next();
});

router.get("/", (req, res) => {
  const hoursCards = formatHoursCards(WEEK_DAYS);

  res.render("index", {
    pageTitle: "Eiscafe Garda Rimbeck - Gelato, Ice Caffe & Waffel",
    pageDescription:
      "Eiscafe Garda in Rimbeck / Scherfede. Familiengemachtes Gelato, Ice Caffe, Spaghetti Ice und Waffeln. Jetzt anrufen oder Route anzeigen.",
    pageImage: null,
    canonicalUrl: SITE_URL ? `${SITE_URL}/` : null,
    hoursCards,
    hoursNoteDe: openingHours.noteDe,
    hoursNoteEn: openingHours.noteEn
  });
});

router.get("/menu", (req, res) => {
  res.render("menu", {
    pageTitle: "Speisekarte | Eiscafe Garda Rimbeck",
    pageDescription: "Unsere aktuelle Eis- und Ice-Caffe Auswahl.",
    canonicalUrl: SITE_URL ? `${SITE_URL}/menu` : null,
    menu: menuData
  });
});

router.get("/kontakt", (req, res) => {
  res.render("kontakt", {
    pageTitle: "Kontakt | Eiscafe Garda Rimbeck",
    pageDescription: "Adresse, Telefon und Anfahrt zum Eiscafe Garda.",
    canonicalUrl: SITE_URL ? `${SITE_URL}/kontakt` : null
  });
});

router.get("/impressum", (req, res) => {
  res.render("impressum", {
    pageTitle: "Impressum | Eiscafe Garda Rimbeck",
    pageDescription: "Impressum und rechtliche Angaben.",
    canonicalUrl: SITE_URL ? `${SITE_URL}/impressum` : null
  });
});

module.exports = router;
