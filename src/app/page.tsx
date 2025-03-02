import Image from "next/image";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Radio, Satellite, Search, Users, Zap, Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 px-0 backdrop-blur-sm sm:px-4">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold tracking-wider">LISTEN</span>
          </div>

          <nav className="hidden gap-6 md:flex">
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-blue-400"
            >
              About
            </Link>
            <Link
              href="#mission"
              className="text-sm font-medium transition-colors hover:text-blue-400"
            >
              Mission
            </Link>
            <Link
              href="#research"
              className="text-sm font-medium transition-colors hover:text-blue-400"
            >
              Research
            </Link>
            <Link
              href="#join"
              className="text-sm font-medium transition-colors hover:text-blue-400"
            >
              Join Us
            </Link>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Support Our Mission
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex h-[90vh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2070&auto=format&fit=crop"
              alt="Deep space nebula"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-blue-400">L</span>ocating
              <span className="text-blue-400"> I</span>ntelligent
              <span className="text-blue-400"> S</span>ignals
              <span className="text-blue-400"> T</span>hrough
              <span className="text-blue-400"> E</span>xtraterrestrial
              <span className="text-blue-400"> N</span>etworks
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-300 md:text-2xl">
              Exploring the cosmos for signs of intelligent life beyond our
              planet
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button className="bg-blue-600 px-8 py-6 text-lg hover:bg-blue-700">
                Learn More
              </Button>
              <Button
                variant="outline"
                className="border-blue-400 px-8 py-6 text-lg text-blue-400 hover:bg-blue-400/10"
              >
                Join Our Network
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gray-950 py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-12 md:flex-row">
              <div className="md:w-1/2">
                <h2 className="mb-6 text-3xl font-bold text-blue-400 md:text-4xl">
                  About LISTEN
                </h2>
                <p className="mb-6 text-lg text-gray-300">
                  LISTEN is a pioneering organization dedicated to the search
                  for extraterrestrial intelligence through advanced signal
                  detection and analysis. We operate a global network of radio
                  telescopes and employ cutting-edge AI algorithms to identify
                  potential non-natural signals from deep space.
                </p>
                <p className="text-lg text-gray-300">
                  Founded by a team of astronomers, astrophysicists, and data
                  scientists, our mission is to expand humanity's understanding
                  of our place in the cosmos and potentially make the most
                  significant discovery in human history.
                </p>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg md:w-1/2">
                <Image
                  src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1974&auto=format&fit=crop"
                  alt="Radio telescope"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="bg-black py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-12 text-3xl font-bold text-blue-400 md:text-4xl">
              Our Mission
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-gray-800 bg-gray-900 p-8 transition-colors hover:border-blue-400">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 p-4">
                  <Search className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold">Signal Detection</h3>
                <p className="text-gray-300">
                  Utilizing advanced radio telescopes and signal processing
                  technology to scan the cosmos for non-random patterns that
                  could indicate intelligent origin.
                </p>
              </div>

              <div className="rounded-lg border border-gray-800 bg-gray-900 p-8 transition-colors hover:border-blue-400">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 p-4">
                  <Zap className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold">Data Analysis</h3>
                <p className="text-gray-300">
                  Employing machine learning algorithms and distributed
                  computing to analyze vast amounts of cosmic data for potential
                  extraterrestrial communications.
                </p>
              </div>

              <div className="rounded-lg border border-gray-800 bg-gray-900 p-8 transition-colors hover:border-blue-400">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 p-4">
                  <Users className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="mb-4 text-xl font-bold">Global Collaboration</h3>
                <p className="text-gray-300">
                  Building a worldwide network of researchers, citizen
                  scientists, and institutions to expand our search capabilities
                  and share discoveries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section
          id="research"
          className="relative overflow-hidden bg-gray-950 py-20"
        >
          <div className="absolute inset-0 opacity-20">
            <Image
              src="https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=2070&auto=format&fit=crop"
              alt="Space background"
              fill
              className="object-cover"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-blue-400 md:text-4xl">
              Our Research Areas
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="rounded-lg border border-gray-800 bg-black/60 p-8 backdrop-blur-sm">
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                  <Satellite className="h-6 w-6 text-blue-400" />
                  Radio Astronomy
                </h3>
                <p className="mb-4 text-gray-300">
                  Our primary focus is on detecting narrow-band radio signals
                  that stand out from the cosmic background noise. These signals
                  could potentially indicate technological origin.
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-300">
                  <li>Monitoring of exoplanetary systems</li>
                  <li>Analysis of unusual stellar activity</li>
                  <li>Detection of artificial megastructures</li>
                </ul>
              </div>

              <div className="rounded-lg border border-gray-800 bg-black/60 p-8 backdrop-blur-sm">
                <h3 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                  <Radio className="h-6 w-6 text-blue-400" />
                  Signal Processing
                </h3>
                <p className="mb-4 text-gray-300">
                  We develop advanced algorithms to distinguish potential
                  intelligent signals from natural cosmic phenomena and
                  human-made interference.
                </p>
                <ul className="list-inside list-disc space-y-2 text-gray-300">
                  <li>Machine learning pattern recognition</li>
                  <li>Distributed computing analysis</li>
                  <li>Novel signal detection methodologies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section id="join" className="bg-black py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 text-3xl font-bold text-blue-400 md:text-4xl">
                Join Our Mission
              </h2>
              <p className="mb-8 text-lg text-gray-300">
                Whether you're a scientist, engineer, or simply curious about
                the cosmos, there are many ways to contribute to our search for
                extraterrestrial intelligence.
              </p>
              <div className="mb-8 rounded-lg border border-gray-800 bg-gray-900 p-8">
                <h3 className="mb-4 text-xl font-bold">Stay Updated</h3>
                <p className="mb-6 text-gray-300">
                  Subscribe to our newsletter to receive updates on our latest
                  discoveries and research.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="border-gray-700 bg-gray-800 text-white"
                  />
                  <Button className="whitespace-nowrap bg-blue-600 hover:bg-blue-700">
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Volunteer
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
                >
                  Donate
                </Button>
                <Button
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400/10"
                >
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 bg-gray-950 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-6 flex items-center gap-2 md:mb-0">
              <Radio className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold tracking-wider">LISTEN</span>
            </div>
            <div className="flex flex-col gap-8 md:flex-row md:gap-12">
              <div>
                <h4 className="mb-4 text-sm font-bold uppercase text-gray-400">
                  Navigation
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#about"
                      className="text-gray-300 transition-colors hover:text-blue-400"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#mission"
                      className="text-gray-300 transition-colors hover:text-blue-400"
                    >
                      Mission
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#research"
                      className="text-gray-300 transition-colors hover:text-blue-400"
                    >
                      Research
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#join"
                      className="text-gray-300 transition-colors hover:text-blue-400"
                    >
                      Join Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-sm font-bold uppercase text-gray-400">
                  Connect
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 transition-colors hover:text-blue-400"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 transition-colors hover:text-blue-400"
                    >
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 transition-colors hover:text-blue-400"
                    >
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 transition-colors hover:text-blue-400"
                    >
                      YouTube
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-4 text-sm font-bold uppercase text-gray-400">
                  Legal
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 transition-colors hover:text-blue-400"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 transition-colors hover:text-blue-400"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 transition-colors hover:text-blue-400"
                    >
                      Cookie Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>
              © {new Date().getFullYear()} LISTEN - Locating Intelligent
              Signals Through Extraterrestrial Networks. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
