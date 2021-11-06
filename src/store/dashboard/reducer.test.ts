import { AnyAction } from "redux";
import reducer from "./reducer";
import { dashboardTypes, DashboardState } from "./types";
import mockBooks from "~/mocks/data.json";

const sample = [
  {
    id: "8b44e51e-3e8b-11ec",
    title: "New book",
    description: "Lorem ipsum dolor sit amet",
    status: "avaliable",
  },
  {
    id: "Ub44e51e-3e8b-11pq",
    title: "New book 2",
    description: "Lorem ipsum dolor sit amet",
    status: "avaliable",
  },
];

const newSample = {
  id: "9b44e51e-3e8b-11bb",
  title: "New book 3",
  description: "Lorem ipsum dolor sit amet",
  status: "avaliable",
};

describe("Dashboard reducer", () => {
  const INITIAL_STATE: DashboardState = {
    books: [...mockBooks],
    rentedBooks: [],
    currentPage: "books",
    search: "",
    loading: false,
  };

  it("should return INITIAL_STATE", () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(INITIAL_STATE);
  });

  it("should handle LOADING_BOOK_REQUEST", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: dashboardTypes.LOADING_BOOK_REQUEST,
      })
    ).toEqual({
      books: [...mockBooks],
      rentedBooks: [],
      currentPage: "books",
      search: "",
      loading: true,
    });
  });

  it("should handle ADD_BOOK_REQUEST", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: dashboardTypes.ADD_BOOK_REQUEST,
        payload: newSample,
      })
    ).toEqual({
      books: [...mockBooks, newSample],
      rentedBooks: [],
      currentPage: "books",
      search: "",
      loading: false,
    });
  });

  it("should handle REMOVE_BOOK_REQUEST", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: dashboardTypes.REMOVE_BOOK_REQUEST,
        payload: "8b44e51e-3e8b-11ec",
      })
    ).toEqual({
      books: [...mockBooks],
      rentedBooks: [],
      currentPage: "books",
      search: "",
      loading: false,
    });
  });

  it("should handle ADD_RENT_BOOK_REQUEST", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: dashboardTypes.ADD_RENT_BOOK_REQUEST,
        payload: newSample,
      })
    ).toEqual({
      books: [...mockBooks],
      rentedBooks: [newSample],
      currentPage: "books",
      search: "",
      loading: false,
    });
  });

  it("should handle REMOVE_RENT_BOOK_REQUEST", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: dashboardTypes.REMOVE_RENT_BOOK_REQUEST,
        payload: "8b44e51e-3e8b-11ec",
      })
    ).toEqual({
      books: [...mockBooks],
      rentedBooks: [],
      currentPage: "books",
      search: "",
      loading: false,
    });
  });

  it("should handle CURRENT_PAGE_REQUEST", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: dashboardTypes.CURRENT_PAGE_REQUEST,
        payload: "books",
      })
    ).toEqual({
      books: [...mockBooks],
      rentedBooks: [],
      currentPage: "books",
      search: "",
      loading: false,
    });
  });

  it("should handle SEARCH_REQUEST", () => {
    expect(
      reducer(INITIAL_STATE, {
        type: dashboardTypes.SEARCH_REQUEST,
        payload: "typing",
      })
    ).toEqual({
      books: [...mockBooks],
      rentedBooks: [],
      currentPage: "books",
      search: "typing",
      loading: false,
    });
  });
});
