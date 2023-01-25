import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function ContactForm() {

  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const [botChecker, setBotChecker] = useState(false);

  const mailHandler = e => {
    setMail(e.target.value);
  }

  const botHandler = e => {
    setBotChecker(e.target.checked);
  }

  const msgHandler = e => {
    setMsg(e.target.value);
  }

  const submitHandler = () => {
    setMsg("");
    setMail("");
    setBotChecker(false);
  }


  return (
    <Form className='px-1 px-md-5 mx-auto mb-5 h-50 w-75' action="https://formspree.io/f/meqwogoz" method="POST">
      <h3 className='text-warning text-center mb-4'>Want to reach out?</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='text-warning mb-1'>Email address</Form.Label>
        <Form.Control id="useremail" name="email" type="email" placeholder="Enter email" value={mail} onChange={mailHandler} required />
        <Form.Text className="text-success">
          I'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='text-warning mb-1'>Message</Form.Label>
        <Form.Control id="usermessage" name="text" type="text" placeholder="Please enter your message" value={msg} onChange={msgHandler} required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check id="botcheck" name="botcheck" type="checkbox" value="botcheck" checked={botChecker} label="I am not a bot!" onChange={botHandler} className='text-warning' required />
      </Form.Group>
      <Button onSubmit={submitHandler} variant="success" type="submit" >
        Submit
      </Button>
    </Form>
  );
}

export default ContactForm;