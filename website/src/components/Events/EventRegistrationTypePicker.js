export default function EventRegistrationTypePicker({setIsVolunteer}) {
    return (
        <fieldset className="sm:col-span-3">
              <legend className="text-base font-semibold leading-7 text-gray-900">Registration Type</legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">Are you attening as a volunteer or a surfer?</p>
              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="volunteer"
                    name="registration-type-radio"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    onClick={()=>{setIsVolunteer(true)}}
                  />
                  <label htmlFor="volunteer" className="block text-sm font-medium leading-6 text-gray-900">
                    Volunteer
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="surfer"
                    name="registration-type-radio"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    onClick={()=>{setIsVolunteer(false)}}
                  />
                  <label htmlFor="surfer" className="block text-sm font-medium leading-6 text-gray-900">
                    Surfer
                  </label>
                </div>
              </div>
          </fieldset>
    )
}