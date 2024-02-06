import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Text } from "components";

const UsertypeselectionPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col font-juliussansone h-[859px] items-start justify-start mx-auto p-[33px] sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_labstaffsignupone.png')" }}
      >
        <div className="flex flex-col items-center justify-start mb-[267px] mt-[62px] md:px-5 w-[51%] md:w-full">
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-black-900 text-center"
            size="txtJuliusSansOneRegular36"
          >
            Login/SIGN-up AS{" "}
          </Text>
          <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-24 w-full">
            <Button
              className="common-pointer cursor-pointer h-[131px] leading-[normal] py-[35px] rounded-[65px] text-base text-center w-[130px]"
              onClick={() => navigate("/patientloginpage")}
              color="blue_gray_100"
              variant="fill"
            >
              Patient
            </Button>
            <Button
              className="common-pointer cursor-pointer h-[131px] leading-[normal] py-[35px] rounded-[65px] text-base text-center w-[130px]"
              onClick={() => navigate("/doctorloginpage")}
              color="blue_gray_100"
              variant="fill"
            >
              Doctor
            </Button>
            <Button
              className="common-pointer cursor-pointer h-[131px] leading-[normal] rounded-[65px] text-base text-center w-[130px]"
              onClick={() => navigate("/radiologistloginpage")}
              color="blue_gray_100"
              size="lg"
              variant="fill"
            >
              Radiologist
            </Button>
            <Button
              className="common-pointer cursor-pointer leading-[normal] min-w-[129px] py-[35px] rounded-[65px] text-base text-center"
              onClick={() => navigate("/labstaffloginpage")}
              color="blue_gray_100"
              variant="fill"
            >
              Lab Staff
            </Button>
          </div>
          <div className="flex flex-row gap-[61px] items-center justify-center mt-[65px] w-[46%] md:w-full">
            <Button
              className="common-pointer cursor-pointer h-[131px] leading-[normal] py-[35px] rounded-[65px] text-base text-center w-[130px]"
              onClick={() => navigate("/adminloginpage")}
              color="blue_gray_100"
              variant="fill"
            >
              Admin
            </Button>
            <Button
              className="common-pointer cursor-pointer h-[131px] leading-[normal] py-[35px] rounded-[65px] text-base text-center w-[130px]"
              onClick={() => navigate("/superadminloginpage")}
              color="blue_gray_100"
              variant="fill"
            >
              Super Admin
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsertypeselectionPage;
