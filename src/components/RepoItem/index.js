import React from 'react';

import './styles.css';

function RepoItem({ rep }) {
  console.log(rep)
    return (
        <li className="repo-item">
            <header>
            <img src={rep.owner.avatar_url} alt={rep.name}/>
            <div className="repo-info">
                <strong>{rep.name}</strong>
            </div>
            </header>
           <p>Linguagem: {rep.language}</p>
            <a href={`https://github.com/${rep.owner.login}`} target="_blank">Acessar Github</a>
        </li>
    );
}

export default RepoItem;