const add = (a: number, b: number) => a + b;
//* Takes two arguments
const sum = add(1, 2);
const subtract = ({ a, b }: { a: number; b: number }) => a - b;
//* Takes an object with two properties
const difference = subtract({ a: 4, b: 2 });

function FunctionDestructing() {
  return (
    <div id="function-destructuring" className="mt-1">
      <h2>FunctionDestructing</h2>
      const add = (a, b) =&gt; a + b;
      <br /> const sum = add(1, 2);
      <br /> const subtract = (&#123; a, b &#125;) =&gt; a - b;
      <br /> const difference = subtract(&#123; a: 4, b: 2 &#125;);
      <br /> sum = {sum}
      <br /> difference = {difference}
    </div>
  );
}

export default FunctionDestructing;
