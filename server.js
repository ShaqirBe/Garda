const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const site = {
  name: "Eiscafe Garda",
  phone: "+495642987493",
  phoneDisplay: "+49 5642 987493",
  address: "Scherfeder Str. 40, 34414 Warburg (Rimbeck)",
  mapQuery: "Eiscafe Garda, Scherfeder Straße 40, 34414 Warburg",
  copy: {
    de: {
      tagline: "Familiengemachtes Gelato & Ice Caffe",
      statusBadge: "Wiedereroeffnung in Rimbeck / Scherfede",
      heroEyebrow: "Rimbeck / Scherfede, Warburg",
      heroTitle: "Ice Caffe mit Familiensoul.",
      heroIntro:
        "Familiengefuehrtes Gelato-Haus mit starken Aromen, cremiger Textur und einer warmen Kaffeebar. Frische Waffeln, Spaghetti Ice und Ice Caffe wie frueher.",
      heroNote: "Keine Reservierungen. Bestellungen aktuell nur telefonisch.",
      highlights: [
        {
          title: "Familiengemachtes Gelato",
          desc: "Kleine Chargen mit regionaler Milch und saisonalen Fruechten."
        },
        {
          title: "Ice Caffe",
          desc: "Kalte Kaffee-Klassiker, Crema und Affogato Specials."
        },
        {
          title: "Spaghetti Ice & Waffel",
          desc: "Die Klassiker, veredelt mit hausgemachten Saucen und Nussmix."
        }
      ],
      menuTitle: "Menu-Highlights",
      menuIntro: "Saisonale Sorten wechseln woechentlich. Fragen Sie nach den Specials.",
      storyTitle: "Zurueck nach Rimbeck",
      storyIntro:
        "Die Embeltore war lange im Viertel zuhause und kehrt jetzt mit frischem Raum, neuen Rezepten und derselben Herzlichkeit zurueck. Unser Gelato ist hausgemacht, jedes Dessert frisch gebaut.",
      storyItems: [
        "Familienrezepte mit Handwerk",
        "Milch und Fruechte aus der Region",
        "Frische Waffeln, Saucen und Toppings taeglich"
      ],
      visitTitle: "Besuchen Sie uns",
      hoursNote: "Oeffnungszeiten werden bald bekanntgegeben",
      callLabel: "Jetzt anrufen",
      callNote: "Kein Reservierungssystem. Telefonische Bestellung.",
      openingHoursEyebrow: "Oeffnungszeiten",
      openingHoursTitle: "Unsere Zeiten auf einen Blick",
      openingClosed: "Bald",
      nav: {
        home: "Startseite",
        menu: "Speisekarte",
        contact: "Kontakt",
        legal: "Impressum"
      },
      menuPage: {
        eyebrow: "Unsere Speisekarte",
        title: "Speisekarte",
        intro: "Unsere Auswahl an Gelato, Ice Caffe, Spaghetti Ice und Waffeln.",
        tabs: {
          iceCaffe: "Ice Caffe",
          gelato: "Gelato",
          desserts: "Desserts"
        }
      },
      contactPage: {
        title: "Kontakt",
        intro: "Besuchen Sie uns in Rimbeck / Scherfede oder rufen Sie direkt an.",
        addressLabel: "Adresse",
        phoneLabel: "Telefon"
      },
      legalPage: {
        title: "Impressum",
        intro: "Rechtliche Angaben werden vor der Eroeffnung vervollstaendigt."
      }
    },
    en: {
      tagline: "Family-made gelato and ice caffe",
      statusBadge: "Reopening soon in Rimbeck / Scherfede",
      heroEyebrow: "Rimbeck / Scherfede, Warburg",
      heroTitle: "Ice Caffe with a family soul.",
      heroIntro:
        "A family gelato house with bold flavors, creamy textures, and a warm coffee bar. Fresh waffle, spaghetti ice, and ice caffe made the way we grew up with.",
      heroNote: "No reservations. Orders by phone for now.",
      highlights: [
        {
          title: "Family-made gelato",
          desc: "Small-batch gelato with regional milk and seasonal fruit."
        },
        {
          title: "Ice caffe",
          desc: "Cold coffee classics, crema, and affogato style specials."
        },
        {
          title: "Spaghetti ice & waffle",
          desc: "The crowd favorites, finished with house sauces and nuts."
        }
      ],
      menuTitle: "Menu highlights",
      menuIntro: "Seasonal flavors rotate weekly. Ask on the phone for today’s specials.",
      storyTitle: "Back to Rimbeck",
      storyIntro:
        "The embeltore served the neighborhood for years and now returns with a refreshed space, new recipes, and the same warm welcome. We make our gelato in-house and build every dessert to order.",
      storyItems: [
        "Family recipes and artisan technique",
        "Locally sourced dairy and fruit",
        "Fresh waffle, sauces, and toppings daily"
      ],
      visitTitle: "Visit us",
      hoursNote: "Hours will be announced soon",
      callLabel: "Call to order",
      callNote: "No reservation system. Phone orders only.",
      openingHoursEyebrow: "Opening hours",
      openingHoursTitle: "Our times at a glance",
      openingClosed: "Soon",
      nav: {
        home: "Home",
        menu: "Menu",
        contact: "Contact",
        legal: "Imprint"
      },
      menuPage: {
        eyebrow: "Our menu",
        title: "Menu",
        intro: "Gelato, ice caffe, spaghetti ice, and waffle highlights.",
        tabs: {
          iceCaffe: "Ice Caffe",
          gelato: "Gelato",
          desserts: "Desserts"
        }
      },
      contactPage: {
        title: "Contact",
        intro: "Visit us in Rimbeck / Scherfede or call us directly.",
        addressLabel: "Address",
        phoneLabel: "Phone"
      },
      legalPage: {
        title: "Imprint",
        intro: "Legal details will be completed before reopening."
      }
    }
  }
};

site.mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  site.mapQuery
)}&output=embed`;

app.use((req, res, next) => {
  res.locals.site = site;
  next();
});

const pages = require("./routes/pages");
app.use("/", pages);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
