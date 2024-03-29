function Popout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div
        className="popout"
        style={{ width: "max-content", maxWidth: "100%", margin: "0 auto" }}
      >
        {children}
      </div>
    </div>
  );
}

export default Popout;
