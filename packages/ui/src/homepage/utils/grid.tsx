"use client";
import {
  Button,
  Item,
  Props,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui";
import { useEffect, useState } from "react";

export function Grid({ arrayOfItems }: { arrayOfItems: Array<Props> }) {
  const [page, setPage] = useState(1);
  const [localData, setLocalData] = useState<Props[]>([]);
  const [column, setColumn] = useState("");
  const [direction, setDirection] = useState(1);

  const sortingFunction = () => {
    // let direction = 1
    // let column = event.target.id

    const sortedData = localData.sort((a, b) => {
      // @ts-ignore
      if (a[column] >= b[column]) {
        return direction;
      }
      return -direction;
    });
    setLocalData(() => [...sortedData]);
  };

  useEffect(() => setLocalData(arrayOfItems), [arrayOfItems]);

  const endPage = Math.ceil(localData.length / 10);
  return (
    <div>
      <div className="flex gap-6 items-center p-10">
        <Select onValueChange={(val) => setColumn(val)}>
          <SelectTrigger className="w-1/3 ml-auto">
            <SelectValue placeholder="Sort by Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="price">Price</SelectItem>
            <SelectItem value="stock">Stock</SelectItem>
            <SelectItem value="dateAdded">Date Added</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(val) => setDirection(val === "Asc" ? 1 : -1)}>
          <SelectTrigger className="w-1/3">
            <SelectValue placeholder="Ascending" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Ascending">Asc</SelectItem>
            <SelectItem value="Descending">Desc</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={() => sortingFunction()}>Sort</Button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(300px,2fr))",
        }}
        className="bg-white"
      >
        {localData.length === 0 ? (
          <div className="text-center font-bold sm:text-[1vw] p-4">
            No Items
          </div>
        ) : (
          localData
            .map((item, index) => <Item {...item} key={index} />)
            .slice((page - 1) * 10, page * 10)
        )}
      </div>
      <div className="p-8 flex gap-5 justify-center items-center">
        <Button
          disabled={page === 1 ? true : false}
          onClick={() => setPage((old) => old - 1)}
        >
          Previous
        </Button>
        <p>
          Page {!endPage ? 0 : page} of {endPage}
        </p>
        <Button
          disabled={endPage === page || !endPage ? true : false}
          onClick={() => setPage((old) => old + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
