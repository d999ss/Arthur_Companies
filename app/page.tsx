import Image from "next/image"
import Link from "next/link"
import { FadeIn, FadeInLeft, FadeInRight } from "@/components/animated"
import { FuturesPricing } from '@/components/futures-pricing'
import { WeatherDashboard } from '@/components/weather-dashboard'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />

        <div className="relative z-10 container py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h1 className="mb-3 text-balance text-display">
                Arthur: Where Innovation Grows, {" "}
                <span className="text-primary italic">From the Ground Up.</span>
              </h1>
              <p className="text-body-large mb-10 max-w-3xl">
                Over one hundred years in the field.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/grain" className="btn-primary">
                  View Cash Bids
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/about" className="btn-secondary">
                  About Arthur
                </Link>
              </div>
            </FadeIn>

            <FadeInRight delay={0.2} className="flex justify-center lg:justify-end">
              <Image
                src="/2025, 02_08_11 PM.png"
                alt="Arthur Companies agricultural operations"
                width={600}
                height={400}
                priority
                sizes="(min-width: 1024px) 600px, 90vw"
                style={{ width: 'auto', height: 'auto' }}
              />
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* For Growers Section */}
      <section className="section-y-large">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <h2 className="text-headline mb-8">For Growers</h2>
              <p className="text-body mb-8">
                You know your acres. We know the market. Our team shows up, answers the phone, and competes to earn your business whether you're hauling to an Arthur elevator, planning for next year with our agronomy experts, or growing under contract for specialty end-users.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/grain" className="btn-primary">
                  Grain
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/products-services" className="btn-secondary">
                  Products & Services
                </Link>
              </div>
            </FadeInLeft>

            <FadeInRight className="flex justify-center">
              <Image
                src="/Aug 6, 2025, 02_25_19 PM.png"
                alt="Arthur Companies serving growers"
                width={600}
                height={400}
                sizes="(min-width: 1024px) 600px, 90vw"
                style={{ width: 'auto', height: 'auto' }}
              />
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* For Partners Section */}
      <section className="section-y-large bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft className="flex justify-center lg:order-2">
              <Image
                src="/Aug 6, 2025, 02_31_51 PM.png"
                alt="Arthur Companies partnering with industry leaders"
                width={600}
                height={400}
                sizes="(min-width: 1024px) 600px, 90vw"
                style={{ width: 'auto', height: 'auto' }}
              />
            </FadeInLeft>

            <FadeInRight className="lg:order-1">
              <h2 className="text-headline mb-8">For Partners</h2>
              <p className="text-body mb-8">
                Arthur is a growing agribusiness platform trusted by processors, suppliers, and our industry-leading peers. Our businesses span grain origination, crop inputs, research, logistics, and specialty ingredients—all supported by a culture of integrity and execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/products-services" className="btn-primary">
                  Products & Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/research-development" className="btn-secondary">
                  Innovation
                </Link>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-y-large">
        <div className="container">
          <FadeIn className="text-center mb-16">
            <h2 className="text-headline mb-6">Company Values</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              The principles that have guided our work for over a century.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {["Integrity","Service","Pioneering","Excellence"].map((title, index) => (
              <FadeIn key={title} delay={index * 0.1} className="p-6 card-refined">
                <h3 className="text-title mb-3">{title}</h3>
                <p className="text-body">
                  {title === "Integrity" && "We do what we say we'll do—no excuses. We do the right thing. We do what we say we will do. We treat others the way we would like to be treated. We embody trust and teamwork."}
                  {title === "Service" && "We care for the land, our communities, and your trust. Provide value in every interaction with producers, partners, and the communities we serve and live in. We serve with a positive attitude and adapt to meet needs and exceed expectations."}
                  {title === "Pioneering" && "From new genetics to digital tools, we're on the leading edge. We are not satisfied with the status quo and are committed to creating new opportunities and higher levels of service."}
                  {title === "Excellence" && "We invest in people, platforms, and partnerships for the long haul. If it is worth doing, we do it right the first time and strive for excellence in all we do. We have an ownership mindset and take accountability in our words and actions."}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Weather & Market Dashboard */}
      <section className="section-y bg-muted/20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-headline mb-4">Real-Time Agricultural Intelligence</h2>
            <p className="text-body-large max-w-4xl mx-auto text-muted-foreground">
              Make informed decisions with live market data and precision weather forecasting
            </p>
          </div>

          {/* Weather Dashboard - Full Width */}
          <div className="mb-16 p-8 bg-card rounded-2xl shadow-lg">
            <WeatherDashboard />
          </div>

          {/* Market Prices - Focused Section */}
          <div className="p-8 bg-card rounded-2xl shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-title mb-3">Futures Market Data</h3>
              <p className="text-body text-muted-foreground max-w-2xl mx-auto">
                Live futures pricing for corn, soybeans, and wheat contracts
              </p>
            </div>
            <FuturesPricing />
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="section-y-large">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-headline mb-6">Arthur Co. Cash Bids</h2>
              <p className="text-body-large mb-12">
                Free Real-time harvest information for growers, by Arthur Companies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  disabled
                  className="btn-primary opacity-50 cursor-not-allowed"
                  aria-label="iOS app coming soon"
                >
                  Download for iOS
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button
                  disabled
                  className="btn-secondary opacity-50 cursor-not-allowed"
                  aria-label="Android app coming soon"
                >
                  Download for Android
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="section-y-large bg-foreground text-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <p className="text-serif-large text-center text-background">
                Arthur delivers performance you can measure and people you can trust.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}