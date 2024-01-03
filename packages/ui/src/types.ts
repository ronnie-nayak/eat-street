
export type Props = {
  _id: string,
  name: string,
  desc: string,
  price: number,
  oldPrice: number,
  stock: number,
  sold: number,
  newTag: boolean,
  favouriteUsers?: Array<any>,
  cartUsers?: Array<any>
}
