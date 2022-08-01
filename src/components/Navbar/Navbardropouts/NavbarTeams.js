import React from 'react';
import {Link} from "react-router-dom";

const NavbarTeams = (props) => {
    return (
        <div
            className="flex justify-center items-center container mx-auto px-4   h-auto px-2 ">
            <div className="text-amber-50 container flex justify-around  flex-row divide-x divide-solid items-center">
                <button onClick={() =>props.setTeam("administration")} className="flex-1 justify-center items-center p-5 border-amber-50  border rounded-[400px] hover:bg-amber-100 hover:text-black focus:text-black focus:bg-amber-100">
                    Administration
                </button>
                <button onClick={() =>props.setTeam("web")} className=" flex-1 justify-center items-center p-5 border-amber-50  border rounded-[400px] hover:bg-amber-100 hover:text-black focus:text-black focus:bg-amber-100">
                    Web development
                </button>
                <button onClick={() =>props.setTeam("bots")} className="flex-1 justify-center items-center p-5 border-amber-50  border rounded-[400px] hover:bg-amber-100 hover:text-black focus:text-black focus:bg-amber-100">
                    Bots development
                </button>
                <button onClick={() =>props.setTeam("mobile")} className="flex-1 justify-center items-center p-5 border-amber-50  border rounded-[400px] hover:bg-amber-100 hover:text-black focus:text-black focus:bg-amber-100">
                    Mobile development
                </button>
            </div>
        </div>
    );
};

export default NavbarTeams;
