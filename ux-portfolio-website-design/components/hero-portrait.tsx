'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { withBasePath } from '@/lib/site-path'

export function HeroPortrait() {
  const imageRef = useRef<HTMLImageElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (imageRef.current?.complete && imageRef.current.naturalWidth > 0) {
      setIsLoaded(true)
    }
  }, [])

  return (
    <Image
      ref={imageRef}
      src={withBasePath('/projects/Tim_headshot.png')}
      alt="Tim Demesmaeker"
      width={1792}
      height={2400}
      priority
      sizes="(min-width: 1024px) 40vw, 80vw"
      onLoad={() => setIsLoaded(true)}
      className={`hero-portrait relative h-full w-auto max-w-full object-contain object-bottom transition-opacity duration-1000 motion-reduce:transition-none ${
        isLoaded ? 'opacity-100' : 'opacity-0 motion-reduce:opacity-100'
      }`}
    />
  )
}
