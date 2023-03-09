import { reveal, revealMarkdown, revealHighlight, revealMath, revealSearch, revealNotes, revealZoom } from "/Users/brudex/cache/docs.shortcodeafrica/node_modules/vuepress-plugin-md-enhance/lib/client/reveal/index.js";

export const useReveal = () => [reveal(), revealMarkdown(), revealHighlight(), revealMath(), revealSearch(), revealNotes(), revealZoom()];
