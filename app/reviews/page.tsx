import Link from "next/link";
import Heading from "@/components/Heading";
import { getReview, getSlugs, getReviews } from "@/lib/reviews";
import ShareLinkButton from "@/components/ShareLinkButton";

interface ReviewPageParams {
  params: ReviewPageParams;
}
interface ReviewPageProps {
  params: ReviewPageParams;
}
export const metadata = {
  title: "Review",
};

// export async function generateStaticParams(): Promise<ReviewPageParams[]> {
//   const slugs = await getSlugs();
//   return slugs.map((slug) => ({ slug }));
// }


export default async function ReviewPage({
  params: { slug },
}: ReviewPageProps) {
  const reviews = await getReviews();
  // console.log('[ReviewsPage] reviews:', reviews);
  return (
    <div>
      <Heading>Reviews Page </Heading>

      <p>welcomes to india</p>
      <ul className="flex flex-col gap-3">
        {reviews.map((review) => (
          <li
            key={review.slug}
            className="bg-white border rounded shadow w-80 hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="font-orbitron font-semibold py-1 text-center">
                {review.title}
              </h2>
              <div className="flex gap-3 items-baseline">
                <p className="italic pb-2">{review.date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
