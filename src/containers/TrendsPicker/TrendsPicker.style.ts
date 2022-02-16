import styled from "styled-components";

import { colors } from "../../config";

export const Style = {
  Container: styled.div`
    margin: 0 auto;
    margin-top: 2rem;
    background-color: ${colors.white};
    padding: 2rem;
    border-radius: 0.3rem;
    max-width: 1024px;
  `,
  DatePickerContainer: styled.div`
    background-color: ${colors.white};
    padding: 2rem;
    border-radius: 0.3rem;
    box-shadow: 0.5rem 0.5rem 0.5rem 0.1rem ${colors.grey};
    border: 1px solid ${colors.grey};
    display: flex;
    flex-direction: column;
    align-items: center;

    label {
      color: ${colors.black};
      display: block;
      margin-bottom: 1rem;
    }

    input {
      padding: 0.5rem 3rem;
      border-radius: 0.3rem;
      text-align: center;
      border: 1px solid ${colors.dark}
    }
  `,
  ChartContainer: styled.div`
    background-color: ${colors.white};
    width: 100%;
    height: 500px;
    margin-top: 2em;
  `,
};
