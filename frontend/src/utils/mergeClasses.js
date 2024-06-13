import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function CS(...inputs) {
  return twMerge(clsx(inputs))
}