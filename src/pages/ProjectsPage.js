import React, {useState} from 'react';
import NavbarProjects from "../components/Navbar/Navbardropouts/NavbarProjects";
import Arkhalis from "../dataunits/Arkhalis";

const ProjectsPage = () => {
    const [project,setProject] = useState("arkhalis");
    return (
        <div className="text-amber-50 text-xl">
            
            <div className="my-6 text-amber-50 text-xl flex flex-column mx-auto h-auto px-2  ">
                {(() => {
                    switch (project) {
                        case "arkhalis":
                            return <Arkhalis/>;
                        case "...":
                            return <div>LOLsdfg</div>
                    }})()
                }
            </div>
        </div>
    );
};

export default ProjectsPage;
