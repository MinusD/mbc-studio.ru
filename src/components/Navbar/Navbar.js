import React from 'react';
import {Link} from "react-router-dom";
import ArkchalisLogo from "../../dataunits/ArkchalisLogo";

const Navbar = () => {
    return (
        <div className="  flex flex-row justify-between   my-2 py-2 px-5   ">
            <div className="flex items-center">
                <ArkchalisLogo className="fill-white w-16"/>
                <Link to="/" className="text-amber-50 text-3xl my-auto font-archive m-3 block">
                    MBC Studio
                </Link>
            </div>

            <div className="text-amber-50 text-xl flex  divide-solid  justify-self-end items-center ">
                <Link to="/projects" className="m-2">
                    PROJECTS
                </Link>
                <Link to="/teams" className="m-2">
                    TEAMS
                </Link>
                <Link to="/about" className="mx-4">
                    ABOUT
                </Link>
            </div>

        </div>
    );
};

export default Navbar;
