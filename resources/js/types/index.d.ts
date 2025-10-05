import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PaginatedData<T = any> = {
    meta: any;
    data:T[];
    links:Record<string, string>
}

export interface Pemulihan {
    id: number;
    tujuan: string;
    hari: string;
    catatan: string;
}

export interface PaginatedData<T> {
    pemulihans: {
        data: T[];
        meta: {
            links: {
                url: string | null;
                label: string;
                active: boolean;
            }[];
        };
    };
}

export interface Forumss {
    id: number;
    judul: string;
    deskripsi: string;
    body: string;
    created_at: string;
    user: {
      id: number;
      name: string;
      email: string;
    };
  }

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
