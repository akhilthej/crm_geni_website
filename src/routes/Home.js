import React, { useEffect } from "react";
import HomeImageHero from "../assets/HomeImage.png";
import HomeImageHero1 from "../assets/HomeImage1.png";
import HomeImageHero2 from "../assets/HomeImage2.png";
import HomeImageHero3 from "../assets/HomeImage3.png";
import { IoMdLogIn } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  FaFileInvoiceDollar,
  FaChartLine,
  FaUsersCog,
  FaStar,
} from "react-icons/fa";
import Contactus from "./Contactus";
import Magicqr_Google from "../assets/Magicqr_Google.mp4";
import google_map_review_ai from '../assets/google_map_review_ai.png'

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleDemoLink = () => {
    window.open("https://demo.crmgeni.com/", "_blank");
  };
  const handleMagicQrLink = () => {
    window.open("https://magicqr.crmgeni.com/signup", "_blank");
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

      {/* ====== Magic Qr Section Starting ====== */}
<div className="px-4 bg-white mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
  <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
    <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
      <div className="max-w-xl mb-6">
        <p className="text-primary font-black">New Product</p>
        <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
          <span>Magic QR</span>{" "}
          <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-primary to-secoundry lg:inline">
            Solution
          </span>{" "}
          <span>For your Online Reviews</span>
        </h1>
        <p className="text-black text-base md:text-lg">
          Take control of your online reputation with our smart review
          management system! Reviews below three stars are routed into a
          private feedback loop for improvement, while four- and
          five-star reviews get published on Google Maps—enhancing your
          credibility and attracting more customers effortlessly.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <button
          onClick={handleMagicQrLink}
          className="w-full md:w-1/2 bg-primary-STYLE1 text-black py-3 px-4 rounded-md shadow-md hover:bg-primary-STYLE2 transition duration-300 flex items-center justify-center group mb-4"
        >
          <IoMdLogIn className="mr-2 text-xl transition-transform duration-300 group-hover:animate-wiggle" />
          Sign up Now
        </button>
      </div>
    </div>
    <div className="flex items-end">
      <img
        src={google_map_review_ai}
        alt="Man leaning on wall"
        className="w-44 h-full object-cover -ml-8 z-1"
      />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-52 h-full object-cover rounded-lg z-2 -ml-10 drop-shadow-md"
        src={Magicqr_Google}
      />
    </div>
  </div>
</div>
{/* ====== Magic Qr Ending ====== */}

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
        <section
          id="features"
          className="py-16 bg-secoundry rounded-md -mt-10 overflow-hidden"
        >
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
            </div>
          </div>
        </div>

        <div className="px-4 bg-white mb-8 py-8 rounded-3xl mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                  <span>Managing your </span>{" "}
                  <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-primary to-secoundry lg:inline">
                    Employees
                  </span>{" "}
                  <span>is now easy !</span>
                </h1>
                <p className="text-black text-base md:text-lg">
                  Track your employees attances salery another hiring needs.
                </p>
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
        <div className="flex flex-wrap justify-center items-center -mx-4 my-10">
          {[
            {
              title: "Starter",
              price: "1250 INR",
              features: [
                "Invoicing via Email and WhatsApp",
                "Expenditures Tracker",
                "Customer Database",
                "Display Menu Card",
                "Full Business Analysis Report",
                "QR & UPI Payment Gateway",
                "Magic QR for Google Reviews",
              ],
              users: "1",
              bgColor: "bg-white",
              textColor: "text-black",
            },
            {
              title: "Mid",
              price: "1050 INR",
              features: [
                "Complete Billing Solution",
                "Expenditures Tracker",
                "Customer Database",
                "Separate Management for Product & Services",
                "Display Menu Card",
                "Leads Management",
                "Full Business Analysis Report",
                "QR & UPI Payment Gateway",
                "Magic QR for Google Reviews",
              ],
              users: "4",
              bgColor: "bg-primary",
              textColor: "text-white",
            },
            {
              title: "High",
              price: "1500 INR",
              features: [
                "Complete Billing Solution",
                "Expenditures Tracker",
                "Customer Database",
                "Complete Employment Management System",
                "Separate management for Product & Services with inventory system",
                "Display Menu Card",
                "Leads Management",
                "Full Business Analysis Report",
                "QR & UPI Payment Gateway",
                "Appointment System",
                "Magic QR for Google Reviews",
                "AI - CRM Geni (Recommendations)",
              ],
              users: "10",
              bgColor: "bg-primary-100",
              textColor: "text-white",
            },
          ].map((plan, index) => (
            <div
              key={index}
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 px-4 flex justify-center"
            >
              <div
                className={`${plan.bgColor} rounded-xl relative z-10 overflow-hidden border border-primary border-opacity-20 shadow-pricing py-10 px-8 sm:p-12 lg:py-10 lg:px-6 xl:p-12 mb-10 w-full max-w-sm`}
              >
                <span
                  className={`font-semibold text-lg block mb-4 ${plan.textColor}`}
                >
                  {plan.title} Plan
                </span>
                <h2 className={`font-bold text-[42px] mb-5 ${plan.textColor}`}>
                  {plan.price} / month
                </h2>
                <p
                  className={`text-base pb-8 mb-8 border-b border-[#F2F2F2] ${plan.textColor}`}
                >
                  Ideal for {plan.title} businesses.
                </p>
                <div className="mb-7">
                  <ul className="list-disc pl-5">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className={`text-base leading-loose ${plan.textColor}`}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-base leading-loose mt-2 bg-secoundry pl-2 rounded-md text-black">
                    {plan.users} Users
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ====== Pricing Section End ====== */}

        {/* ====== Contact Section End ====== */}
        <section>
          <Contactus />
        </section>
        {/* ====== Contact Section End ====== */}

        {/* ====== FAQ Section End ====== */}
        <section
          id="faq"
          className="min-h-screen flex items-center justify-center"
        >
          <div className="max-w-screen-xl mx-auto px-5 bg-white">
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-5xl mt-5 tracking-tight text-primary">
                FAQ
              </h2>
              <p className="text-neutral-500 text-xl mt-3">
                Frequently asked questions
              </p>
            </div>
            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>What is Invoice & Payment Management?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Invoice & Payment Management allows you to create and manage
                    invoices, share them with customers, and track payment
                    status.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How does Customer & Sales Management work?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Customer & Sales Management allows you to store and manage
                    customer data, track leads, and manage sales funnels.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>What is Product & Service Management?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Product & Service Management allows you to list and manage
                    your products and services, and track inventory.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>How does Expense & Financial Tracking work?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Expense & Financial Tracking allows you to track your daily
                    expenses, generate financial reports, and set financial
                    goals.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>What is HR & Employee Management?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    HR & Employee Management allows you to manage employee data,
                    track attendance and leaves, and assign tasks.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>What is Automation & Business Tools?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Automation & Business Tools allows you to automate recurring
                    expenses, and get AI-powered business insights.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>What is Customer Engagement & Support?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Customer Engagement & Support allows you to collect customer
                    feedback, and handle customer support tickets.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>What is Security & Compliance?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Security & Compliance ensures that your data is secure and
                    compliant with GDPR and other regulations.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>
                      Can I use this system for hotels, restaurants, small
                      businesses, salons, Gym and other businesses?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Yes, this system is suitable for hotels, restaurants, small
                    businesses, salons, and more. We also offer custom
                    development tailored to your specific business needs.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
        {/* ====== FAQ Section End ====== */}
      </section>
    </>
  );
}

export default Home;
