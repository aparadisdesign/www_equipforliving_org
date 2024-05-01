export default function EventSurferForm() {
    return (
        <>
            {/* Who Are You? */}
            <div className="border-b border-gray-900/10 pb-12">
              <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <legend className="text-base font-semibold leading-7 text-gray-900">Who Are You?</legend>
                <div className="mt-10 sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mt-10 sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6"
                      placeholder="you@example.com"
                      // aria-invalid="true"
                      // aria-describedby="email-error"
                    />
                    {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                    </div> */}
                  </div>
                  {/* <p className="mt-2 text-sm text-red-600" id="email-error">
                    Not a valid email address.
                  </p> */}
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="text"
                      name="phone-number"
                      id="phone-number"
                      className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="+1 (555) 987-6543"
                    />
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Emergency Contact */}
            <div className="border-b border-gray-900/10 pb-12">
              <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <legend className="text-base font-semibold leading-7 text-gray-900">Emergency Contact</legend>
                <div className="mt-10 sm:col-span-3">
                  <label htmlFor="emergency-contact-relationship" className="block text-sm font-medium leading-6 text-gray-900">Relationship To Participant</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="emergency-contact-relationship"
                      id="emergency-contact-relationship"
                      autoComplete="emergency-contact-relationship"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mt-10 sm:col-span-3">
                  <label htmlFor="emergency-contact-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="emergency-contact-name"
                      id="emergency-contact-name"
                      autoComplete="emergency-contact-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mt-10 sm:col-span-3">
                  <label htmlFor="emergency-contact-phone" className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="emergency-contact-phone"
                      id="emergency-contact-phone"
                      autoComplete="emergency-contact-phone"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </fieldset>
            </div>

            {/* Is this your first time surfing with Equipped For Surfers? */}
            <div className="border-b border-gray-900/10 pb-12">
              <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <legend className="text-base font-semibold leading-7 text-gray-900">Is this your first time surfing with Equipped For Surfers?</legend>
                <div className="mt-10 sm:col-span-3">
                  <label htmlFor="first-time-surfing" className="block text-sm font-medium leading-6 text-gray-900">Yes</label>
                  <div className="mt-2">
                    <input
                      type="radio"
                      name="previous-experience"
                      id="first-time-surfing"
                      autoComplete="first-time-surfing"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                </div>

                <div className="mt-10 sm:col-span-3">
                  <label htmlFor="not-first-time-surfing" className="block text-sm font-medium leading-6 text-gray-900">No</label>
                  <div className="mt-2">
                    <input
                      type="radio"
                      name="previous-experience"
                      id="not-first-time-surfing"
                      autoComplete="not-first-time-surfing"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                </div>
              </fieldset>
            </div>

            {/* What is your physical size what are your physical Limitations */}
            <div className="border-b border-gray-900/10 pb-12 mb-10">
              <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <legend className="text-base font-semibold leading-7 text-gray-900">Help us understand your needs</legend>
                <div className="mt-10 sm:col-span-3">
                  <label htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900">
                    Height
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="height"
                      id="height"
                      autoComplete="height"
                      placeholder="'0\' 0"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-10 sm:col-span-3">
                  <label htmlFor="weight" className="block text-sm font-medium leading-6 text-gray-900">
                    Weight
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="weight"
                      id="weight"
                      autoComplete="weight"
                      placeholder="0 lbs"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="comment" className="block text-sm font-medium leading-5 text-gray-900">
                    Can you please give us some background of your disability so we can pair you with the correct equipment and volunteer.
                  </label>
                  <div className="mt-2">
                    <textarea
                      rows={4}
                      name="comment"
                      id="comment"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </>
    )
}