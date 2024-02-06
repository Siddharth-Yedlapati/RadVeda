import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Text } from "components";
import LabStaffSignupOneColumnlabel from "components/LabStaffSignupOneColumnlabel";

const DoctorLoginPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col h-[859px] items-start justify-end mx-auto p-[67px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_labstaffsignupone.png')" }}
      >
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[90px] mt-7 w-[36%] md:w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtJuliusSansOneRegular36"
          >
            Login AS Doctor
          </Text>
          <div className="flex flex-col items-start justify-start mt-[117px] w-[99%] md:w-full">
            <Input
              name="textfieldoutlin"
              placeholder="Enter Email or Phone"
              className="font-inter font-medium md:h-auto p-0 placeholder:text-gray-800 sm:h-auto text-left text-sm tracking-[0.15px] w-full"
              wrapClassName="w-full"
              type="email"
              shape="round"
              color="gray_300"
              size="md"
              variant="outline"
            ></Input>
            <LabStaffSignupOneColumnlabel className="font-inter h-14 md:h-24 mt-10 relative w-[460px] sm:w-full" />
            <Text
              className="md:ml-[0] ml-[286px] mt-2 text-base text-gray-600"
              size="txtInterRegular16"
            >
              Recover Password ?
            </Text>
            <Button
              className="common-pointer cursor-pointer font-bold font-kanit leading-[normal] min-w-[460px] sm:min-w-full mt-[94px] text-[19px] text-center"
              onClick={() => navigate("/doctordashboard")}
              shape="round"
              color="indigo_A400"
              size="2xl"
              variant="fill"
            >
              Login
            </Button>
            <div className="flex flex-row gap-5 items-center justify-center md:ml-[0] ml-[101px] mt-7 w-3/5 md:w-full">
              <a
                href="javascript:"
                className="text-base text-center text-gray-600"
              >
                <Text size="txtInterRegular16">Don’t have an account?</Text>
              </a>
              <Button
                className="common-pointer cursor-pointer font-bold font-kanit leading-[normal] min-w-[78px] text-center text-xs"
                onClick={() => navigate("/doctorsignupone")}
                shape="round"
                color="indigo_A400"
                size="xs"
                variant="fill"
              >
                Sign up
              </Button>
            </div>
          </div>
          <Button
            className="common-pointer cursor-pointer font-bold font-kanit leading-[normal] min-w-[223px] mt-[84px] text-[19px] text-center"
            onClick={() => navigate("/usertypeselection")}
            shape="round"
            color="indigo_A400"
            size="lg"
            variant="fill"
          >
            Back
          </Button>
        </div>
      </div>
    </>
  );
};

export default DoctorLoginPagePage;
