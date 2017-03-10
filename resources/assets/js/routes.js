import Main from './components/pages/Main'
import About from './components/pages/About'
import Contacts from './components/pages/Contacts'
import Education from './components/pages/Education'
import Projects from './components/pages/Projects'

export const routes = [
    { path: '/', component: Main},
    { path: '/about', component: About},
    { path: '/contacts', component: Contacts},
    { path: '/education', component: Education},
    { path: '/projects', component: Projects},
    { path: '*' , redirect: '/'}
];