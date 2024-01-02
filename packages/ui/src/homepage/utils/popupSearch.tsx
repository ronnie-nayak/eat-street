
import { IoSearch } from "react-icons/io5"
import { Button } from "../../../components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "../../../components/ui/dialog"
import { Vertical } from "./vertical"

export function PopupSearch() {
  return (
    <div className="cursor-pointer">
      <Dialog>
        <DialogTrigger asChild>
          <IoSearch size={22} />
        </DialogTrigger>
        <DialogContent className=" w-[1000px] ">
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
          </DialogHeader>
          <form className="flex gap-2">
            <input type="text" className="w-full h-12 rounded-full px-4" placeholder="Search" />
            <button type="submit" className=" h-12 w-12 rounded-full bg-[#00D783] flex justify-center items-center"
            >
              <IoSearch size={22} />
            </button>
          </form>

          <Vertical />
        </DialogContent>
      </Dialog>
    </div>
  )
}
