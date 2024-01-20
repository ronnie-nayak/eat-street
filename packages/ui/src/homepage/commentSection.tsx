'use client'
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { Textarea } from "../../components/ui/textarea";
import { useRouter } from "next/navigation";

export function CommentSection({ _id, comments, setComments }: { _id: string, comments: any, setComments: any }) {
  const [formData, setFormData] = useState<{ comment: string, rating: string }>({
    comment: "",
    rating: "5",
  })

  const router = useRouter()


  function handleChange(e: React.ChangeEvent) {
    // @ts-ignore
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  async function addComment() {

    try {
      let res = await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({ ...formData, _id }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      let data = await res.json()
      if (res.ok) {
        setFormData({ comment: "", rating: "5" })
        setComments([...comments, data])
      } else {
        return Promise.reject(data)
      }
    } catch (error) {
      router.replace("/login")
    }
  }




  return (
    <div className="w-full ">
      <div className="p-9">
        <Textarea
          name="comment"
          value={formData.comment}
          placeholder="Comment"
          onChange={(e) => handleChange(e)}
          className="resize-none mb-4 h-40 border-black"
        />
        <div className="rating mr-4">
          <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" value="1" checked={formData.rating === "1"} onChange={(e) => handleChange(e)} />
          <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" value="2" checked={formData.rating === "2"} onChange={(e) => handleChange(e)} />
          <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" value="3" checked={formData.rating === "3"} onChange={(e) => handleChange(e)} />
          <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" value="4" checked={formData.rating === "4"} onChange={(e) => handleChange(e)} />
          <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" value="5" checked={formData.rating === "5"} onChange={(e) => handleChange(e)} />
        </div>
        <Button onClick={addComment} className="submit" >Comment</Button>
      </div>
    </div>
  )
}
