import { FilterType, SortType } from './enums';

/**
 * @type {Record<string,FilterCallback<PointAdapter>>}
 */
export const filterCallbackMap = {
  [FilterType.EVERYTHING]: () => true,
  [FilterType.FUTURE]: (item) => Date.now() <= Date.parse(item.startDate)
};

/**
 * @type {Record<string,SortCallback<PointAdapter>>}
 */
export const sortCallbackMap = {
  [SortType.DAY]: (point, nextPoint) => Date.parse(point.startDate) - Date.parse(nextPoint.startDate),
  [SortType.EVENT]: () => 0,
  [SortType.TIME]: () => 0,
  [SortType.PRICE]: (item, nextItem) => nextItem.basePrice - item.basePrice,
  [SortType.OFFERS]: () => 0
};
