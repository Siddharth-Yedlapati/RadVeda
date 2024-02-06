import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Input, Text } from "components";
import LabStaffSignupOneColumnlabel from "components/LabStaffSignupOneColumnlabel";

const SuperAdminLoginPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col h-[859px] items-start justify-end mx-auto p-[67px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_labstaffsignupone.png')" }}
      >
        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[90px] mt-[30px] w-[36%] md:w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtJuliusSansOneRegular36"
          >
            <>
              Login AS <br />
              super admin
            </>
          </Text>
          <div className="flex flex-col items-start justify-start mt-[42px] w-[99%] md:w-full">
            <LabStaffSignupOneColumnlabel className="font-inter h-14 relative w-[460px] sm:w-full" />
            <LabStaffSignupOneColumnlabel className="font-inter h-14 md:h-[95px] mt-[39px] relative w-[460px] sm:w-full" />
            <Text
              className="md:ml-[0] ml-[286px] mt-2 text-base text-gray-600"
              size="txtInterRegular16"
            >
              Recover Password ?
            </Text>
            <Button
              className="common-pointer cursor-pointer font-bold font-kanit leading-[normal] min-w-[460px] sm:min-w-full mt-[94px] text-[19px] text-center"
              onClick={() => navigate("/superadmindashboard")}
              shape="round"
              color="indigo_A400"
              size="2xl"
              variant="fill"
            >
              Login
            </Button>
          </div>
          <Button
            className="common-pointer cursor-pointer font-bold font-kanit leading-[normal] min-w-[223px] mt-[137px] text-[19px] text-center"
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

export default SuperAdminLoginPagePage;
