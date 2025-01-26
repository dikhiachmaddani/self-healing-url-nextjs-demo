import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col justify-center text-center m-10">
            <h2 className="text-2xl font-semibold mb-2">Not Found</h2>
            <p className="mb-3 text-lg font-light">Could not find requested resource</p>
            <div className="mt-5">
                <Link href="/" className="mb-5 text-white bg-blue-950 p-3 rounded-md">Return Home</Link>
            </div>
        </div>
    )
}