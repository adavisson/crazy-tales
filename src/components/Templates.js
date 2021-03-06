import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Story from './Story';

const Templates = () => {
  const [template, setTemplate] = useState({ blanks: [] });
  const [values, setValues] = useState({});
  const [submitted, setSubmitted] = useState(false);
  // const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const fetchData = async() => {
      const result = await fetch(
        'https://madlibz.herokuapp.com/api/random',
      );
      const data = await result.json();
      setTemplate(data);
    }
    fetchData();
  }, []);



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
    return (
      <Form className="form" onSubmit={handleSubmit}>
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
    <div className="template">
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
    </div>
  );
}
 
export default Templates;