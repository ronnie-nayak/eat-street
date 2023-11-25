

export default function Info({ image, first, second }: { image: string, first: string, second: string }) {
  return (
    <div>
      <img src={image} />
      <h3 className="font-bold text-lg">
        {first}
      </h3>
      <h4 className="text-lg">
        {second}
      </h4>
    </div>
  )
}
