import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Home7P1 from "../../../public/assets/imgs/home-7/p1.jpg";
import Home7P2 from "../../../public/assets/imgs/home-7/p2.jpg";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Link from "next/link";

const CreativeAgencyPortfolio = () => {
  return (
    <>
      <section className="portfolio__area-7">
        <div className="container pt-140 pb-100">
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper text-anim">
                <h2 className="sec-title title-anim">work</h2>
                <p className="sec-text">
                  Worked with global brands & agency at the intersection of flat
                  design and digital technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__slider-7">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={30}
            slidesPerView={1}
            freeMode={true}
            loop={true}
            centeredSlides={true}
            speed={2000}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 70,
              },
            }}
          >
            <SwiperSlide>
              <div className="portfolio__slide-7">
                <div className="slide-img">
                  <Link href="/portfolio-details">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Home7P1}
                      alt="Portfolio Image"
                    />
                  </Link>
                </div>
                <div className="slide-content">
                  <Link href="/portfolio-details">
                    <h2 className="title">
                      {" "}
                      Lionpro <span>Agency</span>{" "}
                    </h2>
                  </Link>
                  <h4 className="date">02 May 2021</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio__slide-7">
                <div className="slide-img">
                  <Link href="/portfolio-details">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Home7P2}
                      alt="Portfolio Image"
                    />
                  </Link>
                </div>
                <div className="slide-content">
                  <Link href="/portfolio-details">
                    <h2 className="title">
                      {" "}
                      Lionpro <span>Agency</span>{" "}
                    </h2>
                  </Link>
                  <h4 className="date">02 May 2021</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio__slide-7">
                <div className="slide-img">
                  <Link href="/portfolio-details">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Home7P1}
                      alt="Portfolio Image"
                    />
                  </Link>
                </div>
                <div className="slide-content">
                  <Link href="/portfolio-details">
                    <h2 className="title">
                      {" "}
                      Lionpro <span>Agency</span>{" "}
                    </h2>
                  </Link>
                  <h4 className="date">02 May 2021</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio__slide-7">
                <div className="slide-img">
                  <Link href="/portfolio-details">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Home7P2}
                      alt="Portfolio Image"
                    />
                  </Link>
                </div>
                <div className="slide-content">
                  <Link href="/portfolio-details">
                    <h2 className="title">
                      {" "}
                      Lionpro <span>Agency</span>{" "}
                    </h2>
                  </Link>
                  <h4 className="date">02 May 2021</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio__slide-7">
                <div className="slide-img">
                  <Link href="/portfolio-details">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Home7P1}
                      alt="Portfolio Image"
                    />
                  </Link>
                </div>
                <div className="slide-content">
                  <Link href="/portfolio-details">
                    <h2 className="title">
                      {" "}
                      Lionpro <span>Agency</span>{" "}
                    </h2>
                  </Link>
                  <h4 className="date">02 May 2021</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio__slide-7">
                <div className="slide-img">
                  <Link href="/portfolio-details">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Home7P2}
                      alt="Portfolio Image"
                    />
                  </Link>
                </div>
                <div className="slide-content">
                  <Link href="/portfolio-details">
                    <h2 className="title">
                      {" "}
                      Lionpro <span>Agency</span>{" "}
                    </h2>
                  </Link>
                  <h4 className="date">02 May 2021</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio__slide-7">
                <div className="slide-img">
                  <Link href="/portfolio-details">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Home7P1}
                      alt="Portfolio Image"
                    />
                  </Link>
                </div>
                <div className="slide-content">
                  <Link href="/portfolio-details">
                    <h2 className="title">
                      {" "}
                      Lionpro <span>Agency</span>{" "}
                    </h2>
                  </Link>
                  <h4 className="date">02 May 2021</h4>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="portfolio__slide-7">
                <div className="slide-img">
                  <Link href="/portfolio-details">
                    <Image
                      priority
                      style={{ width: "100%", height: "auto" }}
                      src={Home7P2}
                      alt="Portfolio Image"
                    />
                  </Link>
                </div>
                <div className="slide-content">
                  <Link href="/portfolio-details">
                    <h2 className="title">
                      {" "}
                      Lionpro <span>Agency</span>{" "}
                    </h2>
                  </Link>
                  <h4 className="date">02 May 2021</h4>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default CreativeAgencyPortfolio;
