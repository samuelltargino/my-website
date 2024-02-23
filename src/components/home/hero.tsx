import React from 'react'
import { Devices } from '../utils/icons'
import FilledButton from '../utils/buttons/filledButton'

export default function Hero() {
  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col gap-4 lg:w-5/6">
        <div className="-z-10 flex w-full items-center gap-4 opacity-60">
          <Devices />
          <span className="text-sm font-bold uppercase tracking-widest lg:text-base">
            Websites, lojas e aplicações web
          </span>
        </div>
        <h1 className="text-3xl font-bold leading-tight text-lm-foreground-color md:text-5xl lg:text-6xl">
          Desenvolvimento, Design de Interfaces e Experiência do Usuário
        </h1>
      </div>

      <FilledButton />
    </div>
  )
}
