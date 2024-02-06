import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, Text } from "components";

const DoctorDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-poppins items-center justify-start mx-auto pl-[7px] py-[7px] w-full">
        <div className="flex flex-col gap-2.5 justify-start max-w-[1438px] mb-[19px] mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-5 items-center justify-end md:ml-[0] ml-[1267px] w-[9%] md:w-full">
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
          <div className="md:h-[693px] h-[786px] sm:h-[823px] relative w-full">
            <div className="absolute bg-blue_gray-900 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[27px] sm:px-5 rounded-[10px] w-[99%]">
              <div className="flex flex-col gap-[25px] justify-start mb-[82px] mt-[77px] w-[82%] md:w-full">
                <div className="flex flex-col items-end justify-start pb-4 pl-4 w-full">
                  <div className="flex flex-col md:gap-10 gap-[122px] items-start justify-start w-[93%] md:w-full">
                    <Text
                      className="bg-clip-text bg-gradient1  sm:text-[29.36px] md:text-[31.36px] text-[33.36px] text-transparent"
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
                    <div className="flex sm:flex-col flex-row font-sfprotext sm:gap-10 items-center justify-between ml-1 md:ml-[0] w-full">
                      <div className="bg-gray-50_ed flex flex-row h-9 md:h-auto items-center justify-start sm:mt-0 my-3.5 p-2 rounded-[10px] w-[300px]">
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
                      <div
                        className="common-pointer bg-gradient  flex flex-col font-outfit h-[65px] md:h-auto items-center justify-center rounded-lg w-[262px]"
                        onClick={() =>
                          navigate("/doctorprescribetestverification")
                        }
                      >
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="capitalize text-lg text-white-A700 tracking-[0.36px]"
                            size="txtOutfitSemiBold18"
                          >
                            Prescribe Test
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start justify-center md:ml-[0] ml-[89px] pl-[17px] py-[17px] w-[69%] md:w-full">
                  <Text
                    className="capitalize mt-1 text-lg text-white-A700"
                    size="txtPoppinsBold18"
                  >
                    My Patients list
                  </Text>
                  <div className="h-[206px] mb-[7px] relative w-full">
                    <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[67%]">
                      <List
                        className="flex flex-col gap-[19px] items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row gap-5 items-center justify-start my-0 md:pr-10 sm:pr-5 pr-[372px] w-full">
                          <Button
                            className="flex h-10 items-center justify-center w-10"
                            shape="round"
                            color="yellow_400"
                            size="md"
                            variant="fill"
                          >
                            <Img src="images/img_close.svg" alt="close" />
                          </Button>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="capitalize text-base text-gray-100"
                              size="txtPoppinsSemiBold16"
                            >
                              Patient 1
                            </Text>
                            <Text
                              className="capitalize text-[10px] text-indigo-600"
                              size="txtPoppinsSemiBold10"
                            >
                              uk
                            </Text>
                          </div>
                        </div>
                        <div
                          className="common-pointer flex flex-1 flex-row gap-5 items-center justify-start my-0 md:pr-10 sm:pr-5 pr-[369px] w-full"
                          onClick={() => navigate("/doctorownpatientdetails")}
                        >
                          <Button
                            className="flex h-10 items-center justify-center w-10"
                            shape="round"
                            color="cyan_300"
                            size="md"
                            variant="fill"
                          >
                            <Img src="images/img_play.svg" alt="play" />
                          </Button>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="capitalize text-base text-gray-100"
                              size="txtPoppinsSemiBold16"
                            >
                              Patient 2
                            </Text>
                            <Text
                              className="capitalize text-[10px] text-indigo-600"
                              size="txtPoppinsSemiBold10"
                            >
                              uSA
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-5 items-center justify-start my-0 md:pr-10 sm:pr-5 pr-[368px] w-full">
                          <Button
                            className="flex h-10 items-center justify-center w-10"
                            shape="round"
                            color="deep_purple_A200"
                            size="md"
                            variant="fill"
                          >
                            <Img src="images/img_thumbsup.svg" alt="thumbsup" />
                          </Button>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="capitalize text-base text-gray-100"
                              size="txtPoppinsSemiBold16"
                            >
                              Patient 3
                            </Text>
                            <Text
                              className="capitalize text-[10px] text-indigo-600"
                              size="txtPoppinsSemiBold10"
                            >
                              USA
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                    <div className="absolute flex flex-row sm:gap-10 gap-[153px] h-max inset-[0] items-start justify-center m-auto md:pr-10 sm:pr-5 pr-[273px] w-full">
                      <Text
                        className="capitalize text-indigo-600 text-sm"
                        size="txtPoppinsSemiBold14"
                      >
                        Patient Name
                      </Text>
                      <List
                        className="sm:flex-col flex-row md:gap-10 gap-[70px] grid grid-cols-2 w-[48%]"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="capitalize md:ml-[0] ml-[22px] text-indigo-600 text-sm"
                            size="txtPoppinsSemiBold14"
                          >
                            Age
                          </Text>
                          <Text
                            className="capitalize ml-7 md:ml-[0] mt-[31px] text-base text-indigo-300"
                            size="txtPoppinsMedium16Indigo300"
                          >
                            21
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[25px] mt-[31px] text-base text-indigo-300"
                            size="txtPoppinsMedium16Indigo300"
                          >
                            25
                          </Text>
                          <Text
                            className="capitalize mb-[7px] md:ml-[0] ml-[26px] mt-[33px] text-base text-indigo-300"
                            size="txtPoppinsMedium16Indigo300"
                          >
                            34
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="capitalize md:ml-[0] ml-[3px] text-indigo-600 text-sm"
                            size="txtPoppinsSemiBold14"
                          >
                            Gender
                          </Text>
                          <Text
                            className="capitalize mt-[29px] text-base text-gray-100"
                            size="txtPoppinsMedium16"
                          >
                            Male
                          </Text>
                          <Text
                            className="capitalize mt-[38px] text-base text-gray-100"
                            size="txtPoppinsMedium16"
                          >
                            Female
                          </Text>
                          <Text
                            className="capitalize mt-[37px] text-base text-gray-100"
                            size="txtPoppinsMedium16"
                          >
                            Male
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[14%] flex flex-col gap-3 items-start justify-center pl-[17px] py-[17px] right-[0] w-[45%]">
              <Text
                className="capitalize mt-1 text-lg text-white-A700"
                size="txtPoppinsBold18"
              >
                Consultations requested by other doctors
              </Text>
              <div className="h-[206px] mb-[7px] relative w-full">
                <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[81%]">
                  <List
                    className="flex flex-col gap-[19px] items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-5 items-center justify-start my-0 md:pr-10 sm:pr-5 pr-[372px] w-full">
                      <Button
                        className="flex h-10 items-center justify-center w-10"
                        shape="round"
                        color="yellow_400"
                        size="md"
                        variant="fill"
                      >
                        <Img src="images/img_close.svg" alt="close" />
                      </Button>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="capitalize text-base text-gray-100"
                          size="txtPoppinsSemiBold16"
                        >
                          Patient 1
                        </Text>
                        <Text
                          className="capitalize text-[10px] text-indigo-600"
                          size="txtPoppinsSemiBold10"
                        >
                          uk
                        </Text>
                      </div>
                    </div>
                    <div
                      className="common-pointer flex flex-1 flex-row gap-5 items-center justify-start my-0 md:pr-10 sm:pr-5 pr-[369px] w-full"
                      onClick={() =>
                        navigate("/doctorconsultationpatientdetails")
                      }
                    >
                      <Button
                        className="flex h-10 items-center justify-center w-10"
                        shape="round"
                        color="cyan_300"
                        size="md"
                        variant="fill"
                      >
                        <Img src="images/img_play.svg" alt="play" />
                      </Button>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="capitalize text-base text-gray-100"
                          size="txtPoppinsSemiBold16"
                        >
                          Patient 2
                        </Text>
                        <Text
                          className="capitalize text-[10px] text-indigo-600"
                          size="txtPoppinsSemiBold10"
                        >
                          uSA
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-row gap-5 items-center justify-start my-0 md:pr-10 sm:pr-5 pr-[368px] w-full">
                      <Button
                        className="flex h-10 items-center justify-center w-10"
                        shape="round"
                        color="deep_purple_A200"
                        size="md"
                        variant="fill"
                      >
                        <Img src="images/img_thumbsup.svg" alt="thumbsup" />
                      </Button>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="capitalize text-base text-gray-100"
                          size="txtPoppinsSemiBold16"
                        >
                          Patient 3
                        </Text>
                        <Text
                          className="capitalize text-[10px] text-indigo-600"
                          size="txtPoppinsSemiBold10"
                        >
                          USA
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
                <div className="absolute flex flex-row sm:gap-10 h-max inset-[0] items-start justify-between m-auto md:pr-10 sm:pr-5 pr-[147px] w-full">
                  <Text
                    className="capitalize text-indigo-600 text-sm"
                    size="txtPoppinsSemiBold14"
                  >
                    Patient Name
                  </Text>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[70px] grid grid-cols-2"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                      <Text
                        className="capitalize md:ml-[0] ml-[22px] text-indigo-600 text-sm"
                        size="txtPoppinsSemiBold14"
                      >
                        Age
                      </Text>
                      <Text
                        className="capitalize ml-7 md:ml-[0] mt-[31px] text-base text-indigo-300"
                        size="txtPoppinsMedium16Indigo300"
                      >
                        21
                      </Text>
                      <Text
                        className="capitalize md:ml-[0] ml-[25px] mt-[31px] text-base text-indigo-300"
                        size="txtPoppinsMedium16Indigo300"
                      >
                        25
                      </Text>
                      <Text
                        className="capitalize mb-[7px] md:ml-[0] ml-[26px] mt-[33px] text-base text-indigo-300"
                        size="txtPoppinsMedium16Indigo300"
                      >
                        34
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                      <Text
                        className="capitalize md:ml-[0] ml-[3px] text-indigo-600 text-sm"
                        size="txtPoppinsSemiBold14"
                      >
                        Gender
                      </Text>
                      <Text
                        className="capitalize mt-[29px] text-base text-gray-100"
                        size="txtPoppinsMedium16"
                      >
                        Male
                      </Text>
                      <Text
                        className="capitalize mt-[38px] text-base text-gray-100"
                        size="txtPoppinsMedium16"
                      >
                        Female
                      </Text>
                      <Text
                        className="capitalize mt-[37px] text-base text-gray-100"
                        size="txtPoppinsMedium16"
                      >
                        Male
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorDashboardPage;
