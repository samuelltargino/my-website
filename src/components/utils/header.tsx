'use client'

import React, { useEffect, useState } from 'react'
import { ArrowRight, Logo, Moon, Select } from './icons'
import GhostButton from './buttons/ghost-button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="flex w-full items-center justify-between py-8">
      <Logo />

      <nav
        className={
          isMenuOpen
            ? `visible fixed bottom-0 left-0 flex h-full w-full translate-x-0 flex-col justify-end bg-lm-responsive-menu-color transition-all lg:relative lg:w-2/3 lg:translate-x-0 lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:bg-inherit lg:px-0`
            : `invisible fixed bottom-0 left-0 flex h-full w-full translate-x-full flex-col bg-lm-responsive-menu-color transition-all lg:visible lg:relative lg:w-2/3 lg:translate-x-0 lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:bg-inherit lg:px-0`
        }
      >
        <div className="mb-9 flex w-full max-w-xl flex-col gap-16 px-4 sm:px-0 md:max-w-3xl lg:max-w-4xl lg:flex-row lg:justify-between lg:gap-8 xl:max-w-7xl">
          <ul className="flex list-none flex-col gap-6 overflow-x-hidden lg:flex-row lg:gap-8 ">
            <li className="flex cursor-pointer items-center justify-between border-b-2 border-lm-divider-color pb-4 opacity-50 transition-all hover:border-lm-cta-color hover:opacity-100 lg:border-none lg:pb-0">
              <span className="text-2xl font-medium text-lm-foreground-color lg:text-xl">
                Início
              </span>
              <div className="lg:hidden ">
                <ArrowRight />
              </div>
            </li>
            <li className="flex cursor-pointer items-center justify-between border-b-2 border-lm-divider-color pb-4 opacity-50 transition-all hover:border-lm-cta-color hover:opacity-100 lg:border-none lg:pb-0">
              <span className="text-2xl font-medium text-lm-foreground-color lg:text-xl">
                Jornada
              </span>
              <div className="lg:hidden">
                <ArrowRight />
              </div>
            </li>
            <li className="flex cursor-pointer items-center justify-between border-b-2 border-lm-divider-color pb-4 opacity-50 transition-all hover:border-lm-cta-color hover:opacity-100 lg:border-none lg:pb-0">
              <span className="text-2xl font-medium text-lm-foreground-color  lg:text-xl">
                Trabalhos
              </span>
              <div className="lg:hidden">
                <ArrowRight />
              </div>
            </li>
          </ul>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="flex items-center justify-between lg:justify-normal lg:gap-4">
              <div className="group flex w-full cursor-pointer items-center justify-between gap-3 transition-all">
                <span className="text-base font-medium uppercase tracking-widest lg:hidden">
                  Dark mode
                </span>
                <Moon />
              </div>
              {/* Language selection
              
              <div className="flex cursor-pointer  items-center gap-3">
                <span className="w-14 font-medium uppercase tracking-widest">
                  pt-br
                </span>
                <Select />
              </div> */}
            </div>
            <GhostButton text="Fale comigo" />
          </div>
        </div>
      </nav>
      <button
        onClick={() =>
          !isMenuOpen ? setIsMenuOpen(true) : setIsMenuOpen(false)
        }
        className={
          isMenuOpen
            ? 'z-50 flex h-8 w-10 flex-col items-center justify-center transition-all lg:hidden'
            : 'flex w-10 flex-col items-center justify-center gap-2 transition-all lg:hidden'
        }
      >
        <span
          className={
            isMenuOpen
              ? 'h-1.5 w-full translate-y-1/2 rotate-45 rounded-sm bg-lm-foreground-color transition-all'
              : 'h-1.5 w-full translate-y-0 rotate-0 rounded-sm bg-lm-foreground-color transition-all '
          }
        ></span>
        <span
          className={
            isMenuOpen
              ? 'hidden h-1.5 w-full rounded-sm bg-lm-foreground-color opacity-0 transition-all'
              : 'h-1.5 w-full rounded-sm bg-lm-foreground-color opacity-100 transition-all '
          }
        ></span>
        <span
          className={
            isMenuOpen
              ? 'h-1.5 w-full -translate-y-1/2 -rotate-45 rounded-sm bg-lm-foreground-color transition-all'
              : 'h-1.5 w-full translate-y-0 rotate-0 rounded-sm bg-lm-foreground-color transition-all '
          }
        ></span>
      </button>
    </header>
  )
}
