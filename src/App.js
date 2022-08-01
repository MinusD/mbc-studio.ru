import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {publicRoutes} from "./routes/Routes";
import ParticlesBg from "./animations/particleconfig";

function App() {
    return (
        <div className=" bg-gray-900  min-h-screen overflow-auto max-w-screen">
            <BrowserRouter>
                <ParticlesBg/>
                <Navbar/>
                <Routes>
                    {
                        publicRoutes.map(route => <Route key={route.path} path={route.path} element={route.element}
                                                      exact={route.exact}/>)}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
