import React from 'react'
import SubjectIcon from '@material-ui/icons/Subject';
import ForumIcon from '@material-ui/icons/Forum';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import HelpIcon from '@material-ui/icons/Help';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const SidebarData=[
   { 
       title: "Temas",
       icon: <SubjectIcon/>,
       link: "/Temas"
    },
    { 
        title: "Foro",
        icon: <ForumIcon/>,
        link: "/Foro"
     },
     { 
        title: "Estadísticas",
        icon: <EqualizerIcon/>,
        link: "/Estadisticas"
     },
     { 
        title: "Ayuda",
        icon: <HelpIcon/>,
        link: "/Ayuda"
     },
     { 
        title: "Cerrar sesión",
        icon: <ExitToAppIcon/>,
        link: "/"
     },
     
]
