import React from "react";

function LastEdited({ lastModified }: { lastModified: string }) {
  return (
    <>
      <hr className="full-width" style={{ marginTop: "1rem" }} />
      <div>Last edited: {lastModified}</div>
    </>
  );
}

export default LastEdited;
