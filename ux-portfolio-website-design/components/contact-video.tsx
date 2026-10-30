'use client'

import { useEffect, useRef } from 'react'
import { withBasePath } from '@/lib/site-path'

export function ContactVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((error: unknown) => {
            if (error instanceof DOMException && error.name === 'AbortError') return
            console.error('Kontaktvideo konnte nicht abgespielt werden.', error)
          })
        } else {
          video.pause()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={videoRef}
      className="contact-video mx-auto block h-auto w-full max-w-[220px] invert dark:invert-0 lg:translate-y-8 lg:justify-self-end"
      muted
      playsInline
      preload="none"
      aria-label="Logo-Animation"
    >
      <source src={withBasePath('/projects/LogoEffekt.mp4')} type="video/mp4" />
      Dein Browser unterstützt die Videowiedergabe nicht.
    </video>
  )
}
