import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as VscIcons from 'react-icons/vsc'
import * as MdIcons from 'react-icons/md'


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text'
    },
    {
        title: 'Art',
        path: '/art',
        icon: <FaIcons.FaPalette />,
        cName: 'nav-text'
    },
    {
        title: 'Articles',
        path: '/articles',
        icon: <FaIcons.FaFileAlt />,
        cName: 'nav-text'
    },
    {
        title: 'Chemistry',
        path: '/chemistry',
        icon: <FaIcons.FaReact />,
        cName: 'nav-text'
    },
    {
        title: 'College Content',
        path: '/college-content',
        icon: <FaIcons.FaUniversity />,
        cName: 'nav-text'
    },
    {
        title: 'Language',
        path: '/language',
        icon: <IoIcons.IoMdText />,
        cName: 'nav-text'
    },
    {
        title: 'Math',
        path: '/math',
        icon: <VscIcons.VscSymbolOperator />,
        cName: 'nav-text'
    },
    {
        title: 'Religious',
        path: '/religious',
        icon: <FaIcons.FaBible />,
        cName: 'nav-text'
    },
    {
        title: 'Sports',
        path: '/sports',
        icon: <MdIcons.MdOutlineSportsHandball />,
        cName: 'nav-text'
    }
]