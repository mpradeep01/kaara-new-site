import React from "react";

interface Props {
  children: React.ReactNode;
  full?: boolean;
  className?: string;
}

export default function Center({
  children,
  full = false,
  className = "",
}: Props) {
  return (
    <div
      className={`${
        !full && "max-w-[1340px]"
      } w-full  mx-auto overflow-x-clip xs:px-2 md:px-[62px] 2xl:px-0 ${className}`}
    >
      {children}
    </div>
  );
}
