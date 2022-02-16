import styled from "styled-components";

import { colors } from "../../config";

export const Style = {
  Container: styled.div`
    background-color: ${colors.white};
    padding: 2rem;
    border-radius: 0.3rem;
    box-shadow: 0.5rem 0.5rem 0.5rem 0.1rem ${colors.grey};
    border: 1px solid ${colors.grey};
  `,
  H1: styled.h1`
    text-align: center;
    color: ${colors.dark};
  `,
};
