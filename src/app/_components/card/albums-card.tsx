import { titleToSlug } from "@/app/[slug]/_utils";
import { Route } from "@/commons/routes";
import { Albums } from "@/modules/albums/type";
import Link from "next/link";

export function AlbumsCard({ id, title }: Omit<Albums, 'userId'>) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="border-[1px] border-blue-black p-5 rounded-md">
                <p>{title}</p>
                <Link href={Route.SlugAlbums.replace(":slug", `${titleToSlug(title)}-${id}`)} className="block bg-blue-950 text-white text-center rounded-md py-2 mt-5">Detail</Link>
            </div>
        </div>
    );
}
