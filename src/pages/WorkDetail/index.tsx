import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";
import Footer from "components/Footer";

const WorkDetailPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-heebo items-center justify-end mx-auto pt-[25px] w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="flex flex-row items-start justify-end md:ml-[0] ml-[865px] md:px-5 w-1/5 md:w-full">
            <Text
              className="common-pointer text-blue_gray-900 text-right text-xl"
              size="txtHeeboMedium20Bluegray900"
              onClick={() => navigate("/blog")}
            >
              Blog
            </Text>
            <Text
              className="common-pointer ml-[35px] text-red-A200 text-right text-xl"
              size="txtHeeboMedium20RedA200"
              onClick={() => navigate("/workdetail")}
            >
              Works
            </Text>
            <Text
              className="ml-[22px] text-blue_gray-900 text-right text-xl"
              size="txtHeeboMedium20Bluegray900"
            >
              Contact
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[235px] mt-[90px] md:px-5 w-3/5 md:w-full">
            <Text
              className="sm:text-3xl md:text-[32px] text-[34px] text-blue_gray-900 w-3/4 sm:w-full"
              size="txtHeeboBold34"
            >
              Designing Dashboards with usability in mind
            </Text>
            <div className="flex sm:flex-col flex-row gap-[17px] items-start justify-start ml-1 md:ml-[0] mt-[30px] w-[58%] md:w-full">
              <div className="h-[27px] relative w-[16%] sm:w-full">
                <div className="absolute bg-red-A100 bottom-[0] h-[25px] inset-x-[0] mx-auto rounded-[12px] w-full"></div>
                <Text
                  className="absolute h-full inset-[0] justify-center m-auto text-lg text-white-A700 w-max"
                  size="txtHeeboBlack18"
                >
                  2020
                </Text>
              </div>
              <Text
                className="text-blue_gray-900 text-xl"
                size="txtHeeboRegular20Bluegray900"
              >
                Dashboard, User Experience Design
              </Text>
            </div>
            <Text
              className="mt-[26px] text-base text-black-900 w-full"
              size="txtHeeboRegular16Black900"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
            <Img
              className="h-[460px] sm:h-auto mt-[43px] object-cover w-full"
              src="images/img_rectangle4.png"
              alt="rectangleFour"
            />
            <Text
              className="ml-1 md:ml-[0] mt-[62px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
              size="txtHeeboMedium30"
            >
              Heading 1
            </Text>
            <Text
              className="ml-1 md:ml-[0] mt-[5px] text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
              size="txtHeeboMedium24"
            >
              Heading 2
            </Text>
            <Text
              className="ml-1 md:ml-[0] mt-[15px] text-base text-black-900 w-full"
              size="txtHeeboRegular16Black900"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
            <Img
              className="h-[460px] sm:h-auto mt-[30px] object-cover w-full"
              src="images/img_rectangle5.png"
              alt="rectangleFive"
            />
            <Img
              className="h-[460px] sm:h-auto mt-[27px] object-cover w-full"
              src="images/img_rectangle6.png"
              alt="rectangleSix"
            />
          </div>
          <Footer className="bg-white-A700 flex items-center justify-center mt-[27px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default WorkDetailPage;
