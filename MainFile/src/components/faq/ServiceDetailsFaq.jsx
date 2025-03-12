import { Accordion } from "react-bootstrap";
import ThumbFaq from "../../../public/assets/imgs/thumb/faq.jpg";
import Image from "next/image";

const ServiceDetailsFaq = () => {
  return (
    <>
      <section className="faq__area">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbFaq}
                  alt="FAQ Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__content">
                <h2 className="faq__title title-anim">
                  Product making for friendly users
                </h2>

                <div className="faq__list">
                  <Accordion
                    defaultActiveKey="0"
                    className="accordion"
                    id="accordionExample"
                  >
                    <Accordion.Item eventKey="0" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingOne"
                      >
                        Design should enrich our day
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Our design services starts and ends with a
                          best-in-class experience strategy that builds brands.
                          Through a process of iteration and prototyping design
                          interfaces that bring joy to people
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingTwo"
                      >
                        Bring their individual experience and creative
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          {
                            "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables."
                          }
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingThree"
                      >
                        Human centred design to challenges
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Our design services starts and ends with a
                          best-in-class experience strategy that builds brands.
                          Through a process of iteration and prototyping design
                          interfaces that bring joy to people
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFour"
                      >
                        Design should enrich our day
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Our design services starts and ends with a
                          best-in-class experience strategy that builds brands.
                          Through a process of iteration and prototyping design
                          interfaces that bring joy to people
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFive"
                      >
                        Developing core web applications
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Our design services starts and ends with a
                          best-in-class experience strategy that builds brands.
                          Through a process of iteration and prototyping design
                          interfaces that bring joy to people
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsFaq;
