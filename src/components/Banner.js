import React, { useEffect, useState } from "react";

const Banner = ({ screenWidth }) => {
  const [chain, setChain] = useState({
    width: "688",
    height: "84",
  });

  // const HandleFontSize = () => {
  //   if (screenWidth > 1025) {
  //     setChain({
  //       width: "688",
  //       height: "84",
  //     });
  //   } else if (screenWidth <= 1025 && screenWidth > 768) {
  //     setChain({
  //       width: "598",
  //       height: "74",
  //     });
  //   } else if (screenWidth <= 600 && screenWidth > 490) {
  //     setChain({
  //       width: "498",
  //       height: "54",
  //     });
  //   } else if (screenWidth <= 489 && screenWidth > 400) {
  //     setChain({
  //       width: "328",
  //       height: "36",
  //     });
  //   } else if (screenWidth <= 399 && screenWidth > 290) {
  //     setChain({
  //       width: "100%",
  //       height: "36",
  //     });
  //   }
  // };

  useEffect(() => {
    const HandleFontSize = () => {
      if (screenWidth > 1025) {
        setChain({
          width: "688",
          height: "84",
        });
      } else if (screenWidth <= 1025 && screenWidth > 768) {
        setChain({
          width: "598",
          height: "74",
        });
      } else if (screenWidth <= 600 && screenWidth > 490) {
        setChain({
          width: "498",
          height: "54",
        });
      } else if (screenWidth <= 489 && screenWidth > 400) {
        setChain({
          width: "328",
          height: "36",
        });
      } else if (screenWidth <= 399 && screenWidth > 290) {
        setChain({
          width: "100%",
          height: "36",
        });
      }
    };
    HandleFontSize();
  }, [screenWidth]);

  return (
    <header className="banner">
      <h1>WELCOME</h1>
      <h1 className="active">
        <span className="to">TO </span>
        <span className="chaintech">
          <svg
            width={chain.width}
            height={chain.height}
            viewBox="0 0 708 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.840031 43.5199C0.840031 35.1999 2.56003 27.7999 6.00003 21.3199C9.52003 14.7599 14.48 9.67989 20.88 6.07989C27.28 2.39989 34.64 0.559892 42.96 0.559892C53.52 0.559892 62.4 3.39989 69.6 9.07989C76.8 14.6799 81.44 22.3199 83.52 31.9999H58.2C56.68 28.7999 54.56 26.3599 51.84 24.6799C49.2 22.9999 46.12 22.1599 42.6 22.1599C37.16 22.1599 32.8 24.1199 29.52 28.0399C26.32 31.8799 24.72 37.0399 24.72 43.5199C24.72 50.0799 26.32 55.3199 29.52 59.2399C32.8 63.0799 37.16 64.9999 42.6 64.9999C46.12 64.9999 49.2 64.1599 51.84 62.4799C54.56 60.7999 56.68 58.3599 58.2 55.1599H83.52C81.44 64.8399 76.8 72.5199 69.6 78.1999C62.4 83.7999 53.52 86.5999 42.96 86.5999C34.64 86.5999 27.28 84.7999 20.88 81.1999C14.48 77.5199 9.52003 72.4399 6.00003 65.9599C2.56003 59.3999 0.840031 51.9199 0.840031 43.5199ZM170.378 1.39989V85.9999H146.858V52.0399H118.178V85.9999H94.6575V1.39989H118.178V33.1999H146.858V1.39989H170.378ZM237.357 72.1999H207.357L202.797 85.9999H178.077L208.917 1.39989H236.037L266.757 85.9999H241.917L237.357 72.1999ZM231.477 54.1999L222.357 26.8399L213.357 54.1999H231.477ZM297.943 1.39989V85.9999H274.423V1.39989H297.943ZM389.697 85.9999H366.177L334.857 38.7199V85.9999H311.337V1.39989H334.857L366.177 49.2799V1.39989H389.697V85.9999ZM466.815 1.39989V20.1199H444.255V85.9999H420.735V20.1199H398.415V1.39989H466.815ZM499.037 20.2399V34.0399H526.037V51.9199H499.037V67.1599H529.637V85.9999H475.517V1.39989H529.637V20.2399H499.037ZM538.379 43.5199C538.379 35.1999 540.099 27.7999 543.539 21.3199C547.059 14.7599 552.019 9.67989 558.419 6.07989C564.819 2.39989 572.179 0.559892 580.499 0.559892C591.059 0.559892 599.939 3.39989 607.139 9.07989C614.339 14.6799 618.979 22.3199 621.059 31.9999H595.739C594.219 28.7999 592.099 26.3599 589.379 24.6799C586.739 22.9999 583.659 22.1599 580.139 22.1599C574.699 22.1599 570.339 24.1199 567.059 28.0399C563.859 31.8799 562.259 37.0399 562.259 43.5199C562.259 50.0799 563.859 55.3199 567.059 59.2399C570.339 63.0799 574.699 64.9999 580.139 64.9999C583.659 64.9999 586.739 64.1599 589.379 62.4799C592.099 60.7999 594.219 58.3599 595.739 55.1599H621.059C618.979 64.8399 614.339 72.5199 607.139 78.1999C599.939 83.7999 591.059 86.5999 580.499 86.5999C572.179 86.5999 564.819 84.7999 558.419 81.1999C552.019 77.5199 547.059 72.4399 543.539 65.9599C540.099 59.3999 538.379 51.9199 538.379 43.5199ZM707.917 1.39989V85.9999H684.397V52.0399H655.717V85.9999H632.197V1.39989H655.717V33.1999H684.397V1.39989H707.917Z"
              fill="url(#paint0_linear_1_176)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_176"
                x1="779"
                y1="-23.5001"
                x2="-2.99997"
                y2="-23.5001"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#00FFA7" />
                <stop offset="1" stop-color="#FFFF00" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </h1>
      <p>
        From square one to engineering excellence! PixelPlex assists in
        full-cycle software development, jumps in to take it over, or brings
        dedicated top-demanded skills.
      </p>
      <button>
        <span>Get Started</span>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="15.5857" cy="15.9699" r="15.5857" fill="black" />
          <path
            d="M17.7225 10.8617L23.0539 16.3082L23.6472 16.9143L23.0539 17.5213L17.7225 22.9678L16.4971 21.7547L20.3882 17.779H6.44922V16.0497H20.3882L16.4971 12.0748L17.7234 10.8617H17.7225Z"
            fill="white"
          />
        </svg>
      </button>
    </header>
  );
};

export default Banner;
