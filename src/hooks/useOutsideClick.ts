import { useCallback, useEffect, useRef } from 'react'

export const useOutsideClick = <ElementOfRef extends HTMLElement>(functionToRunOnClick: () => void) => {
  const ref = useRef<ElementOfRef>(null)
  const handleClickOutside = useCallback(
    (event: globalThis.MouseEvent) => {
      if (ref && ref.current && !ref.current.contains(event.target as Node)) {
        functionToRunOnClick()
      }
    },
    [functionToRunOnClick]
  )
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, functionToRunOnClick, handleClickOutside])

  return ref
}
