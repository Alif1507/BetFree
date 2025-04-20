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
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import { Input } from "@/Components/ui/input";
import { motion } from "motion/react";
import { Forumss, PaginatedData } from "@/types";
import InputError from "@/Components/InputError";

function Forum({ forums }): PaginatedData<Forumss> {
    const { data, setData, errors, post, processing } = useForm({
        judul: "",
        deskripsi: "",
        body: "",
    });

    let erros = usePage().props.errors

    

    const createForum: FormEventHandler = (ev) => {
        ev.preventDefault();

        post(route("forum.store"), {
            preserveScroll: true,
        });
    };

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <AuthenticatedLayout>
            <div className="flex flex-col min-h-screen relative gap-16 z-20 bg-gradient-to-r from-slate-50 to-purple-300">
                <div className="flex justify-evenly items-center mt-10">
                    <div className="w-[630px] p-4 rounded-2xl bg-white">
                        <Textarea
                            placeholder="Berikan Pengalaman Anda"
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                        />
                    </div>
                    <div className="flex gap-3 items-center">
                        <AlertDialog>
                            <AlertDialogTrigger>
                                {" "}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-16 cursor-pointer hover:text-white duration-300"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            </AlertDialogTrigger>
                            <AlertDialogContent asChild>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.1 }}
                                    className="bg-white  h-auto rounded-xl shadow-xl"
                                >
                                    <AlertDialogHeader className="relative py-6">
                                        <h1 className="absolute top-0 left-0 text-xs">
                                            Pertanyaan / Bagikan
                                        </h1>
                                        <h1></h1>
                                        <AlertDialogDescription className="bg-purple-400 p-3 rounded-2xl text-sm font-light mb-3">
                                            Berikan pertanyaan yang anda ingin
                                            tanyakan pada teman-teman BeatFree
                                            atau bagikan cerita pengalaman saran
                                            atau tips kepada teman-teman
                                            BeatFree, salin membantu sesama
                                        </AlertDialogDescription>
                                        <div className="flex gap-3">
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
                                            <h1>Publik</h1>
                                        </div>

                                        <form onSubmit={createForum}>
                                            <div className="my-3 gap-3">
                                                <InputLabel htmlFor="judul">
                                                    Judul
                                                </InputLabel>
                                                <InputError
                                                    message={errors.judul}
                                                    className="mt-2"
                                                />

                                                <Input
                                                    type="text"
                                                    id="judul"
                                                    placeholder="judul"
                                                    name="judul"
                                                    value={data.judul}
                                                    onChange={(e) =>
                                                        setData(
                                                            "judul",
                                                            e.target.value
                                                        )
                                                    }
                                                />

                                                <InputLabel htmlFor="deskripsi">
                                                    Deskripsi
                                                </InputLabel>
                                                <InputError
                                                    message={errors.deskripsi}
                                                    className="mt-2"
                                                />
                                                <Input
                                                    type="text"
                                                    id="deskripsi"
                                                    placeholder="deskripsi"
                                                    name="deskripsi"
                                                    value={data.deskripsi}
                                                    onChange={(e) =>
                                                        setData(
                                                            "deskripsi",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <InputError
                                                    message={errors.body}
                                                    className="mt-2"
                                                />
                                            <Textarea
                                                id="body"
                                                value={data.body}
                                                name="body"
                                                onChange={(e) =>
                                                    setData(
                                                        "body",
                                                        e.target.value
                                                    )
                                                } // 🔄 sync here
                                                placeholder="Tuliskan pertanyaan atau bagikan pengalaman/saran......."
                                                className="h-40 max-w-110 mb-3"
                                            />
                                            <PrimaryButton
                                                className="mr-4"
                                                onClick={() =>
                                                    toast(
                                                        `${Object.keys(erros).length >= 3 ? "Forum ada yang blm di isi!" : "Forum Telah Dibuat!" }`,
                                                        {
                                                            description:
                                                                `${Object.keys(erros).length >= 3 ? "Silakan Ulang" : "Silakan Tutup" }`,
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
                                        </form>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter></AlertDialogFooter>
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
                            <AlertDialogTrigger>
                                <Button className="bg-white text-black cursor-pointer hover:bg-purple-600 hover:text-white duration-300">Tanyakan</Button>
                            </AlertDialogTrigger>

                            <AlertDialogTrigger>
                                <Button className="bg-white text-black cursor-pointer hover:bg-purple-600 hover:text-white duration-300">Bagikan</Button>
                            </AlertDialogTrigger>
                        </AlertDialog>
                    </div>
                </div>
                <div className="ml-30 flex flex-col gap-20">
                    {forums.data.map((forum) => (
                        <div
                            key={forum.id}
                            className="w-[630px] min-h-[221px] p-7 border-black border-2 rounded-2xl flex flex-col gap-10 text-start  bg-white"
                        >
                            <div className="gap-1 flex flex-col">
                                <h1 className="font-bold font-inter text-black text-xl">
                                    {forum.user.name}
                                </h1>
                                <h2 className="font-inter text-black text-xl">
                                    {forum.judul}
                                </h2>
                            </div>

                            <div className="gap-3 flex flex-col">
                                <h1 className="text-black text-2xl font-inter font-bold">
                                    {forum.deskripsi}
                                </h1>
                                {(forum.body || "").length > 200 && (
                                    <>
                                        <p>
                                            {isExpanded
                                                ? forum.body
                                                : `${(forum.body || "").slice(
                                                      0,
                                                      200
                                                  )}.....`}
                                        </p>
                                        <button
                                            onClick={toggleReadMore}
                                            className="text-amber-500 hover:underline"
                                        >
                                            {isExpanded
                                                ? "ReadLess"
                                                : "ReadMore"}
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Forum;
