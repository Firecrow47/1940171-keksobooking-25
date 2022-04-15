import './slider.js';
import './user-validation.js';
import {renderSimilarAds} from './map.js';
import './data.js';
import {getData} from './api.js';
import {adsFilter} from './map-filter.js';
import {showAlert, debounce} from './util.js';

const SIMILAR_AD_COUNT = 10;
const RERENDER_DELAY = 500;

getData(showAlert, (data) => {
  renderSimilarAds(data, SIMILAR_AD_COUNT);
  adsFilter(debounce(() => renderSimilarAds(data, SIMILAR_AD_COUNT),RERENDER_DELAY));
});
