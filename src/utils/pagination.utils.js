import { ITEMS_PER_PAGE } from '../constants/api.constants';

export const getPaginatedItems = (items, currentPage) => {
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  return items.slice(indexOfFirstItem, indexOfLastItem);
};

export const getTotalPages = (items) => {
  return Math.ceil(items.length / ITEMS_PER_PAGE);
};
