export default function DropdownItem({
  active = false,
  href,
  children,
}: {
  active?: boolean
  href: string
  children: React.ReactNode
}) {
  // Styling variables
  const activeMenuItem = 'bg-mgray-2 text-mgray-4'
  const inactiveMenuItem = 'text-mgray-3 hover:bg-mgray-2'

  // return
  return (
    <a
      href={href}
      className={`text-md font-normal text-left rounded-md
      h-full px-4 py-3 ${active ? activeMenuItem : inactiveMenuItem}`}>
      {children}
    </a>
  )
}
