import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Stack } from 'react-bootstrap';

import './App.css'
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGE } from './constants/constants';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './enum/SectionType.enum';
import { TextArea } from './components/TextArea';


function App() {

  const { 
    loading, 
    fromLanguage, 
    toLanguage, 
    fromText, 
    result, 
    interChangeLanguages, 
    setFromLanguages, 
    setToLanguages, 
    setFromText, 
    setResult 
  } = useStore()  
  

  return (  

    <Container fluid>
      <h2>Google translate</h2>  

      <Row>

        <Col>
        {/* Stack es como grid o flex, apila los elementos */}
          <Stack gap={2}>
            <LanguageSelector
              type={SectionType.From}
              value={fromLanguage}
              onChange={setFromLanguages}
          />
            <TextArea  
              type={SectionType.From} 
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>

        <Col xs='auto' >
          <Button variant= 'link' disabled= {fromLanguage === AUTO_LANGUAGE} onClick={interChangeLanguages}>
            <ArrowsIcon />
          </Button>         
        </Col>

        <Col>
          <Stack gap={2}>
            <LanguageSelector 
              type={SectionType.To}
              value= {toLanguage}
              onChange={setToLanguages}
            />
            <TextArea 
              loading={loading}
              type={SectionType.To} 
              value={result}
              onChange={setResult}
            />
          </Stack>
        </Col>

      </Row>

    </Container>

  )
}

export default App
// Llegamos al minuto 36:24 del vídeo
