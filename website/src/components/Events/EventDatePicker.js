export default function EventDatePicker() {
    return (
        <fieldset className="sm:col-span-3">
            <legend className="text-base font-semibold leading-7 text-gray-900">Choose The Date(s) You Would Like To Attend</legend>
            <p className="mt-1 text-sm leading-6 text-gray-600">You may choose multiple dates</p>
            <div className="mt-10 sm:col-span-3">
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="date-1"
                    name="event-dates"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="date-1" className="font-medium text-gray-900">
                    Date 1
                  </label>
                  <p className="text-gray-500">Event Time | Place </p>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="date-2"
                    name="event-dates"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="date-1" className="font-medium text-gray-900">
                  Date 2
                  </label>
                  <p className="text-gray-500">Event Time | Place </p>
                </div>
              </div>
              <div className="relative flex gap-x-3">
                <div className="flex h-6 items-center">
                  <input
                    id="date-3"
                    name="event-dates"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                </div>
                <div className="text-sm leading-6">
                  <label htmlFor="date-3" className="font-medium text-gray-900">
                  Date 3
                  </label>
                  <p className="text-gray-500">Event Time | Place </p>
                </div>
              </div>
            </div>
          </fieldset>
    )
}