'use client'
import { CommentProps, CommentSection, CommentsDisplay, ItemPage, Props } from "@repo/ui";
import { useEffect, useState } from "react";


export default function Section({ params }: { params: { itemId: string } }) {

  const [page, setPage] = useState<Props>()

  useEffect(() => {
    const getFruits = async () => {
      try {
        let res = await fetch("/api/item", {
          method: "PATCH",
          body: JSON.stringify({ _id: params.itemId }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        let data = await res.json()
        if (res.ok) {
          setPage(data)
        } else {
          return Promise.reject(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getFruits()
  }, [params.itemId])


  const [commentsData, setCommentsData] = useState<CommentProps[]>([])

  if (!page) {
    return <div>loading...</div>
  }

  return (
    <>
      <ItemPage {...page} />
      <div className='m-auto max-w-7xl flex bg-white border border-gray-300 border-t-0'>
        <CommentSection _id={params.itemId} comments={commentsData} setComments={setCommentsData} />
        <CommentsDisplay _id={params.itemId} comments={commentsData} setComments={setCommentsData} />
      </div>
    </>
  )
}
