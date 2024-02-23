import React from 'react'
import { Asterisk } from './icons'

export default function CTASlider() {
  return (
    <div className="relative -z-10 flex w-screen overflow-hidden bg-lm-cta-color py-6">
      <div className="absolute bottom-0 top-0 flex animate-slide  items-center gap-6">
        <span className="w-fit whitespace-nowrap text-lm-l-foreground-color">
          Aperfeiçoe sua presença online
        </span>
        <span>
          <Asterisk />
        </span>
        <span className="whitespace-nowrap text-lm-l-foreground-color">
          Evidencie a sua marca no mercado
        </span>
        <span>
          <Asterisk />
        </span>
        <span className="whitespace-nowrap text-lm-l-foreground-color">
          Transforme a primeira impressão da sua marca
        </span>
        <span>
          <Asterisk />
        </span>
        <span className="whitespace-nowrap text-lm-l-foreground-color">
          Maximize os seus resultados
        </span>
        <span>
          <Asterisk />
        </span>
        <span className="whitespace-nowrap text-lm-l-foreground-color">
          Transforme ideias em projetos incríveis
        </span>
        <span>
          <Asterisk />
        </span>
      </div>
      <div className="absolute bottom-0 top-0 flex -translate-x-full animate-slideWithDelay items-center gap-6">
        <span className="w-fit whitespace-nowrap  text-lm-l-foreground-color">
          Aperfeiçoe sua presença online
        </span>
        <span>
          <Asterisk />
        </span>
        <span className="whitespace-nowrap text-lm-l-foreground-color">
          Evidencie a sua marca no mercado
        </span>
        <span>
          <Asterisk />
        </span>
        <span className="whitespace-nowrap text-lm-l-foreground-color">
          Transforme a primeira impressão da sua marca
        </span>
        <span>
          <Asterisk />
        </span>
        <span className="whitespace-nowrap text-lm-l-foreground-color">
          Maximize os seus resultados
        </span>
        <span>
          <Asterisk />
        </span>
        <span className="whitespace-nowrap text-lm-l-foreground-color">
          Transforme ideias em projetos incríveis
        </span>
        <span>
          <Asterisk />
        </span>
      </div>
    </div>
  )
}
