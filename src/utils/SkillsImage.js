import html from '../Assets/svg/skills/html.svg'

import css from '../Assets/svg/skills/css.svg'
import javascript from '../Assets/svg/skills/javascript.svg'
import nextJS from '../Assets/svg/skills/nextJS.svg'
import react from '../Assets/svg/skills/react.svg'
import typescript from '../Assets/svg/skills/typescript.svg'
import bootstrap from '../Assets/svg/skills/bootstrap.svg'
import mysql from '../Assets/svg/skills/mysql.svg'
import c from '../Assets/svg/skills/c.svg'
import java from '../Assets/svg/skills/java.svg'
import matlab from '../Assets/svg/skills/matlab.svg'
import python from '../Assets/svg/skills/python.svg'
import git from '../Assets/svg/skills/git.svg'
import materialui from '../Assets/svg/skills/materialui.svg'
import figma from '../Assets/svg/skills/figma.svg'
import microsoftoffice from '../Assets/svg/skills/microsoftoffice.svg'
import canva from '../Assets/svg/skills/canva.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        
        case 'html':
            return html;
        
        case 'css':
            return css;
       
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
       
        case 'react':
            return react;
       
        case 'typescript':
            return typescript;
        
        case 'bootstrap':
            return bootstrap;
      
      
        case 'mysql':
            return mysql;
       
        
        case 'c':
            return c;
        case 'java':
            return java;
        
        case 'matlab':
            return matlab;
        
        case 'python':
            return python;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'figma':
            return figma;
        case 'microsoft office':
            return microsoftoffice;
        case 'canva':
            return canva;
        default:
            break;
    }
}