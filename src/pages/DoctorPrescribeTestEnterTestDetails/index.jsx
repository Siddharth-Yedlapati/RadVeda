import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import LabStaffSignupOneColumnlabel from "components/LabStaffSignupOneColumnlabel";

const DoctorPrescribeTestEnterTestDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-outfit h-[859px] mx-auto p-[7px] relative w-full">
        <div className="sm:h-[786px] md:h-[798px] h-[826px] m-auto max-w-[1414px] md:px-5 w-full">
          <div className="absolute bg-blue_gray-900 bottom-[0] flex flex-col inset-x-[0] items-start justify-end mx-auto p-[51px] md:px-10 sm:px-5 rounded-[10px] w-full">
            <div className="flex flex-col items-center justify-start mb-[9px] mt-[642px] w-[9%] md:w-full">
              <Button
                className="common-pointer capitalize cursor-pointer font-semibold h-[33px] rounded-lg text-center text-lg tracking-[0.36px] w-28"
                onClick={() => navigate("/doctorprescribetestverification")}
                shape="round"
                size="sm"
                color="green_500_teal_400"
              >
                Back
              </Button>
            </div>
          </div>
          <div className="absolute flex flex-row font-poppins gap-5 items-center justify-center right-[2%] top-[0] w-[9%]">
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
          <div className="absolute flex flex-col font-outfit items-end justify-end left-[0] md:pl-10 sm:pl-5 pl-[43px] py-[43px] top-[2%] w-[63%]">
            <div className="flex flex-col items-start justify-start mt-[165px] w-[86%] md:w-full">
              <Button
                className="capitalize cursor-pointer font-semibold h-[65px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                shape="round"
                color="black_900"
                size="3xl"
                variant="fill"
              >
                Test Type
              </Button>
              <Button
                className="capitalize cursor-pointer font-semibold h-[65px] mt-[59px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                shape="round"
                color="black_900"
                size="3xl"
                variant="fill"
              >
                Remarks for patient
              </Button>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[54px] w-full">
                <Button
                  className="capitalize cursor-pointer font-semibold h-[65px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                  shape="round"
                  color="black_900"
                  size="3xl"
                  variant="fill"
                >
                  Remarks for Radiologist
                </Button>
                <LabStaffSignupOneColumnlabel
                  className="bg-gray-50 flex flex-col font-inter gap-[3px] items-start justify-start md:mt-0 my-1 rounded-[10px] shadow-bs w-[238px]"
                  dateofbirth="Remarks"
                />
              </div>
              <Button
                className="common-pointer capitalize cursor-pointer font-semibold h-[65px] md:ml-[0] ml-[259px] mt-[81px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                onClick={() => navigate("/doctordashboard")}
                shape="round"
                size="3xl"
                color="green_500_teal_400"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col font-inter md:gap-10 gap-16 items-center justify-start md:px-5 right-[27%] top-[28%] w-[28%]">
          <Button
            className="cursor-pointer font-medium text-center text-sm tracking-[0.15px] w-[400px]"
            shape="round"
            color="gray_300"
            size="3xl"
            variant="outline"
          >
            X-Ray
          </Button>
          <Button
            className="cursor-pointer font-medium text-center text-sm tracking-[0.15px] w-[400px]"
            shape="round"
            color="gray_300"
            size="3xl"
            variant="outline"
          >
            Remarks
          </Button>
        </div>
      </div>
    </>
  );
};

export default DoctorPrescribeTestEnterTestDetailsPage;
