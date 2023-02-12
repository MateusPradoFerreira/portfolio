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
            Mateus do Prado Ferreira, 18 anos… Sou Web Developer e Web Designer,
            formado como técnico em informática pelo Instituto Federal de
            Educação, Ciência e Tecnologia de Rondônia. Comecei a programar há 3
            anos, tendo realizado diversos projetos - tanto de ensino quanto
            pessoais - em diferentes áreas, desde trabalhos com a Unity até
            blogs. Há aproximadamente 1 ano e meio, me fixei no desenvolvimento
            e design web.
          </p>
          <p>
            Tenho grande paixão pelo visual, pelo senso de estética, o que,
            junto do gosto por lógica, me levou a me apegar firmemente a área de
            front end. Aplicar o que eu aprendi no Instituto, para construir
            aplicações incríveis, e que geram experiências únicas aos seus
            usuários, é simplesmente deslumbrante.
          </p>
          <p>
            Atualmente, busco por experiência profissional na área de
            desenvolvimento. Apesar da inexperiência, acredito que posso ofertar
            um trabalho de qualidade e de confiança.
          </p>
        </Description>
      </ContainerInfos>
    </Container>
  );
}
