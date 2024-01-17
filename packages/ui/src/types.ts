
export interface Props {
  _id: string,
  name: string,
  desc: string,
  price: number,
  oldPrice: number,
  stock: number,
  sold: number,
  // newTag: boolean,
  dateAdded: Date,
  totalStars: number,
  favouriteUsers: Array<any>,
  cartUsers: Array<any>
  comments: Array<any>
}

export interface CommentProps {
  _id: string,
  comment: string,
  rating: number,
  user: {
    name: string,
    email: string,
    image: string,
    id: string,
  }
  item: string,
}
