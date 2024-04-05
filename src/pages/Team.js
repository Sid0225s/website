import React from "react";
import projectImage from "../assets/images/project-1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Team() {
  const team1 = [
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
  ];
  const team2 = [
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
  ];
  const team3 = [
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
  ];
  const team4 = [
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
    {
      name: "Jasjot Singh",
      img: projectImage,
      position: "Final Year",
      linkedIn: "https://in.linkedin.com/in/arora-jasjot",
    },
  ];
  return (
    <div className="absolute top-0 left-0 w-full h-full text-white select-none">
      <div className="relative w-full h-full overflow-hidden flex flex-col">
        <h1 className="text-4xl raleway tracking-wide font-semibold text-[#ffffff] bg-[#00000090] p-5 text-center rounded-md mb-5 h-[80px]">TEAM</h1>
        <div className="h-full flex-shrink relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-y-scroll pb-10">
            <div className=" w-[100%] m-auto my-20">
              <div className="flex justify-center items-center gap-3 w-full overflow-hidden">
                <div className="vertical-writing rotate-180 bg-white text-black raleway font-bold py-6 px-2 text-center text-xl rounded-lg">FINAL YEAR</div>
                <div className="w-[90%] flex-shrink">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[Pagination, Autoplay]}
                    loop={false}
                    className="mySwiper"
                    breakpoints={{
                      1600: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                      },
                      1200: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                      640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      450: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                    }}
                  >
                    {team1.map((card, index) => (
                      <SwiperSlide key={index}>
                        <div className={`swiper-card bg-white rounded-md max-w-[75%] xs2:max-w-max m-auto p-2 ${index % 2 === 0 ? "even-slide lg:mt-[42px] md:mt-[38px] mt-6" : ""}`}>
                          <div className="w-full aspect-square relative member-profile-card">
                            <img src={card.img} alt="Team Member" className="w-full aspect-square" />
                            <Link to={card.linkedIn} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-[#00000090] w-full absolute bottom-0 overflow-hidden cursor-pointer gap-2 linkedin-section">
                              <FaLinkedinIn size={20} /> <span className="block raleway font-semibold text-xs">View Profile</span>
                            </Link>
                          </div>
                          <div className="mt-2 raleway text-lg font-semibold italic text-black text-center">{card.name}</div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className=" w-[100%] m-auto my-20">
              <div className="flex justify-center items-center gap-3 w-full overflow-hidden">
                <div className="w-[90%] flex-shrink">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[Pagination, Autoplay]}
                    loop={false}
                    className="mySwiper"
                    breakpoints={{
                      1600: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                      },
                      1200: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                      640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      450: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                    }}
                  >
                    {team2.map((card, index) => (
                      <SwiperSlide key={index}>
                        <div className={`swiper-card bg-white rounded-md max-w-[75%] xs2:max-w-max m-auto p-2 ${index % 2 === 0 ? "even-slide lg:mt-[42px] md:mt-[38px] mt-6" : ""}`}>
                          <div className="w-full aspect-square relative member-profile-card">
                            <img src={card.img} alt="Team Member" className="w-full aspect-square" />
                            <Link to={card.linkedIn} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-[#00000090] w-full absolute bottom-0 overflow-hidden cursor-pointer gap-2 linkedin-section">
                              <FaLinkedinIn size={20} /> <span className="block raleway font-semibold text-xs">View Profile</span>
                            </Link>
                          </div>
                          <div className="mt-2 raleway text-lg font-semibold italic text-black text-center">{card.name}</div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="vertical-writing bg-white text-black raleway font-bold py-6 px-2 text-center text-xl rounded-lg">THIRD YEAR</div>
              </div>
            </div>
            <div className=" w-[100%] m-auto my-20">
              <div className="flex justify-center items-center gap-3 w-full overflow-hidden">
                <div className="vertical-writing rotate-180 bg-white text-black raleway font-bold py-6 px-2 text-center text-xl rounded-lg">SECOND YEAR</div>
                <div className="w-[90%] flex-shrink">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[Pagination, Autoplay]}
                    loop={false}
                    className="mySwiper"
                    breakpoints={{
                      1600: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                      },
                      1200: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                      640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      450: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      300: {
                        slidesPerView: 1,
                        spaceBetween: 100,
                      },
                    }}
                  >
                    {team3.map((card, index) => (
                      <SwiperSlide key={index}>
                        <div className={`swiper-card bg-white rounded-md max-w-[75%] xs2:max-w-max m-auto p-2 ${index % 2 === 0 ? "even-slide lg:mt-[42px] md:mt-[38px] mt-6" : ""}`}>
                          <div className="w-full aspect-square relative member-profile-card">
                            <img src={card.img} alt="Team Member" className="w-full aspect-square" />
                            <Link to={card.linkedIn} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-[#00000090] w-full absolute bottom-0 overflow-hidden cursor-pointer gap-2 linkedin-section">
                              <FaLinkedinIn size={20} /> <span className="block raleway font-semibold text-xs">View Profile</span>
                            </Link>
                          </div>
                          <div className="mt-2 raleway text-lg font-semibold italic text-black text-center">{card.name}</div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className=" w-[100%] m-auto my-20">
              <div className="flex justify-center items-center gap-3 w-full overflow-hidden">
                <div className="w-[90%] flex-shrink">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    modules={[Pagination, Autoplay]}
                    loop={false}
                    className="mySwiper"
                    breakpoints={{
                      1600: {
                        slidesPerView: 7,
                        spaceBetween: 10,
                      },
                      1200: {
                        slidesPerView: 5,
                        spaceBetween: 10,
                      },
                      768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                      },
                      640: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      450: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                      },
                      300: {
                        slidesPerView: 1,
                        spaceBetween: 100,
                      },
                    }}
                  >
                    {team4.map((card, index) => (
                      <SwiperSlide key={index}>
                        <div className={`swiper-card bg-white rounded-md max-w-[75%] xs2:max-w-max m-auto p-2 ${index % 2 === 0 ? "even-slide lg:mt-[42px] md:mt-[38px] mt-6" : ""}`}>
                          <div className="w-full aspect-square relative member-profile-card">
                            <img src={card.img} alt="Team Member" className="w-full aspect-square" />
                            <Link to={card.linkedIn} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-[#00000090] w-full absolute bottom-0 overflow-hidden cursor-pointer gap-2 linkedin-section">
                              <FaLinkedinIn size={20} /> <span className="block raleway font-semibold text-xs">View Profile</span>
                            </Link>
                          </div>
                          <div className="mt-2 raleway text-lg font-semibold italic text-black text-center">{card.name}</div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="vertical-writing bg-white text-black raleway font-bold py-6 px-2 text-center text-xl rounded-lg">FIRST YEAR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
