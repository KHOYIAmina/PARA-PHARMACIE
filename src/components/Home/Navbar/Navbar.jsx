  import { Fragment, useState } from 'react';
  import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
  import { Link } from 'react-router-dom';
  import { ChevronDownIcon } from '@heroicons/react/20/solid';
  import { Categorie } from '../../../Data/dataProduits'; // Assurez-vous de spécifier le chemin correct




  export default function Navbar() {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    const [activePage, setActivePage] = useState('Accueil'); // Default to 'Accueil'

    return (
      <header className="bg-white justify-end">
        <nav className="bg-lime-800 flex justify-center p-6 lg:px-8" aria-label="Global">
          
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6 text-white hover:scale-105">
              Accueil
          </Link>
            <Popover className="relative" onMouseEnter={() => setIsPopoverOpen(true)} onMouseLeave={() => setIsPopoverOpen(false)}>
        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:scale-105">
          Catégorie
          <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
        </Popover.Button>

        <Transition
          show={isPopoverOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-40 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
  <div className="p-4">
    <ul className="list-none p-0 m-0">
      {Categorie.map((categorie) => (
        <li key={categorie.cat} className="text-gray-700">
          <div
            className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
          >
            <div className="flex-auto">
              <a href="#" className="block font-semibold text-gray-900">
                {categorie.cat}
                <span className="absolute inset-0" />
              </a>
            </div>
          </div>
          
        </li>
      ))}
    </ul>
  </div>
</Popover.Panel>
        </Transition>
      </Popover>
            <Link to='/Marque' className="text-sm font-semibold leading-6 text-white hover:scale-105">
              Marque
            </Link>
            <Link to='/Promotion' className="text-sm font-semibold leading-6 text-white hover:scale-105">
              Promotion
            </Link>
            <a href="#" className="text-sm font-semibold leading-6 text-white hover:scale-105">
              Nouveau collection
            </a>
          </Popover.Group>
        </nav>
      </header>
    );
  }
