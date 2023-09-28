import { globalStyles } from './globalStyles';
import { Header } from './layouts/Header';
import { AboutOne } from './layouts/AboutOne';
import { Separator } from './components/Separator';
import { AboutMe } from './layouts/AboutMe';
import { Experiences } from './layouts/Experiences';
import { LatestProjects } from './layouts/LatestProjects';
import { MyArts } from './layouts/MyArts';
import { Contact } from './layouts/Contact';

function App() {
    globalStyles();
    return (
        <>
            <Header />
            <AboutOne />
            <Separator top={60} bottom={60} />
            <AboutMe />
            <Experiences />
            <LatestProjects />
            <Separator top={60} bottom={60} />
            {/* <MyArts /> */}
            <Contact />
        </>
    );
}

export default App;
