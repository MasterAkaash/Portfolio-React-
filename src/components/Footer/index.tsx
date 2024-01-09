import React from "react";

import { Img, Text } from "components";

type FooterProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mx-auto my-[52px] w-[21%]">
          <div className="flex flex-col gap-[26px] items-center justify-center w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <Img
                className="h-[30px] w-[30px]"
                src="images/img_facebook.svg"
                alt="facebook"
              />
              <Img
                className="h-[30px] w-[30px]"
                src="images/img_info.svg"
                alt="info"
              />
              <Img
                className="h-[30px]"
                src="images/img_trash.svg"
                alt="trash"
              />
              <Img
                className="h-[30px] w-[30px]"
                src="images/img_thumbsup.svg"
                alt="thumbsup"
              />
            </div>
            <Text
              className="text-blue_gray-900 text-center text-sm"
              size="txtHeeboRegular14"
            >
              Copyright ©2020 All rights reserved{" "}
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
