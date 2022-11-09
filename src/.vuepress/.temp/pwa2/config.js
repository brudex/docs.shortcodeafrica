import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "/home/codehero/Documents/vuePressDocs/docs.shortcodeafrica/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "/home/codehero/Documents/vuePressDocs/docs.shortcodeafrica/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
