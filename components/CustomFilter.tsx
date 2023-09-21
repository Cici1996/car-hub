'use client'

import { CustomFilterProps, OptionsProps } from '@/types'
import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'
import Image from 'next/image'
import { updateSearchParams } from '@/utils'
import { useRouter } from 'next/navigation'

const CustomFilter = ({ title, options, setFilter }: CustomFilterProps) => {
  const router = useRouter();
  const [selected, setSelected] = useState<OptionsProps>(options[0])

  // const handleUpdateParams = (e: OptionsProps) => {
  //   const newPathName = updateSearchParams(e.title, e.value.toLocaleLowerCase())
  //   router.push(newPathName)
  // }

  return (
    <div className='w-fit'>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e)
          setFilter(e.value)
        }}
      >

        <div className='relative w-fit z-10'>
          <Listbox.Button className="custom-filter__btn">
            <span className='block truncate'>{selected?.title}</span>
            <Image src={'/chevron-up-down.svg'}
              width={20}
              height={20}
              className='ml-4 object-contain'
              alt='chevron up down' />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className={'custom-filter__options'}>
              {options.map((options) => (
                <Listbox.Option
                  key={options.title}
                  value={options}
                  className={({ active }) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}
                >
                  {({ selected }) => (
                    <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{options.title}</span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>

      </Listbox>
    </div>
  )
}

export default CustomFilter