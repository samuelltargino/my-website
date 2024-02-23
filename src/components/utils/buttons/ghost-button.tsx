import React from 'react'

type GhostButtonProps = {
  text: string
  icon?: React.ReactElement
}

export default function GhostButton(props: GhostButtonProps) {
  const { text, icon } = props
  return (
    <button
      className={`group relative flex w-full items-center justify-center gap-4 rounded-md border-2 border-solid border-lm-cta-color px-8 py-4 text-sm font-bold uppercase tracking-widest text-lm-cta-color transition-all before:absolute before:bottom-0 before:left-0 before:right-0 before:top-full before:-z-10 before:bg-lm-cta-color before:transition-all before:content-[''] hover:bg-lm-cta-hover-color hover:text-lm-l-foreground-color hover:transition-all hover:duration-300 hover:before:top-0 active:bg-lm-cta-active-color`}
    >
      {text}
      {icon}
    </button>
  )
}
