import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes, useLocation} from "react-router-dom";
import {publicRoutes} from "./routes/Routes";
import {CSSTransition, TransitionGroup} from "react-transition-group";

function App() {
    const location = useLocation();
    return (
        <div className=" bg-gray-900  min-h-screen overflow-auto max-w-screen">
            <Navbar/>
            <TransitionGroup>
                <CSSTransition
                    in={true}
                    key={location.pathname}
                    classNames="fade"
                    timeout={400}
                    unmountOnEnter>
                    <Routes location={location}>
                        {
                            publicRoutes.map(
                                route => <Route key={route.path} path={route.path} exact={route.exact}
                                                element={route.element}/>
                            )
                        }
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default App;
