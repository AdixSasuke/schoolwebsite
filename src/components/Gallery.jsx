import React from 'react';
import ph1 from '../assets/ph1.png';
import ph2 from '../assets/ph2.jpg';
import ph3 from '../assets/ph3.jpg';
import ph4 from '../assets/ph4.jpg';
import ph5 from '../assets/ph5.png';
import ph6 from '../assets/ph6.png';

const events = [
  {
    id: 1,
    title: 'GOPI GEETAM: A MELODY OF DIVINE GRACE',
    description: 'Bharatiya Vidya Bhavan Vidyashram Pratap Nagar...',
    ph: ph1,
  },
  {
    id: 2,
    title: 'STORY TELLING COMPETITION',
    description: 'STORY TELLING COMPETITION • Sustainability...',
    ph: ph2,
  },
  {
    id: 3,
    title: 'TUNE TALK SHOW',
    description: 'Tune Talk Show The purpose of talk shows is to either...',
    ph: ph3,
  },
  {
    id: 4,
    title: 'DANCE DRAMA COMPETITION',
    description: 'An Inter-House Dance Drama Competition was...',
    ph: ph4,
  },
  {
    id: 5,
    title: 'CLASS 10 RESULT',
    description: 'Class 10th Result Congratulations on your...',
    ph: ph5,
  },
  {
    id: 6,
    title: 'CLASS 12 RESULT',
    description: 'Class 12th Result Best wishes for passing the exam and good...',
    ph: ph6,
  },
];

const Gallery = () => {
  return (
    <div className="container mx-auto my-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-20">GALLERY</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 text-center ">
            <img src={event.ph} alt={event.title} className="w-full object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <a href="#" className="text-[#E1053C] hover:underline border-solid border-[1px] border-[#E1053C] px-5 py-2 rounded-lg">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
