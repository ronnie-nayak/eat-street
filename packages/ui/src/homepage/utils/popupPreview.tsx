
import { ItemsPage } from ".";
import { ItemPage, ItemSmall } from "..";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../../../components/ui/dialog"
import { Props } from "../..";

interface PopupType extends Props {
  children: React.ReactNode
}

export function PopupPreview({ children, _id, name, desc, price, sold, oldPrice, stock, dateAdded, favouriteUsers, cartUsers, comments, totalStars }: PopupType) {
  return (
    <div>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="w-9/12 h-[75vh]">
          <div className="relative">
            <DialogClose className="absolute right-3 top-3 z-10 h-10 w-10 rounded-full self-end bg-white font-bold text-xl border-2 border-gray-700 text-gray-700">X</DialogClose>
            <ItemPage _id={_id} name={name} desc={desc} price={price} sold={sold} oldPrice={oldPrice} stock={stock} dateAdded={dateAdded} favouriteUsers={favouriteUsers} cartUsers={cartUsers} comments={comments} totalStars={totalStars} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
