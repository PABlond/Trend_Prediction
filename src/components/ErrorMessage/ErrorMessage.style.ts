import styled from "styled-components";

import { colors } from "../../config";

export const Style = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
  `,
  Message: styled.p`
    text-align: center;
    color: ${colors.alert};
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: underline;
    margin-top: 2rem;
    box-shadow: 0.1rem 0.1rem 0rem 0rem ${colors.alert};
    border: 1px solid ${colors.alert};
    border-radius: 0.3rem;
    padding: 1rem;
  `,
};
