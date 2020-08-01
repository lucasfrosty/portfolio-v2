import React from "react"

interface Props {
  size: number;
}

export function Circle({size}: Props) {
  const sizeString = String(size);
  return (
    <svg height={sizeString} width={sizeString}>
      <circle
        cx="50%"
        cy="50%"
        r={String(size/2)}
        fill="rgba(94,31,196,0.7)"
      />
    </svg>
  )
}
