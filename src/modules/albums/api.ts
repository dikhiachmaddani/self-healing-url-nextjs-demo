import { ENDPOINTS } from "@/commons/endpoints/api";
import { api } from "@/utils/http-client";
import { Albums } from "./type";

export const getListAlbums = async () => {
    return await api.get<Albums[]>(ENDPOINTS.LIST_ALBUMS);
};

export const getDetailAlbums = async (id: string) => {
    return await api.get<Albums>(`${ENDPOINTS.DETAIL_ALBUMS(id)}`);
};
