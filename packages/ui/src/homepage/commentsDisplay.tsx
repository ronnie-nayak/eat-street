"use client"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Button } from "../../components/ui/button"
import { CommentProps } from "../types"
import { useRouter } from "next/navigation"

export function CommentsDisplay({ _id, comments, setComments }: { _id: string, comments: CommentProps[], setComments: Dispatch<SetStateAction<CommentProps[]>> }) {
  const [page, setPage] = useState(1)
  const router = useRouter()
  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await fetch(`/api/comment`, {
          method: "PATCH",
          body: JSON.stringify({ _id }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const data = await res.json()
        setComments(data)
      } catch (error) {
        router.replace("/login")
      }
    }
    getComments()
  }, [_id])

  const endPage = Math.ceil(comments.length / 8)
  return (
    <div className="w-full ">
      {
        comments.length === 0 ? <p className="m-4 p-4 text-[1.75vw]">No Comments</p> :
          (
            <>

              {
                comments.map((comment, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-3xl m-4 p-4 w-3/4 border border-gray-500">
                    <img src={comment.user.image} className="w-10 h-10 rounded-full" />
                    <div>
                      <div className="flex gap-4 mb-2">
                        <div className="rating pointer-events-none">
                          <input type="radio" name={`rating-${i}`} className="mask mask-star-2 bg-orange-400" checked={comment.rating === 1} />
                          <input type="radio" name={`rating-${i}`} className="mask mask-star-2 bg-orange-400" checked={comment.rating === 2} />
                          <input type="radio" name={`rating-${i}`} className="mask mask-star-2 bg-orange-400" checked={comment.rating === 3} />
                          <input type="radio" name={`rating-${i}`} className="mask mask-star-2 bg-orange-400" checked={comment.rating === 4} />
                          <input type="radio" name={`rating-${i}`} className="mask mask-star-2 bg-orange-400" checked={comment.rating === 5} />
                        </div>
                        <p>{comment.user.name}</p>
                      </div>
                      <p>{comment.comment}</p>
                    </div>
                  </div>
                )
                ).splice((page - 1) * 5, page * 5)}

              < div className="flex gap-6 items-center p-10">
                <Button disabled={page === 1 ? true : false} onClick={() => setPage(old => old - 1)}>Previous</Button>
                <Button disabled={endPage === page || !endPage ? true : false} onClick={() => setPage(old => old + 1)}>Next</Button>
                <p>Page {!endPage ? 0 : page} of {endPage}</p>
              </div>
            </>
          )
      }

    </div >
  )
}
