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
            
            {/* Timeline Section */}
            <div className="mb-12">
              <h3 className="text-2xl text-[#c5de65] mb-6">Our Journey</h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#c5de65]/30"></div>
                
                {/* Timeline Items */}
                <div className="space-y-8">
                  {/* 2018 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-[#c5de65] flex items-center justify-center">
                      <span className="text-black font-bold">18</span>
                    </div>
                    <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#c5de65]/30">
                      <h4 className="text-[#c5de65] font-bold mb-2">2018</h4>
                      <p className="text-gray-300">Pwn School Denton was founded, establishing Denton's first dedicated information security community.</p>
                    </div>
                  </div>

                  {/* 2019 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-[#c5de65] flex items-center justify-center">
                      <span className="text-black font-bold">19</span>
                    </div>
                    <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#c5de65]/30">
                      <h4 className="text-[#c5de65] font-bold mb-2">2019</h4>
                      <p className="text-gray-300">Hosted our first CTF competition, bringing together local security enthusiasts for hands-on challenges.</p>
                    </div>
                  </div>

                  {/* 2020 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-[#c5de65] flex items-center justify-center">
                      <span className="text-black font-bold">20</span>
                    </div>
                    <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#c5de65]/30">
                      <h4 className="text-[#c5de65] font-bold mb-2">2020</h4>
                      <p className="text-gray-300">Successfully transitioned to virtual meetings during the pandemic, expanding our reach beyond Denton.</p>
                    </div>
                  </div>

                  {/* 2021 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-[#c5de65] flex items-center justify-center">
                      <span className="text-black font-bold">21</span>
                    </div>
                    <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#c5de65]/30">
                      <h4 className="text-[#c5de65] font-bold mb-2">2021</h4>
                      <p className="text-gray-300">Rebranded as DC940, becoming an official DEF CON Group in October, joining the global DEF CON community.</p>
                    </div>
                  </div>

                  {/* Present */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-[#c5de65] flex items-center justify-center">
                      <span className="text-black font-bold">Now</span>
                    </div>
                    <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#c5de65]/30">
                      <h4 className="text-[#c5de65] font-bold mb-2">Present</h4>
                      <p className="text-gray-300">Continuing to grow and serve the Denton security community with monthly meetings and special events.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rich History Section */}
            <div className="space-y-6">
              <h3 className="text-2xl text-[#c5de65] mb-4">Our Rich History</h3>
              
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#c5de65]/30">
                <p className="text-gray-300 mb-4">
                  DC940 is Denton's longest-running monthly Information Security Meetup. Formerly known as Pwn School Denton, it was rebranded as a DEF CON Group in October 2021. The group consists of Information Security Professionals and Hobbyist Hackers alike.
                </p>
                <p className="text-gray-300 mb-4">
                  Our journey began with a simple mission: to create a space where security enthusiasts could learn, share, and grow together. Over the years, we've evolved from a small gathering of local hackers to a thriving community that welcomes all ages and skill levels.
                </p>
                <p className="text-gray-300 mb-4">
                  Monthly meetings offer the latest information on Tactics, Techniques, and Procedures pertaining to Information Security and Hacking. From hands-on workshops to expert presentations, we cover a wide range of topics that reflect the ever-evolving landscape of cybersecurity.
                </p>
                <p className="text-gray-300">
                  As a DEF CON Group, we maintain the hacker ethos while fostering a welcoming environment for newcomers. Our meetings, held every third Monday of the month, have become a cornerstone of Denton's tech community, bringing together professionals, students, and enthusiasts in the pursuit of knowledge and skill development.
                </p>
              </div>

              {/* Meeting Info */}
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#c5de65]/30">
                <h4 className="text-xl text-[#c5de65] mb-4">Join Our Community</h4>
                <p className="text-gray-300">
                  Whether you're a seasoned security professional or just starting your journey in information security, DC940 welcomes you. Our meetings are held every third Monday of the month, providing a regular opportunity to connect, learn, and contribute to the local security community.
                </p>
              </div>
            </div>
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
