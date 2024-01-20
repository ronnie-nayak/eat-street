'use client'
import { CommentProps, CommentSection, CommentsDisplay, ItemPage, Loading, Props } from "@repo/ui";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Section({ params }: { params: { itemId: string } }) {

  const [page, setPage] = useState<Props>()

  const router = useRouter()

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
        router.replace("/login")
      }
    }
    getFruits()
  }, [params.itemId])


  const [commentsData, setCommentsData] = useState<CommentProps[]>([])

  if (!page) {
    return <Loading />
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
