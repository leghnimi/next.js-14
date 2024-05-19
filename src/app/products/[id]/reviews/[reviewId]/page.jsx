import { notFound } from "next/navigation"
export default function ProductReviews( {params}) {

if(parseInt(params.reviewId) > 1000) {
  notFound()
}
  return (
    <div>ProductReviews {params.reviewId} </div>
  )
}
