import { Link, router, useForm } from '@inertiajs/react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import type {
  Community,
  CommunityComment,
  CommunityPost as CommunityPostType,
} from '@/types/community';

type CommentWithMeta = CommunityComment & { can_delete: boolean };
type PostWithComments = CommunityPostType & { comments: CommentWithMeta[] };
type PaginationLink = { url: string | null; label: string; active: boolean };
type Pagination<T> = { data: T[]; links: PaginationLink[] };

type ShowProps = {
  community: Community;
  posts: Pagination<PostWithComments>;
  membership: string | null;
};

export default function Show({ community, posts, membership }: ShowProps) {
  const [openComposer, setOpenComposer] = useState(false);
  const postForm = useForm({ title: '', body: '' });

  const canPost = Boolean(membership);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      <div className="bg-white p-4 rounded-xl shadow">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">{community.name}</h1>
            {community.description && (
              <p className="text-gray-600 mt-1 whitespace-pre-wrap">{community.description}</p>
            )}
          </div>
          <div className="space-x-2">
            {membership ? (
              <form method="post" action={route('communities.leave', community.slug)}>
                <button className="px-3 py-2 rounded bg-gray-200">Leave</button>
              </form>
            ) : (
              <form method="post" action={route('communities.join', community.slug)}>
                <button className="px-3 py-2 rounded bg-blue-600 text-white">Join</button>
              </form>
            )}
          </div>
        </div>
      </div>

      {canPost && (
        <div className="bg-white p-4 rounded-xl shadow">
          <button
            onClick={() => setOpenComposer((value) => !value)}
            className="px-3 py-2 rounded bg-green-600 text-white"
          >
            {openComposer ? 'Tutup' : 'Buat Postingan'}
          </button>
          {openComposer && (
            <form
              className="mt-3 space-y-3"
              onSubmit={(event) => {
                event.preventDefault();
                postForm.post(route('communities.posts.store', community.slug), {
                  preserveScroll: true,
                  onSuccess: () => {
                    postForm.reset();
                    setOpenComposer(false);
                  },
                });
              }}
            >
              <input
                className="w-full border p-2 rounded"
                placeholder="Judul"
                value={postForm.data.title}
                onChange={(event) => postForm.setData('title', event.target.value)}
              />
              <textarea
                className="w-full border p-2 rounded h-40"
                placeholder="Tulis isi..."
                value={postForm.data.body}
                onChange={(event) => postForm.setData('body', event.target.value)}
              />
              {postForm.errors.title && (
                <p className="text-sm text-red-600">{postForm.errors.title}</p>
              )}
              {postForm.errors.body && (
                <p className="text-sm text-red-600">{postForm.errors.body}</p>
              )}
              <button
                className="px-4 py-2 rounded bg-blue-600 text-white"
                disabled={postForm.processing}
              >
                {postForm.processing ? 'Mengirim...' : 'Kirim'}
              </button>
            </form>
          )}
        </div>
      )}

      <div className="space-y-4">
        {posts.data.map((post) => (
          <article key={post.id} className="bg-white p-4 rounded-xl shadow space-y-3">
            <header>
              <h3 className="font-semibold text-lg">{post.title}</h3>
              <div className="text-sm text-gray-500">
                oleh {post.author?.name ?? 'Pengguna'} - {post.created_at_human}
              </div>
            </header>
            <p className="whitespace-pre-wrap">{post.body}</p>

            <details className="mt-2">
              <summary className="cursor-pointer text-blue-600">
                Komentar ({post.comments.length})
              </summary>
              <Comments
                communitySlug={community.slug}
                postId={post.id}
                comments={post.comments}
                canComment={canPost}
              />
            </details>
          </article>
        ))}
        {posts.data.length === 0 && (
          <p className="text-center text-gray-500">Belum ada postingan.</p>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {posts.links?.map((link) => (
          <Link
            key={link.url ?? link.label}
            href={link.url || '#'}
            className={`px-3 py-1 rounded ${link.active ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        ))}
      </div>
    </div>
  );
}

function Comments({
  communitySlug,
  postId,
  comments,
  canComment,
}: {
  communitySlug: string;
  postId: number;
  comments: CommentWithMeta[];
  canComment: boolean;
}) {
  const form = useForm({ body: '' });

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    form.post(route('communities.posts.comments.store', [communitySlug, postId]), {
      preserveScroll: true,
      onSuccess: () => form.reset(),
    });
  };

  const handleDelete = (commentId: number) => {
    router.delete(route('communities.posts.comments.destroy', [communitySlug, postId, commentId]), {
      preserveScroll: true,
    });
  };

  return (
    <div className="mt-3 space-y-4">
      {canComment ? (
        <form onSubmit={submit} className="flex flex-col sm:flex-row gap-2">
          <input
            className="flex-1 border p-2 rounded"
            placeholder="Tulis komentar..."
            value={form.data.body}
            onChange={(event) => form.setData('body', event.target.value)}
          />
          <button
            className="px-3 py-2 rounded bg-blue-600 text-white"
            disabled={form.processing}
          >
            {form.processing ? 'Mengirim...' : 'Kirim'}
          </button>
          {form.errors.body && (
            <p className="text-sm text-red-600">{form.errors.body}</p>
          )}
        </form>
      ) : (
        <p className="text-sm text-gray-500">Gabung komunitas untuk berkomentar.</p>
      )}

      <div className="space-y-3">
        {comments.length === 0 ? (
          <p className="text-sm text-gray-500">Belum ada komentar.</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="border rounded-lg p-3">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">
                    {comment.author?.name ?? 'Pengguna'}
                  </div>
                  <div className="text-xs text-gray-500">{comment.created_at_human}</div>
                </div>
                {comment.can_delete && (
                  <button
                    type="button"
                    onClick={() => handleDelete(comment.id)}
                    className="text-xs text-red-600 hover:underline"
                  >
                    Hapus
                  </button>
                )}
              </div>
              <p className="mt-2 text-sm whitespace-pre-wrap">{comment.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

