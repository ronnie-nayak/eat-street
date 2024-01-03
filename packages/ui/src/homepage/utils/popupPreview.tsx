
import { ItemsPage } from ".";
import { ItemPage, ItemSmall } from "..";
import {
  Dialog,
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
        <DialogContent className="w-5/6">
          <div>
            <ItemPage _id={_id} />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
