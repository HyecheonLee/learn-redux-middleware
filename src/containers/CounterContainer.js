import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import {decrease, decreaseAsync, increase, increaseAsync} from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const onIncrease = () => {
    dispatch(increaseAsync());
  };
  const onDecrease = () => {
    dispatch(decreaseAsync());
  };
  return (
    <Counter number={number} onDecrease={onDecrease} onIncrease={onIncrease} />
  );
};

export default CounterContainer;
