import {
    Container,
    Heading,
    SummaryText,
    ProjectsContainer,
    ProjectBox,
    ProjectImg,
    ProjectName,
    Area,
} from './styles';

import IMGanitory from '../../assets/images/pj/anitory.png';
import IMGembreve from '../../assets/images/pj/embreve.png';
import IMGallinone from '../../assets/images/pj/allinone.png';
import IMGbookscollection from '../../assets/images/pj/bookscolection.png';
import IMGgame from '../../assets/images/pj/game.png';
import IMGpoketex from '../../assets/images/pj/poketex.png';
import IMGfirewatchfanpage from '../../assets/images/pj/firewatchfanpage.png';
import Glossary from '../../assets/images/pj/Glossary.png';
import IMGpokedex from '../../assets/images/pj/pokedex.png';
import HonestGlobalHub from '../../assets/images/pj/HonestGlobalHub.png';
import Noodleex from '../../assets/images/pj/Noodleex.png';

export function LatestProjects() {
    return (
        <Container id="LatestProjects">
            <Heading>Últimos Projetos</Heading>
            <SummaryText>
                Estes são meus últimos projetos pessoais. <br /> Todos eles se
                encontram no meu github e no figma.
            </SummaryText>
            <ProjectsContainer>
                <Project
                    href="https://anitory.netlify.app/"
                    src={IMGanitory}
                    name="Anitory"
                    area="Development & Design"
                />
                <Project
                    href="https://allinonewb.netlify.app/"
                    src={IMGallinone}
                    name="AllInOne"
                    area="Development & Design"
                />
                <Project
                    href="https://bookscolection.000webhostapp.com/index.php"
                    src={IMGbookscollection}
                    name="BooksCollection"
                    area="Development & Design"
                />
                <Project
                    href="https://mateusfightgame.netlify.app/"
                    src={IMGgame}
                    name="Fighting Game"
                    area="Development & Design"
                />
                <Project
                    href="https://poketex.netlify.app/"
                    src={IMGpoketex}
                    name="Poketex"
                    area="Development & Design"
                />
                <Project
                    href="https://firewatchfanpage.netlify.app/"
                    src={IMGfirewatchfanpage}
                    name="Firewatch Fanpage"
                    area="Development"
                />
                <Project
                    href="https://www.figma.com/file/d0FiCtgs0LmPgccKRyYo0x/Pokedex?t=kKMNj2aRLAwAFPqe-0"
                    src={IMGpokedex}
                    name="Pokedex"
                    area="Design"
                />
                <Project
                    href="https://www.figma.com/file/Uh7iIVPDuZNg6gNV7b7cQZ/Noodleex?t=kKMNj2aRLAwAFPqe-0"
                    src={Noodleex}
                    name="Noodleex"
                    area="Design"
                />
                <Project
                    href="https://www.figma.com/file/haCTaDFvlYEcDeXoI68sWw/Honest-Global-Hub?t=kKMNj2aRLAwAFPqe-0"
                    src={HonestGlobalHub}
                    name="Honest Global Hub"
                    area="Design"
                />
                <Project
                    href="https://www.figma.com/file/lnezg2nPUtmoaypSfHwmyN/Glossary?t=kKMNj2aRLAwAFPqe-0"
                    src={Glossary}
                    name="Glossary"
                    area="Design"
                />
                <Project shortly />
                <Project shortly />
            </ProjectsContainer>
        </Container>
    );
}

export const Project = ({ src, name, area, shortly, href }) => {
    function handleRedirectUserToTheLink(shortly, href) {
        if (!shortly) window.location.href = href;
    }

    return (
        <ProjectBox
            shortly={shortly}
            onClick={() => handleRedirectUserToTheLink(shortly, href)}
        >
            <ProjectImg src={shortly ? IMGembreve : src} alt="project image" />
            <ProjectName>{shortly ? 'Em Breve' : name}</ProjectName>
            <Area>{shortly ? 'Development || Design' : area}</Area>
        </ProjectBox>
    );
};
