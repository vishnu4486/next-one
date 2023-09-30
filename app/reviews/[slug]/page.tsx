import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReview } from "@/lib/reviews";
import { Metadata } from "next/types";
interface ReviewPageProps {
  params: { slug: string };
} 
export async function generateMetadata({ params: { slug } }: ReviewPageProps): Promise<Metadata> {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}
export default async function StardewValley({ params: { slug } }: ReviewPageProps) {
  const review = await getReview(slug);
  return (
    <div>
       <Heading>{review.title}</Heading>
      <p className="italic pb-2">{review.date}        <ShareLinkButton /></p>

      <img src={review.image} alt=""
        width="640" height="360" className="mb-2 rounded"
      />
      <article className="max-w-screen-sm prose prose-slate" dangerouslySetInnerHTML={{__html:review.body}}/>
    </div>
  );
}
