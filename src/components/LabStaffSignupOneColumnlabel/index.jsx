import React from "react";

import { Img, Text } from "components";

const LabStaffSignupOneColumnlabel = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="border border-gray-300 border-solid flex flex-col items-start justify-start px-3 rounded-[10px] w-full">
          <div className="flex flex-row items-center justify-between py-4 w-full">
            {!!props?.dateofbirth ? (
              <Text
                className="flex-1 text-gray-800 text-sm tracking-[0.15px] w-auto"
                size="txtInterMedium14"
              >
                {props?.dateofbirth}
              </Text>
            ) : null}
            {!!props?.profileimage ? (
              <Img
                className="h-[19px] md:h-auto object-cover w-[18px]"
                alt="maxresdefaultOne"
                src={props?.profileimage}
              />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

LabStaffSignupOneColumnlabel.defaultProps = {};

export default LabStaffSignupOneColumnlabel;
