import React, { FormEventHandler, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";
import { useForm, usePage } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { toast } from "sonner";
import { Toaster } from "sonner";
import InputLabel from "@/Components/InputLabel";
import { Input } from "@/Components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Forumss, PaginatedData } from "@/types";
import InputError from "@/Components/InputError";

function Forum({ forums }): PaginatedData<Forumss> {
    const { data, setData, errors, post, processing } = useForm({
        judul: "",
        deskripsi: "",
        body: "",
    });

    let erros = usePage().props.errors;

    const createForum: FormEventHandler = (ev) => {
        ev.preventDefault();
        post(route("forum.store"), {
            preserveScroll: true,
        });
    };

    // Track expanded forum by id for independent expand/collapse
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const toggleReadMore = (id: number) => {
        setExpandedId(expandedId === id ? null : id);
    };

    return (
        <AuthenticatedLayout>
            <div className="flex flex-col min-h-screen relative gap-10 bg-gradient-to-r from-slate-50 to-purple-300 pb-10">
                {/* Responsive: Stack on mobile, row on md+ */}
                <div className="flex flex-col md:flex-row justify-start items-start mt-10 gap-6 w-full px-2 md:px-8">
                    {/* Forum List Section - LEFT */}
                    <div className="w-full md:w-2/3 flex flex-col gap-10">
                        <AnimatePresence>
                            {forums.data.map((forum) => (
                                <motion.div
                                    key={forum.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 40 }}
                                    transition={{ duration: 0.4 }}
                                    className="w-full max-w-[95vw] sm:max-w-lg md:max-w-2xl min-h-[221px] p-5 sm:p-7 border-black border rounded-2xl flex flex-col gap-4 text-start bg-white shadow-2xl mx-auto md:mx-0"
                                >
                                    <div className="gap-1 flex flex-col">
                                        <h1 className="font-bold font-inter text-black text-lg sm:text-xl">
                                            {forum.user.name}
                                        </h1>
                                        <h2 className="font-inter text-black text-base sm:text-xl font-light">
                                            {forum.judul}
                                        </h2>
                                    </div>
                                    <hr />
                                    <div className="gap-3 flex flex-col">
                                        <h1 className="text-black text-lg sm:text-2xl font-inter font-bold">
                                            {forum.deskripsi}
                                        </h1>
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
                                                >
                                                    {expandedId === forum.id
                                                        ? "ReadLess"
                                                        : "ReadMore"}
                                                </button>
                                            </>
                                        ) : (
                                            <p className="break-words whitespace-pre-line">{forum.body}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Forum Input Section - RIGHT */}
                    <div className="w-full md:w-1/3 flex flex-col gap-3 items-center md:sticky md:top-24">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full p-4 rounded-2xl bg-white shadow-lg mb-4"
                        >
                            <Textarea
                                placeholder="Berikan Pengalaman Anda"
                                value={data.body}
                                onChange={(e) => setData("body", e.target.value)}
                                className="w-full min-h-[100px] md:min-h-[120px] resize-y break-words whitespace-pre-line"
                            />
                        </motion.div>
                        <AlertDialog>
                            <AlertDialogTrigger asChild>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-purple-600 text-white rounded-full p-4 shadow-lg hover:bg-purple-700 transition"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="size-8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                        />
                                    </svg>
                                </motion.button>
                            </AlertDialogTrigger>
                            <AlertDialogContent asChild>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    className="bg-white h-auto rounded-xl shadow-xl w-full max-w-md mx-auto"
                                >
                                    <AlertDialogHeader className="relative py-6">
                                        <h1 className="absolute top-0 left-0 text-xs">
                                            Pertanyaan / Bagikan
                                        </h1>
                                        <AlertDialogDescription className="bg-purple-400 p-3 rounded-2xl text-sm font-light mb-3">
                                            Berikan pertanyaan yang anda ingin
                                            tanyakan pada teman-teman BeatFree
                                            atau bagikan cerita pengalaman saran
                                            atau tips kepada teman-teman
                                            BeatFree, salin membantu sesama
                                        </AlertDialogDescription>
                                        <div className="flex gap-3 items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                className="size-6 text-yellow-300 mb-3"
                                            >
                                                <path d="M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z" />
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <h1 className="font-semibold">Publik</h1>
                                        </div>
                                        <form onSubmit={createForum} className="space-y-4">
                                            <div>
                                                <InputLabel htmlFor="judul">
                                                    Judul
                                                </InputLabel>
                                                <Input
                                                    type="text"
                                                    id="judul"
                                                    placeholder="Judul"
                                                    name="judul"
                                                    value={data.judul}
                                                    onChange={(e) =>
                                                        setData(
                                                            "judul",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full"
                                                />
                                                <InputError
                                                    message={errors.judul}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div>
                                                <InputLabel htmlFor="deskripsi">
                                                    Deskripsi
                                                </InputLabel>
                                                <Input
                                                    type="text"
                                                    id="deskripsi"
                                                    placeholder="Deskripsi"
                                                    name="deskripsi"
                                                    value={data.deskripsi}
                                                    onChange={(e) =>
                                                        setData(
                                                            "deskripsi",
                                                            e.target.value
                                                        )
                                                    }
                                                    className="w-full"
                                                />
                                                <InputError
                                                    message={errors.deskripsi}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div>
                                                <InputLabel htmlFor="body">
                                                    Konten
                                                </InputLabel>
                                                <Textarea
                                                    id="body"
                                                    value={data.body}
                                                    name="body"
                                                    onChange={(e) =>
                                                        setData(
                                                            "body",
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="Tuliskan pertanyaan atau bagikan pengalaman/saran......."
                                                    className="h-32 w-full break-words whitespace-pre-line"
                                                />
                                                <InputError
                                                    message={errors.body}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="flex gap-3 mt-4">
                                                <PrimaryButton
                                                    className="mr-4"
                                                    onClick={() =>
                                                        toast(
                                                            `${Object.keys(erros).length >= 3
                                                                ? "Forum ada yang blm di isi!"
                                                                : "Forum Telah Dibuat!"
                                                            }`,
                                                            {
                                                                description:
                                                                    `${Object.keys(erros).length >= 3
                                                                        ? "Silakan Ulang"
                                                                        : "Silakan Tutup"
                                                                    }`,
                                                                duration: 3000,
                                                                className:
                                                                    "bg-purple-600 text-white font-semibold rounded-lg shadow-lg",
                                                            }
                                                        )
                                                    }
                                                    disabled={processing}
                                                >
                                                    Kirim
                                                </PrimaryButton>
                                                <AlertDialogCancel>
                                                    Close
                                                </AlertDialogCancel>
                                            </div>
                                        </form>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter />
                                </motion.div>
                            </AlertDialogContent>
                            <Toaster
                                style={{ zIndex: 9999 }}
                                toastOptions={{
                                    classNames: {
                                        toast: "bg-purple-600 text-white font-medium rounded-md shadow-md",
                                        title: "text-lg",
                                        description: "text-sm text-gray-100",
                                    },
                                }}
                            />
                            <div className="flex gap-2 mt-2">
                                <AlertDialogTrigger asChild>
                                    <Button className="bg-white text-black cursor-pointer hover:bg-purple-600 hover:text-white duration-300">
                                        Tanyakan
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogTrigger asChild>
                                    <Button className="bg-white text-black cursor-pointer hover:bg-purple-600 hover:text-white duration-300">
                                        Bagikan
                                    </Button>
                                </AlertDialogTrigger>
                            </div>
                        </AlertDialog>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Forum;
