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
import { DiJavascript1, DiPhp, DiMysql, DiPython, DiNodejs } from 'react-icons/di';
import { SiAngularjs, SiExpress, SiNextdotjs, SiNodedotjs } from 'react-icons/si';
import { RxStitchesLogo } from 'react-icons/rx';
import { TbBrandBootstrap, TbApi, TbBrandTailwind } from 'react-icons/tb';
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
                                Aqui estão algumas das principais tecnologias com as quais trabalho.
                            </Description>
                            <Heading>Tecnologias</Heading>
                            <TechnologiesContainer>
                                <Technologie
                                    animation={animation}
                                    delay={1}
                                    Icon={FaReact}
                                    name="React.js"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={5}
                                    Icon={SiAngularjs}
                                    name="Angular.js"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={3}
                                    Icon={SiNextdotjs}
                                    name="Next.js"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={8}
                                    Icon={AiFillHtml5}
                                    name="HTML5"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={4}
                                    Icon={FaCss3Alt}
                                    name="CSS3"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={2}
                                    Icon={DiJavascript1}
                                    name="Java Script"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={6}
                                    Icon={RxStitchesLogo}
                                    name="Stitches"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={11}
                                    Icon={FaSass}
                                    name="sass"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={7}
                                    Icon={TbBrandTailwind}
                                    name="Tailwind"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={9}
                                    Icon={TbApi}
                                    name="Rest API"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={12}
                                    Icon={SiNodedotjs}
                                    name="Node"
                                />
                                <Technologie
                                    animation={animation}
                                    delay={10}
                                    Icon={SiExpress}
                                    name="Express"
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
                                area="Ondev Des. De Software Ltda"
                                description="Desenvolvedor Front-end Angular"
                                period="Mar 2023 - Atualmente"
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
