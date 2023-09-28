import {
    Container,
    WavePurple,
    Content,
    Heading,
    SummaryText,
    PersonalInformation,
    Infos,
    Head,
    Description,
    IndividualContact,
    IconCSS,
    Icon,
    Icon2CSS,
    Icon2,
    ContactForm,
    SocialMediaIcons,
    NavBar,
    Item,
    ContactFormRow,
    Input,
    TextArea,
    SubmitButton,
} from './styles';
import SVGWavePurple from '../../assets/svg/WavePurple.svg';

import { AiOutlineWhatsApp } from 'react-icons/ai';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsInstagram, BsGithub, BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FiFigma } from 'react-icons/fi';

export function Contact() {
    return (
        <>
            <WavePurple src={SVGWavePurple} alt="" />
            <Container id="Contact">
                <Content>
                    <Heading>Contato</Heading>
                    <PersonalInformation>
                        <Infos>
                            <Head>Informações Pessoais</Head>
                            <IndividualContact>
                                <Icon>
                                    <AiOutlineWhatsApp className={IconCSS()} />
                                </Icon>
                                <span>(69) 98437-3542</span>
                            </IndividualContact>
                            <IndividualContact>
                                <Icon>
                                    <MdOutlineAlternateEmail
                                        className={IconCSS()}
                                    />
                                </Icon>
                                <span>mateuspradoferreira123@gmail.com</span>
                            </IndividualContact>
                            <IndividualContact>
                                <Icon>
                                    <FaMapMarkerAlt className={IconCSS()} />
                                </Icon>
                                <span>
                                    Brasil, Rondônia, Cacoal, Rua Projetada 42{' '}
                                    <br />
                                    Bairro: Buritis Cep: 76968999
                                </span>
                            </IndividualContact>

                            <SocialMediaIcons>
                                <Icon2 href="https://github.com/MateusPratu" target='_blank'>
                                    <BsGithub className={Icon2CSS()} />
                                </Icon2>
                                <Icon2 href="https://www.linkedin.com/in/mateus-do-prado-8820a6257/" target='_blank'>
                                    <FaLinkedinIn className={Icon2CSS()} />
                                </Icon2>
                                <Icon2 href="https://www.instagram.com/mateuspratu/" target='_blank'>
                                    <BsInstagram className={Icon2CSS()} />
                                </Icon2>
                                <Icon2 href="https://www.figma.com/files/user/1088902559154225133?fuid=1088902559154225133" target='_blank'>
                                    <FiFigma className={Icon2CSS()} />
                                </Icon2>
                            </SocialMediaIcons>
                        </Infos>
                        <ContactForm
                            action="https://formspree.io/f/xvonkwgy"
                            method="POST"
                        >
                            <ContactFormRow>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="SEU EMAIL"
                                />
                            </ContactFormRow>
                            <ContactFormRow>
                                <TextArea
                                    name="message"
                                    type="text"
                                    placeholder="MENSAGEM"
                                />
                            </ContactFormRow>
                            <ContactFormRow>
                                <SubmitButton type="submit">
                                    ENVIAR EMAIL
                                </SubmitButton>
                            </ContactFormRow>
                        </ContactForm>
                    </PersonalInformation>
                    <NavBar>
                        <Item href="#AboutOne">Mateus do prado</Item>
                        <Item href="#AboutMe">sobre</Item>
                        <Item href="#Experiences">Hab & Exp</Item>
                        <Item href="#LatestProjects">projetos</Item>
                        <Item href="#MyArts">Artes</Item>
                        <Item href="#Contact">Contato</Item>
                    </NavBar>
                </Content>
            </Container>
        </>
    );
}
