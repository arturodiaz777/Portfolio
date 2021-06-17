import Layout from "../components/Layout";
import Error from "./_error";
import { useState } from 'react';

const Contact = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log('Sending')
      let data = {
          name,
          email,
          message
        }
      fetch('/api/c', {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then((res) => {
          console.log('Response received')
          if (res.status === 200) {
            console.log('Response succeeded!')
            setSubmitted(true)
            setName('')
            setEmail('')
            setMessage('')
          }
        })
      }


  return (
    <Layout title="Contact me" footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" onChange={(e)=>{setName(e.target.value)}} name='name' placeholder="Your Name"></input>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" onChange={(e)=>{setEmail(e.target.value)}} name='email' placeholder="email@example.com"></input>
            </div>
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>{setMessage(e.target.value)}} name='message' placeholder="Hi Arturo!"></textarea>
            </div>
            <input type = "submit" className="btn btn-primary mb-3" onClick={(e)=>{handleSubmit(e)}}></input>
          </div>
        </div>
      </div>
    </Layout>
  );
};



export default Contact;
