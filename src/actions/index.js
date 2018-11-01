import { FETCHING, FETCH_ERROR, FETCH_SUCCESS } from "../constains";

export const fetching = () => ({
  type: FETCHING
})

export const fetchError = () => ({
  type: FETCH_ERROR
});

export const fetchSuccess = repos => ({
  type: FETCH_SUCCESS,
  repos: repos
});