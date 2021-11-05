import React from "react";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loading: React.FC = () => {
  return (
    <S.Loading>
      <FontAwesomeIcon icon={faSpinner} />
    </S.Loading>
  );
};

export default Loading;
