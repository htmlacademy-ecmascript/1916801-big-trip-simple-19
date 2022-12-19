import './views/filter-view';
import './views/sort-view';
import './views/list-view';
import './views/point-view';
import './views/new-point-editor-view';

import Store from './store';
import CollectionModel from './models/collection-model';
import PointAdapter from './adapters/point-adapter';
import OfferGroupAdapter from './adapters/offer-group-adapter';
import DestinationAdapter from './adapters/destination-adapter';
import { FilterType, SortType } from './enums';
import { filterCallbackMap, sortCallbackMap } from './maps';

const BASE = 'https://19.ecmascript.pages.academy/big-trip-simple';
const AUTH = 'Basic stringAnatoly07';

/**
 * @type {Store <Point>}
 */
const pointsStore = new Store(`${BASE}/points`, AUTH);
const pointsModel = new CollectionModel({
  store: pointsStore,
  adapt: (item) => new PointAdapter(item),
  filter: filterCallbackMap[FilterType.FUTURE],
  sort: sortCallbackMap[SortType.DAY]

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

const { log, table } = console;

Promise.all(
  models.map((model) => model.ready())
)
  .then(async () => {
    table(pointsModel.list());
    // const logEvent = (event) => log(event.type, event.detail);

    // pointsModel.addEventListener('add', logEvent);
    // pointsModel.addEventListener('update', logEvent);

    // const item = pointsModel.item();

    // item.basePrice = 100;
    // item.startDate = new Date().toJSON();
    // item.endDate = item.startDate;
    // item.destinationId = '1';
    // item.offerIds = [];
    // item.type = 'bus';

    // const addedItem = await pointsModel.add(item);

    // addedItem.basePrice = 200;
    // addedItem.type = 'taxi';

    // await pointsModel.update(addedItem);
    // log('Points', pointsModel.listAll());
    // log('Points: item', pointsModel.item(10));
    // log('Points: findBy', pointsModel.findBy('basePrice', 500));
    // log('Points: findById', pointsModel.findById('0'));
    // log('Points: findIndexBy', pointsModel.findIndexBy('basePrice', 300));
    // log('Points: findIndexById', pointsModel.findIndexById('0'));
    // log('Destinations', destinationsModel.listAll());
    // log('Offer groups', offerGroupsModel.listAll());
  })

  .catch((error) => {
    log(error);
  });
