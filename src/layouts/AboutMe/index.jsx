import {
    Container,
    Heading,
    SummaryText,
    ContainerInfos,
    Img,
    Description,
} from './styles';

import IMGAboutMe from '../../assets/svg/AboutMe.svg';

export function AboutMe() {
    return (
        <Container id="AboutMe">
            <Heading>Sobre Mim</Heading>
            <ContainerInfos>
                <Img src={IMGAboutMe} alt="" />
                <Description>
                    <p>
                        Mateus do Prado Ferreira, 18 anos… Sempre me interessei
                        por informática e design no geral. Por conta disso,
                        concluí meu ensino médio no Instituto Federal de
                        Educação, Ciência e Tecnologia de Rondônia ( IFRO -
                        Campus Cacoal ), onde me apaixonei por programação.
                    </p>
                    <p>
                        Possuo experiência com, html, css, javascript, react,
                        next e python.
                    </p>
                    <p>
                        Atualmente, busco por experiência profissional na área
                        de desenvolvimento. Apesar da inexperiência, acredito
                        que posso ofertar um trabalho de qualidade e de
                        confiança.
                    </p>
                </Description>
            </ContainerInfos>
        </Container>
    );
}
