import React from "react";

type Props = {
  children: React.ReactNode;
};

function CoolComponent({ children }: Props) {
  return (
    <>
      <h1>here is my cool component</h1>
      {children}
    </>
  );
}

export default CoolComponent;
