import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Indie Gamer',
};
export default async function HomePage() {

  const review = await getFeaturedReview();
  console.log("Home page render ");
  return (
    <div>
      <Heading>Indian Gamer</Heading>
      <p className="pb-3">
        Only the best indie games, reviewed for you.
      </p>
      <div className="bg-white border rounded shadow w-80
                      hover:shadow-xl sm:w-full">
        {/* <Link href="/reviews/stardew-valley"
          className="flex flex-col sm:flex-row">
          <img src="/images/stardew-valley.jpg" alt=""
            width="320" height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-orbitron font-semibold py-1 text-center sm:px-2">
            Stardew Valley
          </h2>
        </Link> */}
        <Link href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row">
          <img src={review.image} alt=""
            width="320" height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-orbitron font-semibold py-1 text-center sm:px-2">
            {review.title}
          </h2>
        </Link>
      </div>
    </div>
  );
}

