

export default function Info({ image, first, second }: { image: string, first: string, second: string }) {
  return (
    <div>
      <img src={image} />
      <h3 className="text-lg">
        {first}
      </h3>
      <h4 className="font-normal text-lg">
        {second}
      </h4>
    </div>
  )
}
