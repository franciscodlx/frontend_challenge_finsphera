import {
  RETRIEVE_CHARACTERS,
} from "./type";

import Search from "../services/search";

export const getSearch = (query = '') => async dispatch => {
  try {
    const response = query ? await Search.getByName(query) : await Search.getAllCharacters();
    const {
      data = {},
    } = response;

    const {
      results = [],
    } = data;

    dispatch({
      type: RETRIEVE_CHARACTERS,
      payload: results,
    });
  } catch (error) {
    dispatch({
      type: RETRIEVE_CHARACTERS,
      payload: [],
    });
  }
}