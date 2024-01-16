
// icon:clock | Bootstrap https://icons.getbootstrap.com/ | Bootstrap
import * as React from "react";

export function IconClock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z" />
      <path d="M8 16A8 8 0 108 0a8 8 0 000 16zm7-8A7 7 0 111 8a7 7 0 0114 0z" />
    </svg>
  );
}

export function IconTick(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.707 3L5.5 12.207.293 7 1 6.293l4.5 4.5 8.5-8.5.707.707z"
        clipRule="evenodd"
      />
    </svg>
  );
}

