'use client'

import { useRef, useEffect } from 'react'
import { useInView } from '@/hooks/useInView'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  direction?: 'up' | 'left' | 'right' | 'none'
  delay?: number
}

export default function ScrollReveal({
  children,
  className = '',
  direction = 'up',
  delay = 0,
}: ScrollRevealProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const directionClass =
    direction === 'left'
      ? 'reveal-left'
      : direction === 'right'
      ? 'reveal-right'
      : direction === 'none'
      ? ''
      : 'reveal'

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${directionClass} ${isInView ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
