import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const DoctorConsultationPatientDetailsPage = () => {
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
          <div className="md:h-[784px] h-[796px] relative w-full">
            <div className="md:h-[784px] h-[796px] m-auto w-full">
              <div className="md:h-[784px] h-[796px] m-auto w-full">
                <div className="font-poppins md:h-[784px] h-[796px] m-auto w-full">
                  <div className="absolute bg-blue_gray-900 flex flex-col h-max inset-[0] items-end justify-center m-auto p-[53px] md:px-10 sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[34px] items-center justify-start mb-8 mt-[108px] w-[7%] md:w-full">
                      <Text
                        className="capitalize text-indigo-600 text-sm"
                        size="txtPoppinsSemiBold14"
                      >
                        Chat
                      </Text>
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col font-roboto items-start justify-start w-auto">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[88px] text-center text-lg"
                            shape="round"
                            color="teal_200"
                            size="md"
                            variant="fill"
                          >
                            Chat
                          </Button>
                        </div>
                        <div className="flex flex-col font-roboto items-start justify-start mt-3 w-auto">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[88px] text-center text-lg"
                            shape="round"
                            color="teal_200"
                            size="md"
                            variant="fill"
                          >
                            Chat
                          </Button>
                        </div>
                        <div className="flex flex-col font-roboto items-start justify-start mt-[17px] w-auto">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[88px] text-center text-lg"
                            shape="round"
                            color="teal_200"
                            size="md"
                            variant="fill"
                          >
                            Chat
                          </Button>
                        </div>
                        <Text
                          className="capitalize md:ml-[0] ml-[29px] mt-[124px] text-indigo-600 text-sm"
                          size="txtPoppinsSemiBold14"
                        >
                          Chat
                        </Text>
                        <div className="flex flex-col font-roboto items-start justify-start mt-[34px] w-auto">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[88px] text-center text-lg"
                            shape="round"
                            color="teal_200"
                            size="md"
                            variant="fill"
                          >
                            Chat
                          </Button>
                        </div>
                        <div className="flex flex-col font-roboto items-start justify-start mt-3 w-auto">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[88px] text-center text-lg"
                            shape="round"
                            color="teal_200"
                            size="md"
                            variant="fill"
                          >
                            Chat
                          </Button>
                        </div>
                        <div className="flex flex-col font-roboto items-start justify-start mt-[17px] w-auto">
                          <Button
                            className="cursor-pointer leading-[normal] min-w-[88px] text-center text-lg"
                            shape="round"
                            color="teal_200"
                            size="md"
                            variant="fill"
                          >
                            Chat
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-10 justify-start left-[1%] p-[17px] top-[0] w-[63%]">
                    <Text
                      className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                      size="txtPoppinsBold40"
                    >
                      Patient Details
                    </Text>
                    <div className="bg-blue_gray-800 flex flex-col font-opensans items-start justify-start mb-[206px] md:ml-[0] ml-[11px] mr-[510px] p-[25px] sm:px-5 rounded-[10px] w-[39%] md:w-full">
                      <div className="flex flex-col gap-[33px] items-center justify-start mb-1.5 ml-3 md:ml-[0] w-[86%] md:w-full">
                        <div className="flex flex-col h-[138px] md:h-auto items-center justify-start w-[175px]">
                          <div className="flex flex-col gap-2.5 items-center justify-start w-auto">
                            <Img
                              className="h-[95px] md:h-auto rounded-[50%] w-[95px]"
                              src="images/img_ellipse1.png"
                              alt="ellipseOne_One"
                            />
                            <div className="flex flex-col items-center justify-start px-[7px] w-auto">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-50_01 sm:text-xl w-auto"
                                size="txtOpenSansRomanSemiBold24"
                              >
                                Ayesha Bazmi
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-[15px] text-blue_gray-100"
                            size="txtOpenSansRomanRegular15"
                          >
                            Name : Ayesha Bazmi
                          </Text>
                          <Text
                            className="mt-[17px] text-[15px] text-blue_gray-100"
                            size="txtOpenSansRomanRegular15"
                          >
                            Age : 24
                          </Text>
                          <Text
                            className="mt-[15px] text-[15px] text-blue_gray-100"
                            size="txtOpenSansRomanRegular15"
                          >
                            DOB : 03/10/1990
                          </Text>
                          <div className="flex flex-row gap-[37px] items-start justify-start mt-[18px] w-full">
                            <Img
                              className="h-[11px]"
                              src="images/img_arrowdown.svg"
                              alt="arrowdown"
                            />
                            <Text
                              className="text-[15px] text-blue_gray-100"
                              size="txtOpenSansRomanRegular15"
                            >
                              : ayeshabazmi@gmail.com
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="absolute bottom-[8%] capitalize cursor-pointer font-outfit font-semibold h-[33px] left-[3%] rounded-lg text-center text-lg tracking-[0.36px] w-28"
                  shape="round"
                  size="sm"
                  color="green_500_teal_400"
                >
                  Back
                </Button>
                <div className="absolute flex flex-col font-poppins gap-3 justify-start py-[21px] right-[15%] top-[15%] w-3/5">
                  <Text
                    className="capitalize md:ml-[0] ml-[53px] text-lg text-white-A700"
                    size="txtPoppinsBold18"
                  >
                    Tests for which consultation was requested
                  </Text>
                  <div className="sm:h-[201px] h-[206px] md:h-[458px] mb-0.5 relative w-full">
                    <div className="absolute sm:h-[199px] h-[206px] md:h-[456px] inset-[0] justify-center m-auto w-full">
                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                        <div className="flex flex-col gap-[13px] justify-start w-full">
                          <div
                            className="common-pointer flex flex-col items-start justify-start pb-4 px-4 w-[93%] md:w-full"
                            onClick={() =>
                              navigate(
                                "/doctorconsultationpendingforreviewbyradiologist",
                              )
                            }
                          >
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[43px]">
                              <Text
                                className="capitalize text-base text-gray-100"
                                size="txtPoppinsSemiBold16"
                              >
                                MRI
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-5 items-center justify-start md:ml-[0] ml-[53px] w-[94%] md:w-full">
                            <div
                              className="common-pointer flex flex-row sm:gap-10 items-start justify-between pb-2 pl-2 w-full"
                              onClick={() =>
                                navigate("/doctorconsultationpendingforreview")
                              }
                            >
                              <div className="flex flex-col items-center justify-start mb-2">
                                <Text
                                  className="capitalize text-base text-gray-100"
                                  size="txtPoppinsSemiBold16"
                                >
                                  CT Scan
                                </Text>
                              </div>
                              <Text
                                className="capitalize mb-0.5 mt-1.5 text-base text-gray-100"
                                size="txtPoppinsMedium16"
                              >
                                Remark2
                              </Text>
                            </div>
                            <div
                              className="common-pointer flex flex-row sm:gap-10 items-start justify-between pl-0.5 py-0.5 w-full"
                              onClick={() =>
                                navigate(
                                  "/doctorconsultationdiagnosiscompleted",
                                )
                              }
                            >
                              <div className="flex flex-col items-center justify-start mb-[11px] ml-[7px]">
                                <Text
                                  className="capitalize text-base text-gray-100"
                                  size="txtPoppinsSemiBold16"
                                >
                                  X-Ray
                                </Text>
                              </div>
                              <Text
                                className="capitalize mb-2 mt-[3px] text-base text-gray-100"
                                size="txtPoppinsMedium16"
                              >
                                Remark3
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-y-[0] items-start justify-start my-auto md:pr-10 pr-20 sm:pr-5 right-[2%] w-[92%]">
                        <Text
                          className="capitalize md:mt-0 mt-0.5 text-indigo-600 text-sm"
                          size="txtPoppinsSemiBold14"
                        >
                          Test Type
                        </Text>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[183px] pb-2 pl-2">
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
                            04/10/2023
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[18px] mt-[31px] text-base text-indigo-300"
                            size="txtPoppinsMedium16Indigo300"
                          >
                            25/09/2023
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[19px] mt-[33px] text-base text-indigo-300"
                            size="txtPoppinsMedium16Indigo300"
                          >
                            21/09/2023
                          </Text>
                        </div>
                        <div className="md:h-[197px] h-[199px] ml-12 md:ml-[0] relative w-2/5 md:w-full">
                          <div className="absolute flex flex-col gap-8 h-full inset-[0] items-start justify-center m-auto pl-[5px] py-[5px] w-full">
                            <Text
                              className="capitalize md:ml-[0] ml-[9px] mt-[51px] text-base text-gray-100"
                              size="txtPoppinsMedium16"
                            >
                              Pending for review by radiologist
                            </Text>
                            <Text
                              className="capitalize md:ml-[0] ml-[9px] text-base text-gray-100"
                              size="txtPoppinsMedium16"
                            >
                              Pending for review
                            </Text>
                            <Text
                              className="capitalize md:ml-[0] ml-[9px] text-base text-gray-100"
                              size="txtPoppinsMedium16"
                            >
                              Diagnosis Completed
                            </Text>
                          </div>
                          <Text
                            className="absolute capitalize left-[23%] text-indigo-600 text-sm top-[0]"
                            size="txtPoppinsSemiBold14"
                          >
                            Status
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="absolute capitalize right-[0] text-base text-gray-100 top-[28%]"
                      size="txtPoppinsMedium16"
                    >
                      Remark1
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[7%] flex flex-col md:gap-10 gap-[258px] justify-start right-[11%] w-[64%]">
                <Text
                  className="capitalize md:ml-[0] ml-[768px] text-indigo-600 text-sm"
                  size="txtPoppinsSemiBold14"
                >
                  Doctor’s Remarks
                </Text>
                <div className="flex flex-col gap-3.5 justify-start mr-14 py-[19px] w-[94%] md:w-full">
                  <Text
                    className="capitalize md:ml-[0] ml-[53px] text-lg text-white-A700"
                    size="txtPoppinsBold18"
                  >
                    Other tests
                  </Text>
                  <div className="sm:h-[203px] h-[206px] md:h-[460px] mb-1 relative w-full">
                    <div className="absolute sm:h-[199px] h-[206px] md:h-[456px] inset-[0] justify-center m-auto w-full">
                      <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                        <div className="flex flex-col gap-[13px] justify-start w-full">
                          <div
                            className="common-pointer flex flex-col items-start justify-start pb-4 px-4 w-[93%] md:w-full"
                            onClick={() =>
                              navigate(
                                "/doctorconsultationpendingforreviewbyradiologisthisto",
                              )
                            }
                          >
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[43px]">
                              <Text
                                className="capitalize text-base text-gray-100"
                                size="txtPoppinsSemiBold16"
                              >
                                MRI
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col gap-5 items-center justify-start md:ml-[0] ml-[53px] w-[94%] md:w-full">
                            <div
                              className="common-pointer flex flex-row sm:gap-10 items-start justify-between pb-2 pl-2 w-full"
                              onClick={() =>
                                navigate(
                                  "/doctorconsultationpendingforreviewbydoctorhistory",
                                )
                              }
                            >
                              <div className="flex flex-col items-center justify-start mb-2">
                                <Text
                                  className="capitalize text-base text-gray-100"
                                  size="txtPoppinsSemiBold16"
                                >
                                  CT Scan
                                </Text>
                              </div>
                              <Text
                                className="capitalize mb-0.5 mt-1.5 text-base text-gray-100"
                                size="txtPoppinsMedium16"
                              >
                                Remark2
                              </Text>
                            </div>
                            <div
                              className="common-pointer flex flex-row sm:gap-10 items-start justify-between pl-0.5 py-0.5 w-full"
                              onClick={() =>
                                navigate(
                                  "/doctorconsultationdiagnosiscompletedhistory",
                                )
                              }
                            >
                              <div className="flex flex-col items-center justify-start mb-[11px] ml-[7px]">
                                <Text
                                  className="capitalize text-base text-gray-100"
                                  size="txtPoppinsSemiBold16"
                                >
                                  X-Ray
                                </Text>
                              </div>
                              <Text
                                className="capitalize mb-2 mt-[3px] text-base text-gray-100"
                                size="txtPoppinsMedium16"
                              >
                                Remark3
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-y-[0] items-start justify-start my-auto md:pr-10 pr-20 sm:pr-5 right-[2%] w-[92%]">
                        <Text
                          className="capitalize md:mt-0 mt-0.5 text-indigo-600 text-sm"
                          size="txtPoppinsSemiBold14"
                        >
                          Test Type
                        </Text>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[183px] pb-2 pl-2">
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
                            04/10/2023
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[18px] mt-[31px] text-base text-indigo-300"
                            size="txtPoppinsMedium16Indigo300"
                          >
                            25/09/2023
                          </Text>
                          <Text
                            className="capitalize md:ml-[0] ml-[19px] mt-[33px] text-base text-indigo-300"
                            size="txtPoppinsMedium16Indigo300"
                          >
                            21/09/2023
                          </Text>
                        </div>
                        <div className="md:h-[197px] h-[199px] ml-12 md:ml-[0] relative w-2/5 md:w-full">
                          <div className="absolute flex flex-col gap-8 h-full inset-[0] items-start justify-center m-auto pl-[5px] py-[5px] w-full">
                            <Text
                              className="capitalize md:ml-[0] ml-[9px] mt-[51px] text-base text-gray-100"
                              size="txtPoppinsMedium16"
                            >
                              Pending for review by radiologist
                            </Text>
                            <Text
                              className="capitalize md:ml-[0] ml-[9px] text-base text-gray-100"
                              size="txtPoppinsMedium16"
                            >
                              Pending for review by doctor
                            </Text>
                            <Text
                              className="capitalize md:ml-[0] ml-[9px] text-base text-gray-100"
                              size="txtPoppinsMedium16"
                            >
                              Diagnosis Completed
                            </Text>
                          </div>
                          <Text
                            className="absolute capitalize left-[23%] text-indigo-600 text-sm top-[0]"
                            size="txtPoppinsSemiBold14"
                          >
                            Status
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Text
                      className="absolute capitalize right-[0] text-base text-gray-100 top-[28%]"
                      size="txtPoppinsMedium16"
                    >
                      Remark1
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="absolute bottom-[34%] capitalize right-[11%] text-indigo-600 text-sm"
              size="txtPoppinsSemiBold14"
            >
              Doctor’s Remarks
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoctorConsultationPatientDetailsPage;
