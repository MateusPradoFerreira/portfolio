import {
    Container,
    NavBar,
    NavItem,
    SocialMediaIcons,
    Icon,
    IconCSS,
    ButtonMenuMobile,
    ButtonMenuMobileInter
} from './styles';
import { BsInstagram, BsGithub, BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FiFigma } from 'react-icons/fi';
import { useState } from 'react';
import { AiOutlineCloseCircle, AiOutlineMenuUnfold } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';

export function Header() {

    const [open, setOpen] = useState(false);

    return (
        <Container>
            <ButtonMenuMobile>
                <HiMenu className={IconCSS()} onClick={() => setOpen(!open)} />
            </ButtonMenuMobile>
            <NavBar open={open}>
                <ButtonMenuMobileInter>
                    <AiOutlineCloseCircle className={IconCSS()} onClick={() => setOpen(!open)} />
                </ButtonMenuMobileInter>
                <NavItem href="#AboutOne" onClick={() => setOpen(!open)}>Mateus do prado</NavItem>
                <NavItem href="#AboutMe" onClick={() => setOpen(!open)}>sobre</NavItem>
                <NavItem href="#Experiences" onClick={() => setOpen(!open)}>Hab & Exp</NavItem>
                <NavItem href="#LatestProjects" onClick={() => setOpen(!open)}>projetos</NavItem>
                <NavItem href="#MyArts" onClick={() => setOpen(!open)}>Artes</NavItem>
                <NavItem href="#Contact" onClick={() => setOpen(!open)}>Contato</NavItem>
            </NavBar>
            <SocialMediaIcons>
                <Icon href="https://github.com/MateusPratu" target='_blank'>
                    <BsGithub className={IconCSS()} />
                </Icon>
                <Icon href="https://www.linkedin.com/in/mateus-do-prado-8820a6257/" target='_blank'>
                    <FaLinkedinIn className={IconCSS()} />
                </Icon>
                <Icon href="https://www.instagram.com/mateuspratu/" target='_blank'>
                    <BsInstagram className={IconCSS()} />
                </Icon>
                <Icon href="https://www.figma.com/files/user/1088902559154225133?fuid=1088902559154225133" target='_blank'>
                    <FiFigma className={IconCSS()} />
                </Icon>
            </SocialMediaIcons>
        </Container>
    );
}
