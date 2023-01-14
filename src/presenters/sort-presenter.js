import { sortCallbackMap, sortDisabilityMap, sortTitleMap } from '../maps';
import { findKey } from '../utils';
import Presenter from './presenter';

/**
 * @extends {Presenter<SortView>}
 */
export default class SortPresenter extends Presenter {
  constructor() {
    super(...arguments);

    const options = Object.entries(sortTitleMap).map(([value, title]) => ({ title, value }));
    const disabledSortField = Object.values(sortDisabilityMap);

    this.view.setOptions(options);
    this.view.setDisability(disabledSortField);
    this.updateViewValue();
    this.view.addEventListener('change', this.handleViewChange.bind(this));
  }

  updateViewValue() {
    const sort = this.pointsModel.getSort();
    const sortType = findKey(sortCallbackMap, sort);

    this.view.setValue(sortType);
  }

  handleViewChange() {
    const sortType = this.view.getValue();

    this.navigate('/');
    this.pointsModel.setSort(sortCallbackMap[sortType]);
  }
}
