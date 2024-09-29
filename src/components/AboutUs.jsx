import React from 'react';
import building from '../assets/building.jpg';
import chairman from '../assets/chairman.jpg';
import principal from '../assets/principal.jpg';


const AboutUs = () => {
  return (
    <div className="w-full mt-[76px]">
      <div className="mb-10">
        <img src={building} className="w-full" alt="Building" />
      </div>
      <div className="grid lg:grid-cols-10 gap-4 w-full px-5">
        {/* Welcome Section */}
        <div className="bg-[#E5FCEF]/70 rounded-lg p-5 flex flex-col justify-around text-center items-center col-span-4">
          <h1 className="font-bold text-2xl my-4 text-[#008000]">
            WELCOME TO <br /> BHARATIYA VIDYA BHAVAN VIDYASHRAM <br /> PRATAP NAGAR
          </h1>
          <div className='flex justify-center items-center w-[100%]'>
            <p className="font-semibold w-[80%] mt-4 mb-6 text-xl bg-[#FB2056] rounded-lg text-white py-2 px-5">
              WHERE LEARNING AND GROWTH AWAIT...
            </p>
          </div>
          <h1 className="text-xl font-semibold my-4">Vision</h1>
          <p className="my-4 font-medium">
            To be the symphony of Academic Excellence, Cultural Ethos, and Innovation towards grooming skilled and responsible Global Citizens.
          </p>
          <h1 className="text-xl font-semibold my-4">Mission</h1>
          <div className="text-left px-5 space-y-4">
            <li>We strive to lead our students towards Academic Excellence by providing student-centered education making them lifelong learners.</li>
            <li>Preparing them to have strong cultural values and integrity by amalgamating academics, Sports, Art and Culture, Technology, Skills, and Innovations.</li>
            <li>Nurturing them towards being global citizens committed to equity by having robust inclusive practices in all curricular and co-curricular aspects.</li>
          </div>
        </div>

        <div className="bg-[#FECF96] flex flex-col  items-center p-5 rounded-lg col-span-3">
          <img src={chairman} className="w-[200px] rounded-full my-4 transform transition duration-300 hover:scale-110 shadow-black shadow-md" alt="Chairman" />
          <h1 className="my-2 text-xl font-semibold">Aditya Khandelwal</h1>
          <h1 className="mb-4 font-medium">CHAIRMAN</h1>
          <p className="">
            It is our earnest endeavor to impart value-based education to children under our care. Our mission is not only to make successful Engineers, Doctors, Professionals, Businessmen, etc. but also to shape up good human beings of great values to espouse and spread the threefold cherished aspects of dharma Satyam, Shivam, and Sundaram. <br /><br />I pray for the internalization and universalization of these life-sustaining values. May God bless us all and endow us with the strength to achieve our noble goals.
          </p>
        </div>

        <div className="bg-[#FECF96] flex flex-col col-span-3 items-center p-5 rounded-lg">
          <img src={principal} className="w-[200px] rounded-full my-4 transform transition duration-300 hover:scale-110 shadow-black shadow-md" alt="Principal" />
          <h1 className="my-2 text-xl font-semibold">Aditya Khandelwal</h1>
          <h1 className="mb-4 font-medium">PRINCIPAL</h1>
          <p>In the words of Swami Vivekanand: “We want education by which character is formed, strength of mind is increased, the intellect is expanded and by which one can stand on one's own feet.” <br /><br />This is apt even now in this era of digitalisation and artificial intelligence as it is only through increased mental strength and human intellect that the emerging technologies are expanding opportunities in the social and economical arena. The fusion of technologies is blurring the lines between physical, digital and biological spaces.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
