import { Suspense } from "react";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function TripsContent() {
  const session = await auth();

  if (!session) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-700 text-xl">
        Please Sign In
      </div>
    );
  }

  return (
    <div className="space-y-6 container mx-auto px-4 py-8">
      <div>
        <h1>Dashboard </h1>
        <Link href={"/trips/new"}>
          <Button> New Trip</Button>
        </Link>
      </div>
    </div>
  );
}

export default function TripsPage() {
  return (
    <Suspense
      fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}
    >
      <TripsContent />
    </Suspense>
  );
}
