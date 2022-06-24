import React from "react";

export default function RepositoriesItem({name, linkRepo, fullName}){
    return(
        <div>
            <h2>
                {name}
            </h2>
            <h4>
                full name:
            </h4>
            <a href={linkRepo} target='_blank'>{fullName}</a>
        </div>
    )
}