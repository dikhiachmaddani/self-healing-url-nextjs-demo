export function FruitCardSkeleton() {
    return (
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
            <div className="border-[1px] border-blue-black p-5">
                <div className="h-12 w-12 bg-gray-300 rounded-full" />
                <div className="mt-2 space-y-2">
                    <p className="bg-gray-300 h-4 w-3/4 rounded"></p>
                    <p className="bg-gray-300 h-4 w-2/4 rounded"></p>
                    <p className="bg-gray-300 h-4 w-1/4 rounded"></p>
                </div>
            </div>
        </div>
    )
}