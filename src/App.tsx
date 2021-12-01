import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNumber, subNumber } from './redux/Calculator/action';
import { StateType } from './redux/store';
import styled from '@emotion/styled';

export const App = () => {
  const number = useSelector((state: StateType) => state.number);
  const dispatch = useDispatch();

  const Increase = () => {
    dispatch(addNumber());
  };
  const Decrease = () => {
    dispatch(subNumber());
  };
  return (
    <Section className="App">
      <Number>{number}</Number>
      <ButtonSection>
        <button onClick={Increase}>+1</button>
        <button onClick={Decrease}>-1</button>
      </ButtonSection>
    </Section>
  );
};
const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Number = styled.div`
  margin: 20px;
  font-size: 50px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
