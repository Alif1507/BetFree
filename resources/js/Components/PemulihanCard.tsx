import React, { FormEventHandler } from "react";
import Countdown from "./CountDown";
import { useForm } from "@inertiajs/react";

type Props = {
    id: number;
    tujuan: string;
    hari: string;
    catatan: string;
};

const PemulihanCard: React.FC<Props> = ({ id, tujuan, hari, catatan }) => {
    const { delete: destroy, processing } = useForm();

    const deleteCatatan: FormEventHandler = (ev) => {
        ev.preventDefault();
    
        destroy(route("pemulihan.destroy", { pemulihan: id }), {
            preserveScroll: true,
        });
    };

    return (
        <div className="relative flex w-80 flex-col rounded-xl bg-[#512DA8] bg-clip-border text-gray-700 shadow-md">
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl text-white font-semibold leading-snug tracking-normal">
                    {tujuan}
                    <sup className="bg-[#FF0000] ml-4 py-1 px-3 rounded text-white text-sm">
                        <Countdown targetDate={hari} />
                    </sup>
                </h5>
                <p className="block font-sans text-base text-white font-light leading-relaxed">
                    {catatan}
                </p>
            </div>
            <div className="p-6 pt-0">
                <form onSubmit={deleteCatatan}>
                    <button
                        type="submit"
                        disabled={processing}
                        className="select-none rounded-lg bg-green-500 py-2 px-12 text-center font-bold text-white text-sm shadow-md transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
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
                                d="m4.5 12.75 6 6 9-13.5"
                            />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PemulihanCard;
