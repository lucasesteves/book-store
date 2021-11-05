import React, { useState } from "react";
import * as S from "./styles";

const Login: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  return (
    <S.Wrapper>
      <S.Card>
        <S.Title color="primary">Book Store</S.Title>
        <S.Input
          type="text"
          placeholder="e-mail"
          value={form.email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, email: event.target.value })
          }
        />
        <S.Input
          type="text"
          placeholder="password"
          value={form.password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setForm({ ...form, password: event.target.value })
          }
        />
        <S.Button onClick={() => console.log("click")}>Entrar</S.Button>
      </S.Card>
    </S.Wrapper>
  );
};

export default Login;
