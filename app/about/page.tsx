"use client"

import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-y-large">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="mb-8 text-balance" style={{fontFamily: "'ITC Garamond Std', Georgia, 'Times New Roman', serif", fontWeight: 500, fontSize: "clamp(3rem, 4vw + 0.5rem, 4.5rem)", lineHeight: "1.1", letterSpacing: "-0.01em", color: "hsl(var(--foreground))"}}>
                Built on Trust, Driven by{" "}
                <span className="text-title text-primary italic">Innovation</span>
              </h1>
              <p className="text-body-large mb-12 max-w-2xl mx-auto">
                Three generations of agricultural leadership in the Northern Plains.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/about/history" className="btn-primary">
                  Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/about/leadership" className="btn-secondary">
                  Meet Our Team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-y bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16"
          >
            <div className="text-center">
              <div className="text-5xl font-medium text-primary mb-3">75+</div>
              <div className="text-body mb-2">Years</div>
              <div className="text-small">Serving North Dakota farmers since 1948</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-medium text-primary mb-3">15</div>
              <div className="text-body mb-2">Locations</div>
              <div className="text-small">Strategic locations across the region</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-medium text-primary mb-3">500+</div>
              <div className="text-body mb-2">Employees</div>
              <div className="text-small">Dedicated agricultural professionals</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-medium text-primary mb-3">$2B+</div>
              <div className="text-body mb-2">Revenue</div>
              <div className="text-small">Supporting local agricultural economy</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Description */}
      <section className="section-y-large">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-headline mb-8">Company Overview</h2>
              <div className="text-body mb-6">
                <strong>Mission:</strong> To deliver innovative agricultural solutions that help farmers and partners thrive while building sustainable communities.
              </div>
              <div className="text-body mb-6">
                <strong>Vision:</strong> To be the leading agricultural platform in the Northern Plains, known for innovation, integrity, and exceptional service.
              </div>
              <div className="text-body mb-6">
                <strong>Founded:</strong> 1906 in Arthur, North Dakota
              </div>
              <div className="text-body mb-8">
                <strong>Ownership:</strong> Family-owned fourth-generation agricultural business
              </div>
              <Link
                href="/about/history"
                className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
              >
                <span className="text-body">Learn about our history</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/8 via-accent/5 to-primary/8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-serif text-6xl lg:text-7xl font-normal text-primary/70 mb-4">1906</div>
                  <div className="text-small text-muted-foreground">Founded in North Dakota</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Preview */}
      <section className="section-y-large bg-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-headline mb-6">Leadership Team</h2>
            <p className="text-body-large max-w-2xl mx-auto">
              Meet the leaders driving Arthur Companies forward with vision,
              expertise, and deep commitment to agricultural excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {[
              {
                name: "John Arthur",
                title: "Chief Executive Officer",
                description: "Fourth-generation leader with over 25 years of experience in agricultural business and innovation."
              },
              {
                name: "Sarah Mitchell",
                title: "Chief Operating Officer",
                description: "Oversees daily operations with 18 years at Arthur and deep expertise in supply chain optimization."
              },
              {
                name: "Dr. Michael Chen",
                title: "Chief Technology Officer",
                description: "Leads innovation and technology development with expertise in agricultural engineering and data science."
              }
            ].map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 card-refined hover-lift"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-2xl text-primary/60">👤</div>
                </div>
                <h3 className="text-title mb-2">{leader.name}</h3>
                <p className="text-primary text-body mb-3">{leader.title}</p>
                <p className="text-body text-muted-foreground">
                  {leader.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/about/leadership" className="btn-primary">
              View Full Leadership Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
