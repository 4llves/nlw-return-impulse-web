import { Popover } from '@headlessui/react'
import { X } from 'phosphor-react'

export function CloseButton() {
  return (
    <Popover.Button
      className="
      top-5
      right-5
      absolute
      
      dark:text-zinc-400
      text-zinc-500
      
      dark:hover:text-zinc-100
      hover:text-zinc-800
      "
      title="Fechar Forumário de Feedback"
    >
      <X weight='bold' className="w-4 h-4" />
    </Popover.Button>
  )
}