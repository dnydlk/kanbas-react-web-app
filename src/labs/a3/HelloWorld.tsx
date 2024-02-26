import Nav from "../../Nav";

function HelloWorld() {
  return (
    <div className="container m-0">
      <Nav />
      <h1>Hello World!</h1>
    </div>
  );
}
export default HelloWorld;

//* notice that if we're returning a single line of code, the parenthesis in the return statement are optional. If HelloWorld would have been a more complex component, we could have implemented it in HelloWorld/index.tsx giving us a whole directory to implement it
