import React from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {
  const { theme } = React.useContext(ThemeContext)  
  const txtcolor=`txt-${theme}`
 

  return (
    <div className={"container"+`bg-${theme}`} id="themed-page">
      <p id="themed-text-container" className={txtcolor}>
        lorem ipsum dolor iterit n stuff
      </p>
      <button className={`btn btn-${theme} txt-${theme}`} id="themed-button">
        Sup
      </button>
      <LocalThemedBox />
    </div>
  )
}

export { Page }
