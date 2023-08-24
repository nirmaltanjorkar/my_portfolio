import AnchorLink from "react-anchor-link-smooth-scroll";
import React from 'react';

const DotGroup = ({ selectedPage, setSelectedPage }) => {
    const selectedStyles = `relative bg-yellow absolute w-6 h-6 rounded-full
    border-4 border-white  right-1.5`;

    return ( 
    <div className= "flex flex-col gap-10 fixed top-[40%] right-10">
        <AnchorLink
        href = "#home"
        className ={`${selectedPage === "home" ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}        
        onClick={() => setSelectedPage("home")} 
        />

        <AnchorLink
        href = "#skills"
        className ={`${selectedPage === "skills" ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("skills")} 
        />

        <AnchorLink
        href = "#projects"
        className ={`${selectedPage === "projects" ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("projects")} 
        />
        
        <AnchorLink
        href = "#testimonials"
        className ={`${selectedPage === "testimonials" ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("testimonials")} 
        />
        
        <AnchorLink
        href = "#contact"
        className ={`${selectedPage === "contact" ? selectedStyles : "bg-dark-grey"}
        w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contact")} 
        />
    </div>
     );
};

export default DotGroup; 