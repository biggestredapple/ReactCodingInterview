import React, { ReactNode, useState, useRef } from "react"

interface Props {
  tooltipContent: ReactNode,
  children: string
}

interface rectTypes {
  left?: Number,
  top?: Number,
  right?: Number,
  bottom?: Number
}

const ButtonWithTooltip: React.FC<Props> = ({ tooltipContent, children }) => {
  // const { targetRect, setTargetRect } = useState<rectTypes>()
  const buttonRef = useRef(null)
  return (
    <>
      <button
        ref={buttonRef}
        onPointerEnter={() => {
          // const rect = buttonRef.current?.getBounndingClientRect()
        }}
      >
        {children}
      </button>
    </>
  )
}

export default ButtonWithTooltip;