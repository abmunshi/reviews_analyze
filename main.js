import "./src/styles/photoGallery.css";
import "./src/styles/style.css";

import { ReviewManager } from "./src/js/reviewManager";
import { AB_Accordion, OffCanvasController, Tab } from "./src/js/uiComponent";
import { readMore } from "./src/js/utils";

document.addEventListener("DOMContentLoaded", async () => {
  if (document.getElementById("rv-page-container") !== null) {
    const rvPageManager = new ReviewManager(
      "rv-page-container",
      "rv-page-control",
      10,
      true,
      false
    );
    // render reviews in page
    rvPageManager.init().then(() => {
      rvPageManager.renderRatingPageStats();
    });
  }

  // create tab instance
  const tab = new Tab("tabs");

  if (document.getElementById("rv-widget-container") !== null) {
    const rvWidgetManager = new ReviewManager(
      "rv-widget-container",
      "rv-widget-control",
      10,
      false,
      true
    );

    // create offcanvas widget instance
    const offCanvasController = new OffCanvasController(
      "offcanvas-widget",
      "open-widget-button",
      "close-widget-button",
      rvWidgetManager,
      tab
    );
  }

  // readmore function for anywhere in the page
  readMore();

  const ftMobileAccordion = new AB_Accordion("ft-mobile-accordion");
  const faqAccorion = new AB_Accordion("faq-accordion");
});
