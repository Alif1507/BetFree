import React from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import { Input, Textarea } from '@headlessui/react';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, useForm } from '@inertiajs/react';
import { Forumss, PaginatedData } from '@/types';


function create({dataa}): PaginatedData<Forumss> {
  let forum = dataa.data
  

  const {data, setData, errors, put, processing} = useForm({
    judul: forum.judul,
    deskripsi: forum.deskripsi,
    body: forum.body
  })

  
  


  return (
    <AuthenticatedLayout>

      <Head title='Edit Forum' />

        <div className='flex justify-center items-center mt-10'>
        <form className='border-black border-3 rounded-2xl p-3 flex flex-col gap-3 max-w-96'>
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
                        
                                                disabled={processing}
                                            >
                                                Kirim
                                            </PrimaryButton>
                                        </form>
        </div>
    </AuthenticatedLayout>
  )
}

export default create
