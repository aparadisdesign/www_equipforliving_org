import { useState } from 'react'
import EventDatePicker from './EventDatePicker'
import EventRegistrationTypePicker from './EventRegistrationTypePicker'
import EventVolunteerForm from './EventVolunteerForm'
import EventSurferForm from './EventSurferForm'
import EventReleaseForm from './EventReleaseForm'


export default function EventSignUp() {
  const [formPage, setFormPage] = useState(1)
const [isVolunteer, setIsVolunteer] = useState(undefined)
const [isParentGuardian, setIsParentGuardian] = useState(undefined)

const buttonClasses = 'rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
const disabedButtonClasses = 'rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-white shadow-sm cursor-not-allowed opacity-50'

  return (
    <form className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
      {formPage === 1 && (
      <div className="border-b border-gray-900/10 pb-12 mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <EventDatePicker />
          <EventRegistrationTypePicker setIsVolunteer={setIsVolunteer} />
      </div>
      )}

      {(isVolunteer !== undefined && formPage === 1) ? (
        isVolunteer ? (
          // Volunteer Form
          <EventVolunteerForm />
        ) : (
          // Surfer Form
          <EventSurferForm />
        )
      ) : (
        // Render when isVolunteer is undefined
        <p className='mt-10 text-red-500'>Please Select a Registration Type</p>
      )}

      {formPage === 2 && (
      <EventReleaseForm isParentGuardian={isParentGuardian} setIsParentGuardian={setIsParentGuardian} isVolunteer={isVolunteer} />
      )}

      {formPage === 1 && (
        <div className="submit mt-6 flex items-center justify-end gap-x-6">
        <button
        type="submit"
        className={isVolunteer === undefined ? disabedButtonClasses : buttonClasses}
        onClick={()=>{
          setFormPage(2)
        }}
        disabled={isVolunteer === undefined}
        >
          Next 
        </button>
      </div>
      )}

      {formPage === 2 && (
      <div className="submit mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-base font-semibold leading-7 text-gray-900"
        onClick={()=>{
          setFormPage(1)
        }}>
          Back
        </button>
        <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Submit Form
        </button>
      </div>
      )}

      
    </form>
  )
}