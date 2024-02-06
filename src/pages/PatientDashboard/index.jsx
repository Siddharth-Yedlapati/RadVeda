import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const PatientDashboardPage = () => {
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
          <div className="font-outfit md:h-[739px] sm:h-[774px] h-[793px] mt-[3px] relative w-full">
            <div className="absolute bg-blue_gray-900 flex flex-col h-max inset-[0] items-end justify-center m-auto p-[37px] sm:px-5 rounded-[10px] w-full">
              <div className="flex flex-col items-center justify-start mb-[409px] mt-2.5 w-[28%] md:w-full">
                <div className="bg-gradient  flex flex-col h-[65px] md:h-auto items-center justify-center rounded-lg w-[361px]">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="capitalize text-lg text-white-A700 tracking-[0.36px]"
                      size="txtOutfitSemiBold18"
                    >
                      Notifications
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col font-poppins items-start justify-start w-[99%] md:w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-10 items-center justify-start p-[7px] w-full"
                    style={{ backgroundImage: "url('images/img_group23.svg')" }}
                  >
                    <div className="flex flex-row items-start justify-between mb-[7px] w-[97%] md:w-full">
                      <Text
                        className="capitalize text-black-900 text-xs"
                        size="txtPoppinsSemiBold12"
                      >
                        Consent Request by Dr. XYZ from Hospital D
                      </Text>
                      <div className="bg-green-A200 flex flex-row items-start justify-start mb-[5px] p-0.5">
                        <Line className="bg-black-900 h-px mt-1 rotate-[-45deg] w-1" />
                        <Line className="bg-black-900 h-px rotate-[34deg] w-[71%]" />
                      </div>
                      <div className="bg-red-400 flex flex-col items-end justify-end mb-[5px] p-0.5">
                        <div className="h-2 mr-0.5 relative w-[71%]">
                          <Line className="bg-black-900 h-px m-auto rotate-[34deg] w-full" />
                          <Line className="absolute bg-black-900 h-px inset-y-[0] left-[0] my-auto rotate-[-36deg] w-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-10 items-center justify-start p-[7px] w-full"
                    style={{ backgroundImage: "url('images/img_group23.svg')" }}
                  >
                    <Text
                      className="capitalize mb-1 text-black-900 text-xs w-[95%] sm:w-full"
                      size="txtPoppinsSemiBold12"
                    >
                      Reminder to visit XYZ Lab at 5pm 02/02/24 for CT Scan
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-10 items-start justify-start p-2 w-full"
                    style={{ backgroundImage: "url('images/img_group23.svg')" }}
                  >
                    <Text
                      className="capitalize mb-[5px] ml-1 md:ml-[0] text-black-900 text-xs"
                      size="txtPoppinsSemiBold12"
                    >
                      New Chat Message from Dr. John
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-10 items-center justify-start p-[7px] w-full"
                    style={{ backgroundImage: "url('images/img_group23.svg')" }}
                  >
                    <Text
                      className="capitalize mb-1 text-black-900 text-xs w-[95%] sm:w-full"
                      size="txtPoppinsSemiBold12"
                    >
                      Diagnosis has been completed for Ultrasound issued on
                      21/09/2023
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-10 items-start justify-start p-2 w-full"
                    style={{ backgroundImage: "url('images/img_group23.svg')" }}
                  >
                    <Text
                      className="capitalize mb-[5px] ml-1 md:ml-[0] text-black-900 text-xs"
                      size="txtPoppinsSemiBold12"
                    >
                      New Chat Message from Dr. Abdul
                    </Text>
                  </div>
                  <Button
                    className="capitalize cursor-pointer font-semibold leading-[normal] min-w-[72px] md:ml-[0] ml-[279px] text-[10px] text-center"
                    shape="square"
                    color="blue_gray_800_01"
                    size="xs"
                    variant="fill"
                  >
                    clear all
                  </Button>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col font-poppins justify-start left-[0] top-[0] w-[63%]">
              <Text
                className="bg-clip-text bg-gradient1  md:ml-[0] ml-[68px] mt-12 sm:text-[29.36px] md:text-[31.36px] text-[33.36px] text-transparent"
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
              <div className="h-[281px] md:h-[343px] sm:h-[424px] ml-2.5 md:ml-[0] mt-[72px] relative w-[99%] md:w-full">
                <div className="absolute bottom-[8%] flex flex-col items-center justify-start right-[0] w-[15%]">
                  <div className="flex flex-col gap-6 items-center justify-start w-full">
                    <Text
                      className="capitalize text-indigo-600 text-sm"
                      size="txtPoppinsSemiBold14"
                    >
                      doctor’s remarks
                    </Text>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="capitalize text-base text-gray-100"
                        size="txtPoppinsMedium16"
                      >
                        Remark1
                      </Text>
                      <Text
                        className="capitalize mt-6 text-base text-gray-100"
                        size="txtPoppinsMedium16"
                      >
                        Remark2
                      </Text>
                      <Text
                        className="capitalize mt-[37px] text-base text-gray-100"
                        size="txtPoppinsMedium16"
                      >
                        Remark4
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col gap-3 h-full inset-y-[0] justify-start left-[0] my-auto w-[95%]">
                  <Text
                    className="capitalize md:ml-[0] ml-[62px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                    size="txtPoppinsBold40"
                  >
                    My tests
                  </Text>
                  <div className="md:h-[199px] h-[209px] sm:h-[280px] relative w-full">
                    <div className="absolute md:h-[199px] h-[206px] sm:h-[280px] inset-[0] justify-center m-auto w-full">
                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                        <div className="flex flex-col gap-5 items-end justify-start w-full">
                          <div className="flex flex-col gap-[13px] justify-start w-full">
                            <div className="flex flex-row sm:gap-10 gap-[266px] items-start justify-start mr-[53px] pb-2 px-2 w-[94%] md:w-full">
                              <div className="flex flex-col font-poppins items-center justify-start ml-[52px]">
                                <Text
                                  className="capitalize text-base text-gray-100"
                                  size="txtPoppinsSemiBold16"
                                >
                                  MRI
                                </Text>
                              </div>
                              <Button
                                className="capitalize cursor-pointer font-outfit font-semibold h-[33px] rounded-lg text-center text-lg tracking-[0.36px] w-[134px]"
                                shape="round"
                                size="sm"
                                color="green_500_teal_400"
                              >
                                Choose Lab
                              </Button>
                            </div>
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[53px] pb-2 px-2 w-[94%] md:w-full">
                              <div className="flex flex-col items-center justify-start mb-2">
                                <Text
                                  className="capitalize text-base text-gray-100"
                                  size="txtPoppinsSemiBold16"
                                >
                                  CT Scan
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div
                            className="common-pointer flex flex-col items-start justify-start p-0.5 w-[94%] md:w-full"
                            onClick={() =>
                              navigate("/patientpendingforreviewbyradiologist")
                            }
                          >
                            <div className="flex flex-col items-center justify-start mb-[11px] md:ml-[0] ml-[7px]">
                              <Text
                                className="capitalize text-base text-gray-100"
                                size="txtPoppinsSemiBold16"
                              >
                                X-Ray
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-max inset-y-[0] items-start justify-start my-auto md:pr-10 sm:pr-5 pr-[383px] right-[0] w-[94%]">
                        <Text
                          className="capitalize sm:mt-0 mt-0.5 text-indigo-600 text-sm"
                          size="txtPoppinsSemiBold14"
                        >
                          Test Type
                        </Text>
                        <div className="flex flex-col items-start justify-start sm:ml-[0] ml-[50px] pb-2 pl-2">
                          <Text
                            className="capitalize md:ml-[0] ml-[15px] text-indigo-600 text-sm"
                            size="txtPoppinsSemiBold14"
                          >
                            Date Prescribed
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[21px] mt-[33px] text-base text-indigo-300"
                            size="txtPoppinsMedium16Indigo300"
                          >
                            05/01/2024
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[18px] mt-[31px] text-base text-indigo-300"
                            size="txtPoppinsMedium16Indigo300"
                          >
                            04/12/2023
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[19px] mt-[33px] text-base text-indigo-300"
                            size="txtPoppinsMedium16Indigo300"
                          >
                            15/11/2023
                          </Text>
                        </div>
                        <Text
                          className="capitalize sm:ml-[0] ml-[106px] text-indigo-600 text-sm"
                          size="txtPoppinsSemiBold14"
                        >
                          Status
                        </Text>
                      </div>
                    </div>
                    <div className="absolute flex flex-col gap-[31px] items-start justify-end pl-[15px] pt-[15px] right-1/4 top-[0]">
                      <Text
                        className="capitalize mt-24 text-base text-gray-100"
                        size="txtPoppinsMedium16"
                      >
                        Test Not Conducted
                      </Text>
                      <Text
                        className="capitalize text-base text-gray-100"
                        size="txtPoppinsMedium16"
                      >
                        <>
                          Pending for review by radiologist
                          <br />
                          pending for review by doctor
                          <br />
                          Diagnosis Completed
                        </>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-[13px] items-center mb-[145px] md:ml-[0] ml-[62px] mt-2 w-[90%]"
                orientation="vertical"
              >
                <div className="h-10 md:h-[41px] relative w-full">
                  <div
                    className="common-pointer absolute flex flex-row gap-11 h-max inset-[0] items-start justify-center m-auto pb-2.5 px-2.5 w-[98%]"
                    onClick={() => navigate("/patientpendingforreviewbydoctor")}
                  >
                    <div className="flex flex-col items-center justify-start my-[3px]">
                      <Text
                        className="capitalize text-base text-gray-100"
                        size="txtPoppinsSemiBold16"
                      >
                        Endoscopy
                      </Text>
                    </div>
                    <Text
                      className="capitalize mb-[7px] text-base text-indigo-300"
                      size="txtPoppinsMedium16Indigo300"
                    >
                      11/10/2023
                    </Text>
                  </div>
                  <Text
                    className="absolute capitalize right-[0] text-base text-gray-100 top-[0]"
                    size="txtPoppinsMedium16"
                  >
                    Remark5
                  </Text>
                </div>
                <div className="h-[41px] relative w-full">
                  <div
                    className="common-pointer absolute flex flex-row gap-[43px] h-full inset-[0] items-start justify-center m-auto pb-2.5 px-2.5 w-[98%]"
                    onClick={() => navigate("/patientdiagnosiscompleted")}
                  >
                    <div className="flex flex-col items-center justify-start mb-1.5">
                      <Text
                        className="capitalize text-base text-gray-100"
                        size="txtPoppinsSemiBold16"
                      >
                        Ultrasound
                      </Text>
                    </div>
                    <Text
                      className="capitalize mb-[7px] text-base text-indigo-300"
                      size="txtPoppinsMedium16Indigo300"
                    >
                      21/09/2023
                    </Text>
                  </div>
                  <Text
                    className="absolute capitalize right-[0] text-base text-gray-100 top-[0]"
                    size="txtPoppinsMedium16"
                  >
                    Remark6
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientDashboardPage;
