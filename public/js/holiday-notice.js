const holidayNotice = document.querySelector("[data-holiday-notice]");

if (holidayNotice) {
  const hideAfter = new Date(holidayNotice.dataset.hideAfter);

  // The winter-break message must not remain on the site after reopening.
  if (!Number.isNaN(hideAfter.getTime()) && new Date() >= hideAfter) {
    holidayNotice.hidden = true;
  }
}
