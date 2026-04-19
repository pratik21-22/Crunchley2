import Link from 'next/link'

const whatsappHref = 'https://wa.me/918102763281?text=Hello%20Crunchley,%20I%20want%20to%20know%20more%20about%20your%20products.'

export function WhatsAppButton() {
  return (
    <Link
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Crunchley on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_36px_-18px_rgba(0,0,0,0.55)] ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_22px_44px_-18px_rgba(0,0,0,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:bottom-6 sm:right-6 sm:h-15 sm:w-15"
    >
      <span className="sr-only">Open WhatsApp chat</span>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-7 w-7 transition-transform duration-300 group-hover:scale-110"
        fill="currentColor"
      >
        <path d="M19.11 17.47c-.26-.13-1.53-.75-1.77-.84-.24-.09-.42-.13-.6.13-.18.26-.69.84-.84 1.01-.16.18-.31.2-.57.07-.26-.13-1.08-.4-2.06-1.27-.76-.68-1.27-1.52-1.42-1.78-.15-.26-.02-.4.11-.53.11-.11.26-.31.39-.46.13-.16.18-.26.26-.44.09-.18.04-.33-.02-.46-.07-.13-.6-1.4-.82-1.93-.21-.51-.43-.44-.6-.45h-.52c-.18 0-.46.07-.7.33-.24.26-.92.89-.92 2.17 0 1.28.94 2.52 1.07 2.69.13.18 1.84 2.81 4.46 3.94.62.27 1.1.43 1.47.55.62.2 1.18.17 1.62.1.49-.07 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.06-.11-.24-.18-.5-.31Zm-3.06 7.79h-.01a10.93 10.93 0 0 1-5.58-1.53l-.4-.24-4.14 1.09 1.11-4.04-.26-.42a10.93 10.93 0 1 1 9.28 5.14Zm9.33-9.33a13.15 13.15 0 0 0-23.38-8.13A13.04 13.04 0 0 0 1.6 24.7L0 32l7.48-1.96a13.13 13.13 0 0 0 6.28 1.6h.01a13.15 13.15 0 0 0 13.13-13.16Zm-13.14 10.6h-.01a10.58 10.58 0 0 1-5.4-1.48l-.39-.23-3.92 1.03 1.05-3.82-.25-.41a10.57 10.57 0 1 1 9.02 4.91Z" />
      </svg>
    </Link>
  )
}