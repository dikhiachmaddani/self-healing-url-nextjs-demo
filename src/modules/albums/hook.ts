"use client";

import { AlbumsKey } from "@/commons/constants/query-key";
import { useQuery } from "@tanstack/react-query";
import { getDetailAlbums, getListAlbums } from "./api";

export const useListAlbums = () => {
    return useQuery({
        queryKey: [AlbumsKey.LIST],
        queryFn: () => getListAlbums(),
        select: (data) => data,
    });
};
export const useDetailAlbums = (id: string) => {
    return useQuery({
        queryKey: [AlbumsKey.DETAIL, id],
        queryFn: () => getDetailAlbums(id),
    });
};