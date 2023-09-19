import { formatDate } from "@/lib/date";
import React from "react";

function LastEdited({ written, modified }: { written: Date; modified: Date }) {
  const formattedWritten = formatDate(written);
  const formattedModified = formatDate(modified);

  return (
    <>
      <hr className="full-width" style={{ marginTop: "1rem" }} />
      <div>Written: {formattedWritten}</div>
      {formattedWritten !== formattedModified && (
        <div>Last edited: {formattedModified}</div>
      )}
    </>
  );
}

export default LastEdited;
