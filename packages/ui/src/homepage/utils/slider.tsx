import { Item } from "..";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";

export function Slider({ arrayOfItems }: { arrayOfItems: Array<any> }) {
  return (
    <div className="mx-4">
      <Carousel
        opts={{
          loop: true,
          skipSnaps: true,
        }}
      >
        <CarouselContent>
          {arrayOfItems.length === 0 ? (<div className="text-center font-bold sm:text-[1vw] p-4">No Items</div>) :
            arrayOfItems.map((item, index) => (
              <CarouselItem key={index} className="basis-1/1 2xl:basis-1/4 xl:basis-1/3 lg:basis-1/2">
                <Item {...item} />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

