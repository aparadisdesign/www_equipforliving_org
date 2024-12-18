import { PhotoIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form'
import axios from '../api/axios';


export default function GrantApplicationForm() {

  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    
    // Append non-file fields
    Object.keys(data).forEach((key) => {
      // Check if the field is an array (since file fields are returned as arrays)
      if (Array.isArray(data[key])) {
        // If it's a file input, append only the file (data[key][0])
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    });
  
    // If using files, handle each separately if necessary
    if (data.mainecare_denial_upload && data.mainecare_denial_upload[0]) {
      formData.append("mainecare_denial_upload", data.mainecare_denial_upload[0]);
    }
    
    if (data.vendor_quote_upload && data.vendor_quote_upload[0]) {
      formData.append("vendor_quote_upload", data.vendor_quote_upload[0]);
    }
    
    if (data.letter_of_recommendation_upload && data.letter_of_recommendation_upload[0]) {
      formData.append("letter_of_recommendation_upload", data.letter_of_recommendation_upload[0]);
    }
  
    try {
      const response = await axios.post('/api/grant/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Form data sent successfully:', response.data);
    } catch (error) {
      console.error('Error sending form data:', error);
    }
  };
  
  // Custom handler for file inputs
const handleFileChange = (e) => {
  const { name, files } = e.target;
  setValue(name, files); // Update the form's state with selected file(s)
};

  return (
    <form className="space-y-8 mx-auto max-w-7xl px-6 lg:px-8 py-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6 border-b pb-8">
        <h2 className="text-xl font-semibold text-gray-900">Equip For Funding Grant Application</h2>
        <p className="text-sm text-gray-700">
          Please read all questions and answer them completely. We will consider only complete applications.
        </p>
        <p className="text-sm font-semibold text-gray-700">Application deadline: November 1st, 2024.</p>
        <p className="text-sm font-semibold text-gray-700">Funding will be awarded by December 1st, 2024.</p>
        <p className="text-sm font-semibold text-red-700">*The program is available only to individuals who are 21 years or older and currently reside in Maine.</p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        {/* Personal Info Form fields */}
          <div className='col-span-full mb-5'>
            <p className="text-lg font-semibold text-indigo-600 mb-1">Contact Information</p>
            <p className='text-sm text-gray-700'>Please provide your contact information below.</p>
          </div>

          <div>
            <label htmlFor="first_name" className="block text-sm font-medium text-gray-900">
              First Name
            </label>
            <div className="mt-2">
              <input
                id="first_name"
                name="first_name"
                type="text"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("first_name", )}
              />
            </div>
          </div>

          <div>
            <label htmlFor="last_name" className="block text-sm font-medium text-gray-900">
              Last Name
            </label>
            <div className="mt-2">
              <input
                id="last_name"
                name="last_name"
                type="text"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("last_name", )}
              />
            </div>
          </div>

          <div>
            <label htmlFor="date_of_birth" className="block text-sm font-medium text-gray-900">
              Date Of Birth
            </label>
            <div className="mt-2">
              <input
                id="date_of_birth"
                name="date_of_birth"
                type="date"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("date_of_birth", )}
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-900">
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="phone_number"
                name="phone_number"
                type="tel"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("phone_number", )}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Email Address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("email", )}
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="home_address" className="block text-sm font-medium text-gray-900">
              Home Address
            </label>
            <div className="mt-2">
              <input
                id="home_address"
                name="home_address"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("home_address", )}
              />
            </div>
          </div>

          <div>
            <label htmlFor="home_city" className="block text-sm font-medium text-gray-900">
              City
            </label>
            <div className="mt-2">
              <input
                id="home_city"
                name="home_city"
                type="text"
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("home_city", )}
              />
            </div>
          </div>

          <div>
            <label htmlFor="home_state" className="block text-sm font-medium text-gray-900">
              State
            </label>
            <div className="mt-2">
              <input
                id="home_state"
                name="home_state"
                type="text"
                maxLength={2}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("home_state", )}
              />
            </div>
          </div>

          <div>
            <label htmlFor="home_zip" className="block text-sm font-medium text-gray-900">
              ZIP Code
            </label>
            <div className="mt-2">
              <input
                id="home_zip"
                name="home_zip"
                type="text"
                maxLength={10}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("home_zip", )}
              />
            </div>
          </div>

          <div className="col-span-full">
            <p className="text-lg font-semibold mb-1"> Only fill out the following fields if your mailing address is different from your home address.</p>
            <label htmlFor="mailing_address" className="block text-sm font-medium text-gray-900">
              Mailing Address
            </label>
            <div className="mt-2">
              <input
                id="mailing_address"
                name="mailing_address"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("mailing_address", )}
              />
            </div>
          </div>

          <div>
            <label htmlFor="mailing_city" className="block text-sm font-medium text-gray-900">
              City
            </label>
            <div className="mt-2">
              <input
                id="mailing_city"
                name="mailing_city"
                type="text"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("mailing_city", )}
              />
            </div>
          </div>

          <div>
            <label htmlFor="mailing_state" className="block text-sm font-medium text-gray-900">
              State
            </label>
            <div className="mt-2">
              <input
                id="mailing_state"
                name="mailing_state"
                type="text"
                maxLength={2}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("mailing_state", )}
              />
            </div>
          </div>

          <div>
            <label htmlFor="mailing_zip" className="block text-sm font-medium text-gray-900">
              ZIP Code
            </label>
            <div className="mt-2">
              <input
                id="mailing_zip"
                name="mailing_zip"
                type="text"
                maxLength={10}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                {...register("mailing_zip", )}
              />
            </div>
          </div>


        {/* Application Form fields */}
        <div className='col-span-full col-span-full mb-5'>
          <p className="text-lg font-semibold text-indigo-600 mb-1">Application Information</p>
          <p className='text-sm text-gray-700'>In order for us to best serve you, we'll need to know a bit more about why you are applying.</p>
          <p className='text-sm text-gray-700'>
             Our funding goes toward adaptive equipment, assistive technology, therapy treatment and/or any other compulsory (or essential) item not cover by insurance or any additional funding resources.
          </p>
        </div>
        <div>
          <label htmlFor="diagnosis" className="block text-sm font-medium text-gray-900">
            Primary Diagnosis
          </label>
          <div className="mt-2">
            <textarea
              id="diagnosis"
              name="diagnosis"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("diagnosis", )}
            />
          </div>
        </div>

        <div>
          <label htmlFor="application_reason" className="block text-sm font-medium text-gray-900">
            Reason for Application
          </label>
          <div className="mt-2">
            <select
              id="application_reason"
              name="application_reason"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("application_reason", )}
            >
              <option value="">Select reason</option>
              <option value="equipment">Equipment</option>
              <option value="therapy">Therapy</option>
              <option value="technology">Technology</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="vendor_name" className="block text-sm font-medium text-gray-900">
            Vendor Name
          </label>
          <div className="mt-2">
            <input
              id="vendor_name"
              name="vendor_name"
              type="text"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("vendor_name", )}
            />
          </div>
        </div>

        <div>
          <label htmlFor="total_cost" className="block text-sm font-medium text-gray-900">
            Total Cost
          </label>
          <div className="mt-2">
            <input
              id="total_cost"
              name="total_cost"
              type="number"
              step="0.01"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("total_cost", )}
            />
          </div>
        </div>

        <div>
          <label htmlFor="amount_requested" className="block text-sm font-medium text-gray-900">
            Amount Requested
          </label>
          <div className="mt-2">
            <input
              id="amount_requested"
              name="amount_requested"
              type="number"
              step="0.01"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("amount_requested", )}
            />
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="other_funding_sources" className="block text-sm font-medium text-gray-900">
            Other Funding Sources
          </label>
          <div className="mt-2">
            <textarea
              id="other_funding_sources"
              name="other_funding_sources"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("other_funding_sources", )}
            />
          </div>
        </div>

        <div className="col-span-full">
          <div className='col-span-full mb-5'>
            <p className='text-gray-700 text-lg font-semibold mb-1'>Our program is built to help those in need of assistance with acquiring equipment, technology, and therapies they otherwise would not gain access to.</p>
            <p className='text-sm text-gray-700'>
            This part of the application is incredibly important. In this application letter we ask that you please describe the request in detail, what service equipment or technologies are you requesting assistance with? Please also provide us with information about your need. Why are you asking for it? How will it help you and or improve your quality of life?
            </p>
          </div>

          <label htmlFor="application_letter" className="block text-sm font-medium text-gray-900">
            Application Letter
          </label>
          <div className="mt-2">
            <textarea
              id="application_letter"
              name="application_letter"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("application_letter", )}
            />
          </div>
        </div>

        <div className='col-span-full mb-5'>
          <p className='text-lg font-semibold text-indigo-600 mb-1'>In order to help contribute to your request, we need to have the following documents:</p>
          <ul className='text-sm text-gray-700 pl-3'>
            <li className='mb-2'>1. If you have been denied coverage for this item by insurance or MaineCare, please include that denial letter.</li>
            <li className='mb-2'>2. Please include an estimate/quote for the equipment or service from your vendor.</li>
            <li className='mb-2'>3. We will also need a letter of recommendation from the applicant's Physician/Therapist/Healthcare Professional documenting the applicant's need for the requested service, equipment, or technology. This letter must speak to the specific need of the item/service requested from the Equip For Funding Grant, the more information provided in this letter the better.</li>
          </ul>
        </div>

        <div className="col-span-full">
          <label htmlFor="mainecare_denial_upload" className="block text-sm font-medium leading-6 text-gray-900">
            MaineCare Denial Letter
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="mainecare_denial_upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input id="mainecare_denial_upload" name="mainecare_denial_upload" type="file" className="sr-only" {...register("mainecare_denial_upload")}
            onChange={handleFileChange} />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PDF, Docx, Word</p>
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="vendor_quote_upload" className="block text-sm font-medium leading-6 text-gray-900">
            Vendor Quote Upload
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="vendor_quote_upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input id="vendor_quote_upload" name="vendor_quote_upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PDF, Docx, Word</p>
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="letter_of_recommendation_upload" className="block text-sm font-medium leading-6 text-gray-900">
            Letter of Recommendation Upload
          </label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <PhotoIcon aria-hidden="true" className="mx-auto h-12 w-12 text-gray-300" />
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="letter_of_recommendation_upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Upload a file</span>
                  <input id="letter_of_recommendation_upload" name="letter_of_recommendation_upload" type="file" className="sr-only" {...register("letter_of_recommendation_upload")} onChange={handleFileChange}  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PDF, Docx, Word</p>
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="how_heard" className="block text-sm font-medium text-gray-900">
            How Did You Hear About Equip For Funding?
          </label>
          <div className="mt-2">
            <textarea
              id="how_heard"
              name="how_heard"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("how_heard", )}
            />
          </div>
        </div>

        {/* Sign and Submit Form fields */}
        <div className='col-span-full mb-5'>
          <p className="text-lg font-semibold text-indigo-600 mb-1">Sign and Submit</p>
          <p className='text-sm text-gray-700'>Please double check that you have filled out all the fields then sign and submit the form below.</p>
          <div className="mt-10">
            <h2 className="mt-10 text-3xl font-semibold leading-8 text-gray-900">Authorization</h2>

            <p className="mt-2">This consent has been made freely, voluntarily, and without coercion.</p>

            <p className="mt-2">I understand that the information indicated is protected by law and cannot be released without my written permission, unless otherwise specifically permitted by law.</p>

            <p className="mt-2">I understand that I have the right to review information and material released.</p>

            <p className="mt-2">I understand that I have the right to refuse to disclose the following specified information (Specify this information in the section below).</p>

            <p className="mt-2">This authorization is valid for a period of one (1) year from the date of signing, but I also understand that I have the right to revoke this authorization in writing at any time.</p>

            <p className="mt-2">I understand that if this information is disclosed to a third party, the information may no longer be protected by the federal or state privacy laws and may be redisclosed by the person or entity that receives this information.</p>

            <p className="mt-2">Finally, I understand that if I am being considered for an Equip For Funding Grant, more information may be needed prior to the final decision, so please respond promptly to follow-up questions.</p>
        </div>
        </div>

        <div className="col-span-full">
          <label htmlFor="refuse_to_disclose" className="block text-sm font-medium text-gray-900">
            I refuse to disclose the following
          </label>
          <div className="mt-2">
            <textarea
              id="refuse_to_disclose"
              name="refuse_to_disclose"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("refuse_to_disclose", )}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signature" className="block text-sm font-medium text-gray-900">
            Signature
          </label>
          <div className="mt-2">
            <input
              id="signature"
              name="signature"
              type="text"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("signature", )}
            />
          </div>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-900">
            Date
          </label>
          <div className="mt-2">
            <input
              id="date"
              name="date"
              type="date"
              required
              className="block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              {...register("date", )}
            />
          </div>
        </div>

        <div className="col-span-full">
          <button
            type="submit"
            className="w-full mt-6 rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  )
}


