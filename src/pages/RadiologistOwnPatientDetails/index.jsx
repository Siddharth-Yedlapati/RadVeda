import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const RadiologistOwnPatientDetailsPage = () => {
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
          <div className="sm:h-[783px] h-[796px] md:h-[837px] relative w-full">
            <div className="sm:h-[783px] h-[796px] md:h-[837px] m-auto w-full">
              <div className="sm:h-[783px] h-[796px] md:h-[837px] m-auto w-full">
                <div className="sm:h-[783px] h-[796px] md:h-[837px] m-auto w-full">
                  <div className="absolute bg-blue_gray-900 flex flex-col h-max inset-[0] items-end justify-center m-auto pt-[46px] md:px-10 sm:px-5 px-[46px] rounded-[10px] w-full">
                    <div className="flex flex-col items-center justify-start mt-[178px] w-3/4 md:w-full">
                      <div className="flex flex-col justify-start w-full">
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[754px]">
                          <Text
                            className="capitalize text-base text-gray-100"
                            size="txtPoppinsMedium16"
                          >
                            Remark3
                          </Text>
                          <Text
                            className="capitalize mt-[93px] text-base text-gray-100"
                            size="txtPoppinsMedium16"
                          >
                            Remark5
                          </Text>
                          <Text
                            className="capitalize mt-[17px] text-base text-gray-100"
                            size="txtPoppinsMedium16"
                          >
                            Remark6
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[837px] mt-[117px]">
                          <Text
                            className="capitalize text-indigo-600 text-sm"
                            size="txtPoppinsSemiBold14"
                          >
                            lab Staff’s remarks
                          </Text>
                          <Text
                            className="capitalize mt-[30px] text-base text-gray-100"
                            size="txtPoppinsMedium16"
                          >
                            Remark3
                          </Text>
                          <Text
                            className="capitalize mt-9 text-base text-gray-100"
                            size="txtPoppinsMedium16"
                          >
                            Remark4
                          </Text>
                          <Text
                            className="capitalize mt-[33px] text-base text-gray-100"
                            size="txtPoppinsMedium16"
                          >
                            Remark5
                          </Text>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-start justify-start mr-[68px] mt-[17px] w-[94%] md:w-full">
                          <div
                            className="common-pointer flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:mt-0 mt-2.5 w-[85%] md:w-full"
                            onClick={() =>
                              navigate(
                                "/radiologistownpendingforreviewbydoctorhistory",
                              )
                            }
                          >
                            <div className="flex flex-col items-center justify-start mb-3 ml-2 sm:ml-[0]">
                              <Text
                                className="capitalize text-base text-gray-100"
                                size="txtPoppinsSemiBold16"
                              >
                                Mammography
                              </Text>
                            </div>
                            <Text
                              className="capitalize mb-[13px] sm:ml-[0] ml-[9px] text-base text-indigo-300"
                              size="txtPoppinsMedium16Indigo300"
                            >
                              21/08/2023
                            </Text>
                            <Text
                              className="capitalize mb-[11px] sm:ml-[0] ml-[62px] sm:mt-0 mt-0.5 text-base text-gray-100"
                              size="txtPoppinsMedium16"
                            >
                              Pending for Review by doctor
                            </Text>
                          </div>
                          <Text
                            className="capitalize text-base text-gray-100"
                            size="txtPoppinsMedium16"
                          >
                            Remark6
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-10 justify-start left-[1%] pt-[17px] px-[17px] top-[0] w-[63%]">
                    <Text
                      className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                      size="txtPoppinsBold40"
                    >
                      Patient Details
                    </Text>
                    <div className="flex flex-col md:gap-10 gap-[190px] items-start justify-start md:ml-[0] ml-[11px] mr-[510px] w-[39%] md:w-full">
                      <div className="bg-blue_gray-800 flex flex-col font-opensans items-start justify-start p-[25px] sm:px-5 rounded-[10px] w-full">
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
                      <Button
                        className="common-pointer capitalize cursor-pointer font-outfit font-semibold h-[33px] ml-1 md:ml-[0] rounded-lg text-center text-lg tracking-[0.36px] w-28"
                        onClick={() => navigate("/radiologistdashboard")}
                        shape="round"
                        size="sm"
                        color="green_500_teal_400"
                      >
                        Back
                      </Button>
                    </div>
                  </div>
                </div>
                <div
                  className="common-pointer absolute bottom-[44%] flex sm:flex-col flex-row sm:gap-5 items-start justify-start right-[18%] w-[55%]"
                  onClick={() =>
                    navigate("/radiologistownpendingforreviewbydoctor")
                  }
                >
                  <div className="flex flex-col items-center justify-start mb-3 ml-2 sm:ml-[0]">
                    <Text
                      className="capitalize text-base text-gray-100"
                      size="txtPoppinsSemiBold16"
                    >
                      Mammography
                    </Text>
                  </div>
                  <Text
                    className="capitalize mb-[13px] sm:ml-[0] ml-[9px] text-base text-indigo-300"
                    size="txtPoppinsMedium16Indigo300"
                  >
                    21/08/2023
                  </Text>
                  <Text
                    className="capitalize mb-[11px] sm:ml-[0] ml-[62px] sm:mt-0 mt-0.5 text-base text-gray-100"
                    size="txtPoppinsMedium16"
                  >
                    Pending for Review by doctor
                  </Text>
                </div>
              </div>
              <div className="absolute flex flex-col justify-end pt-[21px] right-[18%] top-[15%] w-[59%]">
                <Text
                  className="capitalize md:ml-[0] ml-[75px] mr-[548px] text-lg text-white-A700"
                  size="txtPoppinsBold18"
                >
                  Tests assigned to me{" "}
                </Text>
                <div className="h-[209px] sm:h-[212px] md:h-[334px] mt-[13px] relative w-full">
                  <div className="absolute sm:h-[199px] h-[206px] md:h-[321px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                      <div className="flex flex-col gap-[13px] justify-start w-full">
                        <div className="flex flex-row sm:gap-10 gap-[524px] items-start justify-start mr-[53px] pb-4 px-4 w-[94%] md:w-full">
                          <div className="flex flex-col items-center justify-start ml-[43px]">
                            <Text
                              className="capitalize text-base text-gray-100"
                              size="txtPoppinsSemiBold16"
                            >
                              MRI
                            </Text>
                          </div>
                          <Text
                            className="capitalize text-base text-gray-100"
                            size="txtPoppinsMedium16"
                          >
                            Remark1
                          </Text>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-start md:ml-[0] ml-[53px] w-[94%] md:w-full">
                          <div
                            className="common-pointer flex flex-row sm:gap-10 items-center justify-between pb-2 px-2 w-full"
                            onClick={() =>
                              navigate("/radiologistownpendingforreview")
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
                              className="capitalize mr-[126px] mt-2 text-base text-gray-100"
                              size="txtPoppinsMedium16"
                            >
                              Remark2
                            </Text>
                          </div>
                          <div
                            className="common-pointer flex flex-row sm:gap-10 items-start justify-between pb-2.5 px-2.5 w-full"
                            onClick={() =>
                              navigate("/radiologistowndiagnosiscompleted")
                            }
                          >
                            <div className="flex flex-col items-center justify-start my-[3px]">
                              <Text
                                className="capitalize text-base text-gray-100"
                                size="txtPoppinsSemiBold16"
                              >
                                X-Ray
                              </Text>
                            </div>
                            <Text
                              className="capitalize mb-1.5 mr-[125px] text-base text-gray-100"
                              size="txtPoppinsMedium16"
                            >
                              Remark3
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-y-[0] items-start justify-start my-auto md:pr-10 sm:pr-5 pr-[114px] right-[0] w-[94%]">
                      <Text
                        className="capitalize md:mt-0 mt-0.5 text-indigo-600 text-sm"
                        size="txtPoppinsSemiBold14"
                      >
                        Test Type
                      </Text>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[50px] pb-2 pl-2">
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
                      <Text
                        className="capitalize md:ml-[0] ml-[106px] text-indigo-600 text-sm"
                        size="txtPoppinsSemiBold14"
                      >
                        Status
                      </Text>
                      <Text
                        className="capitalize md:ml-[0] ml-[143px] text-indigo-600 text-sm"
                        size="txtPoppinsSemiBold14"
                      >
                        Doctor’s Remarks{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col items-start justify-end pl-[15px] pt-[15px] right-[37%] top-[0]">
                    <Text
                      className="capitalize mt-10 text-base text-gray-100"
                      size="txtPoppinsMedium16"
                    >
                      Test not conducted
                    </Text>
                    <Text
                      className="capitalize mt-[33px] text-base text-gray-100"
                      size="txtPoppinsMedium16"
                    >
                      Pending for review
                    </Text>
                    <Text
                      className="capitalize mt-10 text-base text-gray-100"
                      size="txtPoppinsMedium16"
                    >
                      Diagnosis Completed
                    </Text>
                  </div>
                </div>
                <Text
                  className="capitalize md:ml-[0] ml-[617px] mr-[132px] mt-[9px] text-base text-gray-100"
                  size="txtPoppinsMedium16"
                >
                  Remark3
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[4%] flex flex-col md:gap-10 gap-[151px] justify-start right-[9%] w-[68%]">
              <div className="flex flex-col md:gap-10 gap-[90px] items-start justify-start md:ml-[0] ml-[807px]">
                <Text
                  className="capitalize text-indigo-600 text-sm"
                  size="txtPoppinsSemiBold14"
                >
                  lab Staff’s remarks
                </Text>
                <Text
                  className="capitalize text-base text-gray-100"
                  size="txtPoppinsMedium16"
                >
                  Remark4
                </Text>
              </div>
              <div className="flex flex-col justify-end mr-[126px] pt-[21px] w-[87%] md:w-full">
                <Text
                  className="capitalize md:ml-[0] ml-[75px] mr-[405px] text-lg text-white-A700"
                  size="txtPoppinsBold18"
                >
                  Tests assigned to other radiologists
                </Text>
                <div className="h-[209px] sm:h-[212px] md:h-[334px] mt-[13px] relative w-full">
                  <div className="absolute sm:h-[199px] h-[206px] md:h-[321px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                      <div className="flex flex-col gap-[13px] justify-start w-full">
                        <div className="flex flex-row sm:gap-10 gap-[604px] items-start justify-end mr-[53px] pb-1.5 px-1.5 w-[94%] md:w-full">
                          <div className="flex flex-col items-center justify-start mb-2.5">
                            <Text
                              className="capitalize text-base text-gray-100"
                              size="txtPoppinsSemiBold16"
                            >
                              MRI
                            </Text>
                          </div>
                          <Text
                            className="capitalize mb-2.5 text-base text-gray-100"
                            size="txtPoppinsMedium16"
                          >
                            Remark1
                          </Text>
                        </div>
                        <div className="flex flex-col gap-5 items-center justify-start md:ml-[0] ml-[53px] w-[94%] md:w-full">
                          <div
                            className="common-pointer flex flex-row sm:gap-10 items-center justify-between pb-2 px-2 w-full"
                            onClick={() =>
                              navigate(
                                "/radiologistownpendingforreviewbyradiologisthistory",
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
                              className="capitalize mr-[46px] mt-2 text-base text-gray-100"
                              size="txtPoppinsMedium16"
                            >
                              Remark2
                            </Text>
                          </div>
                          <div
                            className="common-pointer flex flex-row sm:gap-10 items-start justify-between pb-2.5 px-2.5 w-full"
                            onClick={() =>
                              navigate(
                                "/radiologistowndiagnosiscompletedhistory",
                              )
                            }
                          >
                            <div className="flex flex-col items-center justify-start my-[3px]">
                              <Text
                                className="capitalize text-base text-gray-100"
                                size="txtPoppinsSemiBold16"
                              >
                                X-Ray
                              </Text>
                            </div>
                            <Text
                              className="capitalize mb-1.5 mr-[45px] text-base text-gray-100"
                              size="txtPoppinsMedium16"
                            >
                              Remark3
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-y-[0] items-start justify-start my-auto sm:pr-5 pr-[34px] right-[0] w-[94%]">
                      <Text
                        className="capitalize md:mt-0 mt-0.5 text-indigo-600 text-sm"
                        size="txtPoppinsSemiBold14"
                      >
                        Test Type
                      </Text>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[50px] pb-2 pl-2">
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
                      <Text
                        className="capitalize md:ml-[0] ml-[106px] text-indigo-600 text-sm"
                        size="txtPoppinsSemiBold14"
                      >
                        Status
                      </Text>
                      <Text
                        className="capitalize md:ml-[0] ml-[223px] text-indigo-600 text-sm"
                        size="txtPoppinsSemiBold14"
                      >
                        Doctor’s Remarks{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col items-start justify-end pl-[15px] pt-[15px] right-1/4 top-[0]">
                    <Text
                      className="capitalize mt-10 text-base text-gray-100"
                      size="txtPoppinsMedium16"
                    >
                      Test not conducted
                    </Text>
                    <Text
                      className="capitalize mt-[33px] text-base text-gray-100"
                      size="txtPoppinsMedium16"
                    >
                      Pending for review by radiologist
                    </Text>
                    <Text
                      className="capitalize mt-10 text-base text-gray-100"
                      size="txtPoppinsMedium16"
                    >
                      Diagnosis Completed
                    </Text>
                  </div>
                </div>
                <Text
                  className="capitalize md:ml-[0] ml-[697px] mr-[52px] mt-[9px] text-base text-gray-100"
                  size="txtPoppinsMedium16"
                >
                  Remark3
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RadiologistOwnPatientDetailsPage;
