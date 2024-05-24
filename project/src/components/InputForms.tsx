import React, { useState } from 'react';
import '../styles.css';

// interface
interface SubmittedData {
  // defining two property
  name: string;
  email: string;
}

// function. React.FC type is a ts type that provides type-checking and autocomplete for the component props.
const InputForms: React.FC = () => {
  // states:

  // The default state is an empty string, and useState<string> ensures the state is of type string
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  // the data is either the submitted data or null and default value is null
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);

  // to handle form submit
  const handleSubmit = (event: React.FormEvent) => {
    // this reload the page when user enter name and email
    event.preventDefault();
    setSubmittedData({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <div className="form-container">
      <h1>User Information Form</h1>
      <form onSubmit={handleSubmit} className="input-form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Information</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default InputForms;
