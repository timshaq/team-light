"use strict";

import sliders from './sliders.js';
import bestestSlider from './bestestSlider.js';
import recommendMobSlider from './recommendMobSlider.js';
import calcInputs from './calcInputs.js';
import yamap from './yamap.js';
import blogLineFeed from './blogLineFeed.js';
import cabToggler from './cabToggler.js';
import prodCardOrderToggler from './prodCardOrderToggler.js';
import catalog from './catalog.js';
import productPageTabs from './productPageTabs.js';
import productPageSlider from './productPageSlider.js';
import headerCatalogModal from './headerCatalogModal.js';
import dragToScroll from './dragToScroll.js';
import smsCodeInputs from './smsCodeInputs.js';
import headerActions from './header.js';
import prodGallery from './prodGallery.js';

document.addEventListener("DOMContentLoaded", function () {

	var header = document.getElementById('header');

	sliders();
	bestestSlider();
	recommendMobSlider();
	prodCardOrderToggler();
	yamap();
	blogLineFeed();
	cabToggler();
	calcInputs();
	catalog();
	productPageTabs();
	productPageSlider();
	headerCatalogModal();
	dragToScroll();
	smsCodeInputs();
	headerActions();
	prodGallery();

});