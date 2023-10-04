import { Fragment } from 'react';
import Nav from '../../Components/Nav/navegation';
import './contact.css'


export default function Contact() {
    return(
        <Fragment>
            <Nav itemMenu={"Contact"}/>
      <main className='main-container d-flex justify-content-center'>
        <section className='contact-main p-5 m-5 rounded-4'>
          <h2 className='contact-title text-center'>Contact</h2>
          <h3 className='text-center'>Leave us your information so we can contact you</h3>
          <form className='row g-3' action="" method='post'>
            <div className='col-md-6'>
              <label className='form-label' htmlFor="name">Name</label>
              <input className='form-control' type="text" id='name' name='name' required placeholder='Name'/>
            </div>
            <div className='col-md-6'>
              <label className='form-label' htmlFor="email">Email</label>
              <input className='form-control' type="email" id='email' name='email' required placeholder='example@gmail.com'/>
            </div>
            <div className='col-md-12'>
              <label className='form-label' htmlFor="message">Message</label>
              <textarea className='form-control w-100 rounded-3' name="message" id="message" cols="30" rows="10" required placeholder='I would like you to know...'></textarea>
            </div>
            <div className='col-12'>
              <button className='btn btn-send' type='submit'>Submit</button>
            </div>
          </form>
        </section>
      </main>
        </Fragment>
    )
}