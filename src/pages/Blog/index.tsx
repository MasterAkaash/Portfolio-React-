import React from "react";

import { Img, Line, Text } from "components";
import Footer from "components/Footer";

const BlogPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-heebo items-center justify-end mx-auto pt-[25px] w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="flex flex-row items-start justify-end md:ml-[0] ml-[865px] md:px-5 w-1/5 md:w-full">
            <Text
              className="text-red-A200 text-right text-xl"
              size="txtHeeboMedium20RedA200"
            >
              Blog
            </Text>
            <Text
              className="ml-[35px] text-black-900 text-right text-xl"
              size="txtHeeboMedium20"
            >
              Works
            </Text>
            <Text
              className="ml-[22px] text-black-900 text-right text-xl"
              size="txtHeeboMedium20"
            >
              Contact
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[235px] mt-[102px] md:px-5 w-3/5 md:w-full">
            <Text
              className="sm:text-[34px] md:text-[40px] text-[44px] text-blue_gray-900"
              size="txtHeeboBold44"
            >
              Blog
            </Text>
            <Text
              className="mt-[41px] text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
              size="txtHeeboMedium30"
            >
              UI Interactions of the week
            </Text>
            <div className="flex flex-row items-start justify-start mt-[5px] w-1/2 md:w-full">
              <Text
                className="text-blue_gray-900 text-xl"
                size="txtHeeboRegular20Bluegray900"
              >
                12 Feb 2019
              </Text>
              <Line className="bg-black-900 h-[21px] ml-[25px] my-[5px] w-px" />
              <Text
                className="ml-[19px] text-blue_gray-400 text-xl"
                size="txtHeeboRegular20"
              >
                Express, Handlebars
              </Text>
            </div>
            <Text
              className="mt-[9px] text-base text-blue_gray-900 w-full"
              size="txtHeeboRegular16"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
            <Line className="bg-gray-300 h-px mt-[25px] w-full" />
            <Text
              className="mt-7 text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
              size="txtHeeboMedium30"
            >
              UI Interactions of the week
            </Text>
            <div className="flex flex-row items-start justify-start mt-[5px] w-1/2 md:w-full">
              <Text
                className="text-blue_gray-900 text-xl"
                size="txtHeeboRegular20Bluegray900"
              >
                12 Feb 2019
              </Text>
              <Line className="bg-black-900 h-[21px] ml-[25px] my-[5px] w-px" />
              <Text
                className="ml-[19px] text-blue_gray-400 text-xl"
                size="txtHeeboRegular20"
              >
                Express, Handlebars
              </Text>
            </div>
            <div className="h-[89px] md:h-[98px] mt-[9px] relative w-full">
              <Text
                className="m-auto text-base text-blue_gray-900 w-full"
                size="txtHeeboRegular16"
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Text>
              <Line className="absolute bg-gray-300 bottom-[18%] h-px inset-x-[0] mx-auto w-full" />
            </div>
            <Text
              className="mt-3 text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
              size="txtHeeboMedium30"
            >
              UI Interactions of the week
            </Text>
            <div className="flex flex-row items-start justify-start mt-[5px] w-1/2 md:w-full">
              <Text
                className="text-blue_gray-900 text-xl"
                size="txtHeeboRegular20Bluegray900"
              >
                12 Feb 2019
              </Text>
              <Line className="bg-black-900 h-[21px] ml-[25px] my-[5px] w-px" />
              <Text
                className="ml-[19px] text-blue_gray-400 text-xl"
                size="txtHeeboRegular20"
              >
                Express, Handlebars
              </Text>
            </div>
            <div className="h-[89px] md:h-[98px] mt-[9px] relative w-full">
              <Text
                className="m-auto text-base text-blue_gray-900 w-full"
                size="txtHeeboRegular16"
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </Text>
              <Line className="absolute bg-gray-300 bottom-[18%] h-px inset-x-[0] mx-auto w-full" />
            </div>
            <Text
              className="mt-3 text-3xl sm:text-[26px] md:text-[28px] text-blue_gray-900"
              size="txtHeeboMedium30"
            >
              UI Interactions of the week
            </Text>
            <div className="flex flex-row items-start justify-start mt-[5px] w-1/2 md:w-full">
              <Text
                className="text-blue_gray-900 text-xl"
                size="txtHeeboRegular20Bluegray900"
              >
                12 Feb 2019
              </Text>
              <Line className="bg-black-900 h-[21px] ml-[25px] my-[5px] w-px" />
              <Text
                className="ml-[19px] text-blue_gray-400 text-xl"
                size="txtHeeboRegular20"
              >
                Express, Handlebars
              </Text>
            </div>
            <Text
              className="mt-[9px] text-base text-blue_gray-900 w-full"
              size="txtHeeboRegular16"
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Text>
            <Line className="bg-gray-300 h-px w-full" />
          </div>
          <Footer className="bg-white-A700 flex items-center justify-center mt-[52px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
