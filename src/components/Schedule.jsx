import React from "react";

export const Schedule = ({ scheduleRef }) => {
  return (
    <div
      ref={scheduleRef}
      className="flex flex-col items-center justify-center h-screen text-white bg-black"
    >
      <h3 className="text-primary">TEXTNASI</h3>
      <h2 className="text-3xl">HORARIARDO</h2>
    </div>
  );
};
