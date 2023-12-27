import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST request to your backend endpoint
    fetch('http://localhost:4000/api/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data added:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <p>Name</p>
          <input type='text' name='name' onChange={handleChange} value={formData.name} />
          <p>Password</p>
          <input type='password' name='password' onChange={handleChange} value={formData.password} />
          <button type='submit'>Login</button>
        </form>
      </div>
    </>
  );
}

export default App;
