import Layout from "../components/Layout";

const Contact = () => {

  async function handleOnSubmit(e) {
    e.preventDefault();
  
    const formData = {};
  
    Array.from(e.currentTarget.elements).forEach(field => {
      if ( !field.name ) return;
      formData[field.name] = field.value;
    });
  
    await fetch('/api/mail', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
  }
  return (
    <Layout title="Contact me" footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <form method="post" className="card card-body text-center" onSubmit={handleOnSubmit}>
            <div className="mb-3">
                <label htmFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' placeholder="Your Name"></input>
            </div>
            <div className="mb-3">
                <label htmFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' placeholder="email@example.com"></input>
            </div>
            <div className="mb-3">
                <label htmFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3"  name='message' placeholder="Hi Arturo!"></textarea>
            </div>
            <button className="btn btn-primary mb-3">Submit</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};



export default Contact;
