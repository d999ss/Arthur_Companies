"use client"

import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedProps {
  children: ReactNode
  delay?: number
  className?: string
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const fadeInRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
}

const fadeInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
}

export function FadeIn({ children, delay = 0, className }: AnimatedProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInVariants}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeInRight({ children, delay = 0, className }: AnimatedProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInRightVariants}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeInLeft({ children, delay = 0, className }: AnimatedProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInLeftVariants}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}