import FilterView from './views/filter-view';
import './views/sort-view';
import ListView from './views/list-view';
import './views/point-view';
import './views/new-point-editor-view';

import Store from './store';
import CollectionModel from './models/collection-model';
import PointAdapter from './adapters/point-adapter';
import OfferGroupAdapter from './adapters/offer-group-adapter';
import DestinationAdapter from './adapters/destination-adapter';
import { FilterType, SortType } from './enums';
import { filterCallbackMap, sortCallbackMap } from './maps';
import ListPresenter from './presenters/list-presenter';
import FilterPresenter from './presenters/filter-presenter';
import SortView from './views/sort-view';
import SortPresenter from './presenters/sort-presenter';


const BASE = 'https://19.ecmascript.pages.academy/big-trip-simple';
const AUTH = 'Basic stringAnatoly070';

/**
 * @type {Store <Point>}
 */
const pointsStore = new Store(`${BASE}/points`, AUTH);
const pointsModel = new CollectionModel({
  store: pointsStore,
  adapt: (item) => new PointAdapter(item),
  filter: filterCallbackMap[FilterType.EVERYTHING],
  sort: sortCallbackMap[SortType.PRICE]

});


/**
 * @type {Store <Destination>}
 */
const destinationsStore = new Store(`${BASE}/destinations`, AUTH);
const destinationsModel = new CollectionModel({
  store: destinationsStore,
  adapt: (item) => new DestinationAdapter(item)
});

/**
 * @type {Store <OfferGroup>}
 */
const offerGroupsStore = new Store(`${BASE}/offers`, AUTH);
const offerGroupsModel = new CollectionModel({
  store: offerGroupsStore,
  adapt: (item) => new OfferGroupAdapter(item)
});
const models = [pointsModel, destinationsModel, offerGroupsModel];
const listView = document.querySelector(String(ListView));
const filterView = document.querySelector(String(FilterView));
const sortView = document.querySelector(String(SortView));

const { log } = console;

Promise.all(
  models.map((model) => model.ready())
)
  .then(async () => {
    new FilterPresenter(filterView, models);
    new ListPresenter(listView, models);
    new SortPresenter(sortView, models);
  })

  .catch((error) => {
    log(error);
  });
