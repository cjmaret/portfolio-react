import React, { useEffect, createContext } from 'react';
import { Route } from 'react-router-dom';
import Header from '../header/Header.js';
import Lead from '../lead/Lead.js';
import About from '../about/About.js';
import Projects from '../projects/Projects.js';
import Contact from '../contact/Contact.js';
import Footer from '../footer/Footer.js';
import LoadingScreen from '../../images/logos/loading-logo.png';
import projectCards from '../../arrays/project-cards';
import {
  AppContainer,
  LoadingScreenComponent,
  LoadingScreenLogo,
  DraculaButtonContainer,
  DraculaButton,
  SpanContainer,
  EmojiSpan,
  TextSpan,
} from './styledApp';
export const DraculaContext = createContext();

function App() {
  const [loading, setLoading] = React.useState(false);
  const [draculaMode, setDraculaMode] = React.useState(false);
  const [isDraculaHovered, setIsDraculaHovered] = React.useState(false);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 2000);
  // }, []);

  function toggleDraculaMode() {
    setDraculaMode(!draculaMode);
  }

  function toggleDraculaHover() {
    setIsDraculaHovered(!isDraculaHovered);
  }

  useEffect(() => {
    const faviconUpdate = async () => {
      const favicon = document.getElementById('favicon');

      if (draculaMode) {
        favicon.href = '../images/favicons/favicon-red/apple-touch-icon.png';
      } else {
        favicon.href = '../images/favicons/favicon-blue/apple-touch-icon.png';
      }
    };
    faviconUpdate();
  }, [draculaMode]);

  return (
    <>
      {/* <LoadingScreenComponent>
        <LoadingScreenLogo src={LoadingScreen} alt='' />
      </LoadingScreenComponent> */}

      <DraculaContext.Provider value={draculaMode}>
        <AppContainer $loading={loading} draculaMode={draculaMode}>
          <DraculaButtonContainer
            onMouseEnter={toggleDraculaHover}
            onMouseLeave={toggleDraculaHover}
            isDraculaHovered={isDraculaHovered}>
            <DraculaButton
              onClick={toggleDraculaMode}
              draculaMode={draculaMode}
              isDraculaHovered={isDraculaHovered}>
              <EmojiSpan>🧛</EmojiSpan>
              <TextSpan>Dracula Mode {draculaMode ? 'on' : 'off'}</TextSpan>
            </DraculaButton>
          </DraculaButtonContainer>
          <Route>
            <Header />
          </Route>
          <Route name='lead'>
            <Lead />
          </Route>
          <Route name='about'>
            <About />
          </Route>
          <Route name='projects'>
            <Projects data={projectCards} />
          </Route>
          <Route name='about'>
            <Contact />
          </Route>
          <Route>
            <Footer />
          </Route>
        </AppContainer>
      </DraculaContext.Provider>
    </>
  );
}

export default App;