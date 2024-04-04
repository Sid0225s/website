import React from "react";
import eventImg from "../assets/images/event-1.jpeg";
import EventCard from "../components/EventCard";

export default function Events() {
  const events = [
    {
      img: eventImg,
      title: "RoboWars",
      date: "12-04-2024",
    },
    {
      img: eventImg,
      title: "RoboWars",
      date: "12-04-2024",
    },
    {
      img: eventImg,
      title: "RoboWars",
      date: "12-04-2024",
    },
    {
      img: eventImg,
      title: "RoboWars",
      date: "12-04-2024",
    },
    {
      img: eventImg,
      title: "RoboWars",
      date: "12-04-2024",
    },
    {
      img: eventImg,
      title: "RoboWars",
      date: "12-04-2024",
    },
    {
      img: eventImg,
      title: "RoboWars",
      date: "12-04-2024",
    },
    {
      img: eventImg,
      title: "RoboWars: Battle of the robots in NITH",
      date: "12-04-2024",
    },
    {
      img: eventImg,
      title: "RoboWars",
      date: "12-04-2024",
    },
  ];
  return (
    <div className="absolute top-0 left-0 w-full h-full text-white">
      <div className="relative w-full h-full overflow-hidden flex flex-col">
        <h1 className="text-4xl raleway tracking-wide font-semibold text-[#ffffff] bg-[#00000090] p-5 text-center rounded-md mb-5 h-[80px]">EVENTS</h1>
        <div className="h-full flex-shrink relative">
          <div className="absolute top-0 left-0 w-full h-full flex 2md:justify-start justify-center items-stretch flex-wrap overflow-y-scroll pb-10">
            {events?.map((event, i) => (
              <EventCard details={event} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
