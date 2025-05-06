import Image from "next/image"
import Link from "next/link"
import { Skull } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white relative overflow-hidden">
      {/* Background image of Denton Square with overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/dentontexas.jpeg" alt="Denton Square" fill className="object-cover opacity-20" priority />
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-[#2a2a2a]/90"></div>
      </div>

      {/* Navigation */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center relative z-10">
        <Link href="/" className="text-[#c5de65] text-3xl font-bold">
          DEFCON
        </Link>
        <nav className="flex gap-8">
          <Link href="/events" className="hover:text-[#c5de65] transition-colors">
            Events
          </Link>
          <Link href="/discord" className="hover:text-[#c5de65] transition-colors">
            Discord
          </Link>
          <Link href="/about" className="hover:text-[#c5de65] transition-colors">
            About
          </Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-16 pb-24 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-[#c5de65] text-7xl font-bold mb-4 uppercase tracking-wider">DEFCON 940</h1>
          <div className="text-[#c5de65] text-xl mb-6">DENTON, TX ~ EST. 2021</div>
          <p className="text-[#c5de65] text-xl">Denton's longest-running monthly Information Security Meetup</p>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-16">
          <div className="w-32 h-32 rounded-full bg-black border-4 border-gray-600 flex items-center justify-center">
            <div className="w-24 h-24">
              <Image src="/images/smiley-bones.png" alt="DEFCON 940 Logo" width={96} height={96} />
            </div>
          </div>
        </div>

        {/* Main Content Cards */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {/* Top Container Card */}
          <div className="bg-[#222222] border border-[#c5de65]/30 rounded-xl p-8">
            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Next Meeting Card */}
              <div className="border border-[#c5de65]/30 rounded-lg p-6 bg-[#1a1a1a]">
                <h2 className="text-2xl text-[#c5de65] mb-6">Next Meeting</h2>
                <div className="text-2xl text-[#c5de65] mb-6">May 10, 2024</div>
                <div className="mb-2">
                  <span className="inline-block w-24 text-gray-400">Speaker</span>
                  <span>John Smith</span>
                </div>
                <div className="mb-6">
                  <span className="inline-block w-24 text-gray-400">Address</span>
                  <span>123 Elm St</span>
                </div>
                <button className="bg-transparent border border-[#c5de65] text-[#c5de65] px-6 py-1.5 rounded hover:bg-[#c5de65]/10 transition-colors text-sm">
                  RSVP
                </button>
              </div>

              {/* Join Us Card */}
              <div className="border border-[#c5de65]/30 rounded-lg p-6 bg-[#1a1a1a]">
                <h2 className="text-2xl text-[#c5de65] mb-6">Join Us</h2>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-lg">discord.gg/xyz123</div>
                  <div className="w-14 h-14 rounded-full bg-black border-2 border-gray-600 flex items-center justify-center">
                    <Skull className="w-8 h-8 text-[#c5de65]" />
                  </div>
                </div>
                <button className="bg-transparent border border-[#c5de65] text-[#c5de65] px-6 py-1.5 rounded hover:bg-[#c5de65]/10 transition-colors text-sm">
                  RSVP
                </button>
              </div>
            </div>
          </div>

          {/* About Card */}
          <div className="bg-[#222222] border border-[#c5de65]/30 rounded-xl p-8">
            <h2 className="text-3xl text-[#c5de65] mb-6">About</h2>
            <p className="text-gray-300">
              DEFCON 940 is Denton's longest running monthly Information Security Meetup. We welcome security
              professionals, enthusiasts, and anyone interested to join us and discuss the latest in cybersecurity.
            </p>
          </div>

          {/* Past Talks Card */}
          <div className="bg-[#222222] border border-[#c5de65]/30 rounded-xl p-8">
            <h2 className="text-3xl text-[#c5de65] mb-6">Past Talks</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="border border-[#c5de65]/30 rounded-lg overflow-hidden bg-[#1a1a1a]">
                  <div className="h-40 bg-[#1a1a1a]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
