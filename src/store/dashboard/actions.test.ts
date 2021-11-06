import { dashboardTypes } from "./types";
import {
  loadingRequest,
  addBook,
  editBook,
  removeBook,
  addRentBook,
  removeRentBook,
  searchBook,
  currentPageRequest,
} from "./actions";

describe("Dashboard actions", () => {
  it("loadingRequest", () => {
    expect(loadingRequest()).toEqual({
      type: dashboardTypes.LOADING_BOOK_REQUEST,
    });
  });

  it("addBook", () => {
    const payload = {
      id: "cd52-kqwe-9012",
      title: "test",
      description: "Lorem ipsum",
      status: "avaliable",
    };
    expect(addBook(payload)).toEqual({
      type: dashboardTypes.ADD_BOOK_REQUEST,
      payload,
    });
  });

  it("editBook", () => {
    const payload = {
      id: "cd52-kqwe-9012",
      title: "test",
      description: "Lorem ipsum",
      status: "avaliable",
    };
    expect(editBook(payload)).toEqual({
      type: dashboardTypes.EDIT_BOOK_REQUEST,
      payload,
    });
  });

  it("removeBook", () => {
    const payload = "cd52-kqwe-9012";
    expect(removeBook(payload)).toEqual({
      type: dashboardTypes.REMOVE_BOOK_REQUEST,
      payload,
    });
  });

  it("addRentBook", () => {
    const payload = {
      id: "cd52-kqwe-9012",
      title: "test",
      description: "Lorem ipsum",
      status: "avaliable",
    };
    expect(addRentBook(payload)).toEqual({
      type: dashboardTypes.ADD_RENT_BOOK_REQUEST,
      payload,
    });
  });

  it("removeRentBook", () => {
    const payload = {
      id: "cd52-kqwe-9012",
      title: "test",
      description: "Lorem ipsum",
      status: "avaliable",
    };
    expect(removeRentBook(payload)).toEqual({
      type: dashboardTypes.REMOVE_RENT_BOOK_REQUEST,
      payload,
    });
  });

  it("searchBook", () => {
    const payload = "search";
    expect(searchBook(payload)).toEqual({
      type: dashboardTypes.SEARCH_REQUEST,
      payload,
    });
  });

  it("currentPageRequest", () => {
    const payload = "search";
    expect(currentPageRequest(payload)).toEqual({
      type: dashboardTypes.CURRENT_PAGE_REQUEST,
      payload,
    });
  });
});
