"use client";
import {
  CommentProps,
  CommentSection,
  CommentsDisplay,
  ItemPage,
  Loading,
  Props,
  Slider,
} from "@repo/ui";
import { notFound, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Section({ params }: { params: { itemId: string } }) {
  const [page, setPage] = useState<Props>();
  const [related, setRelated] = useState<Props[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getItem = async () => {
      try {
        let res = await fetch("/api/item", {
          method: "PATCH",
          body: JSON.stringify({ _id: params.itemId }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        let data = await res.json();
        if (res.ok) {
          setPage(data);
        }
      } catch (error) {
        return notFound();
      }
    };
    getItem();
  }, [params.itemId]);

  useEffect(() => {
    if (page) {
      const getProducts = async () => {
        try {
          const res = await fetch(`/api/getProducts?type=${page.type}`, {
            method: "GET",
          });
          const data = await res.json();
          if (res.ok) {
            setRelated(data);
          }
        } catch (error) {
          router.replace("/login");
        }
      };

      getProducts();
    }
  }, [page]);

  const [commentsData, setCommentsData] = useState<CommentProps[]>([]);

  if (!page) {
    return <Loading />;
  }

  return (
    <>
      <ItemPage {...page} />
      <div className="m-auto max-w-7xl flex flex-col sm:flex-row bg-white border border-gray-300 border-t-0">
        <CommentSection
          _id={params.itemId}
          comments={commentsData}
          setComments={setCommentsData}
        />
        <CommentsDisplay
          _id={params.itemId}
          comments={commentsData}
          setComments={setCommentsData}
        />
      </div>
      <div className="m-auto max-w-7xl">
        {related.length === 0 ? null : (
          <>
            <h2 className="font-bold p-4 sm:text-[1.5vw] text-center">
              Related Products
            </h2>
            <Slider arrayOfItems={related} />
          </>
        )}
      </div>
    </>
  );
}
