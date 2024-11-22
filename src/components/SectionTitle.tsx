// interface Props {
//   title?: string;
//   variant?: string;
//   className?: string;
// }
// export default function SectionTitle({
//   title = "Please add Title",
//   variant = "h3", //h1,h2,h3,h4,h5,h6
//   className = "",
// }: Props) {
//   return <variant>{title}</variant>;
// }

import React from "react";

interface Props {
  title?: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // Restrict variant to heading tags
  className?: string;
}

export default function SectionTitle({
  title = "Please add Title",
  variant = "h3",
  className = "",
}: Props) {
  return React.createElement(variant, { className }, title);
}
