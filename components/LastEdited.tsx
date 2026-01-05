import { formatDateString } from "@/lib/date";

function LastEdited({
  written,
  modified,
}: {
  written: string;
  modified: string;
}) {
  const formattedWritten = formatDateString(written);
  const formattedModified = formatDateString(modified);

  return (
    <>
      <hr
        className="full-width"
        style={{ margin: "1rem 0", color: "var(--color-text)" }}
      />
      <div>Written: {formattedWritten}</div>
      {formattedWritten !== formattedModified && (
        <div>Last edited: {formattedModified}</div>
      )}
    </>
  );
}

export default LastEdited;
