import { getPayload } from 'payload';
import config from '@payload-config';

const payload = await getPayload({ config });
export default async function PostsPage() {
  const posts = await payload.find({
    collection: 'posts',
  });

  return (
    <div className="max-w-4xl mx-auto pb-12 pt-32 md:pb-20 md:pt-40">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid gap-6">
        {posts.docs.map((post) => (
          <article
            key={post.id}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
