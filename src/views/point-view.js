import View from './view';
import { html } from '../utils';
import './point-view.css';

export default class PointView extends View {
  constructor() {
    super();

    this.classList.add('trip-events__item');
  }

  /**
   * @override
   */
  createHtml() {
    return html/*html*/`
      <div class="event">
        <time class="event__date" datetime="2019-03-18">MAR 18</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/check-in.png" alt="Event type icon">
        </div>
        <h3 class="event__title">Check-in Chamonix</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="2019-03-18T12:25">16:20</time>
            &mdash;
            <time class="event__end-time" datetime="2019-03-18T13:35">17:00</time>
          </p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">600</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          <li class="event__offer">
            <span class="event__offer-title">Add breakfast</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">50</span>
          </li>
        </ul>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    `;
  }
}

customElements.define(String(PointView), PointView);
