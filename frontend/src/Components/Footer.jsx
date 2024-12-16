import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import assets from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Footer Columns */}
        <div className="text-center md:text-start">
          <h1 className="text-lg font-semibold mb-4 text-red-600">ABOUT COACHING</h1>
          <ul className="space-y-2">
            <li>
              <h3>
                Bobby Sir’s IELTS and TOEFL coaching is the oldest institute in Uttar Pradesh for admission exams of
                renowned foreign universities and colleges. We started in the year 2000 with two students, and today
                after 20 years thousands of students are settled into different parts of the world.
              </h3>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-start hidden sm:block">
          <h2 className="text-lg font-semibold mb-4 text-red-600">ADDRESS</h2>
          <ul className="space-y-2">
            <div className="flex flex-col items-start">
              <div className="flex items-center mb-2">
                <MdLocationOn size={20} className="mr-2" />
                <span>A-1 First Floor</span>
              </div>
              <div className="flex items-center mb-2">
                <span>Sameera Plaza Building</span>
              </div>
              <div className="flex items-center mb-2">
                <span>Lalbagh, Lucknow-226001</span>
              </div>
            </div>
            <div className="flex items-center">
              <MdPhone size={20} className="mr-2" />
              <span>+91 9335920991 </span>
            </div>
            <div className="flex items-center">
              <MdEmail size={20} className="mr-2" />
              <span>irwinamitdas@gmail.com</span>
            </div>
          </ul>
        </div>

        <div className="text-center md:text-start">
          <h2 className="text-lg font-semibold mb-4 text-red-600">HELPFUL PAGES</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">COURSES</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">HOME</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">CONTACT-US</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">ACHIEVEMENTS</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">TRAINING</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">ABOUT-US</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">TESTIMONIALS</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">STUDY-ABROAD</a>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-start">
          <h2 className="text-lg font-semibold mb-4 text-red-600">COURSES</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-300">IELTS</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">TOEFL</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">OET</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">OSCE</a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">NCLEX-RN</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-semibold">
          <img src={assets} alt="" />
        </div>
        <div className="text-gray-300 text-sm mt-4 md:mt-0">
          <p>&copy; 2024 DhiWise PVT. LTD. All rights reserved</p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0 hidden sm:flex">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
