import React, {useState} from 'react';
import NavbarTeams from "../components/Navbar/Navbardropouts/NavbarTeams";

const TeamsPage = () => {
    const [team,setTeam] = useState("administration");
    return (
        <div className=" flex flex-col ">
            <NavbarTeams setTeam={setTeam}/>
            <div className="my-6 text-amber-50 text-xl flex flex-column mx-auto h-auto px-2  ">
                {(() => {
                    switch (team) {
                        case "administration":
                            return <div>LOLsdasd</div>
                        case "web":
                            return <div>LOLsdfg</div> /*<WebTeam/>*/
                        case "mobile":
                            return <div>LOedasL</div>/* <MobileTeam/>*/
                        case "bots":
                            return <div>aswqLOL</div>/* <BotsTeam/>*/
                    }})()
                }
            </div>
        </div>
    );
};

export default TeamsPage;
