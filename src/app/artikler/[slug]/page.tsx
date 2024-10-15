
import Link from 'next/link';

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>
}

