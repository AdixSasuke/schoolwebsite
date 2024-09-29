import React from 'react'
import chart from '../assets/chart.svg'
import ties from '../assets/ties.svg'
import grad from '../assets/grad.svg'
import trophy from '../assets/trophy.svg'

const Academics = () => {
  return (
    <div className="flex flex-col justify-center items-center my-10 px-4">
      <div className='mt-10 mb-16'>
        <h1 className='text-4xl font-bold text-center'>ACADEMICS</h1>
      </div>

      {/* Updated grid to 2 columns */}
      <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-yellow-500 text-white text-center font-bold py-10 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-600">
          CBSE MANDATORY DISCLOSURE
        </div>
        <div className="bg-red-500 text-white text-center font-bold py-10 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-red-600">
          RESULT - CLASS X
        </div>
        <div className="bg-blue-500 text-white text-center font-bold py-10 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-600">
          ADMISSIONS
        </div>
        <div className="bg-teal-500 text-white text-center font-bold py-10 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-teal-600">
          RESULT - CLASS XII
        </div>
        <div className="bg-green-500 text-white text-center font-bold py-10 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:bg-green-600">
          INFRASTRUCTURE
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap justify-center gap-[100px] py-10">
        <div className="text-center flex flex-col items-center">
          <img src={ties} alt="Faculties" className="mb-2 transform transition duration-300 hover:scale-110 w-20 " />
          <div className="text-3xl font-semibold">70+</div>
          <div className="text-gray-600">Faculties</div>
        </div>
        <div className="text-center flex flex-col items-center">
          <img src={grad} alt="Students" className="mb-2 transform transition duration-300 hover:scale-110 w-20" />
          <div className="text-3xl font-semibold">1400+</div>
          <div className="text-gray-600">Students</div>
        </div>
        <div className="text-center flex flex-col items-center">
          <img src={trophy} alt="Awards Received" className="mb-2 transform transition duration-300 hover:scale-110 w-20" />
          <div className="text-3xl font-semibold">50+</div>
          <div className="text-gray-600">Awards Received</div>
        </div>
        <div className="text-center flex flex-col items-center">
          <img src={chart} alt="Board Result" className="mb-2 transform transition duration-300 hover:scale-110 w-20" />
          <div className="text-3xl font-semibold">100%</div>
          <div className="text-gray-600">Board Result</div>
        </div>
      </div>
    </div>
  )
}

export default Academics;
