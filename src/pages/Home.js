import React from "react";
import logoTeam from "../assets/images/logo-team.png";
import logoNimbus from "../assets/images/logo-nimbus.png";
import team1 from "../assets/images/team1.png";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";
import team4 from "../assets/images/team4.png";

export default function Home() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-auto md:py-10 py-20 lg:py-0 lg:flex justify-center items-center">
      <div className=" flex justify-center items-center 2xl:gap-20 lg:gap-4 md:gap-20 gap-10 lg:flex-row flex-col">
        <div className="w-fit h-full hidden lg:flex justify-center items-center flex-col gap-20">
          <img src={team1} alt="" className="w-[150px] rotate-12 border-2 border-white border-dashed" />
          <img src={team2} alt="" className="w-[150px] -rotate-12 border-2 border-white border-dashed" />
        </div>
        <div className=" text-white bg-[#00000040] 2xl:p-10 lg:p-5 md:p-10 p-5 rounded-lg flex justify-center items-center flex-col md:w-[95%] w-[90%] lg:max-w-[800px]">
          <div className="flex justify-center items-center gap-5 xs:mb-16 mb-8">
            <img src={logoNimbus} alt="nimbus" className="xs:h-[100px] h-[80px]" />
            <img src={logoTeam} alt="medextrous" className="xs:h-[100px] h-[80px]" />
          </div>
          <h1 className="basica 2xl:text-7xl lg:text-5xl md:text-7xl text-5xl tracking-widest text-[#FFffff]">
            <span className="2xl:text-5xl lg:text-3xl md:text-5xl xs:text-3xl text-[27px]">TEAM</span>
          </h1>
          <h1 className="basica 2xl:text-7xl lg:text-5xl md:text-7xl xs:text-5xl text-[40px] tracking-widest text-[#FFffff]">
            MED<span className="2xl:text-5xl lg:text-3xl md:text-5xl xs:text-3xl text-[27px]">EXTROUS</span>
          </h1>
          <h3 className="raleway 2xl:text-3xl lg:text-2xl md:text-3xl xs:text-xl text-lg text-center tracking-wide font-semibold text-[#CCCCCC] mt-3">Dextors of Mechanical Engineering Department</h3>
          <button className="xs:mt-16 my-8 bg-[#FF5722] px-7 py-2 rounded-lg font-semibold tracking-wide">EXPLORE</button>
        </div>
        <div className="w-fit lg:h-full flex justify-center items-center lg:flex-col md:gap-20 gap-10">
          <img src={team3} alt="" className="lg:w-[150px] sm:w-[200px] w-[125px] -rotate-12 border-2 border-white border-dashed" />
          <img src={team4} alt="" className="lg:w-[150px] sm:w-[200px] w-[125px] rotate-12 border-2 border-white border-dashed" />
        </div>
      </div>
    </div>
  );
}
