import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const RadiologistOwnPendingForReviewByRadiologistHistoryPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-outfit h-[859px] mx-auto p-[7px] relative w-full">
        <div className="absolute bg-blue_gray-900 flex flex-col h-max inset-[0] items-start justify-center m-auto max-w-[1411px] p-[21px] md:px-5 rounded-[10px] w-full">
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[17px] mt-[711px] w-[9%] md:w-full">
            <Button
              className="common-pointer capitalize cursor-pointer font-semibold h-[33px] rounded-lg text-center text-lg tracking-[0.36px] w-28"
              onClick={() => navigate("/radiologistownpatientdetails")}
              shape="round"
              size="sm"
              color="green_500_teal_400"
            >
              Back
            </Button>
          </div>
        </div>
        <div className="absolute flex flex-row font-poppins gap-5 items-center justify-center md:px-5 right-[3%] top-[1%] w-[9%]">
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
        <div className="absolute flex flex-col font-poppins items-center justify-end left-[2%] p-2 md:px-5 top-[3%] w-[61%]">
          <div className="flex flex-col justify-start mt-[37px] w-[99%] md:w-full">
            <Text
              className="capitalize md:ml-[0] ml-[29px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
              size="txtPoppinsBold40"
            >
              Test Details
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[50px] w-[98%] md:w-full">
              <div className="h-[78px] relative w-[4%] md:w-full">
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
              <div className="bg-blue_gray-800 flex flex-col gap-[43px] justify-start p-[25px] sm:px-5 rounded-[10px] w-[39%] md:w-full">
                <Text
                  className="capitalize md:ml-[0] ml-[37px] mt-3 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Original Image
                </Text>
                <Img
                  className="h-[183px] md:h-auto mb-[38px] object-cover w-full"
                  src="images/img_xray11.png"
                  alt="xrayEleven"
                />
              </div>
              <div className="h-[78px] md:ml-[0] ml-[126px] relative w-[4%] md:w-full">
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
                    alt="polygonFive_One"
                  />
                  <Img
                    className="h-6 w-[25px]"
                    src="images/img_arrowdown_gray_900.svg"
                    alt="arrowdown_One"
                  />
                </div>
              </div>
              <div className="bg-blue_gray-800 flex flex-col md:gap-10 gap-[74px] items-end justify-start p-[23px] sm:px-5 rounded-[10px] w-[39%] md:w-full">
                <Text
                  className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtPoppinsBold24"
                >
                  Annotations by Radiologists
                </Text>
                <Img
                  className="h-[183px] md:h-auto mb-[31px] object-cover w-[99%] sm:w-full"
                  src="images/img_annotelyimage1.png"
                  alt="annotelyimageOne"
                />
              </div>
            </div>
            <div className="flex flex-col font-outfit gap-[21px] items-center justify-start ml-3 md:ml-[0] mt-[27px] w-[99%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Button
                  className="capitalize cursor-pointer font-semibold h-[65px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                  shape="round"
                  size="3xl"
                  color="green_500_teal_400"
                >
                  View Doctor’s Notes
                </Button>
                <Button
                  className="capitalize cursor-pointer font-semibold h-[65px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                  shape="round"
                  size="3xl"
                  color="green_500_teal_400"
                >
                  View Radiologist’s Details
                </Button>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Button
                  className="capitalize cursor-pointer font-semibold h-[65px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                  shape="round"
                  size="3xl"
                  color="green_500_teal_400"
                >
                  View Personnel Info
                </Button>
                <Button
                  className="capitalize cursor-pointer font-semibold h-[65px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                  shape="round"
                  size="3xl"
                  color="green_500_teal_400"
                >
                  View Radiologist’s Notes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RadiologistOwnPendingForReviewByRadiologistHistoryPage;