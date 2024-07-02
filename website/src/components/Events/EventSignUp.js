import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from '../../api/axios';

export default function EventSignUp({formPage, setFormPage}) {
const [isVolunteer, setIsVolunteer] = useState(undefined)
const [isParentGuardian, setIsParentGuardian] = useState(undefined)


// const {register, handleSubmit} = useForm();
const { register, handleSubmit, formState: { errors } } = useForm();

const buttonClasses = 'rounded-md bg-purple px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple'
const disabedButtonClasses = 'rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm cursor-not-allowed opacity-50'

  return (
    <form className="mx-auto max-w-7xl px-6 lg:px-8 py-6" onSubmit={handleSubmit(async (data) => {
      if(formPage === 1){
        setFormPage(2);
      }
      if(formPage === 2 ){
        // Assuming data contains your form data
        axios.post('/api/', data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          if (response.status === 201) {
       
           setFormPage(3);
          } else {
            console.error('Failed to send form data.');
          }
        })
        .catch(error => {
          console.error('Error sending form data:', error);
        });
      }
      })}>
      {formPage === 1 && (
      <div className="border-b border-gray-900/10 pb-12 mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
           <fieldset className="sm:col-span-3">
            <legend className="text-base font-semibold leading-7 text-gray-900">Choose The Date(s) You Would Like To Attend<span className="text-red-500">*</span></legend> 
            <p className="mt-1 text-sm leading-6 text-gray-600">You may choose multiple dates</p>
            <div className="mt-10 sm:col-span-3">
          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
          <input
            id="date-1"
            value="2024-08-08"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-purple focus:ring-red"
            {...register("attendance_dates", { required: "Please select at least one date" })}
          />
            </div>
            <div className="text-sm leading-6">
          <label htmlFor="date-1" className="font-medium text-gray-900">
          August 8th, 2024
          </label>
          <p className="text-gray-500">4:30PM - 7:30PM | Long Sands Beach </p>
            </div>
          </div>

          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
          <input
            id="date-2"
            value="2024-07-11"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-purple focus:ring-red"
            {...register("attendance_dates", { required: "Please select at least one date" })}
          />
            </div>
            <div className="text-sm leading-6">
          <label htmlFor="date-1" className="font-medium text-gray-900">
          July 11th, 2024
          </label>
          <p className="text-gray-500">4:30PM - 7:30PM | Long Sands Beach </p>
            </div>
          </div>
          <div className="relative flex gap-x-3">
            <div className="flex h-6 items-center">
          <input
            id="date-3"
            value="2024-06-20"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-purple focus:ring-red"
            {...register("attendance_dates", { required: "Please select at least one date" })}
          />
            </div>
            <div className="text-sm leading-6">
          <label htmlFor="date-3" className="font-medium text-gray-900">
            June 20th, 2024
          </label>
          <p className="text-gray-500">4:30PM - 7:30PM | Long Sands Beach </p>
            </div>
          </div>
            </div>
            {errors.attendance_dates && (<p className="text-red-500">{errors.attendance_dates.message}</p>)}
          </fieldset>
          <fieldset className="sm:col-span-3">
              <legend className="text-base font-semibold leading-7 text-gray-900">Registration Type<span className="text-red-500">*</span></legend>
              <p className="mt-1 text-sm leading-6 text-gray-600">Are you attening as a volunteer or a surfer?</p>
              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    id="volunteer"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-purple focus:ring-red"
                    onClick={()=>{setIsVolunteer(true)}}
                    value="Volunteer"
                    {...register("registration_type", {required: "Please select a registration type"})}
                  />
                  <label htmlFor="volunteer" className="block text-sm font-medium leading-6 text-gray-900">
                    Volunteer
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="surfer"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-purple focus:ring-red"
                    value="Surfer"
                    onClick={()=>{setIsVolunteer(false)}}
                    {...register("registration_type", {required: "Please select a registration type"})}
                  />
                  <label htmlFor="surfer" className="block text-sm font-medium leading-6 text-gray-900">
                    Surfer
                  </label>
                </div>
                {errors.registration_type && (<p className="text-red-500">{errors.registration_type.message}</p>)}
              </div>
          </fieldset>
      </div>
      )}


      {formPage === 1 && (
        // Contact Information Both Surfer and Volunteer
        <>
        {/* Who Are You? */}
        <div className="border-b border-gray-900/10 pb-12">
          <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <legend className="text-base font-semibold leading-7 text-gray-900">Who Are You?</legend>
            <div className="mt-10 sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name<span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
                  {...register("first_name", {required: "This field is required"})}
                />
                {errors.first_name && (<p className="text-red-500">{errors.first_name.message}</p>)}
              </div>
            </div>

            <div className="mt-10 sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name<span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
                  {...register("last_name", {required: "This field is required"})}
                />
                {errors.last_name && (<p className="text-red-500">{errors.last_name.message}</p>)}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email<span className="text-red-500">*</span>
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="email"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset sm:text-sm sm:leading-6"
                  placeholder="example@gmail.com"
                  {...register("email", {required: "This field is required"})}
                />
                {errors.email && (<p className="text-red-500">{errors.email.message}</p>)}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  id="phone-number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
                  placeholder="+1 (555) 987-6543"
                  {...register("phone_number", {required: "This field is required"})}
                />
                {errors.phone_number && (<p className="text-red-500">{errors.phone_number.message}</p>)}
              </div>
            </div>
          </fieldset>
        </div>

        {/* Emergency Contact */}
        <div className="border-b border-gray-900/10 pb-12">
          <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <legend className="text-base font-semibold leading-7 text-gray-900">Emergency Contact</legend>
            <div className="mt-10 sm:col-span-3">
              <label htmlFor="emergency-contact-name" className="block text-sm font-medium leading-6 text-gray-900">
                Contact's Name<span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="emergency-contact-name"
                  autoComplete="emergency-contact-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
                  {...register("emergency_contact_name", {required: "This field is required"})}
                />
                {errors.emergency_contact_name && (<p className="text-red-500">{errors.emergency_contact_name.message}</p>)}
              </div>
            </div>

            <div className="mt-10 sm:col-span-3">
              <label htmlFor="emergency-contact-phone" className="block text-sm font-medium leading-6 text-gray-900">
                Contact's Phone Number<span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="emergency-contact-phone"
                  placeholder="+1 (555) 987-6543"
                  autoComplete="emergency-contact-phone"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
                  {...register("emergency_contact_phone", {required: "This field is required"})}
                />
                {errors.emergency_contact_phone && (<p className="text-red-500">{errors.emergency_contact_phone.message}</p>)}
              </div>
            </div>

            <div className="mt-10 sm:col-span-3">
              <label htmlFor="emergency-contact-relationship" className="block text-sm font-medium leading-6 text-gray-900">Relationship To Participant</label>
              <div className="mt-2">
                <input
                  type="text"
                  id="emergency-contact-relationship"
                  autoComplete="emergency-contact-relationship"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
                  {...register("emergency_contact_relationship", {required: "This field is required"})}
                />
                {errors.emergency_contact_relationship && (<p className="text-red-500">{errors.emergency_contact_relationship.message}</p>)}
              </div>
            </div>
          </fieldset>
        </div>

        {/* How Heard */}
        <div className="border-b border-gray-900/10 pb-12">
          <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-12">
              <label htmlFor="how_heard" className="block text-sm font-medium leading-6 text-gray-900">
                How did you hear about Equip For Surfing?
              </label>
              <div className="relative mt-2 rounded-md shadow-sm">
                <input
                  type="text"
                  id="how_heard"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
          
                  {...register("how_heard", {required: "This field is required"})}
                />
                {errors.how_heard && (<p className="text-red-500">{errors.how_heard.message}</p>)}
              </div>
            </div>
          </fieldset>
        </div>
        </>
      )}  


      {formPage === 1 && isVolunteer !== undefined && isVolunteer && (
        // Volunteer Spcific Fields
        <div key="volunteerForm">
          {/* Volunteer Experience */}
          <div className="border-b border-gray-900/10 pb-12">
            <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <legend className="text-base font-semibold leading-7 text-gray-900">What is your preference for volunteering? <span className="text-red-500">*</span></legend>
              <div className="mt-10 sm:col-span-2 flex items-center gap-x-3 items-middle">
                  <input
                    type="radio"
                    id="in-water"
                    autoComplete="in-water"
                    value="In Water"
                    className="h-4 w-4 border-gray-300 text-purple focus:ring-red"
                    {...register("volunteer_preference")}
                  />
                  {errors.volunteer_preference && (<p className="text-red-500">{errors.volunteer_preference.message}</p>)}
                <label htmlFor="in-water" className="block text-sm font-medium leading-6 text-gray-900">In Water</label>
              </div>

              <div className="mt-10 sm:col-span-2 flex items-center gap-x-3">
                  <input
                    type="radio"
                    id="out-of-water"
                    autoComplete="out-of-water"
                    value="On Land"
                    className="h-4 w-4 border-gray-300 text-purple focus:ring-red"
                    {...register("volunteer_preference")}
                  />
                  {errors.volunteer_preference && (<p className="text-red-500">{errors.volunteer_preference.message}</p>)}
                <label htmlFor="out-of-water" className="block text-sm font-medium leading-6 text-gray-900">On Land</label>
              </div>

              <div className="mt-10 sm:col-span-2 flex items-center gap-x-3">
                  <input
                    type="radio"
                    id="wherever-needed"
                    autoComplete="wherever-needed"
                    value="Wherever"
                    className="h-4 w-4 border-gray-300 text-purple focus:ring-red"
                    {...register("volunteer_preference")}
                  />
                  {errors.volunteer_preference && (<p className="text-red-500">{errors.volunteer_preference.message}</p>)}
                <label htmlFor="wherever-needed" className="block text-sm font-medium leading-6 text-gray-900">Wherever Needed</label>
              </div>

            
              <div className="col-span-full">
                {/* Do you need a wetsuit? */}
          <div className="border-b border-gray-900/10 pb-12">
            <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <legend className="text-base font-semibold leading-7 text-gray-900">Do you need to borrow a wetsuit?<span className="text-red-500">*</span></legend>
              <div className="mt-10 sm:col-span-3">
                <label htmlFor="wetsuit" className="block text-sm font-medium leading-6 text-gray-900">Yes</label>
                <div className="mt-2">
                  <input
                    type="radio"
                    id="wetsuit"
                    autoComplete="wetsuit"
                    value="yes"
                    className="h-4 w-4 border-gray-300 text-purple focus:ring-red"
                    {...register("wetsuit", {required: "This field is required"})}
                  />
                  {errors.wetsuit && (<p className="text-red-500">{errors.wetsuit.message}</p>)}
                </div>
              </div>

              <div className="mt-10 sm:col-span-3">
                <label htmlFor="not-wetsuit" className="block text-sm font-medium leading-6 text-gray-900">No</label>
                <div className="mt-2">
                  <input
                    type="radio"
                    id="not-wetsuit"
                    autoComplete="wetsuit"
                    value="no"
                    className="h-4 w-4 border-gray-300 text-purple focus:ring-red"
                    {...register("wetsuit", {required: "This field is required"})}
                  />
                  {errors.wetsuit && (<p className="text-red-500">{errors.wetsuit.message}</p>)}
                </div>
              </div>
            </fieldset>
          </div>
              </div>
            

              {/* Volunteer Experience */}
              <div className="col-span-full">
                <label htmlFor="comment" className="block text-sm font-medium leading-5 text-gray-900">
                  Please share any relevant experience or skills you have. <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <textarea
                    rows={4}
                    id="comment"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
                    {...register("comment", {required: "This field is required"})}
                  />
                  {errors.comment && (<p className="text-red-500">{errors.comment.message}</p>)}
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      )}

      {formPage === 1 && isVolunteer !== undefined && !isVolunteer && (
        // Surfer Specific Fields
        <div key="surferForm">
          {/* Is this your first time surfing with Equipped For Surfers? */}
          <div className="border-b border-gray-900/10 pb-12">
            <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <legend className="text-base font-semibold leading-7 text-gray-900">Is this your first time surfing with Equipped For Surfing?<span className="text-red-500">*</span></legend>
              <div className="mt-10 sm:col-span-3">
                <label htmlFor="first-time-surfing" className="block text-sm font-medium leading-6 text-gray-900">Yes</label>
                <div className="mt-2">
                  <input
                    type="radio"
                    id="first-time-surfing"
                    autoComplete="first-time-surfing"
                    value="true"
                    className="h-4 w-4 border-gray-300 text-purple focus:ring-red"
                    {...register("first_time_surfing", {required: "This field is required"})}
                  />
                  {errors.first_time_surfing && (<p className="text-red-500">{errors.first_time_surfing.message}</p>)}
                </div>
              </div>

              <div className="mt-10 sm:col-span-3">
                <label htmlFor="not-first-time-surfing" className="block text-sm font-medium leading-6 text-gray-900">No</label>
                <div className="mt-2">
                  <input
                    type="radio"
                    id="not-first-time-surfing"
                    autoComplete="not-first-time-surfing"
                    value="false"
                    className="h-4 w-4 border-gray-300 text-purple focus:ring-red"
                    {...register("first_time_surfing", {required: "This field is required"})}
                  />
                  {errors.first_time_surfing && (<p className="text-red-500">{errors.first_time_surfing.message}</p>)}
                </div>
              </div>
            </fieldset>
          </div>

          {/* Do you need a wetsuit? */}
          <div className="border-b border-gray-900/10 pb-12">
            <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <legend className="text-base font-semibold leading-7 text-gray-900">Do you need to borrow a wetsuit?<span className="text-red-500">*</span></legend>
              <div className="mt-10 sm:col-span-3">
                <label htmlFor="wetsuit" className="block text-sm font-medium leading-6 text-gray-900">Yes</label>
                <div className="mt-2">
                  <input
                    type="radio"
                    id="wetsuit"
                    autoComplete="wetsuit"
                    value="yes"
                    className="h-4 w-4 border-gray-300 text-purple focus:ring-red"
                    {...register("wetsuit", {required: "This field is required"})}
                  />
                  {errors.wetsuit && (<p className="text-red-500">{errors.wetsuit.message}</p>)}
                </div>
              </div>

              <div className="mt-10 sm:col-span-3">
                <label htmlFor="not-wetsuit" className="block text-sm font-medium leading-6 text-gray-900">No</label>
                <div className="mt-2">
                  <input
                    type="radio"
                    id="not-wetsuit"
                    autoComplete="wetsuit"
                    value="no"
                    className="h-4 w-4 border-gray-300 text-purple focus:ring-red"
                    {...register("wetsuit", {required: "This field is required"})}
                  />
                  {errors.wetsuit && (<p className="text-red-500">{errors.wetsuit.message}</p>)}
                </div>
              </div>
            </fieldset>
          </div>

          {/* What is your physical size what are your physical Limitations */}
          <div className="border-b border-gray-900/10 pb-12 mb-10">
            <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <legend className="text-base font-semibold leading-7 text-gray-900">Help Us Understand how we can best support your surfing experiance</legend>
              <div className="mt-10 sm:col-span-3">
                <label htmlFor="height" className="block text-sm font-medium leading-6 text-gray-900">
                  Height <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="height"
                    autoComplete="height"
                    placeholder="'0\' 0"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
                    {...register("height", {required: "This field is required"})}
                  />
                  {errors.height && (<p className="text-red-500">{errors.height.message}</p>)}
                </div>
              </div>
              <div className="mt-10 sm:col-span-3">
                <label htmlFor="weight" className="block text-sm font-medium leading-6 text-gray-900">
                  Weight <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="weight"
                    autoComplete="weight"
                    placeholder="0 lbs"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
                    {...register("weight", {required: "This field is required"})}
                  />
                  {errors.weight && (<p className="text-red-500">{errors.weight.message}</p>)}
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="disability_background" className="block text-sm font-medium leading-5 text-gray-900">
                  Can you please give us some background about your disability, abilities, and limitations <br></br> so we can pair you with the correct equipment and volunteer.
                </label>
                <p className="mt-1 text-sm leading-6 text-gray-600">Please be as detailed as possible!</p>
                <div className="mt-2">
                  <textarea
                    rows={4}
                    id="disability_background"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
                    {...register("disability_background", {required: "This field is required"})}
                  />
                  {errors.disability_background && (<p className="text-red-500">{errors.disability_background.message}</p>)}
                </div>
              </div>

            </fieldset>
          </div>
        </div>
      )}

      {formPage === 2 && (
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10">
            <h1 className="mt-10 text-3xl font-semibold leading-8 text-gray-900">Release of Liability</h1>

            <h2 className="mt-10 text-lg font-semibold leading-7 text-gray-900">1. Agreement to Follow Directions</h2>
            <p className='mt-2'>I agree to observe and obey all posted rules and warnings, and further agree to follow any oral instructions or directions given by Equip For Living Foundation, or the employees, representatives, or agents of Equip For Living Foundation.</p>

            <h2 className='mt-10 text-lg font-semibold leading-7 text-gray-900'>2. Assumption of the Risks and Release</h2>
            <p className='mt-2'>I recognize that there are certain inherent risks associated with the above-described activity and I assume full responsibility for personal injury to myself and (if applicable) my family members, and further release and discharge Equip For Living Foundation for injury, loss, or damage arising out of my or my family's use of or presence upon the facilities of Equip For Living Foundation, whether caused by the fault of myself, my family, Equip For Living Foundation, or other third parties.</p>

            <h2 className='mt-10 text-lg font-semibold leading-7 text-gray-900'>3. Indemnification</h2>
            <p className='mt-2'>I agree to indemnify and defend Equip For Living Foundation against all claims, causes of action, damages, judgments, costs, or expenses, including attorney fees and other litigation costs, which may in any way arise from my or my family's use of or presence upon the facilities of Equip For Living Foundation.</p>

            <h2 className='mt-10 text-lg font-semibold leading-7 text-gray-900'>4. Fees</h2>
            <p className='mt-2'>I agree to pay for all damages to the facilities of Equip For Living Foundation caused by any negligent, reckless, or willful actions by me or my family.</p>

            <h2 className='mt-10 text-lg font-semibold leading-7 text-gray-900'>5. Applicable Law</h2>
            <p className='mt-2'>Any legal or equitable claim that may arise from participation in the above shall be resolved under Maine law.</p>

            <h2 className='mt-10 text-lg font-semibold leading-7 text-gray-900'>6. No Duress</h2>
            <p className='mt-2'>I agree and acknowledge that I am under no pressure or duress to sign this Agreement and that I have been given a reasonable opportunity to review it before signing. I further agree and acknowledge that I am free to have my own legal counsel review this Agreement if I so desire. I further agree and acknowledge that Equip For Living Foundation has offered to refund any fees I have paid to use its facilities if I choose not to sign this Agreement.</p>

            <h2 className='mt-10 text-lg font-semibold leading-7 text-gray-900'>7. Arm's Length Agreement</h2>
            <p className='mt-2'>This Agreement and each of its terms are the product of an arm's length negotiation between the Parties. In the event any ambiguity is found to exist in the interpretation of this Agreement, or any of its provisions, the Parties, and each of them, explicitly reject the application of any legal or equitable rule of interpretation which would lead to a construction either "for" or "against" a particular party based upon their status as the drafter of a specific term, language, or provision giving rise to such ambiguity.</p>

            <h2 className='mt-10 text-lg font-semibold leading-7 text-gray-900'>8. Enforceability</h2>
            <p className='mt-2'>The invalidity or unenforceability of any provision of this Agreement shall not affect the validity or enforceability of any other provision of this Agreement, which shall remain in full force and effect.</p>
          </div>

          <fieldset className="col-span-full">
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-x-3">
                <input
                  id="legal-guardian"
                  type="radio"
                    className="h-4 w-4 border-gray-300 text-purple focus:ring-red"
                    onClick={()=>{setIsParentGuardian(true)}}
                    value="Guardian"
                    {...register("release_role", {required: "Please Select an Option"})}
                  />
                  <label htmlFor="legal-guardian" className="block text-sm font-medium leading-6 text-gray-900">I am the parent or legal guardian of the {isVolunteer !== undefined ? (isVolunteer ? 'Volunteer' : 'Participant') : 'Undefined'}, signing this document on their behalf.</label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    id="participant"
                    type="radio"
                    className="h-4 w-4 border-gray-300 text-purple focus:ring-red"
                    value="Participant"
                    {...register("release_role", {required: "Please Select an Option"})}
                    onClick={()=>{setIsParentGuardian(false)}}
                  />
                  <label htmlFor="participant" className="block text-sm font-medium leading-6 text-gray-900">I am a {isVolunteer !== undefined ? (isVolunteer ? 'Volunteer' : 'Participant') : 'Undefined'} over the age of 18 and am signing this document for myself.</label>
                </div>
                {errors.release_role && (<p className="text-red-500">{errors.release_role.message}</p>)}
              </div>
          </fieldset>

          { isParentGuardian !== undefined ? (
            isParentGuardian? (
              <>
                <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <legend className="text-base font-semibold leading-7 text-gray-900">BY SIGNING THIS DOCUMENT I AGREE THA HAVE READ THIS DOCUMENT AND UNDERSTAND IT. I FURTHER UNDERSTAND THAT BY SIGNING THIS RELEASE, I VOLUNTARILY SURRENDER CERTAIN LEGAL RIGHTS.</legend>
                  <p className='mt-2 col-span-full'>In the event that the participant is under the age of consent (18 years of age), then this release must be signed by a parent or guardian, as follows:</p>
                  <h3 className="mt-10 text-lg font-semibold leading-7 text-gray-900 col-span-full">Parent / Guardian Waiver for Minors</h3>
                  <p className='mt-2 col-span-full'>The undersigned parent and natural guardian or legal guardian does hereby represent that he/she is, in fact, acting in such capacity and agrees to save and hold harmless and indemnify each and all of the parties referred to above from all liability, loss, cost, claim, or damage whatsoever which may be imposed upon said parties because of any defect in or lack of such capacity to so act and release said parties on behalf of the minor and the parents or legal guardian.</p>

                  <fieldset className="col-span-full">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="legal-guardian-acknowledgement"
                        type="radio"
                          className="h-4 w-4 border-gray-300 text-purple focus:ring-red"
                          value="checked"
                          {...register("legal-guardian-acknowledgement", {required: "This field is required"})}
                          onClick={()=>{setIsParentGuardian(true)}}
                        />
                        {errors['legal-guardian-acknowledgement'] && (<p className="text-red-500">{errors['legal-guardian-acknowledgement'].message}</p>)}
                        <label htmlFor="legal-guardian-acknowledgement" className="block text-sm font-medium leading-6 text-gray-900">I HEREBY CERTIFY that I am the parent or legal guardian of the participant, named above, and do hereby give my consent without reservation to the foregoing on behalf of this individual.</label>
                    </div>
                  </fieldset>

                  <input type="hidden" value={isVolunteer !== undefined ? (isVolunteer ? 'Volunteer' : 'Surfer') : 'Undefined'}/>

                  <div className="mt-10 sm:col-span-3">
                    <label htmlFor="signature" className="block text-sm font-medium leading-6 text-gray-900">
                      Signature
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="signature"
                        autoComplete="signature"
                        {...register("signature", {required: "Please Sign Here"})}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
                      />
                      {errors.signature && (<p className="text-red-500">{errors.signature.message}</p>)}
                    </div>
                  </div>

                  <div className="mt-10 sm:col-span-3">
                    <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                      Date
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        id="date"
                        autoComplete="date"
                        {...register("date", {required: "Please Enter today's Date"})}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
                      />
                      {errors.date && (<p className="text-red-500">{errors.date.message}</p>)}
                    </div>
                  </div>
                </fieldset>
              </>
            ) : (
              <>
                <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <legend className="text-base font-semibold leading-7 text-gray-900">BY SIGNING THIS DOCUMENT I AGREE THA HAVE READ THIS DOCUMENT AND UNDERSTAND IT. I FURTHER UNDERSTAND THAT BY SIGNING THIS RELEASE, I VOLUNTARILY SURRENDER CERTAIN LEGAL RIGHTS.</legend>
                  {/* If isVolunteer create a Hidden Input that stores the value Volunteer else stores the value Surfer */}
                  <input type="hidden" value={isVolunteer !== undefined ? (isVolunteer ? 'Volunteer' : 'Surfer') : 'Undefined'}/>

                  <div className="mt-10 sm:col-span-3">
                    <label htmlFor="signature" className="block text-sm font-medium leading-6 text-gray-900">
                      Signature
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="signature"
                        autoComplete="signature"
                        {...register("signature", {required: "Please Sign Here"})}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
                      />
                      {errors.signature && (<p className="text-red-500">{errors.signature.message}</p>)}
                    </div>
                  </div>

                  <div className="mt-10 sm:col-span-3">
                    <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                      Date
                    </label>
                    <div className="mt-2">
                      <input
                        type="date"
                        id="date"
                        autoComplete="date"
                        {...register("date", {required: "Please Enter today's Date"})}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red sm:text-sm sm:leading-6"
                      />
                      {errors.date && (<p className="text-red-500">{errors.date.message}</p>)}
                    </div>
                  </div>
                </fieldset>
              </>
            )
          ) : (
            // Render when isParentGuardian is undefined
            <p className='mt-10 text-purple'>Please Select a Legal Guardian Acknowledgement<span className="text-red-500">*</span></p>
          )}
        </div>
      )}

      {formPage === 1 && (
        <div className="submit mt-6 flex items-center justify-end gap-x-6">
        <button className="rounded-md bg-purple px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple" type="submit">
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
        <button type="submit" className="rounded-md bg-purple px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple">
          Submit Form
        </button>
      </div>
      )}

      {formPage === 3 && (
        <>
          <div className="mt-10">
            <h1 className="mt-10 text-4xl font-semibold leading-8 text-gray-900">Thank you for registering!</h1>
            <p className="mt-2 text-gray-600">Should we require any further details, a member of the Equip For Living team will be in touch with you. Otherwise, we look forward to seeing you at the event.</p>
          </div>
        </>
      )}
    </form>
  )
}