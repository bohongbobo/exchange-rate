import { SET_AMOUNT2, SET_AMOUNT1 } from "./types";

export const getExchange = () => (dispatch, getState) => {
  const currentC1 = getState().currency.c1;
  const amount1 = getState().currency.amount1;

  //console.log(currentC1);

  fetch(`https://api.exchangerate-api.com/v4/latest/${currentC1}`)
    .then(response => response.json())
    .then(data => {
      //console.log(data);
      //his.setState({ amount2: data.rates[this.state.c2] })
      dispatch({
        type: SET_AMOUNT2,
        payload: data.rates[getState().currency.c2] * amount1
      });
    });
};

export const changeAmount1 = e => (dispatch, getState) => {
  e.preventDefault();
  console.log(e.target.value);
  const amount1 = e.target.value;
  dispatch({
    type: SET_AMOUNT1,
    payload: amount1
  });
};
