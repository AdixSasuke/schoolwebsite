import React from 'react';

const Announcements = () => {
  return (
    <div className="bg-[#FFC0CB] text-white overflow-hidden whitespace-nowrap flex ">
        <span className="font-bold uppercase h-[100%] px-5 py-3 mr-8 z-10 bg-[#E1053C]">Upcoming Events</span>
      <div
        className="flex items-center animate-marquee space-x-16 z-0 text-black"
        style={{ animationDuration: '25s' }}>
        
        <span className=" font-bold">**Inter-Section Planter Designing (Art) - Classes VI-VIII on 13.08.2024**</span>
        <span className=" font-bold">**Independence Day Celebration on 15.08.2024**</span>
        <span className=" font-bold">**Inter-Class Greeting Card Designing Competition**</span>
        <span className="font-bold"> **Inter House Basketball Competition (Girls) Classes VI-XII on 16.08.2024**</span>
      </div>
    </div>
  );
};

export default Announcements;