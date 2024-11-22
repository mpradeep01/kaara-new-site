interface Props {
  children?: React.ReactNode;
  className?: string;
  dataCursor?: string;
}

export default function Section({
  children,
  className,
  dataCursor = "default",
}: Props) {
  return (
    <section
      data-cursor={dataCursor}
      className={`min-h-screen w-full py-20 h-full flex justify-center items-center ${className}`}
    >
      {children}
    </section>
  );
}
