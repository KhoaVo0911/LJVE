import * as React from "react";

export function AspectRatio({
  ratio = 16 / 9,
  className = "",
  children,
  ...props
}) {
  const padding = 100 / ratio;
  return (
    <div
      className={`relative w-full ${className}`}
      style={{ paddingBottom: `${padding}%` }}
      {...props}
    >
      <div className="absolute inset-0 w-full h-full">{children}</div>
    </div>
  );
}
