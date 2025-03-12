import Link from "next/link";
import Detail1 from "../../../public/assets/imgs/portfolio/detail/1.jpg";
import Detail2 from "../../../public/assets/imgs/portfolio/detail/2.jpg";
import Detail3 from "../../../public/assets/imgs/portfolio/detail/3.jpg";
import Detail4 from "../../../public/assets/imgs/portfolio/detail/4.jpg";
import Detail5 from "../../../public/assets/imgs/portfolio/detail/5.jpg";
import Detail6 from "../../../public/assets/imgs/portfolio/detail/6.jpg";
import Detail7 from "../../../public/assets/imgs/portfolio/detail/7.jpg";
import DetailShape from "../../../public/assets/imgs/portfolio/detail/shape.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import animationCharCome from "@/lib/utils/animationCharCome";

const PortfolioDetails1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="portfolio__detail">
        <div className="portfolio__detail-top">
          <div className="container g-0 line pt-110 pb-130">
            <span className="line-3"></span>

            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-7 col-md-7">
                <div className="sec-title-wrapper">
                  <h2 className="sec-title animation__char_come" ref={charAnim}>
                    Lionpro- <br />
                    Agency
                  </h2>
                </div>
              </div>

              <div className="col-xxl-4 col-xl-4 col-lg-5 col-md-5">
                <div className="portfolio__detail-info">
                  <ul>
                    <li>
                      Category <Link href="/category">Development</Link>
                    </li>
                    <li>
                      Client <span>Webflow</span>
                    </li>
                    <li>
                      Start Date <span>23 January 2021</span>
                    </li>
                    <li>
                      Handover <span>05 March 2021</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio__detail-thumb">
          <Image
            priority
            style={{ width: "auto", height: "auto" }}
            src={Detail1}
            alt="Portfolio Thumbnail"
            data-speed="auto"
          />
        </div>

        <div className="portfolio__detail-content">
          <div className="container g-0 line pt-140">
            <span className="line-3"></span>

            <div className="block-content">
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 className="portfolio__detail-title title-anim">
                    Build, streamline and evolve together with solution
                  </h2>
                </div>

                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="portfolio__detail-text">
                    <p>
                      Always ready to push the boundaries, especially when it
                      comes to our own platform, Our analytical eye to create a
                      site that was visually engaging and also optimised for
                      maximum performance. It also perfectly reflects the
                      journey to help it tell a story to increase its
                      understanding and drive action. To create a site that was
                      visually engaging for maximum performance.
                    </p>

                    <ul>
                      <li>+ Brand Development</li>
                      <li>+ UX/UI Design</li>
                      <li>+ Front-end Development</li>
                      <li>+ Copywriting</li>
                      <li>+ Shopify Development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="block-thumb">
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={Detail2}
                alt="Portfolio Image"
                data-speed="0.5"
              />
            </div>

            <div className="block-content  pt-140">
              <div className="row">
                <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                  <h2 className="portfolio__detail-title title-anim">
                    Visual and typograpy hierarchy
                  </h2>
                </div>

                <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                  <div className="portfolio__detail-text">
                    <p>
                      Visual hierarchy is the principle of arranging elements to
                      show their order of importance. Designers structure visual
                      characteristics—e.g., menu icons—so users can understand
                      information easily. By laying out elements logically and
                      strategically, designers influence users’ perceptions and
                      guide them to desired actions. Users notice larger
                      elements more easily can convert.
                    </p>

                    <div className="fonts">
                      <Image
                        priority
                        style={{ width: "253px", height: "auto" }}
                        src={DetailShape}
                        alt="Font Style"
                      />
                      <ul>
                        <li className="regular">
                          <span>regular</span> This is text message
                        </li>
                        <li className="medium">
                          <span>Medium</span> Medium typography
                        </li>
                        <li className="semibold">
                          <span>SemiBold</span> Just Amazing
                        </li>
                        <li className="blod">
                          <span>Blod</span> Awesome
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="block-gallery">
              <Image
                priority
                style={{ width: "50%", height: "auto" }}
                src={Detail3}
                alt="Portfolio Image"
              />
              <Image
                priority
                style={{ width: "50%", height: "auto" }}
                src={Detail4}
                alt="Portfolio Image"
              />
            </div>

            <div className="block-thumb">
              <Image
                priority
                style={{ width: "auto", height: "auto" }}
                src={Detail5}
                alt="Portfolio Image"
                data-speed="0.5"
              />
            </div>

            <div className="block-img-text">
              <Image
                priority
                width={375}
                style={{ height: "auto" }}
                src={Detail6}
                alt="Portfolio Image"
              />
              <Image
                priority
                width={375}
                style={{ height: "auto" }}
                src={Detail7}
                alt="Portfolio Image"
              />
              <p>
                For those of us who are blessed with good sight. So we seldom
                consider it. That’s why going off to investigate the whys and
                hows involved is a little like trying to get behind the wind{" "}
              </p>
            </div>

            <div className="row">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
                <div className="portfolio__detail-btns pt-150 pb-150">
                  <Link
                    href="/portfolio-details"
                    className="wc-btn-primary btn-hover"
                  >
                    <span></span> Prev Work
                  </Link>
                  <Link
                    href="/portfolio-details"
                    className="wc-btn-primary btn-hover"
                  >
                    <span></span> Next Work
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetails1;
