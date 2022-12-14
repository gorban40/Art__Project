import modals from "./modules/modals"; 
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';
import filter from "./modules/filter";
import uploadState from './modules/uploadState';
import pictureHover from './modules/pictureHover';
import accordion from './modules/accordion';
import burger from './modules/burger';
import scrolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let state = {}

    uploadState(state);
    modals();
    sliders('.feedback-slider-item', 'horizont', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms(state);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '.styles-2', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    filter();
    pictureHover('.sizes-block');
    accordion('.accordion-heading', '.accordion-block');
    burger('.burger-menu','.burger');
    scrolling('.pageup');
});