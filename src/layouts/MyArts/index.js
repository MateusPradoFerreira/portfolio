import {
  Container,
  Heading,
  SummaryText,
  Content,
  ArtsContainer,
  Drawing,
  JezgaContainer,
  Jezga,
  JezgaHeading,
  Button,
} from "./styles";

import jezga from "../../assets/images/Jezga.png";
import DW1 from "../../assets/images/dw/dw (1).jpeg";
import DW2 from "../../assets/images/dw/dw (2).jpeg";
import DW3 from "../../assets/images/dw/dw (3).jpeg";
import DW4 from "../../assets/images/dw/dw (4).jpeg";
import DW5 from "../../assets/images/dw/dw (5).jpeg";
import DW6 from "../../assets/images/dw/dw (6).jpeg";

export function MyArts() {
  return (
    <Container id="MyArts">
      <Heading>Minhas Artes</Heading>
      <SummaryText>
        Também adoro desenhar, aqui estão algumas das minhas melhores artes.
        Caso goste, considere me apoiar no instagram!
      </SummaryText>
      <Content>
        <ArtsContainer>
          <Drawing src={DW1} alt="Drawing" css={{ height: 306 }} />
          <Drawing src={DW6} alt="Drawing" css={{ height: 227 }} />
          <Drawing src={DW5} alt="Drawing" css={{ height: 266 }} />
          <Drawing src={DW4} alt="Drawing" css={{ height: 267 }} />
          <Drawing src={DW2} alt="Drawing" css={{ height: 306 }} />
          <Drawing src={DW3} alt="Drawing" css={{ height: 227 }} />
        </ArtsContainer>
        <JezgaContainer>
          <Jezga src={jezga} alt="" />
          <JezgaHeading>
            Conheça <span>Jezga</span>
          </JezgaHeading>
          <a href="https://www.instagram.com/mateuspratu/">
            <Button>CONFIRA MAIS ARTES</Button>
          </a>
        </JezgaContainer>
      </Content>
    </Container>
  );
}
