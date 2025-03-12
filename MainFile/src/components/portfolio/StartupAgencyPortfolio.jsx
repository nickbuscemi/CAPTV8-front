import { Swiper, SwiperSlide } from "swiper/react";
import Portfolio41 from "../../../public/assets/imgs/portfolio/4/1.jpg";
import Portfolio42 from "../../../public/assets/imgs/portfolio/4/2.jpg";

// Import Swiper styles
import "swiper/css";
import Link from "next/link";
import Image from "next/image";

const StartupAgencyPortfolio = () => {
  return (
    <>
      <section className="portfolio__area-4">
        <div className="container-fluid line_4 pt-150">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="portfolio__sec-title text-anim">
                <h2 className="sec-subtile-6">Portfolio</h2>
                <h3 className="sec-title-6 title-anim">
                  Our selected <br /> projects
                </h3>
                <p>
                  View the full case study of our recent featured and awesome
                  works that we created for our clients.
                </p>
              </div>
            </div>
            <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8">
              <div className="portfolio__wrapper-4 portfolio__slider-4">
                <Swiper
                  spaceBetween={15}
                  slidesPerView={1}
                  loop={true}
                  speed={1500}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    1000: {
                      slidesPerView: 2,
                      spaceBetween: 60,
                    },
                    1200: {
                      slidesPerView: 2,
                      spaceBetween: 90,
                    },
                    1400: {
                      slidesPerView: 2,
                      spaceBetween: 120,
                    },
                  }}
                >
                  <SwiperSlide>
                    <div className="portfolio__item-4">
                      <Link href="/portfolio">
                        <div className="portfolio__item-inner">
                          <div className="portfolio__title-wrapper">
                            <h4 className="portfolio__title-4">
                              Lionpro Agency
                            </h4>
                            <h5 className="portfolio__subtitle-4">
                              02 May 2021
                            </h5>
                          </div>
                          <div className="portfolio__icon-link">
                            <span className="portfolio__icon-4">
                              <i className="fa-solid fa-arrow-right"></i>
                            </span>
                          </div>
                        </div>
                        <Image
                          priority
                          style={{ width: "100%", height: "auto" }}
                          src={Portfolio41}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__item-4">
                      <Link href="/portfolio">
                        <div className="portfolio__item-inner">
                          <div className="portfolio__title-wrapper">
                            <h4 className="portfolio__title-4">
                              Lionpro Agency
                            </h4>
                            <h5 className="portfolio__subtitle-4">
                              02 May 2021
                            </h5>
                          </div>
                          <div className="portfolio__icon-link">
                            <span className="portfolio__icon-4">
                              <i className="fa-solid fa-arrow-right"></i>
                            </span>
                          </div>
                        </div>
                        <Image
                          priority
                          style={{ width: "100%", height: "auto" }}
                          src={Portfolio42}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__item-4">
                      <Link href="/portfolio">
                        <div className="portfolio__item-inner">
                          <div className="portfolio__title-wrapper">
                            <h4 className="portfolio__title-4">
                              Lionpro Agency
                            </h4>
                            <h5 className="portfolio__subtitle-4">
                              02 May 2021
                            </h5>
                          </div>
                          <div className="portfolio__icon-link">
                            <span className="portfolio__icon-4">
                              <i className="fa-solid fa-arrow-right"></i>
                            </span>
                          </div>
                        </div>
                        <Image
                          priority
                          style={{ width: "100%", height: "auto" }}
                          src={Portfolio41}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__item-4">
                      <Link href="/portfolio">
                        <div className="portfolio__item-inner">
                          <div className="portfolio__title-wrapper">
                            <h4 className="portfolio__title-4">
                              Lionpro Agency
                            </h4>
                            <h5 className="portfolio__subtitle-4">
                              02 May 2021
                            </h5>
                          </div>
                          <div className="portfolio__icon-link">
                            <span className="portfolio__icon-4">
                              <i className="fa-solid fa-arrow-right"></i>
                            </span>
                          </div>
                        </div>
                        <Image
                          priority
                          style={{ width: "100%", height: "auto" }}
                          src={Portfolio41}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__item-4">
                      <Link href="/portfolio">
                        <div className="portfolio__item-inner">
                          <div className="portfolio__title-wrapper">
                            <h4 className="portfolio__title-4">
                              Lionpro Agency
                            </h4>
                            <h5 className="portfolio__subtitle-4">
                              02 May 2021
                            </h5>
                          </div>
                          <div className="portfolio__icon-link">
                            <span className="portfolio__icon-4">
                              <i className="fa-solid fa-arrow-right"></i>
                            </span>
                          </div>
                        </div>
                        <Image
                          priority
                          style={{ width: "100%", height: "auto" }}
                          src={Portfolio42}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="portfolio__item-4">
                      <Link href="/portfolio">
                        <div className="portfolio__item-inner">
                          <div className="portfolio__title-wrapper">
                            <h4 className="portfolio__title-4">
                              Lionpro Agency
                            </h4>
                            <h5 className="portfolio__subtitle-4">
                              02 May 2021
                            </h5>
                          </div>
                          <div className="portfolio__icon-link">
                            <span className="portfolio__icon-4">
                              <i className="fa-solid fa-arrow-right"></i>
                            </span>
                          </div>
                        </div>
                        <Image
                          priority
                          style={{ width: "100%", height: "auto" }}
                          src={Portfolio41}
                          alt="Portfolio Image"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div className="container line_4 portfolio6__line">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyPortfolio;
