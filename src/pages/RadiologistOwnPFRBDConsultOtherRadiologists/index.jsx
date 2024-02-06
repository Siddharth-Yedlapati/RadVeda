import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const RadiologistOwnPFRBDConsultOtherRadiologistsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-poppins h-[859px] mx-auto p-[7px] relative w-full">
        <div className="md:h-[786px] h-[826px] sm:h-[835px] m-auto max-w-[1420px] md:px-5 w-full">
          <div className="absolute bg-blue_gray-900 bottom-[0] h-[786px] inset-x-[0] mx-auto rounded-[10px] w-full"></div>
          <div className="absolute flex flex-row gap-5 items-center justify-center right-[2%] top-[0] w-[9%]">
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
          <div className="absolute flex flex-col items-start justify-start left-[0] p-[38px] sm:px-5 top-[4%] w-[63%]">
            <Text
              className="bg-clip-text bg-gradient1  md:ml-[0] ml-[31px] mt-[11px] sm:text-[29.36px] md:text-[31.36px] text-[33.36px] text-transparent"
              size="txtPoppinsBold3336"
            >
              <span className="md:text-[23.02px] sm:text-[21.02px] text-white-A700 font-poppins text-left text-[25.02px] font-normal">
                Good Morning
              </span>
              <span className="text-pink-A200 font-poppins text-left font-bold">
                {" "}
              </span>
              <span className="text-light_blue-400 font-poppins text-left font-bold">
                John Doe
              </span>
            </Text>
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[37px] mt-[350px] pt-2 px-2 w-[96%] md:w-full">
              <div className="flex flex-col items-center justify-start md:mt-0 mt-2.5">
                <Text
                  className="capitalize text-base text-gray-100"
                  size="txtPoppinsSemiBold16"
                >
                  Radiologist4
                </Text>
              </div>
              <Text
                className="capitalize md:ml-[0] ml-[118px] md:mt-0 mt-[9px] text-base text-gray-100"
                size="txtPoppinsMedium16"
              >
                Lab4
              </Text>
              <Text
                className="capitalize md:ml-[0] ml-[119px] md:mt-0 mt-2.5 text-base text-gray-100"
                size="txtPoppinsMedium16"
              >
                Request Declined by Radiologist
              </Text>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 gap-[119px] items-start justify-start mb-[114px] md:ml-[0] ml-[35px] mt-5 p-1.5 w-[96%] md:w-full">
              <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[3px] sm:mt-0 my-0.5">
                <Text
                  className="capitalize text-base text-gray-100"
                  size="txtPoppinsSemiBold16"
                >
                  Radiologist5
                </Text>
              </div>
              <Text
                className="capitalize mb-1 text-base text-gray-100"
                size="txtPoppinsMedium16"
              >
                Lab5
              </Text>
              <Text
                className="capitalize sm:mt-0 my-0.5 text-base text-gray-100"
                size="txtPoppinsMedium16"
              >
                Request Declined by Patient{" "}
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[11%] flex flex-col md:gap-10 gap-[239px] justify-start left-[3%] md:px-5 w-[65%]">
          <div className="flex flex-col font-poppins gap-[43px] justify-start w-full">
            <Text
              className="capitalize ml-12 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtPoppinsBold24"
            >
              Radiologist Details
            </Text>
            <div className="h-[206px] md:h-[258px] relative w-full">
              <div className="h-[206px] md:h-[258px] m-auto w-full">
                <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto pb-[67px] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row sm:gap-10 gap-[253px] items-center justify-start md:ml-[0] ml-[53px] w-[81%] md:w-full">
                      <Text
                        className="capitalize text-indigo-600 text-sm"
                        size="txtPoppinsSemiBold14"
                      >
                        Radiologist Name
                      </Text>
                      <Text
                        className="capitalize text-indigo-600 text-sm"
                        size="txtPoppinsSemiBold14"
                      >
                        Status
                      </Text>
                    </div>
                    <div className="flex md:flex-col flex-row gap-[17px] items-end justify-between mt-[27px] w-full">
                      <div className="flex md:flex-1 flex-row font-poppins sm:gap-10 items-center justify-between p-[7px] w-[82%] md:w-full">
                        <div className="flex flex-col items-center justify-start ml-[47px]">
                          <Text
                            className="capitalize text-base text-gray-100"
                            size="txtPoppinsSemiBold16"
                          >
                            Radiologist1
                          </Text>
                        </div>
                        <Text
                          className="capitalize mr-[180px] text-base text-gray-100"
                          size="txtPoppinsMedium16"
                        >
                          Not Yet Consulted
                        </Text>
                      </div>
                      <Button
                        className="capitalize cursor-pointer font-outfit font-semibold h-8 mb-[3px] md:mt-0 mt-1.5 rounded-lg text-center text-lg tracking-[0.36px] w-[162px]"
                        shape="round"
                        size="sm"
                        color="green_500_teal_400"
                      >
                        Consult
                      </Button>
                    </div>
                    <div className="flex flex-row sm:gap-10 gap-[278px] items-start justify-start md:ml-[0] ml-[53px] mt-[7px] w-[82%] md:w-full">
                      <div className="flex flex-col items-center justify-start mt-3.5">
                        <Text
                          className="capitalize text-base text-gray-100"
                          size="txtPoppinsSemiBold16"
                        >
                          Radiologist2
                        </Text>
                      </div>
                      <Text
                        className="capitalize mt-[13px] text-base text-gray-100"
                        size="txtPoppinsMedium16"
                      >
                        Request Approved
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[28%] my-auto pb-3.5 pl-3.5">
                  <Text
                    className="capitalize text-indigo-600 text-sm"
                    size="txtPoppinsSemiBold14"
                  >
                    Lab Name
                  </Text>
                  <Text
                    className="capitalize mt-[35px] text-base text-gray-100"
                    size="txtPoppinsMedium16"
                  >
                    Lab1
                  </Text>
                  <Text
                    className="capitalize mb-[49px] mt-[30px] text-base text-gray-100"
                    size="txtPoppinsMedium16"
                  >
                    Lab2
                  </Text>
                </div>
              </div>
              <div className="absolute bottom-[2%] flex sm:flex-col flex-row sm:gap-10 gap-[119px] items-start justify-start left-[5%] p-[5px] w-[82%]">
                <div className="flex flex-col items-center justify-start sm:mt-0 my-[3px]">
                  <Text
                    className="capitalize text-base text-gray-100"
                    size="txtPoppinsSemiBold16"
                  >
                    Radiologist3
                  </Text>
                </div>
                <Text
                  className="capitalize sm:mt-0 my-[3px] text-base text-gray-100"
                  size="txtPoppinsMedium16"
                >
                  Lab3
                </Text>
                <Text
                  className="capitalize mb-[5px] text-base text-gray-100"
                  size="txtPoppinsMedium16"
                >
                  Waiting for consent
                </Text>
              </div>
            </div>
          </div>
          <Button
            className="common-pointer capitalize cursor-pointer font-outfit font-semibold h-[33px] md:ml-[0] ml-[42px] rounded-lg text-center text-lg tracking-[0.36px] w-28"
            onClick={() => navigate("/radiologistownpendingforreviewbydoctor")}
            shape="round"
            size="sm"
            color="green_500_teal_400"
          >
            Back
          </Button>
        </div>
      </div>
    </>
  );
};

export default RadiologistOwnPFRBDConsultOtherRadiologistsPage;
