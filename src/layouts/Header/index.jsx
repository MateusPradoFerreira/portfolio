import {
    Container,
    NavBar,
    NavItem,
    SocialMediaIcons,
    Icon,
    IconCSS,
} from './styles';
import { BsInstagram, BsGithub, BsTwitter } from 'react-icons/bs';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { FiFigma } from 'react-icons/fi';

export function Header() {
    return (
        <Container>
            <NavBar>
                <NavItem href="#AboutOne">Mateus do prado</NavItem>
                <NavItem href="#AboutMe">sobre</NavItem>
                <NavItem href="#Experiences">Hab & Exp</NavItem>
                <NavItem href="#LatestProjects">projetos</NavItem>
                <NavItem href="#MyArts">Artes</NavItem>
                <NavItem href="#Contact">Contato</NavItem>
            </NavBar>
            <SocialMediaIcons>
                <Icon href="https://github.com/MateusPratu">
                    <BsGithub className={IconCSS()} />
                </Icon>
                <Icon href="https://www.linkedin.com/in/mateus-do-prado-8820a6257/">
                    <FaLinkedinIn className={IconCSS()} />
                </Icon>
                <Icon href="https://www.instagram.com/mateuspratu/">
                    <BsInstagram className={IconCSS()} />
                </Icon>
                <Icon href="https://www.figma.com/files/user/1088902559154225133?fuid=1088902559154225133">
                    <FiFigma className={IconCSS()} />
                </Icon>
            </SocialMediaIcons>
        </Container>
    );
}
