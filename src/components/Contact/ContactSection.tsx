import type React from "react"
import ContactForm from "./ContactForm"
import GoogleMapPlaceholder from "./GoogleMapPlaceholder"

const ContactSection: React.FC = () => {
  return (
    <section className="contact_section layout_padding">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 col-lg-4 offset-md-1">
            <ContactForm />
          </div>
          <div className="col-md-6 col-lg-7 px-0">
            <GoogleMapPlaceholder />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
