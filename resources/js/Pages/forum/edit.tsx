import React, { FormEventHandler } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { Input, Textarea } from "@headlessui/react";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm } from "@inertiajs/react";
import Edit from "../Profile/Edit";

type Forum = {
    id: number;
    judul: string;
    deskripsi: string;
    body: string;
};

type EditProps = {
    dataa: {
        data: Forum;
    };
};

function edit({ dataa }: EditProps): JSX.Element {
    let forum = dataa.data;

    const { data, setData, errors, put, processing } = useForm({
        judul: forum.judul,
        deskripsi: forum.deskripsi,
        body: forum.body,
    });


    const updateForum: FormEventHandler = (ev) => {
        ev.preventDefault();
        put(route("forum.update", forum.id), {
            preserveScroll: true,
            // No need to pass data here, useForm handles it
        });
    }

    return (
        <AuthenticatedLayout>
            <Head title="Edit Forum" />

            <div className="container mx-auto py-8">
                <form onSubmit={updateForum} className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
                    <div className="space-y-6">
                        {/* Judul Field */}
                        <div className="form-group">
                            <InputLabel
                                htmlFor="judul"
                                className="mb-2"
                            >
                                Judul
                            </InputLabel>
                            <Input
                                type="text"
                                id="judul"
                                name="judul"
                                placeholder="Masukkan judul"
                                value={data.judul}
                                onChange={(e) => setData("judul", e.target.value)}
                                className="w-full rounded-md"
                            />
                            <InputError
                                message={errors.judul}
                                className="mt-2"
                            />
                        </div>

                        {/* Deskripsi Field */}
                        <div className="form-group">
                            <InputLabel
                                htmlFor="deskripsi"
                                className="mb-2"
                            >
                                Deskripsi
                            </InputLabel>
                            <Input
                                type="text"
                                id="deskripsi"
                                name="deskripsi"
                                placeholder="Masukkan deskripsi"
                                value={data.deskripsi}
                                onChange={(e) =>
                                    setData("deskripsi", e.target.value)
                                }
                                className="w-full rounded-md"
                            />
                            <InputError
                                message={errors.deskripsi}
                                className="mt-2"
                            />
                        </div>

                        {/* Body Field */}
                        <div className="form-group">
                            <InputLabel
                                htmlFor="body"
                                className="mb-2"
                            >
                                Konten
                            </InputLabel>
                            <Textarea
                                id="body"
                                name="body"
                                value={data.body}
                                onChange={(e) => setData("body", e.target.value)}
                                placeholder="Tuliskan pertanyaan atau bagikan pengalaman/saran......."
                                className="w-full h-40 rounded-md"
                            />
                            <InputError
                                message={errors.body}
                                className="mt-2"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <PrimaryButton
                                disabled={processing}
                                className="px-6"
                            >
                                Edit
                            </PrimaryButton>
                        </div>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}

export default edit;
