import React, { useState } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { loadingRequest, loginRequest } from "~/store/login/actions";
import { ApplicationState } from "~/store";
import { Loading } from "~/components";
import { timeout } from "~/utils";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const { loading } = useSelector(({ login }: ApplicationState) => login);

  return (
    <S.Wrapper>
      <S.Card>
        <S.Title color="primary" align="center">
          Book Store
        </S.Title>
        <S.Input
          type="text"
          placeholder="enter with your name"
          value={name}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setName(event.target.value)
          }
        />
        <S.Button
          disabled={!name}
          onClick={() => {
            dispatch(loadingRequest());
            timeout(() => {
              dispatch(loginRequest(name));
            });
          }}
        >
          {loading ? <Loading /> : "Entrar"}
        </S.Button>
      </S.Card>
    </S.Wrapper>
  );
};

export default Login;
