import { Route } from "@/commons/routes";
import { Albums } from "@/modules/albums/type";
import Link from "next/link";

export function DetailAlbumsCard({ title }: Omit<Albums, 'userId'>) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="border-[1px] border-blue-black p-5">
                <Link href={Route.ListAlbums} className="mb-5 text-blue-500">Kembali</Link>
                <div className="mt-2">
                    <p className="hover:underline">{title}</p>
                </div>
            </div>
        </div>
    );
}
