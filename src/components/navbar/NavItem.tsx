export default function NavItem({
  active = false,
  href,
  children,
}: {
  active?: boolean
  href: string
  children: React.ReactNode
}) {
  // Styling variables
  const activeMenuItem =
    'border-b-2 border-mgray-4 text-mgray-4 text-md font-medium text-center'
  const inactiveMenuItem =
    'border-none text-mgray-3 text-md font-normal text-center hover:text-mgray-4'

  // return
  return (
    <div
      className={`h-full px-3 flex justify-center items-center ${
        active ? activeMenuItem : inactiveMenuItem
      }`}>
      <a href={href} className=''>
        {children}
      </a>
    </div>
  )
}
