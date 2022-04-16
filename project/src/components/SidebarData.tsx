import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as VscIcons from 'react-icons/vsc'
import * as MdIcons from 'react-icons/md'
import * as RiIcons from 'react-icons/ri'
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FaIcons.FaHome />,
        cName: 'nav-text',
    },

    {
        title: 'Categories',
        path: '#',
        icon: <FaIcons.FaListUl />,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Art',
                path: '/art',
                icon: <FaIcons.FaPalette />,
                cName: 'dropdown'

            },
            {
                title: 'Articles',
                path: '/articles',
                icon: <FaIcons.FaFileAlt />,
                cName: 'dropdown'
            },
            {
                title: 'Chemistry',
                path: '/chemistry',
                icon: <FaIcons.FaReact />,
                cName: 'dropdown'
            },
            {
                title: 'College Content',
                path: '/college-content',
                icon: <FaIcons.FaUniversity />,
                cName: 'dropdown'
            },
            {
                title: 'Language',
                path: '/language',
                icon: <IoIcons.IoMdText />,
                cName: 'dropdown'
            },
            {
                title: 'Math',
                path: '/math',
                icon: <VscIcons.VscSymbolOperator />,
                cName: 'dropdown'
            },
            {
                title: 'Religious',
                path: '/religious',
                icon: <FaIcons.FaBible />,
                cName: 'dropdown'
            },
            {
                title: 'Sports',
                path: '/sports',
                icon: <MdIcons.MdOutlineSportsHandball />,
                cName: 'dropdown'
            }
        ]
    },
    {
        title: 'Register a Book',
        path: '/register',
        icon: <GiIcons.GiArchiveRegister />,
        cName: 'nav-text',
    },
    {
        title: 'Update a Book',
        path: '/update',
        icon: <MdIcons.MdSystemUpdateAlt />,
        cName: 'nav-text',
    },
    {
        title: 'Dalete a Book',
        path: '/delete',
        icon: <MdIcons.MdDelete />,
        cName: 'nav-text',
    },
    {
        title: 'Team',
        path: '/team',
        icon: <BsIcons.BsPeopleFill />,
        cName: 'nav-text',
    },
    {
        title: 'Support',
        path: '/support',
        icon: <BsIcons.BsFillQuestionCircleFill />,
        cName: 'nav-text',
    },

]