import ScrollSuave from './modules/scroll-suave.js';
import animaMouseMove from './modules/vanila-tilt.js';
import MenuMobile from './modules/menu-mobile.js';
import initAnimaScroll from './modules/animacao-ao-scroll.js';
initAnimaScroll();

animaMouseMove();

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();
