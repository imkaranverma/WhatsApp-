import React from "react";

export const GlobalConfiguration: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="bg-white ">{children}</div>;
};
