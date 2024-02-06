import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const AdminDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-poppins items-center justify-start mx-auto pr-[7px] py-[7px] w-full">
        <div className="flex flex-col gap-2.5 justify-start max-w-[1419px] mb-[19px] mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-5 items-center justify-end md:ml-[0] ml-[1294px] w-[9%] md:w-full">
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
          <div className="h-[786px] md:h-[891px] relative w-full">
            <div className="absolute font-outfit h-[786px] md:h-[891px] inset-[0] justify-center m-auto w-full">
              <div className="h-[786px] md:h-[891px] m-auto w-full">
                <div className="absolute bg-blue_gray-900 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[153px] md:px-10 sm:px-5 rounded-[10px] w-full">
                  <div className="flex flex-col items-center justify-start mb-[70px] mt-[154px] w-[72%] md:w-full">
                    <div className="flex flex-col gap-6 items-end justify-start w-full">
                      <div className="flex flex-col gap-[34px] items-center justify-start w-[46%] md:w-full">
                        <Button
                          className="common-pointer capitalize cursor-pointer font-semibold h-[65px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                          onClick={() => navigate("/adminreviewsignuprequests")}
                          shape="round"
                          size="3xl"
                          color="green_500_teal_400"
                        >
                          review signup requests{" "}
                        </Button>
                        <Button
                          className="common-pointer capitalize cursor-pointer font-semibold h-[65px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                          onClick={() =>
                            navigate("/adminreviewaccountdeletionrequests")
                          }
                          shape="round"
                          size="3xl"
                          color="green_500_teal_400"
                        >
                          Review Account Deletion Requests
                        </Button>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <Button
                          className="common-pointer capitalize cursor-pointer font-semibold h-[65px] mb-[3px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                          onClick={() => navigate("/adminviewlabstaff")}
                          shape="round"
                          size="3xl"
                          color="green_500_teal_400"
                        >
                          View lab staff
                        </Button>
                        <Button
                          className="common-pointer capitalize cursor-pointer font-semibold h-[65px] md:mt-0 mt-[3px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                          onClick={() =>
                            navigate("/adminreviewaccountmodificationrequests")
                          }
                          shape="round"
                          size="3xl"
                          color="green_500_teal_400"
                        >
                          review Account Modification Requests{" "}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-[41px] right-[0] top-[12%]"
                  src="images/img_group23.svg"
                  alt="frame1261152836"
                />
              </div>
              <div className="absolute flex flex-col gap-[26px] inset-x-[0] justify-start mx-auto md:pl-10 sm:pl-5 pl-[99px] top-[2%] w-[90%]">
                <div className="bg-gradient  flex flex-col h-[65px] md:h-auto items-center justify-center md:ml-[0] ml-[907px] rounded-lg w-[259px]">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="capitalize text-lg text-white-A700 tracking-[0.36px]"
                      size="txtOutfitSemiBold18"
                    >
                      Notifications
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start mr-[805px] w-[361px] md:w-full">
                  <Text
                    className="bg-clip-text bg-gradient1  sm:text-[29.36px] md:text-[31.36px] text-[33.36px] text-transparent"
                    size="txtPoppinsBold3336"
                  >
                    Good Morning Admin1
                  </Text>
                  <Button
                    className="common-pointer capitalize cursor-pointer font-outfit font-semibold h-[65px] mt-[150px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                    onClick={() => navigate("/adminviewdoctors")}
                    shape="round"
                    size="3xl"
                    color="green_500_teal_400"
                  >
                    View doctors
                  </Button>
                  <Button
                    className="common-pointer capitalize cursor-pointer font-outfit font-semibold h-[65px] mt-[29px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                    onClick={() => navigate("/adminviewradiologists")}
                    shape="round"
                    size="3xl"
                    color="green_500_teal_400"
                  >
                    view radiologists
                  </Button>
                </div>
              </div>
            </div>
            <Button
              className="absolute capitalize cursor-pointer font-poppins font-semibold leading-[normal] min-w-[72px] right-[0] text-[10px] text-center top-[41%]"
              shape="square"
              color="blue_gray_800_01"
              size="xs"
              variant="fill"
            >
              clear all
            </Button>
            <Text
              className="absolute capitalize right-[5%] text-black-900 text-xs top-[11%]"
              size="txtPoppinsSemiBold12"
            >
              patient John Doe, registered today 2:39 pm
            </Text>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col font-poppins h-10 items-start justify-start p-[7px] right-[0] top-[15%]"
              style={{ backgroundImage: "url('images/img_group23.svg')" }}
            >
              <Text
                className="capitalize mb-1.5 md:ml-[0] ml-[5px] text-black-900 text-xs"
                size="txtPoppinsSemiBold12"
              >
                patient ABC, registered today 2:01 pm
              </Text>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col font-poppins h-10 items-start justify-start p-[7px] right-[0] top-[20%]"
              style={{ backgroundImage: "url('images/img_group23.svg')" }}
            >
              <Text
                className="capitalize mb-1.5 md:ml-[0] ml-[5px] text-black-900 text-xs"
                size="txtPoppinsSemiBold12"
              >
                patient XYZ, registered today 12:39 pm
              </Text>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col font-poppins h-10 items-start justify-start p-[7px] right-[0] top-1/4"
              style={{ backgroundImage: "url('images/img_group23.svg')" }}
            >
              <Text
                className="capitalize mb-1.5 md:ml-[0] ml-[5px] text-black-900 text-xs"
                size="txtPoppinsSemiBold12"
              >
                patient PQR, registered today 12:09 pm
              </Text>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col font-poppins h-10 items-start justify-start p-[7px] right-[0] top-[31%]"
              style={{ backgroundImage: "url('images/img_group23.svg')" }}
            >
              <Text
                className="capitalize mb-1.5 md:ml-[0] ml-[5px] text-black-900 text-xs"
                size="txtPoppinsSemiBold12"
              >
                patient STY, registered today 6:19 am
              </Text>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col font-poppins h-10 items-start justify-start p-[7px] right-[0] top-[36%]"
              style={{ backgroundImage: "url('images/img_group23.svg')" }}
            >
              <Text
                className="capitalize mb-1.5 md:ml-[0] ml-[5px] text-black-900 text-xs"
                size="txtPoppinsSemiBold12"
              >
                patient LMN, registered today 5:39 am
              </Text>
            </div>
            <div className="absolute bg-green-A200_01 bottom-[2%] flex flex-col font-poppins items-start justify-start p-[38px] sm:px-5 right-[0] rounded-[41px]">
              <Text
                className="capitalize ml-0.5 md:ml-[0] text-2xl md:text-[22px] text-red-900 sm:text-xl"
                size="txtPoppinsSemiBold24"
              >
                Statistics
              </Text>
              <Text
                className="capitalize ml-0.5 md:ml-[0] mt-[21px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsSemiBold24Black900"
              >
                patients online: 87
              </Text>
              <Text
                className="capitalize ml-0.5 md:ml-[0] mt-[9px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-[98%] sm:w-full"
                size="txtPoppinsSemiBold24Black900"
              >
                patients Enrolled Today: 189
              </Text>
              <Text
                className="capitalize ml-0.5 md:ml-[0] mt-[33px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsSemiBold24Black900"
              >
                Total Patients: 888
              </Text>
              <Text
                className="capitalize mb-5 ml-0.5 md:ml-[0] mt-3.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsSemiBold24Black900"
              >
                Doctors Onboard: 257
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
