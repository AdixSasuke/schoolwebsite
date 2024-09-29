import React from 'react';
import build from '../assets/build.svg';
import phone from '../assets/phone.svg';
import email from '../assets/email.svg';
import fb from '../assets/fb.svg';
import ig from '../assets/ig.svg';
import li from '../assets/li.svg';
import yt from '../assets/yt.svg';
import x from '../assets/x.svg';
import bg from '../assets/400x300.jpg'

const Contact = () => {
  return (
    <div className="flex justify-center items-center mb-20 mx-5">
      <div className="flex">
        <div className="flex flex-col space-y-4 mr-4">
          <a href="#" className="bg-blue-600 text-white p-4 rounded-full">
            <img src={fb} alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="#" className="bg-black text-white p-4 rounded-full">
            <img src={ig} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="#" className="bg-red-600 text-white p-4 rounded-full">
            <img src={yt} alt="YouTube" className="w-6 h-6" />
          </a>
          <a href="#" className="bg-blue-700 text-white p-4 rounded-full">
            <img src={li} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="#" className="bg-black text-white p-4 rounded-full">
            <img src={x} alt="Twitter" className="w-6 h-6" />
          </a>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 relative">
          <img
            src={bg}
            alt="Background image of students in a classroom"
            className="absolute inset-0 w-full h-full object-cover rounded-lg opacity-50"
          />
          <div className="relative z-10">
            <h2 className="text-white text-2xl font-bold mb-4">GET IN TOUCH</h2>
            <div className="flex items-center mb-4">
              <div className="bg-white p-4 rounded-full mr-4">
                <img src={build} alt="Location" className="w-8 h-8" />
              </div>
              <div className="text-white">
                <h3 className="font-bold">Contact Us</h3>
                <p>Sector 26, Opp. Dwarikapuri,<br />
                  Near NRI Circle, Pratap Nagar,<br />
                  Sanganer, Jaipur - 302 033</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="bg-white p-4 rounded-full mr-4">
                <img src={phone} alt="Phone" className="w-8 h-8" />
              </div>
              <div className="text-white">
                <h3 className="font-bold">Call Us</h3>
                <p>91+141-2796206 – 207 & 210</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-white p-4 rounded-full mr-4">
                <img src={email} alt="Email" className="w-8 h-8" />
              </div>
              <div className="text-white">
                <h3 className="font-bold">Email Us</h3>
                <p>jprvidyashramprtp@yahoo.in<br />
                  vidyashramprtpjpr@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;