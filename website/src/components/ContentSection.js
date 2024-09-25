import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import contentImage from '../images/equipment-grant.webp'
export default function ContentSection() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/3 lg:shrink lg:grow-1 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/3">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              alt="Equip For Living tent"
              src={contentImage}
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-2/3">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Grants are made possible by donations. Thank you to everyone who has made these grants possible.
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Eligibility Criteria</h1>
            <ul role="list" className="mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">Diagnosis.</strong> Physical or developmental diagnosis
                </span>
              </li>
              <li className="flex gap-x-3">
                <span>
                  <strong className="font-semibold text-gray-900">21 years of age or older.</strong><em>For those individuals under the age of 21, please visit the Robbie Foundation: <a href="https://robbiefoundation.com/apply" target="_blank" rel="noreferrer" className="text-indigo-600">robbiefoundation.com/apply</a></em>
                </span>
              </li>
            </ul>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">About The Application Process</h2>
              <p className="mt-6">
                Deadline For Applications: November 1st, 2025 - Funding will be awarded by December 1st, 2025.
              </p>

              <p className="mt-6">
                An application detailing information about the adult in need of assistance and the reason for the need is required. Funding will be given for items and services that help maximize growth and development, as well as create an environment for the individual to be healthy, independent, and engaged in an active.
              </p>

              <p className="mt-6">
                <b>Online application process will open soon.</b> <span className="text-base font-semibold text-indigo-600">In the meantime, you can apply for a grant by emailing: equipforliving@gmail.com</span>
              </p>
              
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
              <p className="mb-3">
                The Equip For Living Foundation is a volunteer-run organization and applications are reviewed annually by a committee. Incomplete applications will not be considered.
              </p>
              <p>
                The Equip For Living Foundation reserves the right to fund requests based on priority and necessity.
              </p>
              <p className="mt-8">
                You will hear from Equip For Living by the end of the month following the deadline only IF you have been approved. Due to the high volume of applications we will not contact you if your application has not been approved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}