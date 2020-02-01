import React, { useState, useEffect } from 'react';

import './styles.css';

function RepoForm({ onSubmit, loader }){

    const [language, setLanguage] = useState('');
   
    async function handleSubmit(e){
        e.preventDefault();

        await onSubmit({
          language
        });
    }

    return(
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="">Linguagem</label>
            <select 
              name="language" 
              id="language" 
              required
              value={language}
              onChange={e => setLanguage(e.target.value)}
            > 
              <option value="JavaScript">JavaScript</option> 
              <option value="PHP">PHP</option> 
              <option value="Ruby">Ruby</option> 
              <option value="Python">Python</option> 
              <option value="css">CSS</option> 
              <option value="HTML">HTML</option> 
              <option value="Vue">Vue</option> 
              <option value="C">C</option>
              <option value="Kotlin">Kotlin</option>
              <option value="Dart">Dart</option>
              <option value="Rust">Rust</option>
              <option value="Elixir">Elixir</option>
              <option value="Shell">Shell</option>
            </select>        
          </div>
          <button type="submit">Buscar</button>
          <div class={loader}></div>
        </form>
    );
}

export default RepoForm;