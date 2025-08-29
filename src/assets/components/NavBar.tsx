import { useState } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

type NavItem = { name: string; href: string }
const navigation: NavItem[] = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Experience', href: '#' },
  { name: 'Projects', href: '#' },
]

// Utility: combine Tailwind classes
function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  // Track active link (default: "Home")
  const [active, setActive] = useState<NavItem['name']>('Home')

  return (
    <Disclosure
      as="nav"
      className="relative bg-gray-800/50 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* --- Mobile menu button --- */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>

          {/* --- Logo + Desktop links --- */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <div className="text-2xl font-extrabold text-[rgb(100,255,218)]">
                Asuni Tarmizi
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActive(item.name)}
                    aria-current={active === item.name ? 'page' : undefined}
                    className={classNames(
                      active === item.name
                        ? 'bg-gray-950/50 text-white'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white',
                      'rounded-md px-3 py-2 text-lg font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --- Right side: GitHub link --- */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a
              href="https://github.com/sunio03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span className="sr-only">Go to GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 98 96"
                className="h-6 w-6"
              >
                <path
                  fill="white"
                  d="M48.85 0C21.83 0 0 21.83 0 48.85c0 21.58 13.98 39.89 33.36 46.35 2.44.45 3.33-1.06 3.33-2.36
         0-1.16-.04-4.23-.07-8.3-13.57 2.95-16.44-6.54-16.44-6.54-2.22-5.64-5.43-7.14-5.43-7.14-4.44-3.04.34-2.98.34-2.98
         4.91.35 7.49 5.05 7.49 5.05 4.37 7.48 11.47 5.32 14.27 4.07.44-3.17 1.71-5.33 3.1-6.55-10.84-1.23-22.22-5.42-22.22-24.12
         0-5.33 1.91-9.69 5.05-13.1-.51-1.24-2.19-6.23.48-12.97 0 0 4.12-1.32 13.5 5.01 3.92-1.09 8.1-1.63 12.27-1.65
         4.17.02 8.36.56 12.29 1.65 9.36-6.33 13.47-5.01 13.47-5.01 2.69 6.74.99 11.73.49 12.97
         3.15 3.41 5.04 7.77 5.04 13.1 0 18.75-11.4 22.88-22.27 24.09 1.76 1.52 3.32 4.5 3.32 9.07
         0 6.55-.06 11.83-.06 13.44 0 1.31.87 2.84 3.35 2.36 19.35-6.48 33.31-24.77 33.31-46.34
         C97.7 21.83 75.87 0 48.85 0Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* --- Mobile nav links --- */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              onClick={() => setActive(item.name)}
              aria-current={active === item.name ? 'page' : undefined}
              className={classNames(
                active === item.name
                  ? 'bg-gray-950/50 text-white'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
