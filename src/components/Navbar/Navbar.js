import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-center items-center container mx-auto px-4 border-amber-50 border-2 m-3   rounded-2xl h-auto p-2 ">
            <div className="container flex flex-row divide-x divide-solid">
                <div className="m-auto">

                    <Link to="/" className="text-amber-50 text-3xl my-auto font-archive m-auto block">
                        MBC Studio
                    </Link>

                </div>

                <div className="text-amber-50 text-xl flex basis-5/6 divide-solid  justify-end items-center">
                    <Link to="/projects" className="m-2">
                        PROJECTS
                    </Link>
                    <Link to="/teams" className="m-2">
                        TEAMS
                    </Link>
                    <Link to="/about" className="m-2">
                        ABOUT
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
