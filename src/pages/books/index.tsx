import React, { useState } from "react";
import * as S from "./styles";
import { Loading } from "~/components";

const mock = [
  {
    title: "Titulo1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursu",
  },
];

const Books: React.FC = () => {
  const [load, setLoad] = useState(false);
  return (
    <S.Wrapper>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <S.Card
          key={item}
          title={mock[0].title}
          description={mock[0].description}
        >
          <S.Button onClick={() => setLoad(true)}>
            {load ? <Loading /> : "Rent"}
          </S.Button>
        </S.Card>
      ))}
    </S.Wrapper>
  );
};

export default Books;
