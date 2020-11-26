import React, { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Contact() {
  const [status, setStatus] = useState("")

  const submitForm = ev => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        notify_success(
          "Email sent successfully. I'll be contacting you as soon as i can."
        )
      } else if (xhr.status === 403) {
        notify_error("Form not active, Sorry.")
      } else if (xhr.status === 400) {
        notify_error("Can't send an empty form.")
      } else if (xhr.status === 422) {
        notify_error("Email should be valid.")
      } else {
        notify_error("Error while sending your request.")
      }
    }
    xhr.send(data)
  }

  const notify_error = msg =>
    toast.error(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  const notify_success = msg =>
    toast.dark(msg, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })

  return (
    <div
      id="contact-section"
      className={` h-auto w-full px-10 sm:px-20 py-24 lg:py-32 xl:px-64 flex flex-col-reverse lg:flex-row`}
    >
      <form
        onSubmit={submitForm}
        action="https://formspree.io/f/xoqpnepq"
        method="POST"
        className="w-full lg:w-2/3 bg-secondary-background flex flex-col items-center lg:items-start justify-evenly px-12 py-12 lg:py-6 lg:mx-16"
      >
        <input
          name="name"
          id="name"
          placeholder="name"
          className=" input placeholder-secondary-text border-opacity-25 placeholder-opacity-25"
        ></input>
        <input
          name="email"
          id="email"
          placeholder="email"
          className="input placeholder-secondary-text border-opacity-25 placeholder-opacity-25"
        ></input>
        <textarea
          name="text"
          id="text"
          placeholder="text"
          className="input  mt-8 sm:mt-12 placeholder-secondary-text border-opacity-25 placeholder-opacity-25"
        ></textarea>
        <button className="btn btn-primary mt-12 lg:w-40 lg:h-12 lg:py-2">
          Lets Talk
        </button>
      </form>
      <div
        name="contact-text"
        className="w-full lg:w-1/3 lg:mx-12 text-center lg:text-left py-8"
      >
        <p className="text-primary">Lets Talk</p>
        <h2 className="text-4xl py-2">Contact Me</h2>
        <p className="text-secondary-text py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor
          nulla in porta faucibus. Nam at convallis magna. Vivamus vitae odio
          posuere, molestie lorem sit amet, ultricies quam. Nunc mollis mollis
          sapien, at ornare velit pretium non. Nam vel elit odio.
        </p>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  )
}
