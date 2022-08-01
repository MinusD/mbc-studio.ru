
import ErrorPage from "../pages/ErrorPage";
import ProjectsPage from "../pages/ProjectsPage";
import TeamsPage from "../pages/TeamsPage";
import AboutPage from "../pages/AboutPage";
import MainPage from "../pages/MainPage";

export const privateRoutes = []
export const publicRoutes = [
    {path:'/', element: <MainPage/> ,exact:true},
    {path:'/about', element: <AboutPage/>,exact:true},
    {path:'/teams', element: <TeamsPage/> ,exact:true},
    {path:'/projects', element: <ProjectsPage/> ,exact:true},
    {path:'*', element: <ErrorPage/> ,exact:true}
]
export const publicTeamRoutes = [
    {path:'/Administration', element: <MainPage/> ,exact:true},
    {path:'/about', element: <AboutPage/>,exact:true},
    {path:'/team', element: <TeamsPage/> ,exact:true},
    {path:'/projects', element: <ProjectsPage/> ,exact:true},
    {path:'*', element: <ErrorPage/> ,exact:true}
]