import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName, language }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>full name:</S.WrapperFullName>
      <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink>
      <S.WrapperLanguage>{language}</S.WrapperLanguage>
    </S.Wrapper>
  );
};

export default RepositoryItem;
