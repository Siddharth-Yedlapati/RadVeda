import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import LabStaffSignupOneColumnlabel from "components/LabStaffSignupOneColumnlabel";

const textfieldoutlinOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DoctorSignupTwoPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col gap-5 h-[859px] justify-end mx-auto p-6 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_labstaffsignupone.png')" }}
      >
        <div className="flex flex-col items-center max-w-[1115px] mt-[71px] mx-auto md:px-5 w-full">
          <div className="md:h-[363px] sm:h-[661px] h-[696px] relative w-full">
            <div className="absolute flex flex-col font-juliussansone md:gap-10 gap-[260px] inset-x-[0] justify-start mx-auto top-[0] w-full">
              <div className="flex flex-col md:gap-10 gap-[118px] items-center justify-start mr-[655px] w-[42%] md:w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
                  size="txtJuliusSansOneRegular36"
                >
                  Sign up AS Doctor
                </Text>
                <div className="flex flex-col font-inter gap-[37px] items-center justify-start w-full">
                  <SelectBox
                    className="font-medium h-14 text-left text-sm tracking-[0.15px] w-full"
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
                    placeholder="Hospital/Clinic"
                    shape="round"
                    color="gray_300"
                    size="xs"
                    variant="outline"
                  />
                  <LabStaffSignupOneColumnlabel className="h-14 relative w-[460px] sm:w-full" />
                  <LabStaffSignupOneColumnlabel className="h-14 relative w-[460px] sm:w-full" />
                </div>
              </div>
              <Line className="bg-teal-300 h-px md:ml-[0] ml-[773px] w-[31%]" />
            </div>
            <div className="absolute bg-teal-300 bottom-[1%] h-[50px] right-[26%] rounded-[25px] w-[5%]"></div>
            <div className="absolute bg-blue_gray-100 bottom-[1%] h-[50px] right-[0] rounded-[25px] w-[5%]"></div>
            <div className="absolute bg-teal-300 bottom-[1%] h-[50px] right-[13%] rounded-[25px] w-[5%]"></div>
            <div className="absolute bg-indigo-A400 bottom-[18%] flex sm:flex-col flex-row font-kanit gap-[43px] items-center justify-start left-[0] p-4 rounded-[10px] shadow-bs w-[42%]">
              <Text
                className="sm:ml-[0] ml-[26px] text-[19px] text-white-A700"
                size="txtKanitBold19"
              >
                {" "}
                Upload documents for verification
              </Text>
              <div className="bg-white-A700 flex flex-col h-[30px] items-center justify-start rounded-[50%] w-[30px]">
                <div className="bg-indigo-A400 flex flex-col h-7 items-end justify-end p-0.5 rounded-[50%] w-7">
                  <Line className="bg-white-A700 h-[21px] mr-2.5 mt-[3px] w-0.5" />
                </div>
              </div>
            </div>
            <Button
              className="common-pointer absolute bottom-[0] cursor-pointer font-bold font-kanit leading-[normal] left-[21%] min-w-[221px] text-[19px] text-center"
              onClick={() => navigate("/doctorsignupthree")}
              shape="round"
              color="indigo_A400"
              size="lg"
              variant="fill"
            >
              Next
            </Button>
            <Button
              className="common-pointer absolute bottom-[0] cursor-pointer font-bold font-kanit leading-[normal] left-[0] min-w-[223px] text-[19px] text-center"
              onClick={() => navigate("/doctorsignupone")}
              shape="round"
              color="indigo_A400"
              size="lg"
              variant="fill"
            >
              Back
            </Button>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-[52px] items-center justify-start md:ml-[0] ml-[258px] mr-[833px] md:px-5 w-[23%] md:w-full">
          <Text className="text-base text-gray-600" size="txtInterRegular16">
            {" "}
            Already have an account?
          </Text>
          <Button
            className="common-pointer cursor-pointer font-bold font-kanit leading-[normal] min-w-[78px] text-center text-xs"
            onClick={() => navigate("/doctorloginpage")}
            shape="round"
            color="indigo_A400"
            size="xs"
            variant="fill"
          >
            Login
          </Button>
        </div>
      </div>
    </>
  );
};

export default DoctorSignupTwoPage;
