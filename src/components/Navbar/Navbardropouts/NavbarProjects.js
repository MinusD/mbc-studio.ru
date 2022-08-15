import React from 'react';
import ArkchalisLogo from "../../../dataunits/ArkchalisLogo";

const NavbarProjects = (props) => {
    return (
        <div
            className="rounded-2xl h-auto  ">
            <div className="text-amber-50 container flex justify-between justify-items-stretch  flex-row  items-center">
                <button onClick={() => props.setProject("arkhalis")}
                        className="flex-1 flex flex-row items-center  justify-items-startpy-5 mr-1 my-1 border-amber-50  border-2 rounded-2xl hover:bg-amber-100 hover:text-black focus:text-black focus:bg-amber-100">
                    <ArkchalisLogo className="m-5 w-12 fill-amber-50 hover:fill-black"/>
                    <div>Arkhalis</div>
                </button>
                <button onClick={() => props.setProject("...")}
                        className=" flex-1 justify-center items-center p-5 border-amber-50  border-2 rounded-2xl hover:bg-amber-100 hover:text-black focus:text-black focus:bg-amber-100">
                    ...
                </button>
            </div>
        </div>
    );
};

export default NavbarProjects;
