export default function GridContent({children,}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      {children}
    </div>
    )
}
