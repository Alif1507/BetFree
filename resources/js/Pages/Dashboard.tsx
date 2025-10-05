import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Forumss, PaginatedData } from "@/types";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard({ forums }: { forums: PaginatedData<Forumss> }): JSX.Element {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleReadMore = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12 min-h-screen bg-gradient-to-r from-slate-50 to-purple-300">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    {forums.data.map((forum) => (
                        <div
                            key={forum.id}
                            className="relative overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mb-10 p-6"
                        >
                            <div className="text-gray-900 dark:text-gray-100">
                                <h1 className="font-inter font-light">
                                    {forum.judul}
                                </h1>
                                <h1 className="font-bold font-inter text-2xl text-purple-900 mb-4">
                                    {forum.deskripsi}
                                </h1>
                                <div className="font-inter max-w-[1000px]">
                                    {(forum.body || "").length > 200 ? (
                                        <>
                                            <p className="break-words whitespace-pre-line">
                                                {expandedId === forum.id
                                                    ? forum.body
                                                    : `${(forum.body || "").slice(0, 200)}.....`}
                                            </p>
                                            <button
                                                onClick={() => toggleReadMore(forum.id)}
                                                className="text-amber-500 hover:underline"
                                                aria-label={expandedId === forum.id ? "Read less" : "Read more"}
                                            >
                                                {expandedId === forum.id ? "ReadLess" : "ReadMore"}
                                            </button>
                                        </>
                                    ) : (
                                        <p className="break-words whitespace-pre-line">{forum.body}</p>
                                    )}
                                </div>
                            </div>
                            <Link href={route("forum.edit", forum.id)}>
                                <div className="flex justify-center items-center absolute bottom-5 right-[110px] z-50">
                                    <button
                                        className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-blue-600 from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                                        aria-label="Edit"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                            />
                                        </svg>
                                        <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                                            Edit
                                        </span>
                                    </button>
                                </div>
                            </Link>
                            <Link href={route("forum.destroy", forum.id)} method="delete" as="button">
                                <div className="flex justify-center items-center absolute bottom-5 right-[50px] z-50">
                                    <button
                                        className="group flex justify-center p-2 rounded-md drop-shadow-xl bg-red-600 from-gray-800 text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:from-[#331029] hover:to-[#310413]"
                                        aria-label="Delete"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                            />
                                        </svg>
                                        <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-10 duration-700">
                                            Delete
                                        </span>
                                    </button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
