import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import LabStaffSignupOneColumnlabel from "components/LabStaffSignupOneColumnlabel";

const textfieldoutlinOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const textfieldoutlinThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const PatientSignupTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex h-[859px] justify-end mx-auto p-6 sm:px-5 relative w-full"
        style={{ backgroundImage: "url('images/img_labstaffsignupone.png')" }}
      >
        <div className="flex flex-col font-juliussansone h-full items-center justify-start max-w-[1115px] mt-auto mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[42px] justify-start w-full">
            <Text
              className="md:ml-[0] ml-[45px] text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
              size="txtJuliusSansOneRegular36"
            >
              <>
                Sign up AS
                <br />
                patient
              </>
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row font-inter gap-5 items-center justify-start w-[30%] md:w-full">
                <LabStaffSignupOneColumnlabel
                  className="bg-gray-50 flex flex-col gap-[3px] items-start justify-start rounded-[10px] shadow-bs w-[189px]"
                  dateofbirth="Date of Birth"
                />
                <SelectBox
                  className="font-medium text-left text-sm tracking-[0.15px] w-[37%] sm:w-full"
                  placeholderClassName="text-gray-800"
                  indicator={
                    <Img
                      className="h-[31px] w-[25px]"
                      src="images/img_arrowdown_blue_gray_900.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="textfieldoutlin"
                  options={textfieldoutlinOptionsList}
                  isSearchable={false}
                  placeholder="Gender"
                  shape="round"
                  color="gray_300"
                  size="xs"
                  variant="outline"
                />
              </div>
              <div className="flex sm:flex-col flex-row font-inter gap-[19px] items-center justify-start mt-[37px] w-[42%] md:w-full">
                <Input
                  name="textfieldoutlin_One"
                  placeholder="Marital status"
                  className="font-medium p-0 placeholder:text-gray-800 text-left text-sm tracking-[0.15px] w-full"
                  wrapClassName="flex w-[223px] sm:w-full"
                  suffix={
                    <Img
                      className="ml-[35px] my-auto"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  }
                  shape="round"
                  color="gray_300"
                  size="sm"
                  variant="outline"
                ></Input>
                <Input
                  name="textfieldoutlin_Two"
                  placeholder="Ethnicity"
                  className="font-medium p-0 placeholder:text-gray-800 text-left text-sm tracking-[0.15px] w-full"
                  wrapClassName="flex w-[218px] sm:w-full"
                  suffix={
                    <Img
                      className="ml-[35px] my-auto"
                      src="images/img_checkmark.svg"
                      alt="checkmark"
                    />
                  }
                  shape="round"
                  color="gray_300"
                  size="sm"
                  variant="outline"
                ></Input>
              </div>
              <div className="bg-indigo-A400 flex flex-row font-kanit gap-[58px] items-center justify-start mt-[69px] p-3.5 rounded-[10px] shadow-bs w-[42%] md:w-full">
                <Text
                  className="ml-[70px] text-[19px] text-white-A700"
                  size="txtKanitBold19"
                >
                  {" "}
                  Upload government ID
                </Text>
                <div className="bg-white-A700 flex flex-col h-[30px] items-center justify-start my-[3px] rounded-[50%] w-[30px]">
                  <div className="bg-indigo-A400 flex flex-col h-7 items-end justify-end p-0.5 rounded-[50%] w-7">
                    <Line className="bg-white-A700 h-[21px] mr-2.5 mt-[3px] w-0.5" />
                  </div>
                </div>
              </div>
              <Button
                className="common-pointer cursor-pointer font-bold font-kanit leading-[normal] min-w-[460px] sm:min-w-full mt-[53px] text-[19px] text-center"
                onClick={() => navigate("/patientguardianinfoone")}
                shape="round"
                color="indigo_A400"
                size="3xl"
                variant="fill"
              >
                Fill up guardian info
              </Button>
              <div className="flex sm:flex-col flex-row font-kanit sm:gap-5 items-start justify-start mt-[71px] w-full">
                <Button
                  className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[223px] text-[19px] text-center"
                  onClick={() => navigate("/patientsignupone")}
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
                <Line className="bg-teal-300 h-px mb-[34px] sm:ml-[0] ml-[313px] sm:mt-0 mt-[26px] w-[31%]" />
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
        <div className="absolute bottom-[9%] flex flex-row items-center justify-center md:px-5 right-[13%] w-[24%]">
          <div className="bg-teal-300 flex flex-col items-center justify-start rounded-[25px] w-[15%]">
            <div className="bg-teal-300 h-[50px] rounded-[25px] w-full"></div>
          </div>
          <div className="bg-teal-300 h-[50px] ml-[100px] rounded-[50%] w-[50px]"></div>
          <div className="bg-blue_gray-100 h-[50px] ml-24 rounded-[25px] w-[15%]"></div>
        </div>
        <SelectBox
          className="absolute font-inter font-medium left-[34%] text-left text-sm top-[30%] tracking-[0.15px] w-[8%] sm:w-full"
          placeholderClassName="text-gray-800"
          indicator={
            <Img
              className="h-[31px] w-[25px] absolute"
              src="images/img_arrowdown_blue_gray_900.svg"
              alt="arrow_down"
            />
          }
          isMulti={false}
          name="textfieldoutlin_Three"
          options={textfieldoutlinThreeOptionsList}
          isSearchable={false}
          placeholder="Race"
          shape="round"
          color="gray_300"
          size="sm"
          variant="outline"
        />
      </div>
    </>
  );
};

export default PatientSignupTwoPage;
