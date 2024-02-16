import React from 'react'

type GhostButtonProps = {
  text: string
  icon: React.ReactElement
}

export default function GhostButton(props: GhostButtonProps) {
  const { text, icon } = props
  return (
    <button
      className={`group flex items-center gap-4 rounded-md border-2 border-solid border-lm-cta-color px-8 py-4 text-sm font-bold uppercase tracking-widest text-lm-cta-color transition-all hover:bg-lm-cta-color hover:text-lm-l-foreground-color hover:transition-all `}
    >
      {text}
      {icon}
    </button>
  )
}
