import React, { useState } from 'react'

import '../styles/form.css'

function ContactForm() {
  return (
    <div className="form_cont">
      <form className="form">
        <h1>Send us a message</h1>
        <ul className="form_ul">
          <li>
            <label>Name:</label>
            <input type="text" name="name" />
          </li>
          <li>
            <label>Email:</label> <input type="email" name="email" />
          </li>
          <li>
            <label>Message:</label>
            <textarea name="message" />
          </li>
          <button type="button">Submit</button>
        </ul>
      </form>
    </div>
  )
}

export default ContactForm
