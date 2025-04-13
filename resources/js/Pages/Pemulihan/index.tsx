import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PaginatedData, Pemulihan } from "@/types";
import { Link } from "@inertiajs/react";

function index({ pemulihans }: PaginatedData<Pemulihan>) {
  console.log(pemulihans);
  
    return (
        <AuthenticatedLayout>
            <div className="ml-10 mt-10">
                <Link href={route("pemulihan.create")}>
                    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
                        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                        </span>
                        <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
                        </span>
                        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0" />
                        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white flex">
                            Buat Rencana{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6 ml-3"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                        </span>
                    </button>
                </Link>
            </div>

            <div className="py-12 px-4">
                {pemulihans.meta.links.map((link) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${
                                link.active ? "text-blue-500 font-bold" : ""
                            }`}
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="p-1 mx-1 text-slate-300"
                        ></span>
                    )
                )}
            </div>

            <div className="flex justiFfy-center items-center mt-10 mx-64">
                <div className="grid grid-cols-3 gap-x-10 gap-y-24">
                    {pemulihans.data.map((pemulihan) => (
                        <div className="relative flex w-80 flex-col rounded-xl bg-[#5D0BF3] opacity-70 bg-clip-border text-gray-700 shadow-md">
                            <div className="p-6">
                                <h5 className="mb-2 block font-sans text-xl text-white font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    {pemulihan.tujuan}{" "}
                                    <sup>{pemulihan.hari} Hari</sup>
                                </h5>
                                <p className="block font-sans text-base text-white font-light leading-relaxed antialiased">
                                    {pemulihan.catatan}
                                </p>
                            </div>
                            <div className="p-6 pt-0">
                                <a href="">
                                    <button
                                        data-ripple-light="true"
                                        type="button"
                                        className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    >
                                        Read More
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default index;
