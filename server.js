const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const site = {
  name: "Eiscafe Garda",
  phone: "+4915207625526",
  phoneDisplay: "+49 1520 7625526",
  address: "Scherfeder Str. 40, 34414 Warburg (Rimbeck)",
  mapQuery: "Eiscafe Garda, Scherfeder Straße 40, 34414 Warburg",
  copy: {
    de: {
      tagline: "Familiengemachtes Gelato & Ice Caffe",
      statusBadge: "Täglich 11:00 - 21:00 · Dienstag Ruhetag",
      heroEyebrow: "Rimbeck / Scherfede, Warburg",
      heroTitle: "Ice Caffe mit Familiensoul.",
      heroIntro:
        "Familiengefuehrtes Gelato-Haus mit starken Aromen, cremiger Textur und einer warmen Kaffeebar. Frische Waffeln, Spaghetti Ice und Ice Caffe wie frueher.",
      heroNote: "Keine Reservierungen. Bestellungen aktuell nur telefonisch.",
      placeholderPhoto: "Foto folgt",
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
      cta: {
        menu: "Speisekarte ansehen",
        story: "Mehr erfahren"
      },
      featureStrip: [
        {
          title: "Premiumeis",
          desc: "Zartschmelzendes Gelato mit starken Aromen."
        },
        {
          title: "Vegan & Laktosefrei",
          desc: "Fruchteis und vegane Optionen auf Anfrage."
        },
        {
          title: "Unser Pistazieneis",
          desc: "Intensiv, nussig und unser Meisterwerk."
        }
      ],
      promoBlocks: [
        {
          title: "Gutscheine",
          desc: "Verschenke Genussmomente fuer Familie und Freunde."
        },
        {
          title: "Eis des Monats",
          desc: "Saisonale Kreationen, die regelmaessig wechseln."
        },
        {
          title: "Family Specials",
          desc: "Aktionen fuer Familien und kleine Genussmomente."
        }
      ],
      testimonials: [
        {
          name: "Kundin aus Rimbeck",
          quote: "Sehr leckeres Eis und eine tolle Waffel."
        },
        {
          name: "Stammkunde",
          quote: "Freundlicher Service und fantastische Portionen."
        },
        {
          name: "Ice Caffe Fan",
          quote: "Der Affogato ist mein Highlight."
        }
      ],
      testimonialsTitle: "Das sagen Gaeste",
      testimonialsIntro: "Ein kleiner Einblick in die Stimmung bei uns.",
      faq: [
        {
          q: "Habt ihr vegane Eissorten?",
          a: "Ja, wir bieten vegane Fruchteissorten an. Frag uns gerne vor Ort."
        },
        {
          q: "Kann ich telefonisch bestellen?",
          a: "Ja, Bestellungen nehmen wir aktuell nur telefonisch an."
        },
        {
          q: "Habt ihr Spaghetti Ice?",
          a: "Ja, Spaghetti Ice ist ein fester Bestandteil unserer Karte."
        }
      ],
      faqTitle: "FAQ",
      newsletter: {
        title: "Bleib auf dem Laufenden",
        desc: "Trage Dich ein und erhalte Neuigkeiten zu neuen Sorten.",
        action: "Anmelden"
      },
      storyTitle: "Zurueck nach Rimbeck",
      storyIntro:
        "Die Eis Caffe war lange im Viertel zuhause und kehrt jetzt mit frischem Raum, neuen Rezepten und derselben Herzlichkeit zurueck. Unser Gelato ist hausgemacht, jedes Dessert frisch gebaut.",
      storyItems: [
        "Familienrezepte mit Handwerk",
        "Milch und Fruechte aus der Region",
        "Frische Waffeln, Saucen und Toppings taeglich"
      ],
      visitTitle: "Besuchen Sie uns",
      hoursNote: "Mittwoch bis Montag: 11:00 - 21:00 Uhr · Dienstag: Ruhetag",
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
        intro: "Unsere aktuellen Karten fuer Eis, Eisbecher, Spaghetti Eis, Kaffee und Brüsseler Waffeln.",
        openPdf: "Speisekarte ansehen",
        downloadPdf: "PDF herunterladen",
        eis: {
          kicker: "9 Seiten",
          title: "Eiskarte",
          desc: "Eissorten, Eisportionen, Eisbecher, Spaghetti Eis, Joghurt, Eisgetraenke und Heissgetraenke."
        },
        waffle: {
          kicker: "3 Seiten",
          title: "Brüsseler Waffeln",
          desc: "Unsere Auswahl an frisch zubereiteten Waffeln mit Fruechten, Eis, Sahne und Saucen."
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
      statusBadge: "Open daily 11:00 - 21:00 · Closed Tuesdays",
      heroEyebrow: "Rimbeck / Scherfede, Warburg",
      heroTitle: "Ice Caffe with a family soul.",
      heroIntro:
        "A family gelato house with bold flavors, creamy textures, and a warm coffee bar. Fresh waffle, spaghetti ice, and ice caffe made the way we grew up with.",
      heroNote: "No reservations. Orders by phone for now.",
      placeholderPhoto: "Photo coming soon",
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
      cta: {
        menu: "View menu",
        story: "Learn more"
      },
      featureStrip: [
        {
          title: "Premium gelato",
          desc: "Silky texture and bold flavors."
        },
        {
          title: "Vegan & lactose-free",
          desc: "Fruit-based options on request."
        },
        {
          title: "Pistachio signature",
          desc: "Intense, nutty, and our masterpiece."
        }
      ],
      promoBlocks: [
        {
          title: "Gift cards",
          desc: "Share a sweet moment with family and friends."
        },
        {
          title: "Flavor of the month",
          desc: "Seasonal creations that rotate regularly."
        },
        {
          title: "Family specials",
          desc: "Little highlights for families."
        }
      ],
      testimonials: [
        {
          name: "Guest from Rimbeck",
          quote: "Fantastic gelato and a great waffle."
        },
        {
          name: "Regular customer",
          quote: "Friendly service and generous portions."
        },
        {
          name: "Ice caffe fan",
          quote: "The affogato is a favorite."
        }
      ],
      testimonialsTitle: "What guests say",
      testimonialsIntro: "A quick glimpse of the Garda experience.",
      faq: [
        {
          q: "Do you have vegan options?",
          a: "Yes, we offer fruit-based vegan gelato. Ask us on site."
        },
        {
          q: "Can I order by phone?",
          a: "Yes, phone orders only for now."
        },
        {
          q: "Do you serve spaghetti ice?",
          a: "Yes, spaghetti ice is on our menu."
        }
      ],
      faqTitle: "FAQ",
      newsletter: {
        title: "Stay in the loop",
        desc: "Sign up for updates on new flavors.",
        action: "Subscribe"
      },
      storyTitle: "Back to Rimbeck",
      storyIntro:
        "The Eiskafe served the neighborhood for years and now returns with a refreshed space, new recipes, and the same warm welcome. We make our gelato in-house and build every dessert to order.",
      storyItems: [
        "Family recipes and artisan technique",
        "Locally sourced dairy and fruit",
        "Fresh waffle, sauces, and toppings daily"
      ],
      visitTitle: "Visit us",
      hoursNote: "Wednesday to Monday: 11:00 - 21:00 · Tuesday: closed",
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
        intro: "Our current menus for gelato, ice cups, spaghetti ice, coffee and Brussels waffles.",
        openPdf: "View menu",
        downloadPdf: "Download PDF",
        eis: {
          kicker: "9 pages",
          title: "Gelato menu",
          desc: "Gelato flavors, portions, ice cups, spaghetti ice, yogurt, cold gelato drinks and hot drinks."
        },
        waffle: {
          kicker: "3 pages",
          title: "Brussels waffles",
          desc: "Freshly prepared waffles with fruit, gelato, cream and sauces."
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
