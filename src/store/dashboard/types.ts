export enum dashboardTypes {
  LOADING_BOOK_REQUEST = "@books/LOADING_BOOK_REQUEST",
  ADD_BOOK_REQUEST = "@books/ADD_BOOK_REQUEST",
  EDIT_BOOK_REQUEST = "@books/EDIT_BOOK_REQUEST",
  REMOVE_BOOK_REQUEST = "@books/REMOVE_BOOK_REQUEST",
  ADD_RENT_BOOK_REQUEST = "@books/ADD_RENT_BOOK_REQUEST",
  REMOVE_RENT_BOOK_REQUEST = "@books/REMOVE_RENT_BOOK_REQUEST",
  SEARCH_REQUEST = "@books/SEARCH_REQUEST",
  CURRENT_PAGE_REQUEST = "@books/CURRENT_PAGE_REQUEST",
}

export interface DashboardState {
  books: MOCK_DATA[];
  rentedBooks: MOCK_DATA[];
  currentPage: "books" | "edit" | "rented-books";
  search: string;
  loading: boolean;
}

export interface MOCK_DATA {
  id: string;
  title: string;
  description: string;
  status: string;
}
