import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import LabStaffSignupOneColumnlabel from "components/LabStaffSignupOneColumnlabel";

const textfieldoutlinTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const textfieldoutlinThreeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const textfieldoutlinFourOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const RadiologistSignupOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex h-[859px] justify-end mx-auto p-6 sm:px-5 relative w-full"
        style={{ backgroundImage: "url('images/img_labstaffsignupone.png')" }}
      >
        <div className="flex flex-col font-juliussansone h-full items-center justify-start max-w-[1115px] mt-auto mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex flex-col gap-[42px] items-center justify-start">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center w-[83%] sm:w-full"
                size="txtJuliusSansOneRegular36"
              >
                Sign up AS radiologist
              </Text>
              <div className="flex flex-col font-inter items-start justify-start w-full">
                <div className="flex sm:flex-col flex-row gap-[27px] items-center justify-between w-full">
                  <LabStaffSignupOneColumnlabel
                    className="bg-gray-50 flex flex-col gap-[3px] items-start justify-start rounded-[10px] shadow-bs w-[131px]"
                    dateofbirth="First name"
                  />
                  <List
                    className="sm:flex-1 sm:flex-col flex-row gap-6 grid grid-cols-2 w-[66%] sm:w-full"
                    orientation="horizontal"
                  >
                    <LabStaffSignupOneColumnlabel
                      className="bg-gray-50 flex flex-col gap-[3px] items-start justify-start sm:ml-[0] rounded-[10px] shadow-bs w-[139px]"
                      dateofbirth="Middle name"
                    />
                    <LabStaffSignupOneColumnlabel
                      className="bg-gray-50 flex flex-col gap-[3px] items-start justify-start sm:ml-[0] rounded-[10px] shadow-bs w-[139px]"
                      dateofbirth="Last name"
                    />
                  </List>
                </div>
                <Input
                  name="textfieldoutlin"
                  placeholder="Address line 1"
                  className="font-medium p-0 placeholder:text-gray-800 text-left text-sm tracking-[0.15px] w-full"
                  wrapClassName="mt-[37px] w-full"
                  shape="round"
                  color="gray_300"
                  size="md"
                  variant="outline"
                ></Input>
                <Input
                  name="textfieldoutlin_One"
                  placeholder="Address line 2"
                  className="font-medium p-0 placeholder:text-gray-800 text-left text-sm tracking-[0.15px] w-full"
                  wrapClassName="mt-[39px] w-full"
                  shape="round"
                  color="gray_300"
                  size="md"
                  variant="outline"
                ></Input>
                <div className="flex sm:flex-col flex-row gap-4 items-center justify-start mt-[37px] w-[85%] md:w-full">
                  <SelectBox
                    className="font-medium text-left text-sm tracking-[0.15px] w-[31%] sm:w-full"
                    placeholderClassName="text-gray-800"
                    indicator={
                      <Img
                        className="h-[31px] w-[25px]"
                        src="images/img_arrowdown_blue_gray_900.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="textfieldoutlin_Two"
                    options={textfieldoutlinTwoOptionsList}
                    isSearchable={false}
                    placeholder="Country"
                    shape="round"
                    color="gray_300"
                    size="sm"
                    variant="outline"
                  />
                  <SelectBox
                    className="font-medium text-left text-sm tracking-[0.15px] w-[31%] sm:w-full"
                    placeholderClassName="text-gray-800"
                    indicator={
                      <Img
                        className="h-[31px] w-[23px]"
                        src="images/img_arrowdown_blue_gray_900.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="textfieldoutlin_Three"
                    options={textfieldoutlinThreeOptionsList}
                    isSearchable={false}
                    placeholder="State"
                    shape="round"
                    color="gray_300"
                    size="sm"
                    variant="outline"
                  />
                  <SelectBox
                    className="font-medium text-left text-sm tracking-[0.15px] w-[31%] sm:w-full"
                    placeholderClassName="text-gray-800"
                    indicator={
                      <Img
                        className="h-[31px] w-[23px]"
                        src="images/img_arrowdown_blue_gray_900.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="textfieldoutlin_Four"
                    options={textfieldoutlinFourOptionsList}
                    isSearchable={false}
                    placeholder="City"
                    shape="round"
                    color="gray_300"
                    size="sm"
                    variant="outline"
                  />
                </div>
                <Input
                  name="textfieldoutlin_Five"
                  placeholder="Email address"
                  className="font-medium p-0 placeholder:text-gray-800 text-left text-sm tracking-[0.15px] w-full"
                  wrapClassName="mt-[39px] w-full"
                  type="email"
                  shape="round"
                  color="gray_300"
                  size="md"
                  variant="outline"
                ></Input>
                <div className="flex flex-row gap-[52px] items-center justify-end md:ml-[0] ml-[125px] mt-[126px] w-[71%] md:w-full">
                  <Text
                    className="text-base text-gray-600"
                    size="txtInterRegular16"
                  >
                    {" "}
                    Already have an account?
                  </Text>
                  <Button
                    className="common-pointer cursor-pointer font-bold font-kanit leading-[normal] min-w-[78px] text-center text-xs"
                    onClick={() => navigate("/radiologistloginpage")}
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
            <Line className="bg-teal-300 h-px mb-[76px] md:mt-0 mt-[661px] w-[31%]" />
          </div>
        </div>
        <div className="absolute bottom-[8%] flex md:flex-col flex-row font-kanit md:gap-5 inset-x-[0] items-start justify-start mx-auto md:px-5 w-1/2">
          <Button
            className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[221px] text-[19px] text-center"
            onClick={() => navigate("/radiologistsignuptwo")}
            shape="round"
            color="indigo_A400"
            size="lg"
            variant="fill"
          >
            Next
          </Button>
          <div className="bg-teal-300 h-[50px] mb-[9px] md:ml-[0] ml-[313px] md:mt-0 mt-[3px] rounded-[25px] w-[7%]"></div>
          <div className="bg-blue_gray-100 h-[50px] mb-[9px] md:ml-[0] ml-[100px] md:mt-0 mt-[3px] rounded-[25px] w-[7%]"></div>
        </div>
        <div className="absolute bg-blue_gray-100 bottom-[9%] h-[50px] md:px-5 right-[13%] rounded-[25px] w-[4%]"></div>
        <Button
          className="common-pointer absolute bottom-[8%] cursor-pointer font-bold font-kanit leading-[normal] left-[11%] min-w-[223px] text-[19px] text-center"
          onClick={() => navigate("/usertypeselection")}
          shape="round"
          color="indigo_A400"
          size="lg"
          variant="fill"
        >
          Back
        </Button>
      </div>
    </>
  );
};

export default RadiologistSignupOnePage;
