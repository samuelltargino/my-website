import React from 'react'
import Logo from './icons/logo'
import GhostButton from './buttons/ghost-button'

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between pb-8 pt-8">
      <Logo />
      <ul className="flex list-none gap-8">
        <li className="cursor-pointer text-xl font-medium">Início</li>
        <li className="cursor-pointer text-xl font-medium">Jornada</li>
        <li className="cursor-pointer text-xl font-medium">Trabalhos</li>
      </ul>
      <GhostButton text="Fale comigo" />
    </header>
  )
}
