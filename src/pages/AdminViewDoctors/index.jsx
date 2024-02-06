import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const AdminViewDoctorsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-poppins items-center justify-start mx-auto p-[7px] w-full">
        <div className="flex flex-col justify-start max-w-[1411px] mb-[19px] mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-5 items-center justify-end md:ml-[0] ml-[1270px] w-[9%] md:w-full">
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
          <div className="md:h-[1216px] sm:h-[789px] h-[793px] mt-[3px] relative w-full">
            <div className="absolute bg-blue_gray-900 h-[786px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
            <div className="absolute flex flex-col justify-start left-[0] md:pl-10 sm:pl-5 pl-[58px] pt-[58px] top-[0] w-[63%]">
              <div className="bg-gray-50_ed flex md:flex-col flex-row font-sfprotext md:gap-5 h-9 md:h-auto items-center justify-start ml-1.5 md:ml-[0] mr-[517px] mt-3.5 p-2 rounded-[10px] w-[300px]">
                <div className="flex flex-col h-7 items-center justify-start p-0.5 w-7">
                  <Img
                    className="h-[22px] md:h-auto object-cover w-4/5"
                    src="images/img_magnifyingglass.png"
                    alt="magnifyingglass"
                  />
                </div>
                <Text
                  className="flex-1 text-[17px] text-gray-800_99 tracking-[-0.41px] w-auto"
                  size="txtSFProTextRegular17"
                >
                  Search
                </Text>
                <Img className="h-6 w-6" src="images/img_menu.svg" alt="menu" />
              </div>
              <div className="flex font-poppins mt-14 relative w-full">
                <div className="flex flex-col items-start justify-end my-auto pl-[13px] py-[13px] w-[94%]">
                  <Text
                    className="capitalize md:ml-[0] ml-[3px] mt-[5px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtPoppinsBold25"
                  >
                    Doctors List{" "}
                  </Text>
                  <div className="sm:h-[210px] h-[216px] md:h-[640px] md:ml-[0] ml-[3px] mt-1 relative w-full">
                    <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[96%]">
                      <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                          <div className="bg-yellow-400 flex flex-col h-10 items-start justify-start mb-2.5 p-0.5 rounded-[10px] w-10">
                            <Line className="bg-blue_gray-900_01 h-[17px] my-2 w-[3px]" />
                          </div>
                          <div className="flex flex-col items-start justify-start ml-5 md:ml-[0]">
                            <Text
                              className="capitalize sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                              size="txtPoppinsSemiBold23"
                            >
                              Doctor1
                            </Text>
                            <Text
                              className="capitalize text-[17px] text-indigo-600"
                              size="txtPoppinsSemiBold17"
                            >
                              uk
                            </Text>
                          </div>
                          <Line className="bg-black-900 h-px mb-[18px] md:ml-[0] ml-[561px] md:mt-0 mt-7 rotate-[-45deg] w-1" />
                        </div>
                        <div className="flex flex-row gap-5 items-start justify-start pr-[17px] w-1/4 md:w-full">
                          <Button
                            className="flex h-10 items-center justify-center mb-2.5 w-10"
                            shape="round"
                            color="cyan_300"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              src="images/img_group1261152720.svg"
                              alt="group1261152720"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="capitalize sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                              size="txtPoppinsSemiBold23"
                            >
                              Doctor 2
                            </Text>
                            <Text
                              className="capitalize text-[17px] text-indigo-600"
                              size="txtPoppinsSemiBold17"
                            >
                              uSA
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-5 items-start justify-start pr-4 w-1/4 md:w-full">
                          <div className="bg-deep_purple-A200 flex flex-col h-10 items-start justify-start mb-2.5 p-0.5 rounded-[10px] w-10">
                            <Line className="bg-blue_gray-900_01 h-4 my-[9px] w-[3px]" />
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="capitalize sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                              size="txtPoppinsSemiBold23"
                            >
                              Doctor 3
                            </Text>
                            <Text
                              className="capitalize text-[17px] text-indigo-600"
                              size="txtPoppinsSemiBold17"
                            >
                              USA
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[0] w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[92%] md:w-full">
                        <div className="flex flex-col gap-[18px] justify-start w-[46%] md:w-full">
                          <div className="flex flex-row items-start justify-between mr-[15px] w-[96%] md:w-full">
                            <Text
                              className="capitalize mb-0.5 sm:text-[17px] md:text-[19px] text-[21px] text-indigo-600"
                              size="txtPoppinsSemiBold21"
                            >
                              doctor Name
                            </Text>
                            <Text
                              className="capitalize mt-0.5 sm:text-[17px] md:text-[19px] text-[21px] text-indigo-600"
                              size="txtPoppinsSemiBold21"
                            >
                              Info
                            </Text>
                          </div>
                          <div className="flex flex-col font-outfit items-center justify-start ml-60 md:ml-[0] w-[23%] md:w-full">
                            <Button
                              className="capitalize cursor-pointer font-semibold h-[33px] rounded-lg text-center text-lg tracking-[0.36px] w-[70px]"
                              shape="round"
                              size="sm"
                              color="green_500_teal_400"
                            >
                              View
                            </Button>
                            <Button
                              className="capitalize cursor-pointer font-semibold h-[33px] mt-5 rounded-lg text-center text-lg tracking-[0.36px] w-[70px]"
                              shape="round"
                              size="sm"
                              color="green_500_teal_400"
                            >
                              View
                            </Button>
                            <Button
                              className="capitalize cursor-pointer font-semibold h-[33px] mt-6 rounded-lg text-center text-lg tracking-[0.36px] w-[70px]"
                              shape="round"
                              size="sm"
                              color="green_500_teal_400"
                            >
                              View
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[15px] items-center justify-start md:ml-[0] ml-[67px] md:mt-0 mt-1 pb-[7px] w-[19%] md:w-full">
                          <Text
                            className="capitalize sm:text-[17px] md:text-[19px] text-[21px] text-indigo-600"
                            size="txtPoppinsSemiBold21"
                          >
                            Documents
                          </Text>
                          <div className="flex flex-col font-outfit items-center justify-start w-[58%] md:w-full">
                            <Button
                              className="capitalize cursor-pointer font-semibold h-[33px] rounded-lg text-center text-lg tracking-[0.36px] w-[70px]"
                              shape="round"
                              size="sm"
                              color="green_500_teal_400"
                            >
                              View
                            </Button>
                            <Button
                              className="capitalize cursor-pointer font-semibold h-[33px] mt-[21px] rounded-lg text-center text-lg tracking-[0.36px] w-[70px]"
                              shape="round"
                              size="sm"
                              color="green_500_teal_400"
                            >
                              View
                            </Button>
                            <Button
                              className="capitalize cursor-pointer font-semibold h-[33px] mt-6 rounded-lg text-center text-lg tracking-[0.36px] w-[70px]"
                              shape="round"
                              size="sm"
                              color="green_500_teal_400"
                            >
                              View
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[66px]">
                          <Text
                            className="capitalize md:ml-[0] ml-[3px] sm:text-[17px] md:text-[19px] text-[21px] text-indigo-600"
                            size="txtPoppinsSemiBold21"
                          >
                            experience
                          </Text>
                          <Text
                            className="capitalize mt-4 sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                            size="txtPoppinsMedium23"
                          >
                            13 yrs
                          </Text>
                          <Text
                            className="capitalize mt-[27px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                            size="txtPoppinsMedium23"
                          >
                            22 yrs
                          </Text>
                          <Text
                            className="capitalize mt-[25px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                            size="txtPoppinsMedium23"
                          >
                            3 yrs
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mb-[21px] ml-[-7px] mt-auto z-[1]">
                  <Text
                    className="capitalize md:ml-[0] ml-[3px] sm:text-[17px] md:text-[19px] text-[21px] text-indigo-600"
                    size="txtPoppinsSemiBold21"
                  >
                    Gender
                  </Text>
                  <Text
                    className="capitalize mt-[18px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                    size="txtPoppinsMedium23"
                  >
                    Male
                  </Text>
                  <Text
                    className="capitalize mt-[27px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                    size="txtPoppinsMedium23"
                  >
                    Female
                  </Text>
                  <Text
                    className="capitalize mt-[26px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                    size="txtPoppinsMedium23"
                  >
                    Male
                  </Text>
                </div>
              </div>
              <Button
                className="common-pointer capitalize cursor-pointer font-outfit font-semibold h-[33px] md:ml-[0] ml-[17px] mt-[216px] rounded-lg text-center text-lg tracking-[0.36px] w-28"
                onClick={() => navigate("/admindashboard")}
                shape="round"
                size="sm"
                color="green_500_teal_400"
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminViewDoctorsPage;
