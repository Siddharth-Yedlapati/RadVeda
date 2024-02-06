import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Line, Text } from "components";
import LabStaffSignupOneColumnlabel from "components/LabStaffSignupOneColumnlabel";

const AdminSignupThreePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex h-[859px] justify-end mx-auto p-6 sm:px-5 relative w-full"
        style={{ backgroundImage: "url('images/img_labstaffsignupone.png')" }}
      >
        <div className="flex flex-col font-juliussansone h-full items-center justify-start max-w-[1116px] mt-auto mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-11 justify-start w-full">
            <Text
              className="md:ml-[0] ml-[46px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
              size="txtJuliusSansOneRegular36"
            >
              <>
                Sign up AS
                <br />
                admin
              </>
            </Text>
            <div className="flex flex-col font-inter items-start justify-start w-full">
              <LabStaffSignupOneColumnlabel className="h-14 relative w-[460px] sm:w-full" />
              <LabStaffSignupOneColumnlabel className="h-14 md:h-[151px] mt-[95px] relative w-[460px] sm:w-full" />
              <Input
                name="group274"
                placeholder="Password mismatch warning"
                className="font-medium md:h-auto p-0 placeholder:text-red-A700 sm:h-auto text-center text-sm tracking-[0.15px] w-full"
                wrapClassName="md:ml-[0] ml-[216px] mt-2.5 w-[22%]"
                type="password"
                shape="round"
                color="gray_50"
                size="xs"
                variant="fill"
              ></Input>
              <div className="flex sm:flex-col flex-row font-kanit sm:gap-5 items-start justify-start mt-[232px] w-full">
                <Button
                  className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[223px] text-[19px] text-center"
                  onClick={() => navigate("/adminsignuptwo")}
                  shape="round"
                  color="indigo_A400"
                  size="lg"
                  variant="fill"
                >
                  Back
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-bold min-w-[221px] ml-4 sm:ml-[0] text-[19px] text-center"
                  onClick={() => navigate("/admindashboard")}
                  shape="round"
                  color="indigo_A400"
                  size="xl"
                  variant="fill"
                >
                  Submit sign up request
                </Button>
                <Line className="bg-teal-300 h-px mb-[33px] sm:ml-[0] ml-[314px] sm:mt-0 mt-7 w-[31%]" />
              </div>
              <div className="flex flex-row gap-[52px] items-center justify-start md:ml-[0] ml-[125px] mt-5 w-[30%] md:w-full">
                <Text
                  className="text-base text-gray-600"
                  size="txtInterRegular16"
                >
                  {" "}
                  Already have an account?
                </Text>
                <Button
                  className="common-pointer cursor-pointer font-bold font-kanit leading-[normal] min-w-[78px] text-center text-xs"
                  onClick={() => navigate("/adminloginpage")}
                  shape="round"
                  color="indigo_A400"
                  size="xs"
                  variant="fill"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[9%] flex flex-row gap-[100px] items-center justify-center md:px-5 right-[23%] w-[14%]">
          <div className="bg-teal-300 h-[50px] rounded-[25px] w-1/4"></div>
          <div className="bg-teal-300 h-[50px] rounded-[25px] w-1/4"></div>
        </div>
        <div className="absolute bg-teal-300 bottom-[9%] h-[50px] md:px-5 right-[13%] rounded-[25px] w-[4%]"></div>
        <Button
          className="absolute bottom-[24%] cursor-pointer font-inter font-medium h-[25px] left-1/4 text-center text-sm tracking-[0.15px] w-[247px]"
          shape="round"
          color="gray_50"
          size="xs"
          variant="fill"
        >
          Phone number validity status
        </Button>
        <LabStaffSignupOneColumnlabel className="absolute bottom-[28%] font-inter h-14 left-[11%] md:px-5 w-[460px] sm:w-full" />
        <Text
          className="absolute left-[12%] text-[13px] text-gray-600 top-[37%] w-[32%] sm:w-full"
          size="txtInterRegular13"
        >
          Your password must be at least 8 characters long and should contain at
          least 1 uppercase, 1 lowercase, 1 numeric and 1 special character
        </Text>
      </div>
    </>
  );
};

export default AdminSignupThreePage;
