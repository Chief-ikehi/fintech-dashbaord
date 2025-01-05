"use client";
import React, { useState, useEffect, useRef } from 'react';
import '@/app/globals.css'; // Import global styles

// Export const metadata (optional, you can uncomment if necessary)
//export const metadata = {
//  title: 'Ikehi Microfinance Bank',
//  description: 'A modern fintech application dashboard',
//};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  // This ensures that scripts are loaded only in the browser (not on the server)
  if (!mounted) {
    return null;
  }

  return (
    <html>
      <body>
        <>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Ikehi Microfinance Bank</title>
          <meta name="description" content="Simple landing page" />
          <meta name="keywords" content="" />
          <meta name="author" content="" />
          <link
            rel="stylesheet"
            href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"
          />
          {/* Replace with your tailwind.css once created */}
          <link
            href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700"
            rel="stylesheet"
          />
          {/* Define your gradient here - use online tools to find a gradient matching your branding */}
          <style
            dangerouslySetInnerHTML={{
              __html:
                "\n      .gradient {\n        background: linear-gradient(90deg, #d53369 0%, #daae51 100%);\n      }\n    "
            }}
          />

          {/* Nav */}
          <nav id="header" className="fixed w-full z-30 top-0 text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
              <div className="pl-4 flex items-center">
                <a
                  className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                  href="/"
                >
                  {/* Icon from: http://www.potlabicons.com/ */}
                  <svg
                    className="h-8 fill-current inline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512.005 512.005"
                  >
                    <rect
                      fill="#2a2a31"
                      x="16.539"
                      y="425.626"
                      width="479.767"
                      height="50.502"
                      transform="matrix(1,0,0,1,0,0)"
                    />
                    <path
                      className="plane-take-off"
                      d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                    />
                  </svg>
                  Ikehi Pay
                </a>
              </div>
              <div className="block lg:hidden pr-4">
                <button
                  id="nav-toggle"
                  className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  <svg
                    className="fill-current h-6 w-6"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
              <div
                className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
                id="nav-content"
              >
                <ul className="list-reset lg:flex justify-end flex-1 items-center">
                  <li className="mr-3"></li>
                  <li className="mr-3"></li>
                  <li className="mr-3"></li>
                </ul>
                <button
                  id="navAction"
                  className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  <a href="/dashboard"> Dashboard </a>
                </button>
              </div>
            </div>
            <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
          </nav>

          <div className="pt-24">
            <main className="flex-grow container mx-auto p-4">{children}</main>
          </div>

          {/* Scripts Section */}
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
            defer
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                var scrollpos = window.scrollY;
                var header = document.getElementById("header");
                var navcontent = document.getElementById("nav-content");
                var navaction = document.getElementById("navAction");
                var toToggle = document.querySelectorAll(".toggleColour");

                document.addEventListener("scroll", function () {
                  scrollpos = window.scrollY;

                  if (scrollpos > 10) {
                    header.classList.add("bg-white");
                    navaction.classList.remove("bg-white");
                    navaction.classList.add("gradient");
                    navaction.classList.remove("text-gray-800");
                    navaction.classList.add("text-white");

                    toToggle.forEach(item => {
                      item.classList.add("text-gray-800");
                      item.classList.remove("text-white");
                    });

                    header.classList.add("shadow");
                    navcontent.classList.remove("bg-gray-100");
                    navcontent.classList.add("bg-white");
                  } else {
                    header.classList.remove("bg-white");
                    navaction.classList.remove("gradient");
                    navaction.classList.add("bg-white");
                    navaction.classList.remove("text-white");
                    navaction.classList.add("text-gray-800");

                    toToggle.forEach(item => {
                      item.classList.add("text-white");
                      item.classList.remove("text-gray-800");
                    });

                    header.classList.remove("shadow");
                    navcontent.classList.remove("bg-white");
                    navcontent.classList.add("bg-gray-100");
                  }
                });
              `,
            }}
            defer
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                var navMenuDiv = document.getElementById("nav-content");
                var navMenu = document.getElementById("nav-toggle");

                document.onclick = check;
                function check(e) {
                  var target = (e && e.target) || (event && event.srcElement);

                  if (!checkParent(target, navMenuDiv)) {
                    if (checkParent(target, navMenu)) {
                      if (navMenuDiv.classList.contains("hidden")) {
                        navMenuDiv.classList.remove("hidden");
                      } else {
                        navMenuDiv.classList.add("hidden");
                      }
                    } else {
                      navMenuDiv.classList.add("hidden");
                    }
                  }
                }

                function checkParent(t, elm) {
                  while (t.parentNode) {
                    if (t == elm) {
                      return true;
                    }
                    t = t.parentNode;
                  }
                  return false;
                }
              `,
            }}
            defer
          ></script>
        </>
      </body>
    </html>
  );
}
