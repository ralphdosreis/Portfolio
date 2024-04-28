import initScrollSuave from './modules/scroll-suave.js';
import animaMouseMove from './modules/vanila-tilt.js';
import MenuMobile from './modules/menu-mobile.js';

initScrollSuave();
animaMouseMove();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();
