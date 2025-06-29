import Link from 'next/link';
import prisma from '@/lib/prisma';

export default async function Home() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    take: 3,
  });

  return (
    <main className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">最新記事</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="block p-4 border rounded hover:bg-gray-50"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
            <p className="mt-2 text-gray-700">
              {post.content.slice(0, 100)}
              {post.content.length > 100 && '...'}
            </p>
          </Link>
        ))}
        {posts.length === 0 && <p>記事がありません。</p>}
      </div>
    </main>
  );
}
