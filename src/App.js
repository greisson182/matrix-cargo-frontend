import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import RepoForm from './components/RepoForm';
import RepoItem from './components/RepoItem';

function App() {

  const [repos, setRepos] = useState([]);
  const [loader, setLoader] = useState('');

  useEffect(() => {

    async function loadRepos(){

      setLoader('loader');
      const response = await api.get('/?language=javascript');

      setRepos(response.data);
      setLoader('');
    }

    loadRepos();
  },[]);

  async function hadleRepositories(data){

    setLoader('loader');
    const response = await api.get(`/?language=${data.language}`);

    setRepos(response.data);
    setLoader('');
    
  }

  return (
    <div id="app">
      <aside>
        <strong>Selecione a linguagem e encontro o repositório</strong>
        <RepoForm onSubmit={hadleRepositories} loader={loader} />  
      </aside>
      <main>
        <ul>
          {repos.map((rep, index) => (
            <RepoItem key={index} rep={rep} />
           ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
