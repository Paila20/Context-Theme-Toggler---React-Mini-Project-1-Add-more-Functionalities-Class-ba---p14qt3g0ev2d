import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

const LocalThemedBox = () => {
  const {theme}=useContext(ThemeContext);
  const{localtheme,setLocaltheme}=useState(theme);


  return (
    <div className={`bg-${localtheme}`} style={{ width: '200px', height: '200px', border: '2px solid green' }} id="local-themed-box">
      <p id="local-themed-text-container" className={`txt-${localtheme}`}>
        Hiiii
      </p>
      <button className={`btn btn-${localtheme} txt-${localtheme}`} id="themed-button" onClick={()=>setLocaltheme(localtheme==="light"?"dark":"light")}>
      {localtheme === 'light' ? 'Toggle local theme to dark' : 'Toggle local theme to light'}
      </button>
    </div>
  );
};

export { LocalThemedBox };
