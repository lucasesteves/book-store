import { action } from "typesafe-actions";
import { dashboardTypes, MOCK_DATA } from "./types";

export const loadingRequest = () => action(dashboardTypes.LOADING_BOOK_REQUEST);

export const addBook = (data: MOCK_DATA) =>
  action(dashboardTypes.ADD_BOOK_REQUEST, data);

export const editBook = (data: MOCK_DATA) =>
  action(dashboardTypes.EDIT_BOOK_REQUEST, data);

export const removeBook = (id: string) =>
  action(dashboardTypes.REMOVE_BOOK_REQUEST, id);

export const addRentBook = (data: MOCK_DATA) =>
  action(dashboardTypes.ADD_RENT_BOOK_REQUEST, data);

export const removeRentBook = (data: MOCK_DATA) =>
  action(dashboardTypes.REMOVE_RENT_BOOK_REQUEST, data);

export const searchBook = (value: string) =>
  action(dashboardTypes.SEARCH_REQUEST, value);

export const currentPageRequest = (value: string) =>
  action(dashboardTypes.CURRENT_PAGE_REQUEST, value);
