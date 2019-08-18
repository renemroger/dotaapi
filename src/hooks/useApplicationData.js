/* eslint-disable default-case */
import { useEffect, useReducer } from "react";

import getBacon from "api_helpers/getBacon";
import getHeroes from "api_helpers/getHeroes";

const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";

function reducer(state, action) {
  const baconIpsum = action.baconIpsum.data;
  const heroes = action.heroes.data;

  switch (action.type) {
    case SET_APPLICATION_DATA:
      return {
        ...state,
        baconIpsum,
        heroes
      };
  }
  throw new Error(
    `Tried to reduce with unsupported action type: ${action.type}`
  );
}

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    baconIpsum: "",
    heroes: []
  });

  useEffect(() => {
    Promise.all([getBacon(), getHeroes()]).then(all => {
      const [baconIpsum, heroes] = all;

      dispatch({
        type: SET_APPLICATION_DATA,
        baconIpsum,
        heroes
      });
    });
  }, []);

  return {
    state
  };
}
