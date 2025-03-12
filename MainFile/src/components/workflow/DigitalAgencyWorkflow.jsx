import { useEffect } from "react";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";

gsap.registerPlugin(ScrollTrigger);

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

const DigitalAgencyWorkflow = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        gsap.set(".fade_left", { x: -20, opacity: 0 });
        gsap.to(".fade_left", {
          scrollTrigger: {
            trigger: ".fade_left",
            start: "top center+=300",
          },
          x: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
          stagger: {
            each: 0.2,
          },
        });
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="workflow__area">
        <div className="container g-0 line pt-140 pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-sub-title title-anim">Workflow</h2>
                <h3 className="sec-title title-anim">How we work</h3>
              </div>
            </div>

            <div className="col-xxl-12 workflow__slider">
              <Swiper
                modules={[FreeMode]}
                spaceBetween={0}
                slidesPerView={1}
                freemode="true"
                loop={true}
                speed={2000}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">step 01</h4>
                      <h5 className="workflow__number">01</h5>
                      <h6 className="workflow__title">Audience</h6>
                      <p>Having these the marketplace to your business</p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">step 02</h4>
                      <h5 className="workflow__number">02</h5>
                      <h6 className="workflow__title">Plan & Sketch</h6>
                      <p>
                        Delicate and long-lasting with vitamins and nutritions
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">step 03</h4>
                      <h5 className="workflow__number">03</h5>
                      <h6 className="workflow__title">Customize</h6>
                      <p>
                        Creating brand identities for the digital experiences
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">step 04</h4>
                      <h5 className="workflow__number">04</h5>
                      <h6 className="workflow__title">User Testing</h6>
                      <p>
                        We look forward to engage with beyond the conventional
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">step 05</h4>
                      <h5 className="workflow__number">05</h5>
                      <h6 className="workflow__title">User Testing</h6>
                      <p>
                        We look forward to engage with beyond the conventional
                      </p>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="workflow__slide fade_left">
                      <h4 className="workflow__step">step 06</h4>
                      <h5 className="workflow__number">06</h5>
                      <h6 className="workflow__title">User Testing</h6>
                      <p>
                        We look forward to engage with beyond the conventional
                      </p>
                    </div>
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalAgencyWorkflow;
