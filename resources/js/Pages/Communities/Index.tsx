// resources/js/Pages/Communities/Index.tsx
import { Link, useForm } from '@inertiajs/react';

export default function Index({ communities }: any) {
  const { data, setData, post, processing, reset } = useForm<{ name: string; description: string; is_private: boolean }>({ name:'', description:'', is_private:false });

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <form onSubmit={(e)=>{e.preventDefault(); post(route('communities.store'), {onSuccess:()=>reset()});}}
            className="bg-white p-4 rounded-xl shadow space-y-3">
        <h2 className="font-semibold text-lg">Buat Komunitas</h2>
        <input className="w-full border p-2 rounded" placeholder="Nama"
               value={data.name} onChange={e=>setData('name', e.target.value)} />
        <textarea className="w-full border p-2 rounded" placeholder="Deskripsi"
                  value={data.description} onChange={e=>setData('description', e.target.value)} />
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" checked={data.is_private}
                 onChange={e=>setData('is_private', e.target.checked)} />
          Private community
        </label>
        <button disabled={processing} className="px-4 py-2 rounded bg-blue-600 text-white">Buat</button>
      </form>

      <div className="grid md:grid-cols-2 gap-4">
        {communities.data.map((c:any)=>(
          <Link key={c.id} href={route('communities.show', c.slug)}
                className="block border p-4 rounded-lg hover:bg-gray-50">
            <div className="font-semibold">{c.name}</div>
            <div className="text-sm text-gray-600 line-clamp-2">{c.description}</div>
            <div className="text-xs text-gray-500 mt-2">{c.members_count} anggota • {c.posts_count} post</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
