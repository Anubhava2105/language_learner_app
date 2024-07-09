// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
// import { useAuth } from '../contexts/AuthContext';

// function SignupPage() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     username: '',
//     password: '',
//     confirmPassword: '',
//     general: ''
//   });
//   const { signup } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     let hasError = false;
//     let newErrors = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       username: '',
//       password: '',
//       confirmPassword: '',
//       general: ''
//     };

//     // Validation
//     if (!firstName) {
//       newErrors.firstName = 'First name is required';
//       hasError = true;
//     }

//     if (!lastName) {
//       newErrors.lastName = 'Last name is required';
//       hasError = true;
//     }

//     if (!email) {
//       newErrors.email = 'Email is required';
//       hasError = true;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Email address is invalid';
//       hasError = true;
//     }

//     if (!username) {
//       newErrors.username = 'Username is required';
//       hasError = true;
//     }

//     if (!password) {
//       newErrors.password = 'Password is required';
//       hasError = true;
//     } else if (password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters';
//       hasError = true;
//     }

//     if (!confirmPassword) {
//       newErrors.confirmPassword = 'Confirm password is required';
//       hasError = true;
//     } else if (confirmPassword !== password) {
//       newErrors.confirmPassword = 'Passwords do not match';
//       hasError = true;
//     }

//     if (hasError) {
//       setErrors(newErrors);
//     } else {
//       // Simulate signup and redirect
//       signup({ firstName, lastName, email, username, password });
//       navigate('/');
//     }
//   };

//   return (
//     <Container>
//       <Row className="justify-content-md-center">
//         <Col md={6}>
//           <h1 className="text-center">Sign Up</h1>
//           {errors.general && <Alert variant="danger">{errors.general}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="formFirstName">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter first name"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 isInvalid={!!errors.firstName}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.firstName}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group controlId="formLastName">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter last name"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 isInvalid={!!errors.lastName}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.lastName}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group controlId="formEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 isInvalid={!!errors.email}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.email}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group controlId="formUsername">
//               <Form.Label>Username</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 isInvalid={!!errors.username}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.username}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group controlId="formPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Enter password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 isInvalid={!!errors.password}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.password}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group controlId="formConfirmPassword">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Confirm password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 isInvalid={!!errors.confirmPassword}
//               />
//               <Form.Control.Feedback type="invalid">
//                 {errors.confirmPassword}
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Button variant="primary" type="submit">
//               Sign Up
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default SignupPage;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';

function SignupPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = {};

    // Validation
    if (!firstName) newErrors.firstName = 'First name is required';
    if (!lastName) newErrors.lastName = 'Last name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email address is invalid';
    if (!username) newErrors.username = 'Username is required';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!confirmPassword) newErrors.confirmPassword = 'Confirm password is required';
    else if (confirmPassword !== password) newErrors.confirmPassword = 'Passwords do not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrors({ general: errorData.message });
      } else {
        navigate('/');
      }
    } catch (error) {
      setErrors({ general: 'Something went wrong. Please try again later.' });
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h1 className="text-center">Sign Up</h1>
          {errors.general && <Alert variant="danger">{errors.general}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                isInvalid={!!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                isInvalid={!!errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                isInvalid={!!errors.confirmPassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-3">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupPage;
