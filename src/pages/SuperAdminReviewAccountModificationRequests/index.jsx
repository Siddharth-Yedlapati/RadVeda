import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const SuperAdminReviewAccountModificationRequestsPage = () => {
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
          <div className="font-outfit md:h-[1048px] h-[793px] sm:h-[794px] mt-[3px] relative w-full">
            <div className="md:h-[1045px] sm:h-[791px] h-[793px] m-auto w-full">
              <div className="absolute bg-blue_gray-900 flex flex-col h-max inset-[0] items-end justify-center m-auto p-[260px] md:px-10 sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-col items-center justify-start mb-[114px] mr-[93px] w-1/5 md:w-full">
                  <List
                    className="flex flex-col gap-[23px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-[31px] items-center justify-between my-0 w-full">
                      <div className="bg-gradient  flex flex-col h-[33px] md:h-auto items-center justify-center rounded-lg w-[70px]">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="capitalize text-lg text-white-A700 tracking-[0.36px]"
                            size="txtOutfitSemiBold18"
                          >
                            Accept
                          </Text>
                        </div>
                      </div>
                      <div className="bg-pink-800 flex flex-col h-[33px] md:h-auto items-center justify-center rounded-lg w-[71px]">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="capitalize text-lg text-white-A700 tracking-[0.36px]"
                            size="txtOutfitSemiBold18"
                          >
                            Decline
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-[31px] items-center justify-between my-0 w-full">
                      <div className="bg-gradient  flex flex-col h-[33px] md:h-auto items-center justify-center rounded-lg w-[70px]">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="capitalize text-lg text-white-A700 tracking-[0.36px]"
                            size="txtOutfitSemiBold18"
                          >
                            Accept
                          </Text>
                        </div>
                      </div>
                      <div className="bg-pink-800 flex flex-col h-[33px] md:h-auto items-center justify-center rounded-lg w-[71px]">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="capitalize text-lg text-white-A700 tracking-[0.36px]"
                            size="txtOutfitSemiBold18"
                          >
                            Decline
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-[31px] items-start justify-between my-0 w-full">
                      <div className="bg-gradient  flex flex-col h-[33px] md:h-auto items-center justify-center mb-0.5 rounded-lg w-[70px]">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="capitalize text-lg text-white-A700 tracking-[0.36px]"
                            size="txtOutfitSemiBold18"
                          >
                            Accept
                          </Text>
                        </div>
                      </div>
                      <div className="bg-pink-800 flex flex-col h-[33px] md:h-auto items-center justify-center mt-0.5 rounded-lg w-[71px]">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="capitalize text-lg text-white-A700 tracking-[0.36px]"
                            size="txtOutfitSemiBold18"
                          >
                            Decline
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="absolute flex flex-col font-sfprotext gap-14 justify-center left-[0] p-[57px] md:px-10 sm:px-5 top-[0] w-[63%]">
                <div className="bg-gray-50_ed flex sm:flex-col flex-row sm:gap-5 h-9 md:h-auto items-center justify-start md:ml-[0] ml-[7px] mr-[460px] mt-[15px] p-2 rounded-[10px] w-[300px]">
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
                  <Img
                    className="h-6 w-6"
                    src="images/img_menu.svg"
                    alt="menu"
                  />
                </div>
                <div className="flex flex-col font-poppins gap-[15px] items-start justify-start mb-48 pl-1 py-1 w-full">
                  <Text
                    className="capitalize md:ml-[0] ml-[22px] sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                    size="txtPoppinsBold25"
                  >
                    Account Modification requests
                  </Text>
                  <div className="h-[216px] sm:h-[226px] md:h-[571px] mb-[13px] md:ml-[0] ml-[17px] relative w-[98%] md:w-full">
                    <div className="flex flex-col h-full items-center justify-start ml-[181px] pb-6 sm:px-5 px-6">
                      <Text
                        className="capitalize mb-[143px] sm:text-[17px] md:text-[19px] text-[21px] text-indigo-600"
                        size="txtPoppinsSemiBold21"
                      >
                        Info
                      </Text>
                    </div>
                    <div className="absolute sm:h-[213px] h-[216px] md:h-[558px] inset-[0] justify-center m-auto w-full">
                      <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[51px] w-full">
                            <Text
                              className="capitalize sm:text-[17px] md:text-[19px] text-[21px] text-indigo-600"
                              size="txtPoppinsSemiBold21"
                            >
                              Name
                            </Text>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-2.5 w-[99%] md:w-full">
                            <div className="bg-yellow-400 flex flex-col h-10 items-start justify-start mb-2.5 p-0.5 rounded-[10px] w-10">
                              <Line className="bg-blue_gray-900_01 h-[17px] my-2 w-[3px]" />
                            </div>
                            <div className="flex flex-col font-poppins items-start justify-start ml-5 md:ml-[0]">
                              <Text
                                className="capitalize sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                                size="txtPoppinsSemiBold23"
                              >
                                Admin1
                              </Text>
                              <Text
                                className="capitalize text-[17px] text-indigo-600"
                                size="txtPoppinsSemiBold17"
                              >
                                uk
                              </Text>
                            </div>
                            <Button
                              className="capitalize cursor-pointer font-outfit font-semibold h-[33px] md:ml-[0] ml-[43px] md:mt-0 mt-[3px] rounded-lg text-center text-lg tracking-[0.36px] w-[70px]"
                              shape="round"
                              size="sm"
                              color="green_500_teal_400"
                            >
                              View
                            </Button>
                            <Text
                              className="capitalize md:ml-[0] ml-[346px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                              size="txtPoppinsMedium23"
                            >
                              03/10/2018
                            </Text>
                          </div>
                          <div className="flex flex-row gap-5 items-start justify-start mt-2.5 pr-2.5 w-[22%] md:w-full">
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
                                Admin2
                              </Text>
                              <Text
                                className="capitalize text-[17px] text-indigo-600"
                                size="txtPoppinsSemiBold17"
                              >
                                uSA
                              </Text>
                            </div>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-0.5 w-full">
                            <div className="bg-deep_purple-A200 flex flex-col h-10 items-start justify-start mb-2.5 md:mt-0 mt-[7px] p-0.5 rounded-[10px] w-10">
                              <Line className="bg-blue_gray-900_01 h-4 my-[9px] w-[3px]" />
                            </div>
                            <div className="flex flex-col font-poppins items-start justify-start ml-5 md:ml-[0] md:mt-0 mt-[5px]">
                              <Text
                                className="capitalize sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                                size="txtPoppinsSemiBold23"
                              >
                                Admin3
                              </Text>
                              <Text
                                className="capitalize text-[17px] text-indigo-600"
                                size="txtPoppinsSemiBold17"
                              >
                                USA
                              </Text>
                            </div>
                            <Button
                              className="capitalize cursor-pointer font-outfit font-semibold h-[33px] md:ml-[0] ml-[38px] md:mt-0 mt-[7px] rounded-lg text-center text-lg tracking-[0.36px] w-[70px]"
                              shape="round"
                              size="sm"
                              color="green_500_teal_400"
                            >
                              View
                            </Button>
                            <Text
                              className="capitalize md:ml-[0] ml-[345px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                              size="txtPoppinsMedium23"
                            >
                              06/07/2022
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute bottom-[38%] capitalize right-[0] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                        size="txtPoppinsMedium23"
                      >
                        05/09/2023
                      </Text>
                      <div className="absolute flex flex-row font-outfit gap-[39px] items-start justify-center left-[26%] top-[0] w-[35%]">
                        <Button
                          className="capitalize cursor-pointer font-semibold h-[33px] mt-[106px] rounded-lg text-center text-lg tracking-[0.36px] w-[70px]"
                          shape="round"
                          size="sm"
                          color="green_500_teal_400"
                        >
                          View
                        </Button>
                        <div className="font-poppins md:h-[198px] h-[200px] relative w-[59%]">
                          <div className="md:h-[198px] h-[200px] m-auto w-full">
                            <Text
                              className="absolute capitalize left-[0] sm:text-[17px] md:text-[19px] text-[21px] text-indigo-600 top-[0]"
                              size="txtPoppinsSemiBold21"
                            >
                              Documents
                            </Text>
                            <div className="absolute flex flex-col h-max inset-y-[0] items-end justify-start my-auto pb-1 pl-1 right-[0]">
                              <Text
                                className="capitalize sm:text-[17px] md:text-[19px] text-[21px] text-indigo-600"
                                size="txtPoppinsSemiBold21"
                              >
                                Gender
                              </Text>
                              <Text
                                className="capitalize mt-2 sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                                size="txtPoppinsMedium23"
                              >
                                Male
                              </Text>
                              <Text
                                className="capitalize mt-[25px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                                size="txtPoppinsMedium23"
                              >
                                Female
                              </Text>
                              <Text
                                className="capitalize mt-6 sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                                size="txtPoppinsMedium23"
                              >
                                Male
                              </Text>
                            </div>
                          </div>
                          <div className="absolute bottom-[0] flex flex-col font-outfit gap-[27px] items-center justify-start left-[15%] w-[47%]">
                            <Button
                              className="capitalize cursor-pointer font-semibold h-[33px] rounded-lg text-center text-lg tracking-[0.36px] w-[70px]"
                              shape="round"
                              size="sm"
                              color="green_500_teal_400"
                            >
                              View
                            </Button>
                            <Button
                              className="capitalize cursor-pointer font-semibold h-[33px] rounded-lg text-center text-lg tracking-[0.36px] w-[70px]"
                              shape="round"
                              size="sm"
                              color="green_500_teal_400"
                            >
                              View
                            </Button>
                            <Button
                              className="capitalize cursor-pointer font-semibold h-[33px] rounded-lg text-center text-lg tracking-[0.36px] w-[70px]"
                              shape="round"
                              size="sm"
                              color="green_500_teal_400"
                            >
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Text
                        className="absolute capitalize right-[0] sm:text-[17px] md:text-[19px] text-[21px] text-indigo-600 top-[1%]"
                        size="txtPoppinsSemiBold21"
                      >
                        Date of Signup
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer absolute bottom-[10%] capitalize cursor-pointer font-semibold h-[33px] left-[5%] rounded-lg text-center text-lg tracking-[0.36px] w-28"
              onClick={() => navigate("/superadmindashboard")}
              shape="round"
              size="sm"
              color="green_500_teal_400"
            >
              Back
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminReviewAccountModificationRequestsPage;
