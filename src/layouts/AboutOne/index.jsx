import {
    Container,
    Infos,
    Heading,
    OccupationArea,
    Text,
    Button,
    Photo,
} from './styles';

import Me from '../../assets/svg/Me.svg';

export function AboutOne() {
    return (
        <Container id="AboutOne">
            <Infos>
                <Heading>Olá, sou Mateus</Heading>
                <OccupationArea>
                    <span>web developer</span> & <span>web designer</span>
                </OccupationArea>
                <Text>
                    Sou Mateus do Prado Ferreira, designer e desenvolvedor
                    react, formado no Instituto Federal de Educação, Ciência e
                    Tecnologia de Rondônia. <br /> Precisando de um
                    designer/desenvolvedor? Vamos trabalhar juntos!
                </Text>
                <a href="#Contact">
                    <Button>contate-me</Button>
                </a>
            </Infos>
            <Photo
                src={Me}
                alt="Imagem de Mateus do Prado Ferreira, criador deste site"
            />
        </Container>
    );
}
