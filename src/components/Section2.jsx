import React from "react";
import settings from "../assets/settings.svg";
import reload from "../assets/reload.svg";
import badge from "../assets/badge.svg";
import phone from "../assets/phone.svg";
import book from "../assets/book.svg";
import youtube from "../assets/youtube.svg";
import mail from "../assets/mail.svg";
import apple from "../assets/apple.svg";
import playstore from "../assets/playstore.svg";
import google from "../assets/google.svg";
import blog from "../assets/blog.svg";
import whatsapp from "../assets/whatsapp.svg";
import www from "../assets/www.svg";
import ads from "../assets/ads.svg";
import analytics from "../assets/analytics.svg";
import api from "../assets/api.svg";
import telegram from "../assets/telegram.svg";
import reddit from "../assets/reddit.svg";
import quora from "../assets/quora.svg";
import trust from "../assets/trust.svg";

const Section2 = () => {
  return (
    <>
      <div className=" p-24 py-16">
        <div className="flex justify-center items-center">
          <span className="font-bold text-3xl">
            Why Konnect Insights is the Best &nbsp;{" "} 
          </span>{" "}
          <span class="before:block before:absolute before:-inset-1 before:bg-gradient-to-r p-1 from-[#BBEAF3] to-[#58B6D3] ... relative inline-block">
            <span class="relative text-black font-bold text-3xl">
              Social Studio Alternative ?{" "}
            </span>
          </span>{" "}
        </div>

        <div className="flex mt-12 gap-6 px-28 items-center justify-center">
          <div className="border-r-2 border-[##6B7280] p-6 px-8 flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <img src={settings} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <span className=" text-base font-medium">
                Create rules to <br /> automate pushing <br /> tickets
              </span>
            </div>
          </div>
          <div className="border-r-2 border-[##6B7280] p-6 px-8 flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <img src={reload} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <span className=" text-base font-medium">
                Create rules to <br /> automate pushing <br /> tickets
              </span>
            </div>
          </div>
          <div className="border-r-2 border-[##6B7280] p-6 px-8 flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <img src={badge} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <span className=" text-base font-medium">
                Create rules to <br /> automate pushing <br /> tickets
              </span>
            </div>
          </div>
          <div className="border-r-2 border-[##6B7280] p-6 px-8 flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <img src={phone} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <span className=" text-base font-medium">
                Create rules to <br /> automate pushing <br /> tickets
              </span>
            </div>
          </div>
          <div className=" p-6 px-8 flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <img src={book} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <span className=" text-base font-medium">
                Create rules to <br /> automate pushing <br /> tickets
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center flex-col mt-8">
            <button className=" bg-[#EDCD54] p-3 rounded-full px-8 font-bold hover:bg-yellow-300 hover:transform hover:scale-110 duration-150">
              Get a Free Trial
            </button>
            <span className="font-semibold mt-2">NO CC REQUIRED</span>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F4F4] flex flex-col items-center gap-8 py-4">
        <span className="font-bold text-xl tracking-wider">
          3000+ INTEGRATION & 100% DATA COVERAGE ACROSS THE INTERNET!
        </span>
        <div className="flex gap-12">
          <img src={youtube} alt="" />
          <img src={mail} alt="" />
          <img src={apple} alt="" />
          <img src={playstore} alt="" />
          <img src={google} alt="" />
          <img src={blog} alt="" />
          <img src={whatsapp} alt="" />
          <img src={www} alt="" />
          <img src={ads} alt="" />
          <img src={analytics} alt="" />
          <img src={api} alt="" />
          <img src={telegram} alt="" />
          <img src={reddit} alt="" />
          <img src={quora} alt="" />
          <img src={trust} alt="" />
        </div>
      </div>
    </>
  );
};

export default Section2;
