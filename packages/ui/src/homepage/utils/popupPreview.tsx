import { ItemsPage } from ".";
import { Item, ItemPage, ItemSmall } from "..";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "../../../components/ui/dialog";
import { Props } from "../..";

interface PopupType extends Props {
  children: React.ReactNode;
}

export function PopupPreview({
  children,
  _id,
  name,
  desc,
  price,
  sold,
  oldPrice,
  stock,
  dateAdded,
  favouriteUsers,
  cartUsers,
  comments,
  totalStars,
  image,
  type,
}: PopupType) {
  return (
    <div>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="w-9/12 h-[80vh] bg-transparent border-none">
          <div className="relative">
            <DialogClose className="absolute right-5 -top-5 z-10 h-16 w-16 rounded-full self-end bg-white font-bold sm:text-[1.25vw] border-2 border-gray-700 text-gray-700">
              X
            </DialogClose>
            <ItemPage
              _id={_id}
              name={name}
              desc={desc}
              price={price}
              sold={sold}
              oldPrice={oldPrice}
              stock={stock}
              dateAdded={dateAdded}
              favouriteUsers={favouriteUsers}
              cartUsers={cartUsers}
              comments={comments}
              totalStars={totalStars}
              image={image}
              type={type}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
