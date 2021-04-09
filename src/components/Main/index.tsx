import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um atomo e react avançado escrito ao lado"
    />
    <S.Title>React avançado</S.Title>
    <S.Description>TypeScript, ReactJs, NextJs, ... </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor em frente a telas com códigos"
    />
  </S.Wrapper>
);

export default Main;
