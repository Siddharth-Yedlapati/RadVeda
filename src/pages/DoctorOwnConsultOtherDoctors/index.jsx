import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const DoctorOwnConsultOtherDoctorsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-poppins h-[859px] mx-auto p-[7px] relative w-full">
        <div className="md:h-[786px] h-[826px] m-auto max-w-[1420px] md:px-5 w-full">
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
          <div className="absolute flex flex-col md:gap-10 gap-[396px] justify-start left-[0] p-[33px] sm:px-5 top-[4%] w-[63%]">
            <Text
              className="bg-clip-text bg-gradient1  ml-9 md:ml-[0] mt-4 sm:text-[29.36px] md:text-[31.36px] text-[33.36px] text-transparent"
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
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end mb-[134px] md:ml-[0] ml-[47px] p-0.5 w-[95%] md:w-full">
              <div className="flex flex-col items-center justify-start md:mt-0 mt-3">
                <Text
                  className="capitalize text-base text-gray-100"
                  size="txtPoppinsSemiBold16"
                >
                  Doctor5
                </Text>
              </div>
              <Text
                className="capitalize md:ml-[0] ml-[114px] md:mt-0 mt-3 text-base text-gray-100"
                size="txtPoppinsMedium16"
              >
                Hospital5
              </Text>
              <Text
                className="capitalize md:ml-[0] ml-[111px] mr-[172px] md:mt-0 mt-[11px] text-base text-gray-100"
                size="txtPoppinsMedium16"
              >
                Request declined by doctor
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[11%] flex flex-col md:gap-10 gap-[201px] justify-start left-[3%] md:px-5 w-[64%]">
          <div className="flex flex-col font-poppins gap-[47px] justify-start w-full">
            <Text
              className="capitalize ml-12 md:ml-[0] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
              size="txtPoppinsBold24"
            >
              Doctor Details
            </Text>
            <div className="flex flex-col justify-start w-full">
              <div className="md:h-[198px] h-[199px] relative w-full">
                <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                  <div className="flex flex-row sm:gap-10 gap-[272px] items-start justify-start md:ml-[0] ml-[53px] w-[83%] md:w-full">
                    <Text
                      className="capitalize text-indigo-600 text-sm"
                      size="txtPoppinsSemiBold14"
                    >
                      Doctor Name
                    </Text>
                    <Text
                      className="capitalize text-indigo-600 text-sm"
                      size="txtPoppinsSemiBold14"
                    >
                      Status
                    </Text>
                  </div>
                  <div className="flex mt-[29px] relative w-full">
                    <div className="flex flex-row font-poppins sm:gap-10 items-center justify-between my-auto p-[7px] w-[84%]">
                      <div className="flex flex-col items-center justify-start ml-[49px]">
                        <Text
                          className="capitalize text-base text-gray-100"
                          size="txtPoppinsSemiBold16"
                        >
                          Doctor1
                        </Text>
                      </div>
                      <Text
                        className="capitalize mr-48 text-base text-gray-100"
                        size="txtPoppinsMedium16"
                      >
                        Not Yet Consulted
                      </Text>
                    </div>
                    <Button
                      className="capitalize cursor-pointer font-outfit font-semibold h-8 ml-[-5px] mt-0.5 rounded-lg text-center text-lg tracking-[0.36px] w-[162px] z-[1]"
                      shape="round"
                      size="sm"
                      color="green_500_teal_400"
                    >
                      Consult
                    </Button>
                  </div>
                  <div className="flex flex-col gap-[9px] items-center justify-start md:ml-[0] ml-[53px] mt-0.5 w-[84%] md:w-full">
                    <div className="flex flex-row sm:gap-10 gap-[303px] items-start justify-start p-0.5 w-full">
                      <div className="flex flex-col items-center justify-start mt-[11px]">
                        <Text
                          className="capitalize text-base text-gray-100"
                          size="txtPoppinsSemiBold16"
                        >
                          Doctor2
                        </Text>
                      </div>
                      <Text
                        className="capitalize mt-[11px] text-base text-gray-100"
                        size="txtPoppinsMedium16"
                      >
                        Request Approved
                      </Text>
                    </div>
                    <div className="flex flex-row sm:gap-10 gap-[303px] items-start justify-start p-0.5 w-full">
                      <div className="flex flex-col items-center justify-start mt-[11px]">
                        <Text
                          className="capitalize text-base text-gray-100"
                          size="txtPoppinsSemiBold16"
                        >
                          Doctor3
                        </Text>
                      </div>
                      <Text
                        className="capitalize mt-[11px] text-base text-gray-100"
                        size="txtPoppinsMedium16"
                      >
                        Request Declined by patient
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col h-full inset-y-[0] items-start justify-start left-1/4 my-auto pb-[15px]">
                  <Text
                    className="capitalize text-indigo-600 text-sm"
                    size="txtPoppinsSemiBold14"
                  >
                    Hospital Name
                  </Text>
                  <Text
                    className="capitalize ml-1 md:ml-[0] mt-10 text-base text-gray-100"
                    size="txtPoppinsMedium16"
                  >
                    Hospital1
                  </Text>
                  <Text
                    className="capitalize ml-1 md:ml-[0] mt-6 text-base text-gray-100"
                    size="txtPoppinsMedium16"
                  >
                    Hospital2
                  </Text>
                  <Text
                    className="capitalize ml-1 md:ml-[0] mt-[26px] text-base text-gray-100"
                    size="txtPoppinsMedium16"
                  >
                    Hospital3
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[51px] mt-1 p-1.5 w-[84%] md:w-full">
                <div className="flex flex-col items-center justify-start mb-1">
                  <Text
                    className="capitalize text-base text-gray-100"
                    size="txtPoppinsSemiBold16"
                  >
                    Doctor4
                  </Text>
                </div>
                <Text
                  className="capitalize mb-1 sm:ml-[0] ml-[114px] text-base text-gray-100"
                  size="txtPoppinsMedium16"
                >
                  Hospital4
                </Text>
                <Text
                  className="capitalize mb-1 sm:ml-[0] ml-[111px] text-base text-gray-100"
                  size="txtPoppinsMedium16"
                >
                  Waiting for consent
                </Text>
              </div>
            </div>
          </div>
          <Button
            className="common-pointer capitalize cursor-pointer font-outfit font-semibold h-[33px] md:ml-[0] ml-[42px] rounded-lg text-center text-lg tracking-[0.36px] w-28"
            onClick={() => navigate("/doctorownpendingforreview")}
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

export default DoctorOwnConsultOtherDoctorsPage;
