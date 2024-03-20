const multiply = (a: number, b: number) => a * b;
const fourTimesFive = multiply(4, 5);
// console.log(fourTimesFive);

function ImpliedReturn() {
  return (
    <div id="implied-return" className="mt-1">
      <h3>Implied Return</h3>
      fourTimesFive = {fourTimesFive} <br />
      multiply(4, 5) = {multiply(4, 5)} <br />
    </div>
  );
}

export default ImpliedReturn;
