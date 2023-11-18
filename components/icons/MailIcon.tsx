'use client';
import * as React from "react";

function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="3em"
      width="3em"
      {...props}
    >
      <defs>
      <radialGradient id="gradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
        <stop offset="0%" style={{ stopColor: 'var(--accent-color)', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'var(--delim-color)', stopOpacity: 1 }} />
      </radialGradient>
    </defs>
      <path fill="url(#gradient)" d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 01194 256h648.8a7.2 7.2 0 014.4 12.9z" />
    </svg>
  );
}

export default IconMail;