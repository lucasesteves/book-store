import React from "react";
import * as S from "./styles";

const mock = [
  {
    title: "Titulo1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas cursu",
  },
];

const RentedBooks: React.FC = () => {
  return (
    <S.Wrapper>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <S.Card
          key={item}
          title={mock[0].title}
          description={mock[0].description}
        >
          <S.Button onClick={() => {}}>Give back</S.Button>
        </S.Card>
      ))}
    </S.Wrapper>
  );
};

export default RentedBooks;
