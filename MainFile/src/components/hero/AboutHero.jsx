import { useEffect, useRef } from "react";
import Link from "next/link.js";
import Award from "../../../public/assets/imgs/about/award.png";
import Image from "next/image.js";
import animationWordCome from "@/lib/utils/animationWordCome";

const AboutHero = () => {
  const wordAnim = useRef();
  useEffect(() => {
    animationWordCome(wordAnim.current);
  }, []);
  return (
    <>
      <section className="hero__about">
        <div className="container g-0 line">
          <span className="line-3"></span>
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__about-content">
                <h1 className="hero-title animation__word_come" ref={wordAnim}>
                  We’re a full service creative and digital agency, working
                  globally with leargest brands.
                </h1>
                <div className="hero__about-info">
                  <div className="hero__about-btn">
                    <div className="btn_wrapper">
                      <Link
                        href="/service"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> Trends & <br />
                        technology
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="hero__about-text title-anim">
                    <p>
                      {
                        "Think of the world's most iconica and successful brands easily findable, impactful. Interactional and exceptional designs. Our story takes beginning in 2013"
                      }
                    </p>
                  </div>
                  <div className="hero__about-award">
                    <Image
                      priority
                      width={126}
                      height={82}
                      src={Award}
                      alt="Best Studio Award"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row hero__about-row">
            <div className="col-xxl-12">
              <div className="hero__about-video">
                <video loop muted autoPlay playsInline>
                  <source src="assets/video/video.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
