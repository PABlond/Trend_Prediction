import { FC } from "react";

import { Style } from "./ErrorMessage.style";

type ErrorMessageType = {
  message?: string;
};

export const ErrorMessage: FC<ErrorMessageType> = ({ message }) => {
  return (
    <>
      {message && (
        <Style.Container>
          <Style.Message>{message}</Style.Message>
        </Style.Container>
      )}
    </>
  );
};
