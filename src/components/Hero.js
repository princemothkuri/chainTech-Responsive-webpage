import React from "react";

const Hero = () => {
  const cards = [
    {
      id: 0,
      img: "./images/img1.png",
      bgColor: "#d3fde6",
    },
    {
      id: 1,
      img: "./images/img2.png",
      bgColor: "#d8fcff",
    },
    {
      id: 2,
      img: "./images/img3.png",
      bgColor: "#fcd8d8",
    },
    {
      id: 3,
      img: "./images/img4.png",
      bgColor: "#e0e3fd",
    },
    {
      id: 4,
      img: "./images/img1.png",
      bgColor: "#d3fde6",
    },
    {
      id: 5,
      img: "./images/img2.png",
      bgColor: "#d8fcff",
    },
    {
      id: 6,
      img: "./images/img3.png",
      bgColor: "#fcd8d8",
    },
    {
      id: 7,
      img: "./images/img4.png",
      bgColor: "#e0e3fd",
    },
  ];

  return (
    <React.Fragment>
      <section className="hero">
        <div className="main">
          <header>
            <div className="left">
              <h2>Services We Offer</h2>
              <p>
                Discover the digital possibilities for your brand with our
                comprehensive suite of services.
              </p>
            </div>
            <div className="right">
              <svg
                width="99"
                height="90"
                viewBox="0 0 119 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_14)">
                  <rect
                    x="45"
                    y="12"
                    width="48"
                    height="48"
                    rx="24"
                    fill="white"
                  />
                  <rect
                    x="46"
                    y="13"
                    width="46"
                    height="46"
                    rx="23"
                    stroke="black"
                    stroke-width="2"
                  />
                  <g clip-path="url(#clip0_1_14)">
                    <path
                      d="M72.11 28.503L78.31 34.802L79 35.503L78.31 36.205L72.11 42.504L70.685 41.101L75.21 36.503H59V34.503H75.21L70.685 29.906L72.111 28.503H72.11Z"
                      fill="#131313"
                    />
                  </g>
                </g>
                <path
                  d="M6.89 29.5029L0.690001 35.8019L0 36.5029L0.690001 37.2049L6.89 43.5039L8.315 42.1009L3.79 37.5029H20V35.5029H3.79L8.315 30.9059L6.889 29.5029H6.89Z"
                  fill="#131313"
                />
                <defs>
                  <filter
                    id="filter0_d_1_14"
                    x="19"
                    y="0"
                    width="80"
                    height="60"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="4"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow_1_14"
                    />
                    <feOffset dy="14" />
                    <feGaussianBlur stdDeviation="15" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.808333 0 0 0 0 0.808333 0 0 0 0 0.808333 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_14"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_14"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_1_14">
                    <rect
                      width="20"
                      height="15"
                      fill="white"
                      transform="translate(59 28.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </header>
          <div className="cards">
            {cards.map((data) => {
              return (
                <React.Fragment>
                  <div
                    className="card"
                    style={{ backgroundColor: data.bgColor }}
                    key={data.id}
                  >
                    <header>
                      <div className="logo">
                        <div className="c">
                          <svg
                            width="10"
                            height="19"
                            viewBox="0 0 10 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.14165 15.725C8.92245 15.725 8.70326 15.829 8.57432 16.0109C7.83938 16.9726 6.66605 17.5964 5.36379 17.5964C3.15896 17.5964 1.36673 15.842 1.36673 13.6977V5.41929C1.36673 3.27497 3.17185 1.52052 5.36379 1.52052C6.70473 1.52052 7.89095 2.17031 8.6259 3.158C8.76773 3.33995 8.97403 3.45691 9.20611 3.45691H9.28348C9.8508 3.45691 10.1989 2.80711 9.87659 2.33926C8.92245 0.935705 7.29784 0 5.45404 0H5.29932C2.38534 0 0 2.32626 0 5.15937V13.8406C0 16.6737 2.38534 19 5.29932 19H5.45404C7.20759 19 8.75483 18.1683 9.72186 16.8817C10.0571 16.4138 9.73476 15.725 9.14165 15.725Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div className="cp">
                          <svg
                            width="6"
                            height="9"
                            viewBox="0 0 6 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 0.749999V8.25C6 8.66379 5.66379 9 5.25 9C4.83621 9 4.5 8.66379 4.5 8.25V5.81897C4.5 5.40517 4.16379 5.06897 3.75 5.06897H2.25C1.83621 5.06897 1.5 5.40517 1.5 5.81897V6.12931C1.5 6.5431 1.16379 6.87931 0.75 6.87931C0.336207 6.87931 0 6.5431 0 6.12931V2.57328C0 2.15948 0.336207 1.82328 0.75 1.82328C1.16379 1.82328 1.5 2.15948 1.5 2.57328V2.8319C1.5 3.24569 1.83621 3.5819 2.25 3.5819H3.76293C4.17672 3.5819 4.51293 3.24569 4.51293 2.8319V0.749999C4.51293 0.336206 4.84914 0 5.26293 0C5.66379 0.012931 6 0.336206 6 0.749999Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      <p>Join Development </p>
                    </header>
                    <div className="card-body">
                      <h3>Blockchain Development</h3>
                      <div
                        className="image"
                        style={{ marginBottom: "-5px", width: "100%" }}
                      >
                        <img src={data.img} alt="" />
                      </div>
                    </div>
                    <div className="card-footer">
                      <button className={data.id === 1 ? "active" : ""}>
                        <span>Explore</span>
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="12.52"
                            cy="12.1935"
                            r="11.8566"
                            fill="url(#paint0_linear_1_116)"
                          />
                          <path
                            d="M14.1458 7.69617L18.2016 11.7428L18.653 12.1932L18.2016 12.6442L14.1458 16.6908L13.2136 15.7895L16.1737 12.8356H5.56982V11.5507H16.1737L13.2136 8.5975L14.1465 7.69617H14.1458Z"
                            fill="#1E1E23"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_1_116"
                              x1="24.3766"
                              y1="12.1935"
                              x2="0.663391"
                              y2="12.1935"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#00FFA7" />
                              <stop offset="1" stop-color="#FFFF00" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
