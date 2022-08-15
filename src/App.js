import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes, useLocation} from "react-router-dom";
import {publicRoutes} from "./routes/Routes";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import Footer from "./components/Footer/Footer";

function App() {
    const location = useLocation();
    return (
        <div className="bg-gray-900  min-h-screen overflow-x-hidden overscroll-y-contain">
                <Navbar/>
                <div className="justify-center items-center overflow-x-hidden mx-3">
                    <TransitionGroup>
                        <CSSTransition
                            in={true}
                            key={location.pathname}
                            classNames="fade"
                            timeout={600}
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
                <Footer/>

        </div>

    );
}

export default App;
