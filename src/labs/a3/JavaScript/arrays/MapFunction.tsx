let numberArray1 = [1, 2, 3, 4, 5, 6];
const square = (a: number) => a * a;
const squares = numberArray1.map(square);
const cubes = numberArray1.map((a) => a * a * a);

function MapFunction() {
  return (
    <div id="map-function" className="mt-1">
      <h2>MapFunction</h2>
      squares: {squares} <br />
      cubes: {cubes}
    </div>
  );
}

export default MapFunction;
