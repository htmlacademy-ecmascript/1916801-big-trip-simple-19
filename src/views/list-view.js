import PointView from './point-view';
import View from './view';
// import {html} from '../utils';

export default class ListView extends View {

  /**
   * @param {PointViewState[]} states
   */
  setItems(states) {
    const views = states.map((state) => new PointView(state));

    this.replaceChildren(...views);
  }

  /**
   * @param {string} id
   */
  findById(id) {
    return this.querySelector(`${PointView}[data-id="${id}"]`);
  }
}

customElements.define(String(ListView), ListView);
