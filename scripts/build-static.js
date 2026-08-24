const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

const openingHours = require("../config/openingHours");
const { formatHoursCards } = require("../utils/isOpenNow");
const { site } = require("../server");

const root = path.join(__dirname, "..");
const outputDir = path.join(root, "dist");
const publicDir = path.join(root, "public");
const siteUrl = "https://eiscafegarda-rimbeck.de";

const weekDays = [
  { key: 1, label: "Montag" },
  { key: 2, label: "Dienstag" },
  { key: 3, label: "Mittwoch" },
  { key: 4, label: "Donnerstag" },
  { key: 5, label: "Freitag" },
  { key: 6, label: "Samstag" },
  { key: 0, label: "Sonntag" }
];

const pages = [
  {
    route: "/",
    view: "index",
    pageTitle: "Eiscafe Garda Rimbeck - Gelato, Ice Caffe & Waffel",
    pageDescription:
      "Eiscafe Garda in Rimbeck / Scherfede. Familiengemachtes Gelato, Ice Caffe, Spaghetti Ice und Waffeln. Jetzt anrufen oder Route anzeigen.",
    hoursCards: formatHoursCards(weekDays),
    hoursNoteDe: openingHours.noteDe,
    hoursNoteEn: openingHours.noteEn
  },
  {
    route: "/menu",
    view: "menu",
    pageTitle: "Speisekarte | Eiscafe Garda Rimbeck",
    pageDescription: "Unsere aktuelle Eis- und Ice-Caffe Auswahl."
  },
  {
    route: "/kontakt",
    view: "kontakt",
    pageTitle: "Kontakt | Eiscafe Garda Rimbeck",
    pageDescription: "Adresse, Telefon und Anfahrt zum Eiscafe Garda."
  },
  {
    route: "/impressum",
    view: "impressum",
    pageTitle: "Impressum | Eiscafe Garda Rimbeck",
    pageDescription: "Impressum und rechtliche Angaben."
  }
];

fs.rmSync(outputDir, { recursive: true, force: true });
fs.cpSync(publicDir, outputDir, {
  recursive: true,
  filter: (source) => path.basename(source) !== ".DS_Store"
});

for (const page of pages) {
  const outputFile =
    page.route === "/"
      ? path.join(outputDir, "index.html")
      : path.join(outputDir, page.route.slice(1), "index.html");

  fs.mkdirSync(path.dirname(outputFile), { recursive: true });

  const html = ejs.render(
    fs.readFileSync(path.join(root, "views", `${page.view}.ejs`), "utf8"),
    {
      ...page,
      site,
      siteUrl,
      currentPath: page.route,
      canonicalUrl: `${siteUrl}${page.route === "/" ? "/" : page.route}`,
      pageImage: null,
      filename: path.join(root, "views", `${page.view}.ejs`)
    }
  );

  fs.writeFileSync(outputFile, html);
}

fs.writeFileSync(path.join(outputDir, ".nojekyll"), "");
console.log(`Static site generated in ${outputDir}`);
