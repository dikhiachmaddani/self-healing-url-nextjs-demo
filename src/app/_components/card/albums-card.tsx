import { Route } from "@/commons/routes";
import { Albums } from "@/modules/albums/type";
import { titleToSlug } from "@/utils/selft-healing-url";
import Link from "next/link";

export function AlbumsCard({ id, title }: Omit<Albums, 'userId'>) {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="border-[1px] border-blue-black p-5">
                <div className="mt-2">
                    <Link href={Route.SlugAlbums.replace(":slug", `${titleToSlug(title)}-${id}`)} className="text-blue-500 hover:underline">
                        {title}
                    </Link>
                </div>
            </div>
        </div>
    );
}
