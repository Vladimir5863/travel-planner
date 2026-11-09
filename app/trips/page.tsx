import { auth } from "@/auth";

export default async function TripsPage() {
  const session = await auth();
  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-700 texl-xl">
        {" "}
        Please Sign In
      </div>
    );
  }
}
