import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Story from './Story';

const Templates = () => {
  const [template, setTemplate] = useState({ blanks: [] });
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const fetchData = async() => {
      const result = await axios(
        'https://madlibz.herokuapp.com/api/random',
      );

      setTemplate(result.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener('resize',() => {
      setWidth(window.innerWidth);
      });
    return () => window.removeEventListener('resize',() => setWidth(window.innerWidth));
  },[width]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true)
  }

  const handleChange = (event) => {
    setValues({
      ...values, [event.target.id]: event.target.value
    });
    console.log(values);
  }

  const renderForm = () => {
    let isDesktop;
    if (width < 1080){
      isDesktop = "mobile";
    } else {
      isDesktop = "desktop";
    }


    return (
      <Form className={isDesktop} onSubmit={handleSubmit}>
        {template.blanks.map((blank, index) => {
          return (
            <Form.Group>
              <Form.Label>{blank}</Form.Label>
              <Form.Control type="text" id={`word_${index}`} value={values[index]} onChange={handleChange} required/>
            </Form.Group>
          )
        })}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }

  const refreshPage = () => {
    window.location.reload(false);
  }

  return (
    <>
      <h1>{template.title}</h1>
      {!submitted && <Button onClick={refreshPage} variant="link">
        Different Story
      </Button>}
      <br/>
      {!submitted && renderForm()}
      {!!submitted && <Story template={template} values={Object.values(values)} />}
      <br/><br/><br/>
      {!!submitted && <Button variant="primary" onClick={refreshPage}>
        Another Story
      </Button>}
    </>
  );
}
 
export default Templates;