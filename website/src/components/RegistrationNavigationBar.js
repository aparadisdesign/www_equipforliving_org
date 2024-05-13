import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { Disclosure } from '@headlessui/react';
import { ChevronRightIcon, UsersIcon, StarIcon } from '@heroicons/react/24/outline';
import AuthContext from "../context/AuthProvider";

const SURFER = 'Surfer';
const VOLUNTEER = 'Volunteer';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function RegistrationNavigationBar({ setRequestUrl }) {
  const [navigation, setNavigation] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();


  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
  
    const fetchData = async () => {
      try {
        const response = await axiosPrivate.get('/api/list/', {
          signal: controller.signal
        });
        const surfers = response.data.results.filter(person => person.registration_type === SURFER).map(person => ({
            id: person.id,
          name: `${person.first_name} ${person.last_name}`,
          href: person.url,
        }));
        const volunteers = response.data.results.filter(person => person.registration_type === VOLUNTEER).map(person => ({
            id: person.id,
          name: `${person.first_name} ${person.last_name}`,
          href: person.url,
        }));
        isMounted && setNavigation([
          { name: 'Surfers', icon: UsersIcon, current: false, children: surfers },
          { name: 'Volunteers', icon: StarIcon, current: false, children: volunteers },
        ]);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort()
    }
  }, [axiosPrivate]);

  const logout = async () => {
    // if used in more components, this should be in context 
    // axios to /logout endpoint 
      setAuth({});
      navigate('/');
  }

  return (
    <div className="h-auto flex flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-gray-100 px-6 py-10 min-w-[380px] md:h-full lg:h-full md:basis-1/4 lg:basis-1/4 basis-1">
      <div className="py-6">
        <h2 className="text-purple font-bold">Registrations</h2>
      </div>
      <nav className="flex flex-col">
        <ul className="flex px-6 flex-col gap-y-7">
          {navigation.map((item) => (
            <Disclosure as="div" key={item.name}>
              {({ open }) => (
                <div className="py-4">
                  <Disclosure.Button
                    className={classNames(
                      open ? 'bg-white' : 'hover:bg-gray-50 focus:bg-white',
                      'flex items-center w-full text-left rounded-md p-2 gap-x-3 text-sm leading-6 font-semibold text-black justify-between'
                    )}
                  >
                    <div className="flex items-center">
                    <item.icon 
                      className={classNames(
                        open ? 'text-gray-500' : 'text-black',
                        'h-5 w-5 shrink-0 mr-4'
                      )}
                      aria-hidden="true" />
                    {item.name}
                    </div>
                    <ChevronRightIcon
                      className={classNames(
                        open ? 'text-gray-500 rotate-90' : 'text-black',
                        'h-5 w-5 shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel as="ul" className="mt-1 px-2 py-4">
                    {item.children.map((subItem) => (
                      <Disclosure.Button as="button" key={subItem.id}
                        className={classNames(
                          'block rounded-md py-2 px-6 ml-9 text-sm leading-6 text-gray-700 hover:bg-gray-50 focus:bg-green focus:text-white font-semibold'
                        )}
                        onClick={(event) => {
                          event.preventDefault();
                          setRequestUrl(subItem.href);
                        }}
                      >
                        {subItem.name}
                      </Disclosure.Button>
                    ))}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}

      
  
        </ul>
      </nav>
      <button className="self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={logout}>Sign Out</button>

    </div>
  );
}
