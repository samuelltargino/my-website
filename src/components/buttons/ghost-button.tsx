import React from 'react'

type GhostButtonProps = {
  text: string
  icon: React.ComponentElement
}

export default function GhostButton(props: GhostButtonProps) {
  const { text, icon } = props
  return (
    <button className="rounded-md border-2 border-solid border-lm-primary-color pb-4 pl-8 pr-8 pt-4 text-base font-bold uppercase tracking-widest text-lm-primary-color">
      {text}
    </button>
  )
}
