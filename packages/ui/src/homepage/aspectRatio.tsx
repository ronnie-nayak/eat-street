'use client'
// AspectRatio.tsx
import * as React from "react"

interface Props {
  children?: any,
  width: number,
  height: number
}

export function AspectRatio({ children, width, height }: Props) {
  return (
    <div style={{
      minWidth: `${width}px`,
      maxWidth: `${width * 1.5}px`,
    }}>
      <div style={{
        position: "relative",
        width: "100%",
        height: "0",
        paddingBottom: `${(1 / (width / height)) * 100}%`,
      }} >
        <div style={{
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0"
        }}>
          {children}
        </div>
      </div >
    </div>
  )
}

