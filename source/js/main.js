import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';

import {initModals} from './modules/init-modals';
import {initInputSelect} from './modules/init-custom-select';
import {initTabs} from './modules/tabs';
import {initFormTab} from './modules/init-form-tab';
import {initPhoneMask} from './modules/init-phone-mask';
import {initBurgerAction} from './modules/init-burger-action';
import {initAccordion} from './modules/init-accordion';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
initInputSelect();
initTabs();
initFormTab();
initPhoneMask();
initBurgerAction();
initAccordion();
