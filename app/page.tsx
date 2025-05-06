import Image from "next/image"
import Link from "next/link"
import { Skull } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm bg-white/80 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to DC940</h1>
        <p className="text-xl mb-4 text-center">
          Denton's Information Security Meetup
        </p>
      </div>
    </main>
  )
}
