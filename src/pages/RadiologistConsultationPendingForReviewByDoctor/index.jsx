import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, Text } from "components";

const RadiologistConsultationPendingForReviewByDoctorPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-outfit h-[859px] mx-auto p-[7px] relative w-full">
        <div className="absolute bg-blue_gray-900 flex flex-col h-max inset-[0] items-start justify-center m-auto max-w-[1411px] p-[21px] md:px-5 rounded-[10px] w-full">
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[15px] mt-[51px] w-[94%] md:w-full">
            <div className="flex flex-col justify-start w-full">
              <div className="bg-gradient  flex flex-col h-[42px] md:h-auto items-center justify-center md:ml-[0] ml-[932px] rounded-lg w-[279px]">
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="capitalize text-lg text-white-A700 tracking-[0.36px]"
                    size="txtOutfitSemiBold18"
                  >
                    View Other Radiologist’s Details
                  </Text>
                </div>
              </div>
              <div className="flex flex-row font-poppins items-start justify-end md:ml-[0] ml-[903px] mt-[11px] w-[28%] md:w-full">
                <div className="md:h-[241px] h-[78px] mt-[163px] relative w-[9%]">
                  <div className="h-[78px] m-auto w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="bg-blue_gray-100 h-8 rounded-[16px] w-full"></div>
                        <div className="bg-blue_gray-100 h-8 rounded-[16px] w-full"></div>
                      </div>
                    </div>
                    <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto py-[23px] w-full">
                      <Line className="bg-black-900 h-px w-full" />
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[7px] h-max inset-[0] items-center justify-center m-auto w-[87%]">
                    <Img
                      className="h-6 w-[25px]"
                      src="images/img_polygon5.svg"
                      alt="polygonFive"
                    />
                    <Img
                      className="h-6 w-[25px]"
                      src="images/img_arrowdown_gray_900.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="bg-blue_gray-800 flex flex-col md:gap-10 gap-[72px] items-end justify-start p-[23px] sm:px-5 rounded-[10px] w-[92%]">
                  <Text
                    className="capitalize text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                    size="txtPoppinsBold24"
                  >
                    Annotations by other Radiologists
                  </Text>
                  <Img
                    className="h-[183px] md:h-auto mb-[33px] object-cover w-[99%] sm:w-full"
                    src="images/img_annotelyimage1.png"
                    alt="annotelyimageOne"
                  />
                </div>
              </div>
              <div className="flex flex-col font-outfit gap-5 items-center justify-start md:ml-[0] ml-[917px] mt-[42px] w-[29%] md:w-full">
                <Button
                  className="capitalize cursor-pointer font-semibold h-[65px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                  shape="round"
                  size="3xl"
                  color="green_500_teal_400"
                >
                  View Other Radiologist’s Notes
                </Button>
                <Button
                  className="common-pointer capitalize cursor-pointer font-semibold h-[65px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                  onClick={() =>
                    navigate(
                      "/radiologistconsultationpfrbdconsultotherradiologists",
                    )
                  }
                  shape="round"
                  size="3xl"
                  color="green_500_teal_400"
                >
                  Consult Other Radiologists
                </Button>
              </div>
              <div className="flex sm:flex-col flex-row font-outfit md:gap-10 items-end justify-between mr-[3px] mt-3.5 w-full">
                <Button
                  className="common-pointer capitalize cursor-pointer font-semibold h-[33px] sm:mt-0 mt-[38px] rounded-lg text-center text-lg tracking-[0.36px] w-28"
                  onClick={() =>
                    navigate("/radiologistconsultationpatientdetails")
                  }
                  shape="round"
                  size="sm"
                  color="green_500_teal_400"
                >
                  Back
                </Button>
                <Button
                  className="capitalize cursor-pointer font-semibold h-[70px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                  shape="round"
                  size="3xl"
                  color="green_500_teal_400"
                >
                  Collaborate with Authorized Reps
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-row font-poppins gap-5 items-center justify-center md:px-5 right-[3%] top-[1%] w-[9%]">
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
        <div className="absolute flex flex-col font-poppins items-start justify-start left-[2%] pt-2 px-2 md:px-5 top-[3%] w-[61%]">
          <div className="flex flex-col gap-[17px] items-end justify-start mt-[37px] w-[93%] md:w-full">
            <div className="flex flex-col justify-start w-full">
              <Text
                className="capitalize md:ml-[0] ml-[29px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700"
                size="txtPoppinsBold40"
              >
                Test Details
              </Text>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-evenly mt-11 w-[98%] md:w-full">
                <div className="h-[78px] relative w-[4%] md:w-full">
                  <div className="h-[78px] m-auto w-full">
                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="bg-blue_gray-100 h-8 rounded-[16px] w-full"></div>
                        <div className="bg-blue_gray-100 h-8 rounded-[16px] w-full"></div>
                      </div>
                    </div>
                    <div className="absolute bg-blue_gray-100 flex flex-col h-max inset-[0] items-center justify-center m-auto py-[23px] w-full">
                      <Line className="bg-black-900 h-px w-full" />
                    </div>
                  </div>
                  <div className="absolute flex flex-col gap-[7px] h-max inset-[0] items-center justify-center m-auto w-[87%]">
                    <Img
                      className="h-6 w-[25px]"
                      src="images/img_polygon5.svg"
                      alt="polygonSeven"
                    />
                    <Img
                      className="h-6 w-[25px]"
                      src="images/img_arrowdown_gray_900.svg"
                      alt="arrowdown_One"
                    />
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-24 grid md:grid-cols-1 grid-cols-2 w-[97%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-blue_gray-800 flex flex-col gap-[43px] justify-start sm:ml-[0] sm:mt-0 mt-1.5 p-[25px] sm:px-5 rounded-[10px] w-full">
                    <Text
                      className="capitalize md:ml-[0] ml-[37px] mt-3 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      Original Image
                    </Text>
                    <Img
                      className="h-[183px] md:h-auto mb-[38px] object-cover w-full"
                      src="images/img_xray11.png"
                      alt="xrayEleven"
                    />
                  </div>
                  <div className="bg-blue_gray-800 flex flex-col gap-10 items-center justify-center mb-1.5 sm:ml-[0] p-[23px] sm:px-5 rounded-[10px] w-full">
                    <Text
                      className="capitalize mt-[23px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                      size="txtPoppinsBold24"
                    >
                      Self Annotated Image
                    </Text>
                    <Img
                      className="h-[183px] sm:h-auto mb-[34px] object-cover w-full"
                      src="images/img_annotelyimage1_183x279.png"
                      alt="annotelyimageOne"
                    />
                  </div>
                </List>
              </div>
              <div className="flex flex-col font-outfit gap-5 items-center justify-start ml-3 md:ml-[0] mt-[33px] w-[99%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <Button
                    className="capitalize cursor-pointer font-semibold h-[65px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                    shape="round"
                    size="3xl"
                    color="green_500_teal_400"
                  >
                    View Doctors’ Notes
                  </Button>
                  <Button
                    className="common-pointer capitalize cursor-pointer font-semibold h-[65px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                    onClick={() =>
                      navigate("/radiologistconsultationpfrbdimageannotater")
                    }
                    shape="round"
                    size="3xl"
                    color="green_500_teal_400"
                  >
                    Add further annotations
                  </Button>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <Button
                    className="capitalize cursor-pointer font-semibold h-[65px] md:mt-0 mt-[3px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                    shape="round"
                    size="3xl"
                    color="green_500_teal_400"
                  >
                    View Personnel Info
                  </Button>
                  <Button
                    className="capitalize cursor-pointer font-semibold h-[65px] mb-[3px] rounded-lg text-center text-lg tracking-[0.36px] w-[361px]"
                    shape="round"
                    size="3xl"
                    color="green_500_teal_400"
                  >
                    Add Notes
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-gradient  flex flex-col font-outfit h-[19px] md:h-auto items-center justify-center rounded-lg w-[361px]">
              <div className="flex flex-col items-center justify-end">
                <Text
                  className="capitalize text-lg text-white-A700 tracking-[0.36px]"
                  size="txtOutfitSemiBold18"
                >
                  View own notes
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RadiologistConsultationPendingForReviewByDoctorPage;
