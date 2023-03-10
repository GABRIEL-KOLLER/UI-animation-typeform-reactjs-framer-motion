import React from 'react';
import { FirstAndSecond } from './components/FirstAndSecond';
import { Header } from './components/Header';
import { Main, Section, Sticky } from "./styles";
import GlobalStyles from './styles/global';

function App() {
  React.useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <>
      <GlobalStyles />

      <Header children={undefined} />

      <Main style={{ height: '1610vh' }}>
        <Section style={{ height: '72.7%' }}>
          <FirstAndSecond children={undefined} />
        </Section>

        <Section style={{ height: '9.7%' }}>
          <Sticky className="third" />
        </Section>


        <Section style={{ height: '10.1%' }}>
          <Sticky className="fourth" />
        </Section>
      </Main>

    </>
  )
}

export default App
