import {
    Container,
    WaveGrey,
    Content,
    Technologies,
    Heading,
    General,
    Description,
    TechnologiesContainer,
    ExperiencesContainer,
    TechnologieBox,
    TechnologieIcon,
    ExperienceBox,
    ExperienceInfos,
    Period,
    Area,
    ExperienceDescription,
    SideDecoration,
    ExperienceIcon,
} from './styles';
import SVGWaveGrey from '../../assets/svg/WaveGrey.svg';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaSass } from 'react-icons/fa';
import { DiJavascript1, DiPhp, DiMysql, DiPython } from 'react-icons/di';
import { SiNextdotjs } from 'react-icons/si';
import { RxStitchesLogo } from 'react-icons/rx';
import { TbBrandBootstrap, TbApi } from 'react-icons/tb';
import { MdWorkOutline } from 'react-icons/md';
import { useState } from 'react';

export function Experiences() {
    const [animation, setAnimation] = useState(false);
    function ShowAnimations() {
        if (document.documentElement.scrollTop > 1450) {
            setAnimation(true);
        }
    }
    window.onscroll = () => ShowAnimations();

    return (
        <>
            <Container id="Experiences">
                <Content>
                    <Heading big>Habilidades & Experiências</Heading>
                    <General>
                        <Technologies>
                            <Description>
                                Abaixo estão listadas as principais tecnologias
                                as quais tenho domínio.
                            </Description>
                            <Heading>Tecnologias</Heading>
                            <TechnologiesContainer>
                                <Technologie
                                    animation={animation}
                                    delay={1}
                                    Icon={AiFillHtml5}
                                    name="HTML5"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={2}
                                    Icon={FaCss3Alt}
                                    name="CSS3"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={3}
                                    Icon={DiJavascript1}
                                    name="Java Script"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={4}
                                    Icon={FaReact}
                                    name="React.js"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={5}
                                    Icon={SiNextdotjs}
                                    name="Next.js"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={6}
                                    Icon={DiPhp}
                                    name="PHP"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={7}
                                    Icon={RxStitchesLogo}
                                    name="Stitches"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={8}
                                    Icon={FaSass}
                                    name="sass"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={9}
                                    Icon={TbBrandBootstrap}
                                    name="Bootstrap"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={10}
                                    Icon={TbApi}
                                    name="Rest API"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={11}
                                    Icon={DiMysql}
                                    name="MySQL"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={12}
                                    Icon={DiPython}
                                    name="Python"
                                />
                            </TechnologiesContainer>
                        </Technologies>
                        <ExperiencesContainer>
                            <Heading right black css={{ marginBottom: 30 }}>
                                Experiências
                            </Heading>
                            <Experience
                                animation={animation}
                                delay={1}
                                area="Web Developer"
                                description="estou em busca da minha primeira experiência profissional na área"
                                period="Atualmente"
                            />
                            <Experience
                                animation={animation}
                                delay={2}
                                area="Web Designer"
                                description="estou em busca da minha primeira experiência profissional na área"
                                period="Atualmente"
                            />
                        </ExperiencesContainer>
                    </General>
                </Content>
            </Container>
            <WaveGrey src={SVGWaveGrey} alt="" />
        </>
    );
}

export const Experience = ({ area, description, period, animation, delay }) => {
    return (
        <ExperienceBox
            animation={animation}
            css={{ animationDuration: `${delay}s` }}
        >
            <ExperienceInfos>
                <Period>{period}</Period>
                <Area>{area}</Area>
                <ExperienceDescription>{description}</ExperienceDescription>
            </ExperienceInfos>
            <SideDecoration>
                <MdWorkOutline className={ExperienceIcon()} />
                <div></div>
            </SideDecoration>
        </ExperienceBox>
    );
};

export const Technologie = ({ Icon, name, animation, delay }) => {
    return (
        <TechnologieBox
            animation={animation}
            css={{ animationDuration: `${delay / 4}s` }}
        >
            <Icon className={TechnologieIcon()} />
            <span>{name}</span>
        </TechnologieBox>
    );
};
