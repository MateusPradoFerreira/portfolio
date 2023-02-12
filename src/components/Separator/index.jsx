import { Container, IconCSS } from './styles';
import { FaGitAlt, FaDocker, FaAngular, FaRocket } from 'react-icons/fa';
import {
    DiJava,
    DiJavascript1,
    DiJavascript,
    DiHtml5Connectivity,
    DiPhp,
    DiMysql,
    DiSass,
} from 'react-icons/di';
import {
    AiFillHtml5,
    AiFillGithub,
    AiFillAliwangwang,
    AiOutlineCodepen,
} from 'react-icons/ai';
import { RxStitchesLogo } from 'react-icons/rx';
import { FiFigma, FiGitlab } from 'react-icons/fi';
import { RiReactjsFill, RiVuejsFill } from 'react-icons/ri';
import { TbBrandReactNative } from 'react-icons/tb';
import { HiOutlineQrcode } from 'react-icons/hi';
import {
    SiBootstrap,
    SiJson,
    SiNextdotjs,
    SiReactivex,
    SiReactrouter,
} from 'react-icons/si';

export function Separator({ top, bottom }) {
    return (
        <Container css={{ marginTop: top, marginBottom: bottom }}>
            <AiFillGithub className={IconCSS()} />
            <DiJava className={IconCSS()} />
            <DiJavascript1 className={IconCSS()} />
            <DiJavascript className={IconCSS()} />
            <AiFillHtml5 className={IconCSS()} />
            <DiHtml5Connectivity className={IconCSS()} />
            <RxStitchesLogo className={IconCSS()} />
            <FiFigma className={IconCSS()} />
            <RiReactjsFill className={IconCSS()} />
            <TbBrandReactNative className={IconCSS()} />
            <DiPhp className={IconCSS()} />
            <FaDocker className={IconCSS()} />
            <HiOutlineQrcode className={IconCSS()} />
            <FaGitAlt className={IconCSS()} />
            <FiGitlab className={IconCSS()} />
            <AiOutlineCodepen className={IconCSS()} />
            <AiFillAliwangwang className={IconCSS()} />
            <SiBootstrap className={IconCSS()} />
            <RiVuejsFill className={IconCSS()} />
            <FaAngular className={IconCSS()} />
            <DiMysql className={IconCSS()} />
            <DiSass className={IconCSS()} />
            <SiJson className={IconCSS()} />
            <SiNextdotjs className={IconCSS()} />
            <SiReactivex className={IconCSS()} />
            <SiReactrouter className={IconCSS()} />
            <FaRocket className={IconCSS()} />
        </Container>
    );
}
