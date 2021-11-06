import { MOCK_DATA } from "~/store/dashboard/types";

export const updateArray = (arr: MOCK_DATA[], payload: MOCK_DATA) => {
  const updateArray: MOCK_DATA[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === payload.id) {
      updateArray.push(payload);
    } else {
      updateArray.push(arr[i]);
    }
  }
  return updateArray;
};

export const DEFAULT_ITEM = {
  id: "",
  title: "",
  description: "",
  status: "avaliable",
};

export const timeout = (data: () => void) => {
  setTimeout(data, 2000);
};
