"use strict";

import sliders from './sliders.js';
import yamap from './yamap.js';
import blogLineFeed from './blogLineFeed.js';
import cabToggler from './cabToggler.js';

document.addEventListener("DOMContentLoaded", function () {

	var header = document.getElementById('header');

	sliders();
	yamap();
	blogLineFeed();
	cabToggler();

});