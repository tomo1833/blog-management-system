import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';

export default async function BlogDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await prisma.post.findUnique({
    where: { id: Number(params.id) },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post?.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {post && new Date(post.createdAt).toLocaleString()}
      </p>
      <p className="whitespace-pre-wrap">{post?.content}</p>
    </div>
  );
}
