import React from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import SectionTitle from "../Global/SectionTitle"

export default function Contact() {
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
        <div className="md-input-main">
          <div className="md-input-box">
            <input
              name="name"
              id="name"
              type="text"
              className="md-input"
              autoComplete="off"
              placeholder=" "
            />
            <label htmlFor="name" className="md-label">
              Name
            </label>
            <div className="md-input-underline border-opacity-25" />
          </div>
        </div>

        <div className="md-input-main">
          <div className="md-input-box">
            <input
              name="email"
              id="email"
              type="text"
              className="md-input"
              placeholder=" "
              autoComplete="off"
            />
            <label htmlFor="email" className="md-label">
              Email
            </label>
            <div className="md-input-underline border-opacity-25" />
          </div>
        </div>

        <div className="md-input-main mt-8 sm:mt-12">
          <div className="md-input-box">
            <textarea
              name="text"
              id="text"
              className="md-input  h-20 "
              placeholder=" "
              autoComplete="off"
            />
            <label htmlFor="text" className="md-label">
              Your Message
            </label>
            <div className="md-input-underline" />
          </div>
        </div>

        <button className="btn btn-primary mt-12 lg:w-40 lg:h-12 lg:py-2">
          Lets Talk
        </button>
      </form>
      <div
        name="contact-text"
        className="w-full lg:w-1/3 lg:mx-12 text-center lg:text-left py-8"
      >
        <p className="text-primary">Lets Talk</p>

        <SectionTitle text="Contact Me" left={true} />
        <p className="text-secondary-text py-2">
          If you have any questions, please feel free to drop me a line. I'll get back to you as soon as I can. 
        </p>
        <p className="text-secondary-text py-1">
          You can also reach out to me through LinkedIn or via the email on my GitHub profile!
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
