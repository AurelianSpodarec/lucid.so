import { Cabin_Sketch, Instrument_Sans, Instrument_Serif, Neucha } from 'next/font/google'

export const cabinSketch = Cabin_Sketch({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cabin-sketch'
})

export const neucha = Neucha({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-neucha'
})

export const instrumentSans = Instrument_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-sans'
})

export const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-serif'
})
