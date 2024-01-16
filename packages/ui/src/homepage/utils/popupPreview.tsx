
import { ItemsPage } from ".";
import { ItemPage, ItemSmall } from "..";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../components/ui/dialog"

export function PopupPreview({ children, _id, }: { children: JSX.Element, _id: string }) {
  return (
    <div>
      <Dialog>
        <DialogTrigger>{children}</DialogTrigger>
        <DialogContent className="w-9/12 h-[75vh]">
          <div className="relative">
            <DialogClose className="absolute right-3 top-3 z-10 h-10 w-10 rounded-full self-end bg-white font-bold text-xl border-2 border-gray-700 text-gray-700">X</DialogClose>
            <ItemPage _id={_id} boolComment={false} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
