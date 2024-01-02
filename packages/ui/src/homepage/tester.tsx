import { AspectRatio } from ".";

export function Tester() {
  type NumberArr = {
    arr: number,
    faluda: string
  }
  function getFirstNumber(frank: NumberArr) {
    console.log(frank.faluda);
    return frank.arr;
  }
  let ans = getFirstNumber({ arr: 2, faluda: "lksdjf" })
  return (
    <AspectRatio width={1000} height={2000}>
      <div className="bg-white border border-green-500 h-full">Hello</div>
    </AspectRatio>
  )
}
