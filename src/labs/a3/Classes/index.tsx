import "./index.css";
function Classes() {
  // eslint-disable-next-line
  const color = "blue";
  const dangerous = "true";
  return (
    <div>
      <h2>Classes</h2>
      <div
        className={`${
          dangerous ? "wd-bg-red" : "wd-bg-green"
        } wd-fg-black wd-padding-10px`}>
        Dangerous background
      </div>
      <br />
    </div>
  );
}
export default Classes;
