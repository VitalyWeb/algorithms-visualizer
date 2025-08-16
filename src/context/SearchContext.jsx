import React, { createContext, useContext, useReducer } from "react";

const SearchStateContext = createContext();
const SearchDispatchContext = createContext();

function searchReducer(state, action) {
  switch (action.type) {
    case "SET_QUERY": {
      const q = action.payload.trim().toLowerCase();
      const results = !q
        ? []
        : action.items
            .filter(i => (i.title + " " + (i.description || "")).toLowerCase().includes(q))
            .slice(0, 8);
      return { ...state, query: action.payload, results };
    }
    case "CLEAR_QUERY":
      return { ...state, query: "", results: [] };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export function SearchProvider({ children }) {
  const [state, dispatch] = useReducer(searchReducer, { query: "", results: [] });
  return (
    <SearchStateContext.Provider value={state}>
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  );
}

export function useSearchState() {
  return useContext(SearchStateContext);
}

export function useSearchDispatch() {
  return useContext(SearchDispatchContext);
}