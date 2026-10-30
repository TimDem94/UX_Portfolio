'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { withBasePath } from '@/lib/site-path'

export function HeroPortrait() {
  const { resolvedTheme } = useTheme()
  const imageRef = useRef<HTMLImageElement>(null)
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)
  const imageSrc = withBasePath(
    resolvedTheme === 'light' ? '/projects/Tim_headshot_white.png' : '/projects/Tim_headshot.png',
  )
  const isThemeResolved = resolvedTheme === 'light' || resolvedTheme === 'dark'

  useEffect(() => {
    if (!isThemeResolved) return
    const image = imageRef.current
    if (image?.complete && image.naturalWidth > 0) setLoadedSrc(imageSrc)
  }, [imageSrc, isThemeResolved])

  if (!isThemeResolved) return null

  return (
    <Image
      key={imageSrc}
      ref={imageRef}
      src={imageSrc}
      alt="Tim Demesmaeker"
      width={1792}
      height={2400}
      priority
      sizes="(min-width: 1024px) 40vw, 80vw"
      onLoad={() => setLoadedSrc(imageSrc)}
      className={`hero-portrait relative h-full w-auto max-w-full object-contain object-bottom transition-opacity duration-1000 motion-reduce:transition-none ${
        loadedSrc === imageSrc ? 'opacity-100' : 'opacity-0 motion-reduce:opacity-100'
      }`}
    />
  )
}
