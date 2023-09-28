import {
  Container,
  Heading,
  SummaryText,
  ContainerInfos,
  Img,
  Description,
} from "./styles";

import IMGAboutMe from "../../assets/svg/AboutMe.svg";

export function AboutMe() {
  return (
    <Container id="AboutMe">
      <Heading>Sobre Mim</Heading>
      <ContainerInfos>
        <Img src={IMGAboutMe} alt="" />
        <Description>
          <p>
            Olá, sou Mateus do Prado Ferreira, um jovem Web Developer e Web Designer com paixão pelo mundo digital. Sou formado como técnico em informática pelo Instituto Federal de Educação, Ciência e Tecnologia de Rondônia. Meu fascínio pela programação começou há 3 anos, e desde então tenho trabalhado em uma variedade de projetos, incluindo trabalhos de ensino e projetos pessoais em diversas áreas, que vão desde o desenvolvimento de aplicações web com React, Angular e Next até a criação de jogos complexos com Unity e GameMaker
          </p>
          <p>
            Minha verdadeira paixão está no design e na estética visual, e é por isso que me dedico de forma sólida à área de front-end. Adoro combinar minha afinidade pela lógica com minha apreciação pelo design para criar experiências incríveis para os usuários. Colocar em prática o conhecimento adquirido no Instituto para construir aplicativos web impressionantes, capazes de proporcionar experiências únicas, é algo que me encanta profundamente.
          </p>
        </Description>
      </ContainerInfos>
    </Container>
  );
}
