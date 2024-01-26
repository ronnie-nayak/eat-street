"use client";
import { BreadCrumbs, Grid, NewFilterForm, Props } from "@repo/ui";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import moment from "moment";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

export function ItemsPage({
  apiPath,
  name,
}: {
  apiPath: string;
  name: string;
}) {
  const [page, setPage] = useState<Props[]>([]);
  const [filteredPage, setFilteredPage] = useState<Props[]>([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  useEffect(() => {
    if (page) {
      const timeout = setTimeout(() => {
        const lowPriceSearch = searchParams.has("lower")
          ? searchParams.get("lower")
          : null;
        const highPriceSearch = searchParams.has("upper")
          ? searchParams.get("upper")
          : null;
        const ratingSearch = searchParams.has("rating")
          ? searchParams.get("rating")
          : null;
        const newSearch = searchParams.has("new")
          ? searchParams.get("new")
          : null;
        const saleSearch = searchParams.has("sale")
          ? searchParams.get("sale")
          : null;
        const soldSearch = searchParams.has("sold")
          ? searchParams.get("sold")
          : null;

        let filteredData = page;
        if (lowPriceSearch)
          filteredData = filteredData.filter(
            (row) => row.price >= parseInt(lowPriceSearch),
          );

        if (highPriceSearch)
          filteredData = filteredData.filter(
            (row) => row.price <= parseInt(highPriceSearch),
          );
        if (ratingSearch)
          filteredData = filteredData.filter(
            (row) =>
              row?.comments?.length! > 0 &&
              Math.ceil(row.totalStars / row?.comments?.length!) ===
                parseInt(ratingSearch),
          );
        if (newSearch)
          filteredData = filteredData.filter(
            (row) =>
              moment(row?.dateAdded)
                .add(3, "y")
                .toDate() >= new Date(),
          );
        if (saleSearch)
          filteredData = filteredData.filter((row) => row.oldPrice);
        if (soldSearch)
          filteredData = filteredData.filter((row) => row.sold === row.stock);
        setFilteredPage(() => [...filteredData]);
        // setPage(1)
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [searchParams, page]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let res = await fetch(apiPath, { method: "GET" });
        let data = await res.json();
        if (res.ok) {
          setPage(data);
          setFilteredPage(data);
        }
      } catch (error) {
        router.replace("/login");
      }
    };
    getProducts();
  }, [name]);
  return (
    <div>
      <div className="h-36 bg-white flex flex-col gap-6 items-center justify-center">
        <BreadCrumbs path={pathname.split("/").splice(2)} />
        <h1 className="sm:text-[2vw]">
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </h1>
      </div>
      {
        <div className="m-9 bg-white border-2 rounded-3xl overflow-hidden border-gray-300 flex flex-col sm:flex-row">
          <Accordion type="single" collapsible className="sm:hidden">
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-bold p-5">
                Filter Items
              </AccordionTrigger>
              <AccordionContent className="py-4 p-2 ">
                <NewFilterForm />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div
            className="py-4 p-2 border border-gray-300 w-2/12 hidden sm:block"
            style={{ gridArea: "filter" }}
          >
            <NewFilterForm />
          </div>
          <div className="w-full" style={{ gridArea: "products" }}>
            <Grid arrayOfItems={filteredPage} />
          </div>
        </div>
      }
    </div>
  );
}
