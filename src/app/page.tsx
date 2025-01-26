"use client"

import { useListAlbums } from "@/modules/albums/hook";
import { AlbumsCard } from "./_components/card/albums-card";
import { CardSkeleton } from "./_components/skeleton/card-skeleton";

export default function Home() {
  const { data, isLoading } = useListAlbums();

  if (isLoading || !data) {
    return (
      <section className="grid grid-cols-12 gap-6 mt-11 p-4">
        {Array(8).fill(null).map((_, index) => (
          <div key={index} className="col-span-12 md:col-span-6 lg:col-span-3">
            <CardSkeleton />
          </div>
        ))}
      </section>
    );
  }

  return (
    <section className="grid grid-cols-12 gap-6 mt-11 p-4">
      {data.map((album) => (
        <div key={album.id} className="col-span-12 md:col-span-6 lg:col-span-3">
          <AlbumsCard
            id={album.id}
            title={album.title}
          />
        </div>
      ))}
    </section>
  );
}