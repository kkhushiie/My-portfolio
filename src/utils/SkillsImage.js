import html from '../assets/svg/skills/html.svg'

import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import react from '../assets/svg/skills/react.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'

import mysql from '../assets/svg/skills/mysql.svg'
import c from '../assets/svg/skills/c.svg'

import java from '../assets/svg/skills/java.svg'

import matlab from '../assets/svg/skills/matlab.svg'
import python from '../assets/svg/skills/python.svg'

import git from '../assets/svg/skills/git.svg'

import materialui from '../assets/svg/skills/materialui.svg'
import figma from '../assets/svg/skills/figma.svg'

import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import canva from '../assets/svg/skills/canva.svg'


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