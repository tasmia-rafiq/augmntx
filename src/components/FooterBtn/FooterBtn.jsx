import { useEffect, useRef, useState } from "react";
import "./FooterBtn.css";

const FooterBtn = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 0 ? setShowScroll(true) : setShowScroll(false);

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = (scrolled / scrollHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fbuttons">
        <a
          href="mailto:cr@augmntx.com"
          target="_blank"
          className="fbutton email"
          tooltip="Send details on Email"
        >
          <i className="fas fa-envelope" aria-hidden="true"></i>
        </a>

        <a
          href="https://wa.me/+919820045154?text=Hello AugmntX"
          target="_blank"
          className="fbutton whatsapp"
          tooltip="Quick Chat on Whatsapp"
        >
          <i className="fab fa-whatsapp" aria-hidden="true"></i>
        </a>

        <a
          target="_blank"
          className="fbutton mainfbutton"
          tooltip="Need help with finding developers? Lets Talk"
        >
          <i
            style={{ color: "#5271ff" }}
            className="far fa-comment-alt"
            aria-hidden="true"
          ></i>
        </a>
      </div>

      <div
        className={showScroll ? "scrollToTop active-progress" : "scrollToTop"}
        onClick={handleScrollTop}
      >
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          {" "}
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              transition: "stroke-dashoffset 10ms linear 0s",
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: `calc(307.919 - (307.919 * ${scrollProgress}) / 100)`,
            }}
          ></path>{" "}
        </svg>
      </div>
    </>
  );
};

export default FooterBtn;
