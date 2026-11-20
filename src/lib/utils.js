import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatPhoneDisplay(phone) {
  return phone.replace(/(\d{5})(\d{5})/, '$1 $2')
}

export function buildWhatsAppUrl(phone, message) {
  const digits = phone.replace(/\D/g, '')
  const withCountry = digits.startsWith('91') ? digits : `91${digits}`
  return `https://wa.me/${withCountry}?text=${encodeURIComponent(message)}`
}

export function buildMailto(email, subject, body) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
