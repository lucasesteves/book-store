import { Reducer } from "redux";
import { dashboardTypes, DashboardState } from "./types";
import mockBooks from "~/mocks/data.json";
import { updateArray } from "~/utils";

const INITIAL_STATE: DashboardState = {
  books: [...mockBooks],
  rentedBooks: [],
  currentPage: "books",
  search: "",
  loading: false,
};

const reducer: Reducer<DashboardState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case dashboardTypes.LOADING_BOOK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case dashboardTypes.ADD_BOOK_REQUEST:
      return {
        ...state,
        loading: false,
        books: state.books.concat(payload),
      };
    case dashboardTypes.EDIT_BOOK_REQUEST:
      return {
        ...state,
        loading: false,
        books: updateArray(state.books, payload),
      };
    case dashboardTypes.REMOVE_BOOK_REQUEST:
      return {
        ...state,
        loading: false,
        books: state.books.filter((item) => item.id !== payload && item),
      };

    case dashboardTypes.ADD_RENT_BOOK_REQUEST:
      return {
        ...state,
        loading: false,
        books: updateArray(state.books, payload),
        rentedBooks: state.rentedBooks.concat(payload),
      };
    case dashboardTypes.REMOVE_RENT_BOOK_REQUEST:
      return {
        ...state,
        loading: false,
        books: updateArray(state.books, payload),
        rentedBooks: state.rentedBooks.filter(
          (item) => item.id !== payload.id && item
        ),
      };

    case dashboardTypes.CURRENT_PAGE_REQUEST:
      return {
        ...state,
        search: "",
        currentPage: payload,
      };
    case dashboardTypes.SEARCH_REQUEST:
      return {
        ...state,
        search: payload,
      };
    default:
      return state;
  }
};

export default reducer;
