import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

const LabStaffDashboardPage = () => {
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
          <div className="md:h-[789px] h-[793px] mt-[3px] relative w-full">
            <div className="md:h-[786px] h-[793px] m-auto w-full">
              <div className="absolute bg-blue_gray-900 h-[786px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
              <div className="absolute md:h-[703px] h-[705px] left-[0] top-[0] w-[63%] md:w-full">
                <Text
                  className="bg-clip-text bg-gradient1  ml-[69px] mt-[49px] sm:text-[29.36px] md:text-[31.36px] text-[33.36px] text-transparent"
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
                <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto p-[49px] md:px-10 sm:px-5 w-full">
                  <Text
                    className="bg-clip-text bg-gradient1  mb-[554px] md:ml-[0] ml-[19px] sm:text-[29.36px] md:text-[31.36px] text-[33.36px] text-transparent"
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
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col gap-5 items-start justify-start left-[5%] pb-1 pl-1 top-[21%] w-[67%]">
              <Text
                className="capitalize sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                size="txtPoppinsBold40"
              >
                Test Details
              </Text>
              <div className="h-[206px] sm:h-[215px] md:h-[337px] mb-4 relative w-full">
                <Text
                  className="absolute capitalize left-[0] text-indigo-600 text-sm top-[0]"
                  size="txtPoppinsSemiBold14"
                >
                  Patient ID
                </Text>
                <div className="absolute sm:h-[199px] h-[206px] md:h-[321px] inset-y-[0] my-auto pb-1.5 right-[0] w-[93%] md:w-full">
                  <div className="absolute h-[199px] md:h-[321px] inset-[0] justify-center m-auto w-full">
                    <div className="h-[199px] md:h-[321px] m-auto w-full">
                      <div className="absolute md:h-[111px] sm:h-[89px] h-[90px] inset-[0] justify-center m-auto w-full">
                        <div
                          className="common-pointer absolute flex md:flex-col flex-row md:gap-5 h-max inset-[0] items-start justify-center m-auto md:pl-10 sm:pl-5 pl-[60px] w-full"
                          onClick={() => navigate("/labstafftestpending")}
                        >
                          <div className="flex flex-col items-center justify-start">
                            <Text
                              className="capitalize text-base text-gray-100"
                              size="txtPoppinsSemiBold16"
                            >
                              MRI
                            </Text>
                          </div>
                          <Text
                            className="capitalize md:ml-[0] ml-[496px] md:mt-0 mt-[9px] text-base text-gray-100"
                            size="txtPoppinsMedium16"
                          >
                            Remark1
                          </Text>
                          <div className="bg-gradient  flex flex-col font-outfit h-[25px] md:h-auto items-center justify-center ml-24 md:ml-[0] md:mt-0 mt-16 rounded-lg w-[116px]">
                            <div className="flex flex-col items-end justify-start">
                              <Text
                                className="capitalize text-lg text-white-A700 tracking-[0.36px]"
                                size="txtOutfitSemiBold18"
                              >
                                {" "}
                                Notify Patient
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-[0] flex flex-row sm:gap-10 inset-x-[0] items-start justify-between mx-auto pb-1 px-1 w-[89%]">
                          <div className="flex flex-col items-center justify-start mb-[11px] ml-[3px]">
                            <Text
                              className="capitalize text-base text-gray-100"
                              size="txtPoppinsSemiBold16"
                            >
                              CT Scan
                            </Text>
                          </div>
                          <Text
                            className="capitalize mr-[156px] mt-3 text-base text-gray-100"
                            size="txtPoppinsMedium16"
                          >
                            Remark2
                          </Text>
                        </div>
                      </div>
                      <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto md:pr-10 pr-20 sm:pr-5 w-[89%]">
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
                          className="capitalize md:ml-[0] ml-[123px] text-indigo-600 text-sm"
                          size="txtPoppinsSemiBold14"
                        >
                          Remarks given by doctor
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bottom-[0] flex flex-row sm:gap-10 inset-x-[0] items-start justify-between mx-auto p-0.5 w-[89%]">
                      <div className="flex flex-col items-center justify-start mb-[11px] ml-[7px]">
                        <Text
                          className="capitalize text-base text-gray-100"
                          size="txtPoppinsSemiBold16"
                        >
                          X-Ray
                        </Text>
                      </div>
                      <Text
                        className="capitalize mb-2 mr-[156px] mt-[3px] text-base text-gray-100"
                        size="txtPoppinsMedium16"
                      >
                        Remark3
                      </Text>
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[25px] h-max inset-y-[0] items-end justify-end left-[26%] my-auto pl-2.5 py-2.5 w-[18%]">
                    <Text
                      className="capitalize mt-[49px] text-base text-gray-100"
                      size="txtPoppinsMedium16"
                    >
                      Test Pending
                    </Text>
                    <div className="flex flex-col gap-[30px] items-center justify-start">
                      <Text
                        className="capitalize text-base text-gray-100"
                        size="txtPoppinsMedium16"
                      >
                        Patient not notified
                      </Text>
                      <Text
                        className="capitalize text-base text-gray-100"
                        size="txtPoppinsMedium16"
                      >
                        Test Completed
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[11%] flex flex-col gap-[31px] items-start justify-start left-[2%]">
                  <Text
                    className="capitalize text-base text-gray-100"
                    size="txtPoppinsMedium16"
                  >
                    ID1
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-100"
                    size="txtPoppinsMedium16"
                  >
                    ID2
                  </Text>
                  <Text
                    className="capitalize text-base text-gray-100"
                    size="txtPoppinsMedium16"
                  >
                    ID3
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LabStaffDashboardPage;
