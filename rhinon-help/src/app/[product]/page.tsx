import { notFound, redirect } from "next/navigation";
import { DEFAULT_TRACK, getProduct, isProductId } from "@/lib/products";

type Params = { product: string };

export function generateStaticParams() {
  return [];
}

export default async function ProductIndexPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { product } = await params;
  if (!isProductId(product)) notFound();

  const meta = getProduct(product);
  if (!meta) notFound();

  // Land on the product's first available track (Guide today).
  const track = meta.tracks.includes(DEFAULT_TRACK)
    ? DEFAULT_TRACK
    : meta.tracks[0];
  redirect(`/${product}/${track}`);
}
