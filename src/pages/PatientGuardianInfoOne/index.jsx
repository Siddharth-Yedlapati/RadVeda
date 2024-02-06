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

const PatientGuardianInfoOnePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex sm:flex-col md:flex-col flex-row font-juliussansone sm:gap-10 md:gap-10 gap-[391px] h-[859px] items-start mx-auto p-6 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_labstaffsignupone.png')" }}
      >
        <div className="flex flex-col md:gap-10 gap-[118px] items-center justify-start md:ml-[0] ml-[133px] md:mt-0 mt-[71px] md:px-5 w-[33%] md:w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtJuliusSansOneRegular36"
          >
            Guardian info
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
            <div className="flex sm:flex-col flex-row font-kanit gap-4 items-center justify-between mt-11 w-full">
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[223px] text-[19px] text-center"
                onClick={() => navigate("/patientsignuptwo")}
                shape="round"
                color="indigo_A400"
                size="lg"
                variant="fill"
              >
                Back
              </Button>
              <Button
                className="common-pointer cursor-pointer font-bold leading-[normal] min-w-[221px] text-[19px] text-center"
                onClick={() => navigate("/patientgaurdianinfotwo")}
                shape="round"
                color="indigo_A400"
                size="lg"
                variant="fill"
              >
                Next
              </Button>
            </div>
            <div className="flex flex-row gap-[52px] items-center justify-end md:ml-[0] ml-[125px] mt-5 w-[71%] md:w-full">
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
        <div className="h-12 mr-[237px] md:mt-0 mt-[721px] md:px-5 relative w-[14%] md:w-full">
          <Line className="absolute bg-teal-300 bottom-[46%] h-px inset-x-[0] mx-auto w-full" />
          <div className="absolute bg-blue_gray-100 h-12 inset-y-[0] my-auto right-[0] rounded-[50%] w-12"></div>
          <div className="absolute bg-teal-300 h-12 inset-y-[0] left-[0] my-auto rounded-[50%] w-12"></div>
        </div>
      </div>
    </>
  );
};

export default PatientGuardianInfoOnePage;
