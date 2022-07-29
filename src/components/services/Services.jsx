import React from 'react'
import './Services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
            </ul>
          </div>
        </article>
        {/*================== END OF UI/UX Design ========================*/}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
            </ul>
          </div>
        </article>
        {/*================== END OF WEB DEVELOPMENT =====================*/}
        <article className="service">
          <div className="service_head">
            <h3>Creation</h3>
            <ul className="service_list">
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
              <li>
                <BiCheck className="service_list-icon"/>
                <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
              </li>
            </ul>
          </div>
        </article>
        {/*============== END OF CONTENT CREATION =====================*/}

      </div>
    </section>
  )
}

export default Services