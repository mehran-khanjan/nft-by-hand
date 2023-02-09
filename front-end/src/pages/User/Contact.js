import React from 'react';
import {Link} from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";
import {errorSweetAlertOptions} from "../../utils/helpers";

const mySweetAlert = withReactContent(Swal);

const Contact = () => {
    const handleContactFormSubmission = (e) => {
        e.preventDefault();

        mySweetAlert.fire(errorSweetAlertOptions({text: 'Something went wrong. Please Contact us via Telegram or email'}));
    }

    return(
        <React.Fragment>
            {/*contact*/}
            <section className="section section--first">
                <div className="container">
                    <div className="row">
                        {/*  breadcrumb  */}
                        <div className="col-12">
                            <ul className="breadcrumb">
                                <li className="breadcrumb__item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb__item breadcrumb__item--active">Contacts</li>
                            </ul>
                        </div>
                        {/*  end breadcrumb  */}

                        <div className="col-12 col-lg-5">
                            {/*  section title  */}
                            <div className="section__title section__title--left section__title--page">
                                <h1>Get In Touch</h1>
                                <p>
                                    We love to talk to our users.
                                </p>
                            </div>
                            {/*  end section title  */}

                            {/*  contacts  */}
                            <div className="contacts">
                                <div className="contacts__list">
                                    <a href="mailto:nftbyhand@gmail.com" className="contact">
								<span className="contact__icon">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm-.41,2-5.88,5.88a1,1,0,0,1-1.42,0L5.41,6ZM20,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V7.41l5.88,5.88a3,3,0,0,0,4.24,0L20,7.41Z"/></svg>
								</span>
                                        <span className="contact__text">nftbyhand@gmail.com</span>
                                    </a>
                                </div>

                                {/*  social  */}
                                <div className="social">
                                    <h3 className="social__title">Found us on social media</h3>
                                    <div className="social__list">
                                        <a href="https://twitter.com/NFTbyhand_com" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"/></svg>
                                        </a>

                                        <a href="https://t.me/nftbyhand" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.26465,2.42773a2.04837,2.04837,0,0,0-2.07813-.32421L2.26562,9.33887a2.043,2.043,0,0,0,.1045,3.81836l3.625,1.26074,2.0205,6.68164A.998.998,0,0,0,8.134,21.352c.00775.012.01868.02093.02692.03259a.98844.98844,0,0,0,.21143.21576c.02307.01758.04516.03406.06982.04968a.98592.98592,0,0,0,.31073.13611l.01184.001.00671.00287a1.02183,1.02183,0,0,0,.20215.02051c.00653,0,.01233-.00312.0188-.00324a.99255.99255,0,0,0,.30109-.05231c.02258-.00769.04193-.02056.06384-.02984a.9931.9931,0,0,0,.20429-.11456,250.75993,250.75993,0,0,1,.15222-.12818L12.416,18.499l4.03027,3.12207a2.02322,2.02322,0,0,0,1.24121.42676A2.05413,2.05413,0,0,0,19.69531,20.415L22.958,4.39844A2.02966,2.02966,0,0,0,22.26465,2.42773ZM9.37012,14.73633a.99357.99357,0,0,0-.27246.50586l-.30951,1.504-.78406-2.59307,4.06525-2.11695ZM17.67188,20.04l-4.7627-3.68945a1.00134,1.00134,0,0,0-1.35352.11914l-.86541.9552.30584-1.48645,7.083-7.083a.99975.99975,0,0,0-1.16894-1.59375L6.74487,12.55432,3.02051,11.19141,20.999,3.999Z"/></svg>
                                        </a>

                                        <a href="https://instagram.com/nftbyhand" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"/></svg>
                                        </a>

                                        <a href="https://www.linkedin.com/company/nft-by-hand" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z"/></svg>
                                        </a>
                                    </div>
                                </div>
                                {/*  end social  */}
                            </div>
                            {/*  end contacts  */}
                        </div>

                        {/*  form  */}
                        <div className="col-12 col-lg-6 offset-lg-1">
                            <form className="form" method="post" onSubmit={handleContactFormSubmission}>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form__group">
                                            <label htmlFor="name" className="form__label">Name</label>
                                            <input id="name" type="text" name="name" className="form__input" placeholder="Full name"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form__group">
                                            <label htmlFor="mail" className="form__label">Email</label>
                                            <input id="mail" type="text" name="mail" className="form__input" placeholder="example@gmail.com"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form__group">
                                            <label htmlFor="phone" className="form__label">Phone (WhatsApp or Telegram)</label>
                                            <input id="phone" type="text" name="phone" className="form__input" placeholder="800 543 - 2109"/>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form__group">
                                            <label htmlFor="subject" className="form__label">Subject</label>
                                            <input id="subject" type="text" name="subject" className="form__input" placeholder="Ex. Support"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form__group">
                                            <label htmlFor="message" className="form__label">Message</label>
                                            <textarea id="message" name="message" className="form__textarea" placeholder="Please enter your message..."></textarea>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <button type="submit" className="form__btn form__btn--small">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/*  end form  */}
                    </div>
                </div>
            </section>
            {/*  end contact  */}
        </React.Fragment>
    )
}

export default Contact;