import React from "react";
import HomeImageHero  from "../assets/HomeImage.png";
import HomeImageHero1 from "../assets/HomeImage1.png";
import HomeImageHero2 from "../assets/HomeImage2.png";
import HomeImageHero3 from "../assets/HomeImage3.png";
import { IoMdLogIn } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import {
  FaFileInvoiceDollar,
  FaChartLine,
  FaUsersCog,
  FaStar,
} from "react-icons/fa";
import Contactus from "./Contactus";

function Home() {
  const handleDemoLink = () => {
    window.open("https://demo.crmgeni.com/", "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Best Invoice & CRM Solution for Your Business</title>
        <meta
          name="description"
          content="Discover the ultimate invoice and CRM solution for your business. Streamline your operations, boost productivity, and drive growth with our innovative software."
        />
        <link rel="canonical" href="/" />
      </Helmet>

      <section className="pt-24 bg-white">
        {/* ====== Home Hero Section Start ====== */}
        <section className="px-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span>Supercharge</span>{" "}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-primary to-secoundry lg:inline">
                Your Business with
              </span>{" "}
              <span>Smart Invoicing & CRM!</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              Simplify your sales process, track expenses, and grow your
              business effortlessly with CRM Geni.
            </p>

            <div className="flex flex-col items-center">
              <button
                onClick={handleDemoLink}
                className="w-full md:w-1/2 bg-primary-STYLE1 text-black py-3 px-4 rounded-md shadow-md hover:bg-primary-STYLE2 transition duration-300 flex items-center justify-center group mb-4"
              >
                <IoMdLogIn className="mr-2 text-xl transition-transform duration-300 group-hover:animate-wiggle" />
                Start a Demo
              </button>

              <button
                onClick={() => (window.location.href = "tel:8143407758")}
                className="flex w-full md:w-1/2 justify-center bg-gray-800 px-4 py-2 rounded-md text-white text-[10px] items-center transition duration-300 hover:bg-gray-700"
              >
                <IoCall className="mr-2 text-xl transition-transform duration-300 group-hover:animate-wiggle" />
                Contact Sales
              </button>
            </div>
          </div>
          <div className="w-full mx-auto mt-20 text-center md:w-10/12 bounce-animation">
            <div className="relative z-0 w-full mt-8">
              <div className="relative overflow-hidden shadow-2xl rounded-lg">
                <div className="flex items-center flex-none px-4 bg-primary rounded-b-none h-8 rounded-t-lg">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 border-2 border-white rounded-full" />
                    <div className="w-3 h-3 border-2 border-white rounded-full" />
                    <div className="w-3 h-3 border-2 border-white rounded-full" />
                  </div>
                </div>
                <img
                  src={HomeImageHero}
                  alt="Home"
                  className="rounded-b-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        {/* ====== End Hero Section Start ====== */}

        {/* ====== Features Section Start ====== */}
        <section className="py-16 bg-secoundry rounded-md -mt-10 overflow-hidden">
          <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
            <div>
              <span className="text-primary text-lg font-semibold">
                Features
              </span>
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Streamline Your Business Operations
              </h2>
            </div>
            <p className="mt-4 text-[18px] text-center text-gray-900 font-bold md:text-[22px]">
              Modern User Interface
            </p>
            <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
              <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                  <FaFileInvoiceDollar className="text-primary text-4xl" />
                  <div className="space-y-2">
                    <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-primary">
                      Billing
                    </h5>
                    <p className="text-sm text-gray-600">
                      Manage invoices, download all invoices, and track spending
                      on business.
                    </p>
                  </div>
                  <button
                    href="#"
                    className="flex justify-between items-center group-hover:text-primary"
                  >
                    <span className="text-sm">Read more</span>
                    <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </button>
                </div>
              </div>
              <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                  <FaChartLine className="text-primary text-4xl" />
                  <div className="space-y-2">
                    <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-primary">
                      Business Analytics
                    </h5>
                    <p className="text-sm text-gray-600">
                      Leads management, spending analysis, and detailed business
                      reports on profit trends.
                    </p>
                  </div>
                  <button
                    href="#"
                    className="flex justify-between items-center group-hover:text-primary"
                  >
                    <span className="text-sm">Read more</span>
                    <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </button>
                </div>
              </div>
              <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                  <FaUsersCog className="text-primary text-4xl" />
                  <div className="space-y-2">
                    <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-primary">
                      Management
                    </h5>
                    <p className="text-sm text-gray-600">
                      Add customers, manage employees, and handle products and
                      services efficiently.
                    </p>
                  </div>
                  <button
                    href="#"
                    className="flex justify-between items-center group-hover:text-primary"
                  >
                    <span className="text-sm">Read more</span>
                    <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </button>
                </div>
              </div>

              <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
                  <FaStar className="text-primary text-4xl" />
                  <div className="space-y-2">
                    <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-primary">
                      More features
                    </h5>
                    <p className="text-sm text-gray-600">
                      Explore all our features.
                    </p>
                  </div>
                  <button
                    href="#"
                    className="flex justify-between items-center group-hover:text-primary"
                  >
                    <span className="text-sm">Read more</span>
                    <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Features Section Ending ====== */}

        {/* ====== Cards Section Starting ====== */}
        <div className="px-4 bg-white mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                  <span>Easy</span>{" "}
                  <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-primary to-secoundry lg:inline">
                    Billing
                  </span>{" "}
                  <span>Smart Sharing !</span>
                </h1>
                <p className="text-black text-base md:text-lg">
                  Creating invoices is now effortless! With just a click, you
                  can generate bills, share them, and receive payments
                  seamlessly.
                </p>
              </div>
              <div className="space-x-4">
                <button className="text-neutral-800 text-lg font-medium inline-flex items-center">
                  <span> Learn More →</span>
                </button>
              </div>
            </div>
            <img alt="logo" width="420" height="120" src={HomeImageHero1} />
          </div>
        </div>
        <div className="px-4 bg-white mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <img alt="logo" width="420" height="120" src={HomeImageHero2} />

            <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                  <span>Expenses</span>{" "}
                  <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-primary to-secoundry lg:inline">
                    & Financial Tracking
                  </span>{" "}
                  <span>Now its eassy !</span>
                </h1>
                <p className="text-black text-base md:text-lg">
                  Track your Spending & business expenses know how your business
                  is working.
                </p>
              </div>
              <div className="space-x-4">
                <button className="text-neutral-800 text-lg font-medium inline-flex items-center">
                  <span> Learn More →</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 bg-white mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                  <span>Manageing you </span>{" "}
                  <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-primary to-secoundry lg:inline">
                    Employess
                  </span>{" "}
                  <span>is now easy !</span>
                </h1>
                <p className="text-black text-base md:text-lg">
                  Track your employees attances salery another hiring needs.
                </p>
              </div>
              <div className="space-x-4">
                <button className="text-neutral-800 text-lg font-medium inline-flex items-center">
                  <span> Lear more →</span>
                </button>
              </div>
            </div>
            <img alt="logo" width="420" height="120" src={HomeImageHero3} />
          </div>
        </div>
        {/* ====== Cards Section Ending ====== */}

        {/* ====== more Section Start ====== */}
        <div className="bg-primary">
          <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-secoundry font-black leading-7 md:leading-10">
                Are you Looking for Software as a Service Solution
                <span className="text-primary-STYLE1"> (Saas) </span>?
              </h1>
              <p className="mt-5 sm:mt-10 lg:w-10/12 text-secoundry font-normal text-center text-sm sm:text-lg">
                We are here to build your custom software solution for your
                business needs.
              </p>
            </div>
            <div className="flex justify-center items-center"></div>
            <button
              onClick={() => (window.location.href = "tel:8143407758")}
              className="flex w-1/2 md:w-1/2 justify-center bg-gray-800 px-4 py-2 rounded-md text-white text-[10px] items-center transition duration-300 hover:bg-gray-700"
            >
              <IoCall className="mr-2 text-xl transition-transform duration-300 group-hover:animate-wiggle" />
              Contact Sales
            </button>
          </div>
        </div>
        {/* ====== more Section end ====== */}

        {/* ====== Pricing Section Start ====== */}
        <section className="bg-white pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative z-20 overflow-hidden">
          <div className="container mx-auto flex flex-col items-center">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                  <span className="font-semibold text-lg text-primary mb-2 block">
                    Pricing Table
                  </span>
                  <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-dark mb-4">
                    Our Pricing Plans
                  </h2>
                  <p className="text-base text-body-color">
                    Choose a plan that fits your business needs. Our flexible
                    pricing options ensure you get the best value for your
                    investment.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center -mx-4">
              {/* Monthly Plan */}
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10">
                  <span className="text-primary font-semibold text-lg block mb-4">
                    Monthly Plan
                  </span>
                  <h2 className="font-bold text-dark mb-5 text-[42px]">
                    1250 INR
                    <span className="text-base text-body-color font-medium">
                      {" "}
                      / month
                    </span>
                  </h2>
                  <p className="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2]">
                    Ideal for startups and small businesses looking to manage
                    their invoicing and CRM needs effectively.
                  </p>
                  <div className="mb-7">
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ All Features
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Data Storage: Unlimited
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Sales Pipeline: YES
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Email Invoice: YES
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Shared Menu: YES
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Mobile Responsive: YES
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Clients & Leads Management: YES
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✖ Built-in Inventory Management: NO
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1 bg-secoundry pl-2 rounded-md">
                      Up to 2 Users
                    </p>
                  </div>
                </div>
              </div>
              {/* Yearly Plan */}
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 text-secoundry">
                <div className="bg-primary rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10">
                  <span className="font-semibold text-lg block mb-4">
                    Yearly Plan
                  </span>
                  <h2 className="font-bold text-dark mb-5 text-[42px]">
                    1050 INR
                    <span className="text-base text-body-color font-medium">
                      {" "}
                      / month
                    </span>
                  </h2>
                  <p className="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2]">
                    Best value for businesses looking for long-term solutions
                    with comprehensive features.
                  </p>
                  <div className="mb-7">
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ All Features
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Data Storage: Unlimited
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Sales Pipeline: YES
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Email Invoice: YES
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Shared Menu: YES
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Mobile Responsive: YES
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Clients & Leads Management: YES
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✖ Built-in Inventory Management: NO
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1 bg-secoundry pl-2 rounded-md text-black">
                      Up to 4 Users
                    </p>
                  </div>
                </div>
              </div>
              {/* Custom Plan */}
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="bg-white rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10">
                  <span className="text-primary font-semibold text-lg block mb-4">
                    Custom Plan
                  </span>
                  <h2 className="font-bold text-dark mb-5 text-[42px]">
                    1500 INR
                    <span className="text-base text-body-color font-medium">
                      {" "}
                      / month
                    </span>
                  </h2>
                  <p className="text-base text-body-color pb-8 mb-8 border-b border-[#F2F2F2]">
                    Tailored solutions for businesses with specific needs.
                    Installation charges may apply.
                  </p>
                  <div className="mb-7">
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ All Features / Customizable
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Data Storage: Unlimited
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Sales Pipeline: YES
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Email Invoice: YES
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Shared Menu: YES
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Mobile Responsive: YES
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Clients & Leads Management: YES
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      ✔ Built-in Inventory Management: YES
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1 bg-secoundry pl-2 rounded-md">
                      Up to 10 Users
                    </p>
                  </div>
                </div>
              </div>
            </div>
          
          </div>
          <div className="flex justify-center mt-8">
              <button
                onClick={() => (window.location.href = "tel:8143407758")}
                className="w-1/2 md:w-1/2 bg-primary-STYLE1 text-black py-3 px-4 rounded-md shadow-md hover:bg-primary-STYLE2 transition duration-300 flex items-center justify-center"
              >
                <IoMdLogIn className="mr-2 text-xl transition-transform duration-300 group-hover:animate-wiggle" />
                Contact Sales
              </button>
            </div>
        </section>
        {/* ====== Pricing Section End ====== */}

        {/* ====== Contact Section End ====== */}
        <section>
          <Contactus />
        </section>
        {/* ====== Contact Section End ====== */}
      </section>
    </>
  );
}

export default Home;
