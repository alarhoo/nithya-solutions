import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <header>
        <nav
          className='
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  '
        >
          <div className='container-fluid w-full flex flex-wrap items-center justify-between px-6'>
            <button
              className='
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    '
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fas'
                data-icon='bars'
                className='w-6'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'
                ></path>
              </svg>
            </button>
            <div className='collapse navbar-collapse flex-grow items-center' id='navbarSupportedContent'>
              <a
                className='
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      '
                href='#'
              >
                <img
                  src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png'
                  alt=''
                  loading='lazy'
                  className='h-4'
                />
              </a>
              <ul className='navbar-nav flex flex-col pl-0 list-style-none mr-auto'>
                <li className='nav-item p-2'>
                  <a className='nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0' href='#'>
                    Dashboard
                  </a>
                </li>
                <li className='nav-item p-2'>
                  <a className='nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0' href='#'>
                    Team
                  </a>
                </li>
                <li className='nav-item p-2'>
                  <a className='nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0' href='#'>
                    Projects
                  </a>
                </li>
              </ul>
            </div>
            <div className='flex items-center relative'>
              <a className='text-gray-500 hover:text-gray-700 focus:text-gray-700 mr-4' href='#' title='Shop'>
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='shopping-cart'
                  className='w-4'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 576 512'
                >
                  <path
                    fill='currentColor'
                    d='M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z'
                  ></path>
                </svg>
              </a>
              <div className='dropdown relative'>
                <a
                  className='
          text-gray-500
          hover:text-gray-700
          focus:text-gray-700
          mr-4
          dropdown-toggle
          hidden-arrow
          flex items-center
        '
                  href='#'
                  id='dropdownMenuButton1'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='bell'
                    className='w-4'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                  >
                    <path
                      fill='currentColor'
                      d='M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z'
                    ></path>
                  </svg>
                  <span className='text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5'>
                    1
                  </span>
                </a>
                <ul
                  className='
      dropdown-menu
      min-w-max
      absolute
      hidden
      bg-white
      text-base
      z-50
      float-left
      py-2
      list-none
      text-left
      rounded-lg
      shadow-lg
      mt-1
      m-0
      bg-clip-padding
      border-none
      left-auto
      right-0
    '
                  aria-labelledby='dropdownMenuButton1'
                >
                  <li>
                    <a
                      className='
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        '
                      href='#'
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      className='
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        '
                      href='#'
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      className='
          dropdown-item
          text-sm
          py-2
          px-4
          font-normal
          block
          w-full
          whitespace-nowrap
          bg-transparent
          text-gray-700
          hover:bg-gray-100
        '
                      href='#'
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div className='dropdown relative'>
                <a
                  className='dropdown-toggle flex items-center hidden-arrow'
                  href='#'
                  id='dropdownMenuButton2'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  <img
                    src='https://mdbootstrap.com/img/new/avatars/2.jpg'
                    className='rounded-full w-7 h-7'
                    alt=''
                    loading='lazy'
                  />
                </a>
                <ul
                  className='dropdown-menu
    min-w-max
    absolute
    hidden
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  '
                  aria-labelledby='dropdownMenuButton2'
                >
                  <li>
                    <a
                      className='
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      '
                      href='#'
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      className='
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      '
                      href='#'
                    >
                      Another action
                    </a>
                  </li>
                  <li>
                    <a
                      className='
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      '
                      href='#'
                    >
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header> */}
      <main>
        <section className='mb-40'>
          <nav className='navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between'>
            <div className='px-6 w-full flex flex-wrap items-center justify-between'>
              <div className='flex items-center'>
                <button
                  className='navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarSupportedContentY'
                  aria-controls='navbarSupportedContentY'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    className='w-5'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 448 512'
                  >
                    <path
                      fill='currentColor'
                      d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'
                    ></path>
                  </svg>
                </button>
                <a className='navbar-brand text-blue-600' href='#!' title='brand'>
                  <svg className='w-5 h-5 ml-2 lg:ml-0 mr-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                    <path
                      fill='currentColor'
                      d='M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z'
                    ></path>
                  </svg>
                </a>
              </div>

              <div className='flex items-center lg:ml-auto'>
                <div className='navbar-collapse collapse grow items-center' id='navbarSupportedContentY'>
                  <ul className='navbar-nav mr-auto lg:flex lg:flex-row'>
                    <li className='nav-item'>
                      <a
                        className='nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out'
                        href='#about'
                        data-mdb-ripple='true'
                        data-mdb-ripple-color='light'
                      >
                        about
                      </a>
                    </li>
                    <li className='nav-item'>
                      <a
                        className='nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out'
                        href='#services'
                        data-mdb-ripple='true'
                        data-mdb-ripple-color='light'
                      >
                        services
                      </a>
                    </li>
                    <li className='nav-item mb-2 lg:mb-0'>
                      <a
                        className='nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out'
                        href='#projects'
                        data-mdb-ripple='true'
                        data-mdb-ripple-color='light'
                      >
                        projects
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>

          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1440 320'
            preserveAspectRatio='none'
            className='svg absolute hidden lg:block h-[560px] w-full -z-10 overflow-hidden'
          >
            <defs>
              <linearGradient id='sw-gradient-0' x1='0' x2='0' y1='1' y2='0'>
                <stop stop-color='hsl(217, 102%, 99%)' offset='0%'></stop>
                <stop stop-color='hsl(217,88%, 93%)' offset='100%'></stop>
              </linearGradient>
            </defs>
            <path
              fill='url(#sw-gradient-0)'
              d='M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z'
            ></path>
          </svg>

          <div className='px-6 py-12 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left'>
            <div className='container mx-auto xl:px-32'>
              <div className='grid lg:grid-cols-2 gap-12 items-center'>
                <div className='mt-12 lg:mt-0'>
                  <h1 className='text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12'>
                    Nithya <br />
                    <span className='text-blue-600'>Digital Marketing Solutions</span>
                  </h1>
                  <a
                    className='inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                    href='#contact'
                    role='button'
                  >
                    Contact Us
                  </a>
                  <a
                    className='inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                    href='#about'
                    role='button'
                  >
                    Learn more
                  </a>
                </div>
                <div className='mb-12 lg:mb-0'>
                  <img src='/assets/undraw_content_team_re_6rlg.svg' className='w-full rounded-lg shadow-lgs' alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id='about' className='container my-24 px-6 mx-auto'>
          <section className='mb-32 text-gray-800 text-center lg:text-left'>
            <div className='grid lg:grid-cols-2 gap-6 xl:gap-12 items-center'>
              <div className='mb-6 lg:mb-0'>
                <h2 className='text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight'>
                  Know more <br />
                  <span className='text-blue-600'>about us</span>
                </h2>
              </div>
              <div className='mb-6 lg:mb-0'>
                <p className='text-gray-500 text-lg'>
                  Welcome to Nithya Tech Solutions, a leading provider of innovative and comprehensive consulting
                  services. Our team of experts has extensive experience in [specific industry or industries you
                  specialize in], and we are dedicated to helping our clients achieve their goals and stay ahead of the
                  competition.
                </p>
                <p className='text-gray-500 text-lg'>
                  At Nithya Tech Solutions, we understand the challenges facing businesses in today's fast-paced and
                  ever-changing market. That's why we offer a wide range of services designed to meet the unique needs
                  of each of our clients. Whether you need help with strategy development, operational improvement, or
                  technology implementation, we have the expertise to deliver results.
                </p>
                <p className='text-gray-500 text-lg'>
                  Our team of consultants is made up of seasoned professionals with a wealth of knowledge and
                  experience. We work closely with our clients to understand their unique challenges and goals, and we
                  use that information to create customized solutions that deliver measurable results.
                </p>
                <p className='text-gray-500 text-lg'>
                  We are proud of the long-standing relationships we have built with our clients, and we are committed
                  to delivering the highest level of service and support. We believe that success is not just about
                  meeting our clients' expectations, but exceeding them.
                </p>
                <p className='text-gray-500 text-lg'>
                  At Nithya Tech Solutions, we are dedicated to helping our clients achieve their goals and stay ahead
                  of the competition. If you're ready to take your business to the next level, we're ready to help.
                  Contact us today to learn more about how we can support your success.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className='container my-24 px-6 mx-auto'>
          <section className='mb-32 text-gray-800 text-center'>
            <h2 className='text-3xl font-bold mb-12 text-center'>What We Offer</h2>

            <div className='grid lg:grid-cols-4 gap-6 xl:gap-x-12'>
              <div className='mb-6 lg:mb-0'>
                <div>
                  <div
                    className='relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lgs rounded-lg mb-6'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                  >
                    <img src='/assets/undraw_designer_life_re_6ywf.svg' className='w-full' alt='Louvre' />
                    <a href='#!'>
                      <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out'></div>
                    </a>
                  </div>

                  <h5 className='text-lg font-bold mb-3'>UI & UX Design</h5>
                  <div className='mb-3 text-red-600 font-medium text-sm flex items-center justify-center'>
                    <svg className='w-4 h-4 mr-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 496 512'>
                      <path
                        fill='currentColor'
                        d='M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z'
                      />
                    </svg>
                    Travels
                  </div>
                  <p className='text-gray-500'>
                    Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut vulputate est non
                    quam dignissim elementum. Donec a ullamcorper diam.
                  </p>
                </div>
              </div>

              <div className='mb-0'>
                <div>
                  <div
                    className='relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lgs rounded-lg mb-6'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                  >
                    <img src='/assets/undraw_web_development_0l6v.svg' className='w-full' alt='Louvre' />
                    <a href='#!'>
                      <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out'></div>
                    </a>
                  </div>

                  <h5 className='text-lg font-bold mb-3'>Web Development</h5>
                  <div className='mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center'>
                    <svg className='w-4 h-4 mr-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                      <path
                        fill='currentColor'
                        d='M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z'
                      />
                    </svg>
                    Business
                  </div>
                  <p className='text-gray-500'>
                    Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non vehicula nisl dui quis diam.
                    Mauris ut risus eget massa volutpat feugiat. Donec.
                  </p>
                </div>
              </div>

              <div className='mb-6 lg:mb-0'>
                <div>
                  <div
                    className='relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lgs rounded-lg mb-6'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                  >
                    <img src='/assets/undraw_my_app_re_gxtj.svg' className='w-full' alt='Louvre' />
                    <a href='#!'>
                      <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out'></div>
                    </a>
                  </div>

                  <h5 className='text-lg font-bold mb-3'>Mobile Apps</h5>
                  <div className='mb-3 text-blue-600 font-medium text-sm flex items-center justify-center'>
                    <svg className='w-4 h-4 mr-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                      <path
                        fill='currentColor'
                        d='M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z'
                      />
                    </svg>
                    Art
                  </div>
                  <p className='text-gray-500'>
                    Suspendisse in volutpat massa. Nulla facilisi. Sed aliquet diam orci, nec ornare metus semper sed.
                    Integer volutpat ornare erat sit amet rutrum.
                  </p>
                </div>
              </div>

              <div className='mb-0'>
                <div>
                  <div
                    className='relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lgs rounded-lg mb-6'
                    data-mdb-ripple='true'
                    data-mdb-ripple-color='light'
                  >
                    <img src='/assets/undraw_social_dashboard_re_ocbd.svg' className='w-full' alt='Louvre' />
                    <a href='#!'>
                      <div className='absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out'></div>
                    </a>
                  </div>

                  <h5 className='text-lg font-bold mb-3'>Digital Marketing</h5>
                  <div className='mb-3 text-yellow-500 font-medium text-sm flex items-center justify-center'>
                    <svg className='w-4 h-4 mr-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
                      <path
                        fill='currentColor'
                        d='M608 64H32C14.33 64 0 78.33 0 96v320c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V96c0-17.67-14.33-32-32-32zM48 400v-64c35.35 0 64 28.65 64 64H48zm0-224v-64h64c0 35.35-28.65 64-64 64zm272 176c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 48h-64c0-35.35 28.65-64 64-64v64zm0-224c-35.35 0-64-28.65-64-64h64v64z'
                      />
                    </svg>
                    Business
                  </div>
                  <p className='text-gray-500'>
                    Curabitur tristique, mi a mollis sagittis, metus felis mattis arcu, non vehicula nisl dui quis diam.
                    Mauris ut risus eget massa volutpat feugiat. Donec.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className='container my-24 px-6 mx-auto'>
          <section className='mb-32 text-gray-800 text-center'>
            <h2 className='text-3xl font-bold mb-12'>Testimonials</h2>
            <div id='carouselExampleCaptions' className='carousel slide relative carousel-dark' data-bs-ride='carousel'>
              <div className='carousel-inner relative w-full overflow-hidden'>
                <div className='carousel-item active relative float-left w-full'>
                  <img
                    className='rounded-full shadow-lg mb-6 mx-auto w-40'
                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg'
                    alt='avatar'
                  />
                  <div className='flex flex-wrap justify-center'>
                    <div className='grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3'>
                      <h5 className='text-lg font-bold mb-3'>Maria Kate</h5>
                      <p className='font-medium text-gray-700 mb-4'>Photographer</p>
                      <p className='text-gray-500 mb-6'>
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fas'
                          data-icon='quote-left'
                          className='w-6 pr-2 inline-block'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                        >
                          <path
                            fill='currentColor'
                            d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                          ></path>
                        </svg>
                        In ac turpis justo. Vivamus auctor quam vitae odio feugiat pulvinar. Sed semper ligula sed lorem
                        tincidunt dignissim. Nam sed cursus lectus. Proin non rutrum magna. Proin gravida, justo et
                        imperdiet tristique, turpis nisi viverra est, nec posuere ex arcu sit amet erat. Sed a dictum
                        sem. Duis pretium condimentum nulla.
                      </p>
                      <ul className='flex justify-center mb-0'>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='star'
                            className='w-4 text-yellow-500'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'
                          >
                            <path
                              fill='currentColor'
                              d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='star'
                            className='w-4 text-yellow-500'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'
                          >
                            <path
                              fill='currentColor'
                              d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='star'
                            className='w-4 text-yellow-500'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'
                          >
                            <path
                              fill='currentColor'
                              d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='star'
                            className='w-4 text-yellow-500'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'
                          >
                            <path
                              fill='currentColor'
                              d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='far'
                            data-icon='star'
                            className='w-4 text-yellow-500'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'
                          >
                            <path
                              fill='currentColor'
                              d='M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z'
                            ></path>
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='carousel-item relative float-left w-full'>
                  <img
                    className='rounded-full shadow-lg mb-6 mx-auto w-40'
                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg'
                    alt='avatar'
                  />
                  <div className='flex flex-wrap justify-center'>
                    <div className='grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3'>
                      <h5 className='text-lg font-bold mb-3'>John Doe</h5>
                      <p className='font-medium text-gray-700 mb-4'>Web Developer</p>
                      <p className='text-gray-500 mb-6'>
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fas'
                          data-icon='quote-left'
                          className='w-6 pr-2 inline-block'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                        >
                          <path
                            fill='currentColor'
                            d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                          ></path>
                        </svg>
                        Maecenas auctor, quam eget tincidunt pretium, felis diam semper turpis, sed scelerisque diam
                        libero facilisis libero. Quisque vitae semper metus. Aliquam eu dui aliquam, faucibus metus
                        quis, elementum nunc.
                      </p>
                      <ul className='flex justify-center mb-0'>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='star'
                            className='w-4 text-yellow-500'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'
                          >
                            <path
                              fill='currentColor'
                              d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='star'
                            className='w-4 text-yellow-500'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'
                          >
                            <path
                              fill='currentColor'
                              d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='star'
                            className='w-4 text-yellow-500'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'
                          >
                            <path
                              fill='currentColor'
                              d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='star'
                            className='w-4 text-yellow-500'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'
                          >
                            <path
                              fill='currentColor'
                              d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='star-half-alt'
                            className='w-4 text-yellow-500'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 536 512'
                          >
                            <path
                              fill='currentColor'
                              d='M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z'
                            ></path>
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='carousel-item relative float-left w-full'>
                  <img
                    className='rounded-full shadow-lg mb-6 mx-auto w-40'
                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg'
                    alt='avatar'
                  />
                  <div className='flex flex-wrap justify-center'>
                    <div className='grow-0 shrink-0 basis-auto w-full lg:w-8/12 px-3'>
                      <h5 className='text-lg font-bold mb-3'>Anna Deynah</h5>
                      <p className='font-medium text-gray-700 mb-4'>UX Designer</p>
                      <p className='text-gray-500 mb-6'>
                        <svg
                          aria-hidden='true'
                          focusable='false'
                          data-prefix='fas'
                          data-icon='quote-left'
                          className='w-6 pr-2 inline-block'
                          role='img'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 512 512'
                        >
                          <path
                            fill='currentColor'
                            d='M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z'
                          ></path>
                        </svg>
                        Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet rutrum enim
                        massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc ligula felis, sagittis eget
                        nisi vitae.
                      </p>
                      <ul className='flex justify-center mb-0'>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='star'
                            className='w-4 text-yellow-500'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'
                          >
                            <path
                              fill='currentColor'
                              d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='star'
                            className='w-4 text-yellow-500'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'
                          >
                            <path
                              fill='currentColor'
                              d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='star'
                            className='w-4 text-yellow-500'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'
                          >
                            <path
                              fill='currentColor'
                              d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='star'
                            className='w-4 text-yellow-500'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'
                          >
                            <path
                              fill='currentColor'
                              d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                            ></path>
                          </svg>
                        </li>
                        <li>
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            data-prefix='fas'
                            data-icon='star'
                            className='w-4 text-yellow-500'
                            role='img'
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 576 512'
                          >
                            <path
                              fill='currentColor'
                              d='M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z'
                            ></path>
                          </svg>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className='carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0'
                type='button'
                data-bs-target='#carouselExampleCaptions'
                data-bs-slide='prev'
              >
                <span className='carousel-control-prev-icon inline-block bg-no-repeat' aria-hidden='true'></span>
                <span className='visually-hidden'>Previous</span>
              </button>
              <button
                className='carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0'
                type='button'
                data-bs-target='#carouselExampleCaptions'
                data-bs-slide='next'
              >
                <span className='carousel-control-next-icon inline-block bg-no-repeat' aria-hidden='true'></span>
                <span className='visually-hidden'>Next</span>
              </button>
            </div>
          </section>
        </div>
        <div id='contact' className='container my-24 px-6 mx-auto'>
          <h2 className='text-3xl font-bold mb-12'>Contact Us</h2>
          <section className='mb-32 text-gray-800'>
            <div className='block rounded-lg shadow-lg bg-white'>
              <div className='flex flex-wrap items-center'>
                <div className='grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12'>
                  <div className='w-full h-[500px]'>
                    <iframe
                      title='Our Office'
                      src='https://maps.google.com/maps?q=3rd+Cross+Road,+Thyagaraja+Nagar&t=&z=13&ie=UTF8&iwloc=&output=embed'
                      className='left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg'
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className='grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12'>
                  <div className='flex flex-wrap pt-12 lg:pt-0'>
                    <div className='mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12'>
                      <div className='flex items-start'>
                        <div className='shrink-0'>
                          <div className='p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center'>
                            <svg
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='fas'
                              data-icon='headset'
                              className='w-5 text-white'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 512 512'
                            >
                              <path
                                fill='currentColor'
                                d='M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z'
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className='grow ml-6'>
                          <p className='font-bold mb-1'>Address</p>
                          <p className='text-gray-500'>
                            3rd Cross Road, Thyagaraja Nagar, Basavanagudi, Bengaluru, Karnataka
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12'>
                      <div className='flex items-start'>
                        <div className='shrink-0'>
                          <div className='p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center'>
                            <svg
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='fas'
                              data-icon='dollar-sign'
                              className='w-3 text-white'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 288 512'
                            >
                              <path
                                fill='currentColor'
                                d='M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z'
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className='grow ml-6'>
                          <p className='font-bold mb-1'>Contact Information</p>
                          <p>
                            <a className='text-gray-500' href='mailto:nithyanitu76@gmail.com'>
                              nithyanitu76@gmail.com
                            </a>
                          </p>
                          <p>
                            <a className='text-gray-500' href='tel:+91 78929 41648'>
                              +91 78929 41648
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className='mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12'>
                      <div className='flex align-start'>
                        <div className='shrink-0'>
                          <div className='p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center'>
                            <svg
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='fas'
                              data-icon='newspaper'
                              className='w-5 text-white'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 576 512'
                            >
                              <path
                                fill='currentColor'
                                d='M552 64H88c-13.255 0-24 10.745-24 24v8H24c-13.255 0-24 10.745-24 24v272c0 30.928 25.072 56 56 56h472c26.51 0 48-21.49 48-48V88c0-13.255-10.745-24-24-24zM56 400a8 8 0 0 1-8-8V144h16v248a8 8 0 0 1-8 8zm236-16H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm-208-96H140c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm208 0H348c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h152c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12zm0-96H140c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h360c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12z'
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className='grow ml-6'>
                          <p className='font-bold mb-1'>Press</p>
                          <p className='text-gray-500'>press@nithyatech.com</p>
                          <p className='text-gray-500'>+1 234-567-89</p>
                        </div>
                      </div>
                    </div>
                    <div className='mb-12 lg:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12'>
                      <div className='flex align-start'>
                        <div className='shrink-0'>
                          <div className='p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center'>
                            <svg
                              aria-hidden='true'
                              focusable='false'
                              data-prefix='fas'
                              data-icon='bug'
                              className='w-5 text-white'
                              role='img'
                              xmlns='http://www.w3.org/2000/svg'
                              viewBox='0 0 512 512'
                            >
                              <path
                                fill='currentColor'
                                d='M511.988 288.9c-.478 17.43-15.217 31.1-32.653 31.1H424v16c0 21.864-4.882 42.584-13.6 61.145l60.228 60.228c12.496 12.497 12.496 32.758 0 45.255-12.498 12.497-32.759 12.496-45.256 0l-54.736-54.736C345.886 467.965 314.351 480 280 480V236c0-6.627-5.373-12-12-12h-24c-6.627 0-12 5.373-12 12v244c-34.351 0-65.886-12.035-90.636-32.108l-54.736 54.736c-12.498 12.497-32.759 12.496-45.256 0-12.496-12.497-12.496-32.758 0-45.255l60.228-60.228C92.882 378.584 88 357.864 88 336v-16H32.666C15.23 320 .491 306.33.013 288.9-.484 270.816 14.028 256 32 256h56v-58.745l-46.628-46.628c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0L141.255 160h229.489l54.627-54.627c12.498-12.497 32.758-12.497 45.256 0 12.496 12.497 12.496 32.758 0 45.255L424 197.255V256h56c17.972 0 32.484 14.816 31.988 32.9zM257 0c-61.856 0-112 50.144-112 112h224C369 50.144 318.856 0 257 0z'
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className='grow ml-6'>
                          <p className='font-bold mb-1'>Bug report</p>
                          <p className='text-gray-500'>bugs@nithyatech.com</p>
                          <p className='text-gray-500'>+1 234-567-89</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className='text-center text-white bg-stone-300'>
        <div className='container pt-9'>
          <div className='flex justify-center mb-9'>
            <a href='#!' className='mr-9 text-gray-800'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='facebook-f'
                className='svg-inline--fa fa-facebook-f w-2.5'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 320 512'
              >
                <path
                  fill='currentColor'
                  d='M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'
                ></path>
              </svg>
            </a>
            <a href='#!' className='mr-9 text-gray-800'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='twitter'
                className='svg-inline--fa fa-twitter w-4'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 512 512'
              >
                <path
                  fill='currentColor'
                  d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
                ></path>
              </svg>
            </a>
            <a href='#!' className='mr-9 text-gray-800'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='google'
                className='svg-inline--fa fa-google w-3.5'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 488 512'
              >
                <path
                  fill='currentColor'
                  d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'
                ></path>
              </svg>
            </a>
            <a href='#!' className='mr-9 text-gray-800'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='instagram'
                className='svg-inline--fa fa-instagram w-3.5'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'
                ></path>
              </svg>
            </a>
            <a href='#!' className='mr-9 text-gray-800'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='linkedin-in'
                className='svg-inline--fa fa-linkedin-in w-3.5'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 448 512'
              >
                <path
                  fill='currentColor'
                  d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
                ></path>
              </svg>
            </a>
            <a href='#!' className='text-gray-800'>
              <svg
                aria-hidden='true'
                focusable='false'
                data-prefix='fab'
                data-icon='github'
                className='svg-inline--fa fa-github w-4'
                role='img'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 496 512'
              >
                <path
                  fill='currentColor'
                  d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className='text-center text-gray-700 p-4'>
          © 2023 Copyright {' '}
          <a className='text-gray-800' href='https://alarhoo.github.io/nithya-solutions/'>
            Nithya Technologies
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
