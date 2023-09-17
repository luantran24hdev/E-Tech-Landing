<template>
  <div class="about-us">
    <div class="about-us__inner">
      <div class="left">
        <h1 class="transition-all delay-100 duration-75">
          {{ $tc("nav.about-us") }}
        </h1>
        <p class="transition-all delay-100 duration-75">
          {{ $tc("browse-our") }}
        </p>
        <div
          class="left__info flex sm:justify-start justify-around sm:flex-col flex-row"
        >
          <div class="flex flex-col mb-10">
            <svg
              width="234"
              height="58"
              viewBox="0 0 234 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.08 21.88C30.6533 21.88 33.9067 22.6 36.84 24.04C39.7733 25.48 42.0933 27.5333 43.8 30.2C45.5067 32.8133 46.36 35.8533 46.36 39.32C46.36 43.0533 45.4267 46.3333 43.56 49.16C41.6933 51.9867 39.1333 54.1733 35.88 55.72C32.68 57.2133 29.1067 57.96 25.16 57.96C17.32 57.96 11.1867 55.56 6.76 50.76C2.33333 45.96 0.12 39.1067 0.12 30.2C0.12 23.8533 1.32 18.4133 3.72 13.88C6.12 9.34667 9.45333 5.90666 13.72 3.56C18.04 1.21333 23.0267 0.039999 28.68 0.039999C31.6667 0.039999 34.52 0.386664 37.24 1.08C40.0133 1.72 42.36 2.65333 44.28 3.88L39.48 13.4C36.7067 11.5333 33.2133 10.6 29 10.6C24.2533 10.6 20.4933 11.9867 17.72 14.76C14.9467 17.5333 13.4533 21.56 13.24 26.84C16.5467 23.5333 21.16 21.88 27.08 21.88ZM24.44 48.28C27.2133 48.28 29.4533 47.5333 31.16 46.04C32.92 44.5467 33.8 42.52 33.8 39.96C33.8 37.4 32.92 35.3733 31.16 33.88C29.4533 32.3333 27.16 31.56 24.28 31.56C21.4533 31.56 19.1333 32.36 17.32 33.96C15.5067 35.5067 14.6 37.5067 14.6 39.96C14.6 42.4133 15.48 44.4133 17.24 45.96C19 47.5067 21.4 48.28 24.44 48.28ZM74.0575 57.96C69.4175 57.96 65.2842 56.8133 61.6575 54.52C58.0308 52.2267 55.1775 48.92 53.0975 44.6C51.0708 40.2267 50.0575 35.0267 50.0575 29C50.0575 22.9733 51.0708 17.8 53.0975 13.48C55.1775 9.10666 58.0308 5.77333 61.6575 3.48C65.2842 1.18667 69.4175 0.039999 74.0575 0.039999C78.6975 0.039999 82.8308 1.18667 86.4575 3.48C90.0842 5.77333 92.9108 9.10666 94.9375 13.48C97.0175 17.8 98.0575 22.9733 98.0575 29C98.0575 35.0267 97.0175 40.2267 94.9375 44.6C92.9108 48.92 90.0842 52.2267 86.4575 54.52C82.8308 56.8133 78.6975 57.96 74.0575 57.96ZM74.0575 47C77.4708 47 80.1375 45.5333 82.0575 42.6C84.0308 39.6667 85.0175 35.1333 85.0175 29C85.0175 22.8667 84.0308 18.3333 82.0575 15.4C80.1375 12.4667 77.4708 11 74.0575 11C70.6975 11 68.0308 12.4667 66.0575 15.4C64.1375 18.3333 63.1775 22.8667 63.1775 29C63.1775 35.1333 64.1375 39.6667 66.0575 42.6C68.0308 45.5333 70.6975 47 74.0575 47ZM127.354 57.96C122.714 57.96 118.581 56.8133 114.954 54.52C111.328 52.2267 108.474 48.92 106.394 44.6C104.368 40.2267 103.354 35.0267 103.354 29C103.354 22.9733 104.368 17.8 106.394 13.48C108.474 9.10666 111.328 5.77333 114.954 3.48C118.581 1.18667 122.714 0.039999 127.354 0.039999C131.994 0.039999 136.128 1.18667 139.754 3.48C143.381 5.77333 146.208 9.10666 148.234 13.48C150.314 17.8 151.354 22.9733 151.354 29C151.354 35.0267 150.314 40.2267 148.234 44.6C146.208 48.92 143.381 52.2267 139.754 54.52C136.128 56.8133 131.994 57.96 127.354 57.96ZM127.354 47C130.768 47 133.434 45.5333 135.354 42.6C137.328 39.6667 138.314 35.1333 138.314 29C138.314 22.8667 137.328 18.3333 135.354 15.4C133.434 12.4667 130.768 11 127.354 11C123.994 11 121.328 12.4667 119.354 15.4C117.434 18.3333 116.474 22.8667 116.474 29C116.474 35.1333 117.434 39.6667 119.354 42.6C121.328 45.5333 123.994 47 127.354 47ZM182.331 57L182.291 40.2L174.051 54.04H171.131L162.931 40.56V57H156.851V29H162.211L172.691 46.4L183.011 29H188.331L188.411 57H182.331ZM233.774 33.88H219.854V47.48H209.534V33.88H195.694V24.12H209.534V10.52H219.854V24.12H233.774V33.88Z"
                fill="#079BEE"
              />
            </svg>
            <span>{{ $tc("users") }}</span>
          </div>
          <div class="flex flex-col p">
            <svg
              width="166"
              height="57"
              viewBox="0 0 166 57"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.72 -3.8147e-06V56H11.76V10.4H0.56V-3.8147e-06H24.72ZM59.6081 22.8C64.5148 23.6 68.2748 25.44 70.8881 28.32C73.5015 31.1467 74.8081 34.6667 74.8081 38.88C74.8081 42.1333 73.9548 45.1467 72.2481 47.92C70.5415 50.64 67.9281 52.8267 64.4081 54.48C60.9415 56.1333 56.6748 56.96 51.6081 56.96C47.6615 56.96 43.7681 56.4533 39.9281 55.44C36.1415 54.3733 32.9148 52.88 30.2481 50.96L35.2881 41.04C37.4215 42.64 39.8748 43.8933 42.6481 44.8C45.4748 45.6533 48.3548 46.08 51.2881 46.08C54.5415 46.08 57.1015 45.4667 58.9681 44.24C60.8348 42.96 61.7681 41.1733 61.7681 38.88C61.7681 34.2933 58.2748 32 51.2881 32H45.3681V23.44L56.8881 10.4H33.0481V-3.8147e-06H72.2481V8.4L59.6081 22.8ZM98.2106 21.04C106.104 21.04 111.917 22.6133 115.651 25.76C119.437 28.9067 121.331 33.12 121.331 38.4C121.331 41.8133 120.477 44.9333 118.771 47.76C117.064 50.5333 114.451 52.7733 110.931 54.48C107.464 56.1333 103.171 56.96 98.0506 56.96C94.104 56.96 90.2106 56.4533 86.3706 55.44C82.584 54.3733 79.3573 52.88 76.6906 50.96L81.8106 41.04C83.944 42.64 86.3973 43.8933 89.1706 44.8C91.944 45.6533 94.7973 46.08 97.7306 46.08C100.984 46.08 103.544 45.44 105.411 44.16C107.277 42.88 108.211 41.0933 108.211 38.8C108.211 36.4 107.224 34.5867 105.251 33.36C103.331 32.1333 99.9706 31.52 95.1706 31.52H80.8506L83.7306 -3.8147e-06H117.891V10.4H94.5306L93.6506 21.04H98.2106ZM165.509 32.88H151.589V46.48H141.269V32.88H127.429V23.12H141.269V9.52H151.589V23.12H165.509V32.88Z"
                fill="#079BEE"
              />
            </svg>
            <span>{{ $tc("games") }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="inner-box">
          <div class="item flex">
            <img src="../assets/images/abouts/hours.svg" class="image--cover">
            <div class="right__info flex flex-col">
              <span>{{ $tc("games") }}</span>
              <p>
                {{ $tc("24h") }}
              </p>
            </div>
          </div>

          <div class="item flex">
            <img src="../assets/images/abouts/design.svg" class="image--cover">
            <div class="right__info flex flex-col">
              <span>{{ $tc("design-title") }}</span>
              <p>
                {{ $tc("design") }}
              </p>
            </div>
          </div>
          <div class="item flex">
            <img src="../assets/images/abouts/team.svg" class="image--cover">
            <div class="right__info flex flex-col">
              <span>{{ $tc("team-title") }}</span>
              <p>
                {{ $tc("team") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="map">
      <div class="Illustrator transition-all duration-500">
        <img src="../assets/images/Illustrator.png" alt="" />
      </div>

      <div class="earth transition-all duration-500">
        <img src="../assets/images/pin-map.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.about-us {
  padding: 0px 380px;
  margin-top: 160px;
  width: 100%;
  &__inner {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .left,
    .right {
      width: calc(
        50% - 20px
      ); /* Calculate 50% width with some spacing (adjust as needed) */
      margin-bottom: 20px; /* Add margin between left and right sections (adjust as needed) */

      @media (max-width: 768px) {
        width: 100%; /* On screens narrower than 768px, make both sections 100% width */
        margin-bottom: 10px; /* Adjust the margin as needed for smaller screens */
      }
    }
    .left {
      h1 {
        color: #000;
        font-family: "Playfair Display", serif;
        font-size: 60px;
        font-style: normal;
        font-weight: 900;
        line-height: 60px; /* 100% */
        letter-spacing: 3.6px;
        margin-bottom: 40px;
      }

      p {
        color: #757575;
        font-family: "Montserrat", sans-serif;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 19.6px */
        margin-bottom: 80px;
      }
      @media (max-width: 900px) {
        h1 {
          color: #000;
          font-family: "Playfair Display", serif;
          font-size: 40px;
          margin-bottom: 25px;
          line-height: 30px;
        }
        p {
          margin-bottom: 40px;
        }
      }
      &__info {
        span {
          font-family: "Montserrat", sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 700;
          line-height: 30px; /* 125% */
          margin-top: 10px;
        }
        @media (max-width: 900px) {
          svg {
            width: 200px;
          }
          span {
            margin-top: 0px;
          }
        }
        @media (max-width: 500px) {
          svg {
            width: 120px;
          }
        }
        @media (max-width: 900px) {
          .p {
            svg {
              width: 120px;
            }
            span {
              margin-top: 0px;
            }
          }
        }
        @media (max-width: 500px) {
          .p {
            svg {
              width: 100px;
            }
          }
        }
      }
    }
    .right {
      //   margin-left: 40px;

      background-color: #eee;
      .inner-box {
        padding: 113px 75px;
        .item:nth-child(2) {
          margin: 40px 0px;
        }
        .circle {
          border-radius: 50%;
          background-color: #e3fcff;
          position: relative;
          height: 50px;
          width: 100px;
          border-radius: 50%;
          padding: 12px;
          object-fit: cover;

          svg {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
        }
        @media (max-width: 1400px) {
          // .circle {
          //   height: 40px;
          //   width: 40px;
          // }
        }
        .right__info {
          padding-left: 24px;
          span {
            color: #000;

            /* Montserrat/Bold/24px */
            font-family: "Montserrat", sans-serif;
            font-size: 24px;

            font-weight: 700;
            line-height: 30px; /* 125% */
          }
          p {
            color: #757575;

            /* Montserrat/Regular/14px */
            font-family: "Montserrat", sans-serif;
            font-size: 14px;

            font-weight: 400;
            line-height: 140%; /* 19.6px */
          }
        }
      }
      @media (max-width: 1400px) {
        .inner-box {
          padding: 10%;
        }
      }
      @media (max-width: 775px) {
        .inner-box {
          padding: 50px 26px;
        }
      }
    }
  }
  .map {
    text-align: center;

    .Illustrator {
      width: 533px;
      margin: 0 auto;
      height: 437px;
      z-index: 1000;
      img {
        width: 100%;
      }
    }
    .earth {
      width: 1160px;
      height: 428px;
      z-index: 1;
      margin: -150px auto;
      img {
        width: 100%;
      }
    }

    @media (max-width: 1200px) {
      .Illustrator {
        width: 40%;
      }
      .earth {
        width: 100%;
      }
    }
    @media (max-width: 980px) {
      .earth {
        margin: -260px auto;
      }
    }
    @media (max-width: 580px) {
      .earth {
        margin: -350px auto;
      }
    }
  }

  .map {
    width: 100%;
  }

  .Illustrator {
    width: 533px;
    margin: 0 auto;
    height: 437px;

    position: relative; /* Position the box absolutely within the container */
    animation: moveBox 4s linear infinite; /* 4s duration, linear timing, infinite loop */
  }

  //   @keyframes moveBox {
  //     0% {
  //       transform: translateX(50%); /* Start from the current position */
  //     }
  //     50% {
  //       transform: translateX(100%); /* Move to the right edge of the container */
  //     }
  //     100% {
  //       transform: translateX(50%); /* Move back to the current position */
  //     }
  //   }
}
@media (max-width: 1608px) {
  .about-us {
    padding: 0px;
  }
}
@media (max-width: 628px) {
  .about-us {
    margin-top: 100px;
  }
}
@media (max-width: 428px) {
  .about-us {
    margin-top: 20px;
  }
}
.image--cover {
  width: 50px;
  padding: 12px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center right;
  background: #e3fcff;
}
</style>
