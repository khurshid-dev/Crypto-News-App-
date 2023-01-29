import React from "react";
import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="flex justify-center items-center relative r-[160px] bottom-[40px] h-[80vh] w-[100vw]">
      <Spin size="large" />
    </div>
  );
};

export default Loader;
