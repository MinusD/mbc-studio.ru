import React from 'react';

const NavbarTeams = (props) => {
    return (
        <div
            className="mx-0  rounded-2xl h-auto  ">
            <div className="text-amber-50 container flex justify-between justify-items-stretch  flex-row  items-center">
                <button onClick={() => props.setTeam("administration")}
                        className="flex-1  items-center py-5 mr-1 my-1 border-amber-50  border-2 rounded-2xl hover:bg-amber-100 hover:text-black focus:text-black focus:bg-amber-100">
                    Administration
                </button>
                <button onClick={() => props.setTeam("web")}
                        className=" flex-1 justify-center items-center mx-1 py-5 my-1  border-amber-50  border-2 rounded-2xl hover:bg-amber-100 hover:text-black focus:text-black focus:bg-amber-100">
                    Web development
                </button>
                <button onClick={() => props.setTeam("bots")}
                        className="flex-1 justify-center items-center mx-1 py-5 my-1  border-amber-50  border-2 rounded-2xl hover:bg-amber-100 hover:text-black focus:text-black focus:bg-amber-100">
                    Bots development
                </button>
                <button onClick={() => props.setTeam("mobile")}
                        className="flex-1 justify-center items-center ml-1 py-5 my-1  border-amber-50  border-2 rounded-2xl hover:bg-amber-100 hover:text-black focus:text-black focus:bg-amber-100">
                    Mobile development
                </button>
            </div>
        </div>
    );
};

export default NavbarTeams;
