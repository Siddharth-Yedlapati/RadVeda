import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const AdminReviewAccountDeletionRequestsPage = () => {
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
          <div className="md:h-[788px] h-[793px] mt-[3px] relative w-full">
            <div className="font-poppins md:h-[785px] h-[793px] m-auto w-full">
              <div className="absolute bg-blue_gray-900 flex flex-col h-max inset-[0] items-end justify-center m-auto p-1 rounded-[10px] w-full">
                <div className="flex flex-col items-center justify-start mb-[358px] mt-[213px] w-[32%] md:w-full">
                  <div className="flex flex-row items-end justify-between w-full">
                    <div className="flex flex-col gap-[25px] items-end justify-start md:pl-10 sm:pl-5 pl-[82px] w-2/5">
                      <Text
                        className="capitalize sm:text-[17px] md:text-[19px] text-[21px] text-indigo-600"
                        size="txtPoppinsSemiBold21"
                      >
                        Date of Signup
                      </Text>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="capitalize sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                          size="txtPoppinsMedium23"
                        >
                          03/10/2018
                        </Text>
                        <Text
                          className="capitalize mt-[27px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                          size="txtPoppinsMedium23"
                        >
                          05/09/2023
                        </Text>
                        <Text
                          className="capitalize md:ml-[0] ml-[3px] mt-[17px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                          size="txtPoppinsMedium23"
                        >
                          06/07/2022
                        </Text>
                      </div>
                    </div>
                    <List
                      className="flex flex-col font-outfit gap-7 mb-1 mt-[57px] w-[37%]"
                      orientation="vertical"
                    >
                      <div className="flex flex-row gap-[21px] items-center justify-between w-full">
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
                      <div className="flex flex-row gap-[22px] items-center justify-between w-full">
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
                      <div className="flex flex-row gap-[22px] items-center justify-between w-full">
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
                    </List>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col font-sfprotext gap-14 justify-center left-[0] md:pl-10 sm:pl-5 pl-[58px] py-[58px] top-[0] w-[63%]">
                <div className="bg-gray-50_ed flex md:flex-col flex-row md:gap-5 h-9 md:h-auto items-center justify-start ml-1.5 md:ml-[0] mr-[517px] mt-3.5 p-2 rounded-[10px] w-[300px]">
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
                <div className="flex font-poppins mb-[191px] relative w-full">
                  <div className="flex flex-col gap-1.5 justify-start my-auto pl-0.5 py-0.5 w-[94%]">
                    <Text
                      className="capitalize md:ml-[0] ml-[25px] mt-0.5 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                      size="txtPoppinsBold25"
                    >
                      Account Deletion requests
                    </Text>
                    <div className="h-[222px] md:h-[229px] mb-[19px] relative w-full">
                      <div className="absolute md:h-[201px] h-[216px] inset-[0] justify-center m-auto w-full">
                        <div className="flex flex-col gap-[18px] h-full items-center justify-start ml-auto mr-[289px] mt-[3px] w-[12%]">
                          <Text
                            className="capitalize sm:text-[17px] md:text-[19px] text-[21px] text-indigo-600"
                            size="txtPoppinsSemiBold21"
                          >
                            Info
                          </Text>
                          <div className="flex flex-col font-outfit items-center justify-start w-[79%] md:w-full">
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
                              className="capitalize cursor-pointer font-semibold h-[33px] mt-7 rounded-lg text-center text-lg tracking-[0.36px] w-[70px]"
                              shape="round"
                              size="sm"
                              color="green_500_teal_400"
                            >
                              View
                            </Button>
                          </div>
                        </div>
                        <div className="absolute md:h-[201px] h-[216px] inset-[0] justify-center m-auto w-full">
                          <div className="md:h-[201px] h-[216px] m-auto w-full">
                            <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[48%]">
                              <div className="flex flex-col gap-[11px] items-start justify-start w-full">
                                <div className="flex flex-row gap-5 items-start justify-start md:pr-10 sm:pr-5 pr-[72px] w-3/5 md:w-full">
                                  <div className="bg-yellow-400 flex flex-col h-10 items-start justify-start mb-2.5 p-[3px] rounded-[10px] w-10">
                                    <Line className="bg-blue_gray-900_01 h-[17px] my-[7px] w-1" />
                                  </div>
                                  <div className="flex flex-col items-start justify-start">
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
                                </div>
                                <div className="flex flex-row items-start justify-between w-full">
                                  <Button
                                    className="flex h-10 items-center justify-center mb-[9px] w-10"
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
                                      Radiologist 1
                                    </Text>
                                    <Text
                                      className="capitalize text-[17px] text-indigo-600"
                                      size="txtPoppinsSemiBold17"
                                    >
                                      uSA
                                    </Text>
                                  </div>
                                  <Text
                                    className="capitalize sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                                    size="txtPoppinsMedium23"
                                  >
                                    Radiologist
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-5 items-start justify-start md:pr-10 sm:pr-5 pr-[62px] w-3/5 md:w-full">
                                  <div className="bg-deep_purple-A200 flex flex-col h-10 items-start justify-start mb-2.5 p-[3px] rounded-[10px] w-10">
                                    <Line className="bg-blue_gray-900_01 h-4 my-2 w-1" />
                                  </div>
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
                                      USA
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute flex flex-row sm:gap-10 gap-[135px] inset-x-[0] items-start justify-start mx-auto md:px-10 sm:px-5 px-[51px] top-[0] w-full">
                              <Text
                                className="capitalize sm:text-[17px] md:text-[19px] text-[21px] text-indigo-600"
                                size="txtPoppinsSemiBold21"
                              >
                                Name
                              </Text>
                              <div className="flex flex-col items-start justify-start px-[5px]">
                                <Text
                                  className="capitalize md:ml-[0] ml-[5px] sm:text-[17px] md:text-[19px] text-[21px] text-indigo-600"
                                  size="txtPoppinsSemiBold21"
                                >
                                  Role
                                </Text>
                                <Text
                                  className="capitalize mt-[13px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                                  size="txtPoppinsMedium23"
                                >
                                  Doctor
                                </Text>
                                <Text
                                  className="capitalize mt-[86px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                                  size="txtPoppinsMedium23"
                                >
                                  Doctor
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[8%]">
                            <Text
                              className="capitalize md:ml-[0] ml-[119px] sm:text-[17px] md:text-[19px] text-[21px] text-indigo-600"
                              size="txtPoppinsSemiBold21"
                            >
                              experience
                            </Text>
                            <Text
                              className="capitalize md:ml-[0] ml-[117px] mt-4 sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                              size="txtPoppinsMedium23"
                            >
                              13 yrs
                            </Text>
                            <Text
                              className="capitalize md:ml-[0] ml-[116px] mt-[27px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                              size="txtPoppinsMedium23"
                            >
                              22 yrs
                            </Text>
                            <Text
                              className="capitalize md:ml-[0] ml-[121px] mt-4 sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                              size="txtPoppinsMedium23"
                            >
                              3 yrs
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex flex-col items-center justify-end py-0.5 right-[14%] top-[0] w-[17%]">
                        <div className="flex flex-col gap-[15px] items-center justify-start mt-2 pb-[3px] w-full">
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
                              className="capitalize cursor-pointer font-semibold h-[33px] mt-7 rounded-lg text-center text-lg tracking-[0.36px] w-[70px]"
                              shape="round"
                              size="sm"
                              color="green_500_teal_400"
                            >
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start mb-[33px] ml-[-14px] mt-auto md:pl-10 sm:pl-5 pl-[108px] z-[1]">
                    <Text
                      className="capitalize sm:text-[17px] md:text-[19px] text-[21px] text-indigo-600"
                      size="txtPoppinsSemiBold21"
                    >
                      Gender
                    </Text>
                    <Text
                      className="capitalize md:ml-[0] ml-[11px] mt-[27px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                      size="txtPoppinsMedium23"
                    >
                      Male
                    </Text>
                    <Text
                      className="capitalize mt-[22px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                      size="txtPoppinsMedium23"
                    >
                      Female
                    </Text>
                    <Text
                      className="capitalize ml-3 md:ml-[0] mt-[13px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-100"
                      size="txtPoppinsMedium23"
                    >
                      Male
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Button
              className="common-pointer absolute bottom-[10%] capitalize cursor-pointer font-outfit font-semibold h-[33px] left-[5%] rounded-lg text-center text-lg tracking-[0.36px] w-28"
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
    </>
  );
};

export default AdminReviewAccountDeletionRequestsPage;
