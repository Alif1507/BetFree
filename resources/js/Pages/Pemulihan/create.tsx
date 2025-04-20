import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm } from "@inertiajs/react";
import { FormEventHandler, useRef, useState } from "react";

function Create() {
    const { data, setData, processing, errors, post } = useForm({
        tujuan: "",
        hari: "",
        catatan: "",
    });

    const createCatatan: FormEventHandler = (ev) => {
        ev.preventDefault();

        post(route("pemulihan.store"), {
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="flex justify-center items-center mt-32">
                <div className="mt-6 w-full overflow-hidden bg-transparent border-[#760686] border-2 px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg flex flex-col ">
                    <div className="flex items-center justify-center gap-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-9 text-[#402979]"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
                            />
                        </svg>

                        <h1 className="font-semibold font-inter text-[28px] text-[#402979]">
                            Rencana Pemulihan
                        </h1>
                    </div>

                    <form className="block" onSubmit={createCatatan}>
                        <div className="flex items-start">
                            <InputLabel htmlFor="tujuan" value="Tujuan Utama" />
                        </div>

                        <InputError
                                message={errors.tujuan}
                                className="mt-2"
                            />

                        <div>
                            <TextInput
                                id="tujuan"
                                type="text"
                                name="tujuan"
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                placeholder="Contoh: bebas judi dalam 1 bulan/30 hari"
                                value={data.tujuan}
                                onChange={(e) => {
                                    setData("tujuan", e.target.value);
                                }}
                            />
                        </div>

                        <div className="flex items-start mt-10">
                            <InputLabel
                                htmlFor="progress"
                                value="Kemajuan Hari"
                            />
                        </div>

                        <InputError
                                message={errors.hari}
                                className="mt-2"
                            />

                        <input
                            type="date"
                            name="hari"
                            id="hari"
                            value={data.hari}
                            onChange={(e) => {
                                setData("hari", e.target.value);
                            }}
                            className="rounded-md border-[#760686] shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-transparent dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mb-8"
                        />

                        {/* catatan harian */}
                        <div>
                            <InputLabel
                                htmlFor="catatan"
                                value="Catatan Harian"
                            />

                            <InputError
                                message={errors.catatan}
                                className="mt-2"
                            />
                            <TextAreaInput
                                id="catatan"
                                className="mt-1 block w-full h-32"
                                placeholder="Tuliskan kesan, perasaan dan perkembanganmu hari ini........"
                                value={data.catatan}
                                onChange={(e) => {
                                    setData("catatan", e.target.value);
                                }}
                                name="catatan"
                            />
                        </div>

                        <div>
                            <PrimaryButton
                                className="ms-4 flex gap-2 ml-0 mt-10"
                                disabled={processing}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                                    />
                                </svg>
                                simpan rencana
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Create;
