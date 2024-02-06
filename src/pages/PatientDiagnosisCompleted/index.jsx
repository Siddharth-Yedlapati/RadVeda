import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const PatientDiagnosisCompletedPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-outfit h-[859px] mx-auto p-[7px] relative w-full">
        <div className="md:h-[786px] h-[826px] m-auto max-w-[1412px] md:px-5 w-full">
          <div className="absolute bg-blue_gray-900 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[57px] md:px-10 sm:px-5 rounded-[10px] w-full">
            <div className="flex flex-col items-center justify-start ml-3 md:ml-[0] mt-[639px] w-[9%] md:w-full">
              <Button
                className="common-pointer capitalize cursor-pointer font-semibold h-[33px] rounded-lg text-center text-lg tracking-[0.36px] w-28"
                onClick={() => navigate("/patientdashboard")}
                shape="round"
                size="sm"
                color="green_500_teal_400"
              >
                Back
              </Button>
            </div>
          </div>
          <div className="absolute flex flex-row font-poppins gap-5 items-center justify-center right-[2%] top-[0] w-[9%]">
            <Img
              className="h-6 w-6"
              src="images/img_needhelp.svg"
              alt="needhelp"
            />
            <div className="flex flex-col h-6 items-center justify-start pb-0.5 pl-0.5 w-6">
              <div className="md:h-4 h-[19px] relative w-5">
                <div className="md:h-4 h-[19px] m-auto w-5">
                  <Img
                    className="absolute bottom-[0] h-4 left-[0] w-[17px]"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                  <div className="absolute bg-deep_orange-500 h-2.5 right-[0] rounded-[50%] top-[0] w-2.5"></div>
                </div>
                <Text
                  className="absolute right-[0] text-[6px] text-white-A700 top-[0]"
                  size="txtPoppinsMedium6"
                >
                  03
                </Text>
              </div>
              <Img
                className="h-0.5"
                src="images/img_vector_gray_400.svg"
                alt="vector_One"
              />
            </div>
            <div className="flex flex-col h-[30px] items-center justify-start w-[30px]">
              <div className="h-[29px] relative w-[29px]">
                <div className="absolute bg-amber-A700_63 flex flex-col h-max inset-[0] items-center justify-center m-auto p-0.5 rounded-[50%] w-7">
                  <div className="bg-amber-A700_4c h-6 rounded-[50%] w-6"></div>
                </div>
                <Img
                  className="absolute bottom-[0] h-[29px] object-cover right-[0] w-7"
                  src="images/img_image11.png"
                  alt="imageEleven"
                />
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col font-poppins items-end justify-start left-[0] sm:pl-5 pl-[37px] pt-[37px] top-[2%] w-[63%]">
            <div className="flex flex-col justify-start mt-2 w-full">
              <Text
                className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                size="txtPoppinsBold40"
              >
                Test Details
              </Text>
              <div className="flex flex-col gap-[57px] items-center justify-start md:ml-[0] ml-[492px] mt-[19px] w-[42%] md:w-full">
                <div className="flex flex-row items-center justify-evenly w-full">
                  <div className="h-[78px] relative w-[9%]">
                    <div className="h-[78px] m-auto w-full">
                      <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                        <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                          <div className="bg-blue_gray-100 h-8 rounded-[16px] w-full"></div>
                          <div className="bg-blue_gray-100 h-8 rounded-[16px] w-full"></div>
                        </div>
                      </div>
                      <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto py-[23px] w-full">
                        <Line className="bg-black-900 h-px w-full" />
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-[7px] h-max inset-[0] items-center justify-center m-auto w-[87%]">
                      <Img
                        className="h-6 w-[25px]"
                        src="images/img_polygon5.svg"
                        alt="polygonFive"
                      />
                      <Img
                        className="h-6 w-[25px]"
                        src="images/img_arrowdown_gray_900.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                  <div className="h-[363px] relative w-[92%]">
                    <div className="bg-blue_gray-800 h-[363px] m-auto rounded-[10px] w-full"></div>
                    <div className="absolute flex flex-col gap-7 inset-x-[0] justify-start mx-auto top-[9%] w-[86%]">
                      <Text
                        className="capitalize ml-11 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtPoppinsBold24"
                      >
                        Test Image
                      </Text>
                      <Img
                        className="h-[183px] md:h-auto object-cover w-full"
                        src="images/img_xray11.png"
                        alt="xrayEleven"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-red-300 flex flex-col font-outfit h-[65px] md:h-auto items-center justify-center rounded-lg w-[340px]">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="capitalize text-lg text-white-A700 tracking-[0.36px]"
                      size="txtOutfitSemiBold18"
                    >
                      Download Test Report
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-gradient  flex flex-col font-outfit h-[38px] md:h-auto items-center justify-center md:ml-[0] ml-[195px] mr-72 mt-[57px] rounded-lg w-[361px]">
                <div className="flex flex-col items-center justify-end">
                  <Text
                    className="capitalize text-lg text-white-A700 tracking-[0.36px]"
                    size="txtOutfitSemiBold18"
                  >
                    View Doctor Remarks
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="absolute bottom-[12%] capitalize cursor-pointer font-semibold h-[65px] right-[15%] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
          shape="round"
          size="3xl"
          color="green_500_teal_400"
        >
          View Personnel Info
        </Button>
      </div>
    </>
  );
};

export default PatientDiagnosisCompletedPage;
