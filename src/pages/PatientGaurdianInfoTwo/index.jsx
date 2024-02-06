import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import LabStaffSignupOneColumnlabel from "components/LabStaffSignupOneColumnlabel";

const textfieldoutlinTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PatientGaurdianInfoTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex h-[859px] justify-end mx-auto p-6 sm:px-5 relative w-full"
        style={{ backgroundImage: "url('images/img_labstaffsignupone.png')" }}
      >
        <div className="flex flex-col font-juliussansone h-full items-center justify-start ml-[132px] mt-auto md:px-5 w-[72%]">
          <div className="flex flex-col md:gap-10 gap-[170px] justify-start w-full">
            <Text
              className="md:ml-[0] ml-[93px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
              size="txtJuliusSansOneRegular36"
            >
              Guardian Info
            </Text>
            <div className="flex flex-col font-inter items-start justify-start w-full">
              <Input
                name="group150"
                placeholder="Age verification status"
                className="font-medium md:h-auto p-0 placeholder:text-red-A700 sm:h-auto text-left text-sm tracking-[0.15px] w-full"
                wrapClassName="w-[19%]"
                shape="round"
                color="gray_50"
                size="xs"
                variant="fill"
              ></Input>
              <Input
                name="textfieldoutlin"
                placeholder="Relationship to patient"
                className="font-medium p-0 placeholder:text-gray-800 text-left text-sm tracking-[0.15px] w-full"
                wrapClassName="mt-8 w-[44%]"
                shape="round"
                color="gray_300"
                size="md"
                variant="outline"
              ></Input>
              <Input
                name="textfieldoutlin_One"
                placeholder="Phone number"
                className="font-medium p-0 placeholder:text-gray-800 text-left text-sm tracking-[0.15px] w-full"
                wrapClassName="mt-[37px] w-[44%]"
                type="number"
                shape="round"
                color="gray_300"
                size="md"
                variant="outline"
              ></Input>
              <LabStaffSignupOneColumnlabel className="bg-gray-50 font-medium h-[25px] justify-center md:ml-[0] ml-[213px] mt-1 pt-1.5 sm:px-5 px-[23px] rounded-[10px] text-center text-red-A700 text-shadow-ts text-sm tracking-[0.15px] w-[247px]" />
              <div className="flex sm:flex-col flex-row font-kanit sm:gap-5 items-start justify-start mt-[189px] w-full">
                <Button
                  className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[223px] text-[19px] text-center"
                  onClick={() => navigate("/patientguardianinfoone")}
                  shape="round"
                  color="indigo_A400"
                  size="lg"
                  variant="fill"
                >
                  Back
                </Button>
                <Button
                  className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[221px] ml-4 sm:ml-[0] text-[19px] text-center"
                  onClick={() => navigate("/patientsignupthree")}
                  shape="round"
                  color="indigo_A400"
                  size="lg"
                  variant="fill"
                >
                  Next
                </Button>
                <Line className="bg-teal-300 h-px mb-[21px] sm:ml-[0] ml-[392px] sm:mt-0 mt-10 w-[19%]" />
              </div>
              <div className="flex flex-row gap-[52px] items-center justify-start md:ml-[0] ml-[125px] mt-5 w-[32%] md:w-full">
                <Text
                  className="text-base text-gray-600"
                  size="txtInterRegular16"
                >
                  {" "}
                  Already have an account?
                </Text>
                <Button
                  className="common-pointer cursor-pointer font-bold font-kanit leading-[normal] min-w-[78px] text-center text-xs"
                  onClick={() => navigate("/patientloginpage")}
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
        <div className="absolute bg-teal-300 bottom-[8%] h-12 md:px-5 right-[18%] rounded-[50%] w-12"></div>
        <div className="absolute bg-teal-300 bottom-[8%] h-12 md:px-5 right-[28%] rounded-[50%] w-12"></div>
        <LabStaffSignupOneColumnlabel
          className="absolute bg-gray-50 flex flex-col font-inter gap-[3px] items-center justify-start left-[11%] md:px-5 rounded-[10px] shadow-bs top-[29%] w-[189px]"
          dateofbirth="Date of Birth"
        />
        <SelectBox
          className="absolute font-inter font-medium left-[26%] text-left text-sm top-[29%] tracking-[0.15px] w-[9%] sm:w-full"
          placeholderClassName="text-gray-800"
          indicator={
            <Img
              className="h-[33px] w-[23px] absolute"
              src="images/img_arrowdown_blue_gray_900.svg"
              alt="arrow_down"
            />
          }
          isMulti={false}
          name="textfieldoutlin_Two"
          options={textfieldoutlinTwoOptionsList}
          isSearchable={false}
          placeholder="Gender"
          shape="round"
          color="gray_300"
          size="xs"
          variant="outline"
        />
        <div className="absolute bg-indigo-A400 bottom-[23%] flex sm:flex-col flex-row font-kanit gap-[58px] items-start justify-center left-[11%] p-[13px] md:px-5 rounded-[10px] shadow-bs w-[32%]">
          <Text
            className="sm:ml-[0] ml-[71px] sm:mt-0 mt-2 text-[19px] text-white-A700"
            size="txtKanitBold19"
          >
            {" "}
            Upload government ID
          </Text>
          <div className="bg-white-A700 flex flex-col h-[30px] items-center justify-start mb-0.5 mr-[74px] sm:mt-0 mt-[5px] rounded-[50%] w-[30px]">
            <div className="bg-indigo-A400 flex flex-col h-7 items-end justify-end p-0.5 rounded-[50%] w-7">
              <Line className="bg-white-A700 h-[23px] mr-2.5 w-0.5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PatientGaurdianInfoTwoPage;
