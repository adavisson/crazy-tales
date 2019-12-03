import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Templates = () => {
  const [template, setTemplate] = useState({});
  
  useEffect(() => {
    const fetchData = async() => {
      const result = await axios(
        "http://madlibz.herokuapp.com/api/random"
      );

      setTemplate(result.data);
    }
    fetchData();
  }, []);

  console.log(template);

  return (
    <>
      <h1>Template</h1>
    </>
  );
}
 
export default Templates;