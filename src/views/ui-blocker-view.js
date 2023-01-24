import View from './view';
import './ui-blocker-view.css';

export default class UiBlockerView extends View {
  constructor() {
    super();

    this.classList.add('ui-blocker');
  }

  /**
   * @param {boolean} flag
   */
  toggle(flag) {
    if (flag) {
      document.body.append(this);
      document.addEventListener('keydown', this.handleDocumentKeyDown);
    }
    else {
      this.remove();
      document.removeEventListener('keydown', this.handleDocumentKeyDown);
    }
  }

  /**
   * @param {KeyboardEvent} event
   */
  handleDocumentKeyDown(event){
    event.preventDefault();
  }
}

customElements.define(String(UiBlockerView), UiBlockerView);
