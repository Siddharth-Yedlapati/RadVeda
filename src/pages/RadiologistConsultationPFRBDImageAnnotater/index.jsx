import React from "react";

import { useNavigate } from "react-router-dom";

import { Button } from "components";

const RadiologistConsultationPFRBDImageAnnotaterPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-no-repeat flex flex-col font-outfit h-[731px] items-end justify-end mx-auto p-[29px] sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_radiologistcon.png')" }}
      >
        <Button
          className="common-pointer capitalize cursor-pointer font-semibold h-[33px] mr-5 mt-[640px] rounded-lg text-center text-lg tracking-[0.36px] w-28"
          onClick={() =>
            navigate("/radiologistconsultationpendingforreviewbydoctor")
          }
          shape="round"
          size="sm"
          color="green_500_teal_400"
        >
          Back
        </Button>
      </div>
    </>
  );
};

export default RadiologistConsultationPFRBDImageAnnotaterPage;
