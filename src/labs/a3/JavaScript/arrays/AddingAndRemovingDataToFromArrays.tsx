let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ["string1", "string2"];
numberArray1.push(6); //* adding new items
stringArray1.push("string3");
numberArray1.splice(2, 1); //* remove 1 item starting at 2 stringArray1.splice(1, 1);

function AddingAndRemovingDataToFromArrays() {
  return (
    <div id="adding-and-removing-data-to-from-arrays" className="mt-1">
      <h2>Adding and removing data to from arrays</h2>
      numberArray1 = {numberArray1} <br />
      stringArray1 = {stringArray1} <br />
    </div>
  );
}

export default AddingAndRemovingDataToFromArrays;
