import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

const SuperAdminDashboardPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-poppins items-center justify-start mx-auto p-[7px] w-full">
        <div className="flex flex-col justify-start max-w-[1365px] mb-[41px] mx-auto md:px-5 w-full">
          <div className="flex flex-row gap-5 items-center justify-end md:ml-[0] ml-[1240px] w-[9%] md:w-full">
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
          <div className="md:h-[352px] h-[374px] mt-[21px] relative w-full">
            <div className="md:h-[331px] h-[374px] m-auto w-full">
              <div className="absolute flex flex-col items-end justify-start right-[0] top-[18%] w-[26%]">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-10 items-end justify-start p-[7px] w-full"
                  style={{ backgroundImage: "url('images/img_group23.svg')" }}
                >
                  <div className="flex flex-row gap-2.5 items-center justify-end mb-[13px] mr-[5px] w-[16%] md:w-full">
                    <div className="bg-green-A200 flex flex-row items-start justify-start p-0.5 w-[41%]">
                      <Line className="bg-black-900 h-px mt-1 rotate-[-45deg] w-1" />
                      <Line className="bg-black-900 h-px rotate-[34deg] w-[71%]" />
                    </div>
                    <div className="bg-red-400 flex flex-col items-end justify-end p-0.5 w-[41%]">
                      <div className="h-2 mr-0.5 relative w-[71%]">
                        <Line className="bg-black-900 h-px m-auto rotate-[34deg] w-full" />
                        <Line className="absolute bg-black-900 h-px inset-y-[0] left-[0] my-auto rotate-[-36deg] w-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="javascript:"
                  className="bg-blue_gray-800_01 capitalize h-[23px] justify-center mr-[3px] pl-2 sm:pr-5 pr-[21px] py-[3px] text-[10px] text-white-A700 w-[72px]"
                >
                  <Text size="txtPoppinsSemiBold10WhiteA700">clear all</Text>
                </a>
              </div>
              <div className="absolute flex flex-col h-full inset-y-[0] justify-start left-[0] my-auto md:pl-10 sm:pl-5 pl-[99px] w-[93%]">
                <div className="bg-gradient  flex flex-col font-outfit h-[65px] md:h-auto items-center justify-center md:ml-[0] ml-[905px] rounded-lg w-[262px]">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="capitalize text-lg text-white-A700 tracking-[0.36px]"
                      size="txtOutfitSemiBold18"
                    >
                      Notifications
                    </Text>
                  </div>
                </div>
                <Text
                  className="bg-clip-text bg-gradient1  mr-[747px] mt-7 sm:text-[29.36px] md:text-[31.36px] text-[33.36px] text-transparent"
                  size="txtPoppinsBold3336"
                >
                  Good Morning Super Admin1
                </Text>
                <div className="flex flex-col font-outfit gap-[41px] items-center justify-start md:ml-[0] ml-[210px] mt-[58px] w-[31%] md:w-full">
                  <Button
                    className="common-pointer capitalize cursor-pointer font-semibold h-[65px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                    onClick={() => navigate("/superadminviewadmins")}
                    shape="round"
                    size="3xl"
                    color="green_500_teal_400"
                  >
                    View Admins
                  </Button>
                  <Button
                    className="common-pointer capitalize cursor-pointer font-semibold h-[65px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                    onClick={() => navigate("/superadminreviewsignuprequests")}
                    shape="round"
                    size="3xl"
                    color="green_500_teal_400"
                  >
                    review signup requests{" "}
                  </Button>
                </div>
              </div>
            </div>
            <Text
              className="absolute capitalize right-[6%] text-black-900 text-xs top-[20%]"
              size="txtPoppinsSemiBold12"
            >
              Admin John Doe, registered today 2:39 pm
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-outfit md:gap-10 items-start justify-between md:ml-[0] ml-[309px] mt-1.5 w-[78%] md:w-full">
            <div className="flex flex-col gap-12 items-center justify-start md:mt-0 mt-[41px] w-[35%] md:w-full">
              <Button
                className="common-pointer capitalize cursor-pointer font-semibold h-[65px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                onClick={() =>
                  navigate("/superadminreviewaccountdeletionrequests")
                }
                shape="round"
                size="3xl"
                color="green_500_teal_400"
              >
                Review Account Deletion Requests
              </Button>
              <Button
                className="common-pointer capitalize cursor-pointer font-semibold h-[65px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                onClick={() =>
                  navigate("/superadminreviewaccountmodificationrequests")
                }
                shape="round"
                size="3xl"
                color="green_500_teal_400"
              >
                review Account Modification Requests{" "}
              </Button>
            </div>
            <div className="bg-green-A200_01 flex flex-col font-poppins items-start justify-start p-[38px] sm:px-5 rounded-[41px]">
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
                patients online: 555
              </Text>
              <Text
                className="capitalize ml-0.5 md:ml-[0] mt-[9px] text-2xl md:text-[22px] text-black-900 sm:text-xl w-[98%] sm:w-full"
                size="txtPoppinsSemiBold24Black900"
              >
                patients Enrolled Today: 297
              </Text>
              <Text
                className="capitalize ml-0.5 md:ml-[0] mt-[33px] text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsSemiBold24Black900"
              >
                Total Patients: 2587
              </Text>
              <Text
                className="capitalize mb-5 ml-0.5 md:ml-[0] mt-3.5 text-2xl md:text-[22px] text-black-900 sm:text-xl"
                size="txtPoppinsSemiBold24Black900"
              >
                Doctors Onboard: 857
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperAdminDashboardPage;
