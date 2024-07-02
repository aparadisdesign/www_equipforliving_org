import './RegistrationDataView.css'

export default function RegistrationDataView({responseData}) {
    const handlePrint = () => {
        window.print();
    };
  return (
    <div className="h-auto basis-1 px-10 py-10 max-w-[1000px] md:basis-3/4 lg:basis-3/4 md:h-full lg:h-full">
        {responseData &&
            <div id={responseData.id}  className="h-full print-area">
                <div className="registration-info">
                    <div className="inner">
                        <div className="full-width-print mt-4 py-2">
                            <h2 className="font-semibold text-purple text-3xl">Registration Information For: {responseData.first_name} {responseData.last_name}</h2>
                            <dl>
                                <div className="py-6 sm:col-span-2 ">
                                    <dd className="text-sm leading-6 text-gray-700">
                                        <span className="text-sm pr-4 font-medium leading-6 text-gray-900">Dates Attending:</span>{responseData.attendance_dates.map(date => <span className='inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>{date.date} </span>)}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        {/* Shared Data */}
                        <div>
                            <div className="mx-4 py-2 border-b border-gray-100 ">
                                <h3 className="text-base font-semibold leading-7 text-purple">Contact Information</h3>
                            </div>
                            <div className="mt-2 mb-6">
                                <dl className="grid grid-cols-1 sm:grid-cols-2">
                                    <div className="px-4 py-6 sm:col-span-1 ">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Name</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{responseData.first_name} {responseData.last_name}</dd>
                                    </div>
                                    <div className="px-4 py-6 sm:col-span-1">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Registered as</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{responseData.registration_type}</dd>
                                    </div>
                                    <div className="px-4 py-6 sm:col-span-1 ">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2 hover:text-purple"><a href="mailto:{responseData.email}">{responseData.email}</a></dd>
                                    </div>
                                    <div className="px-4 py-6 sm:col-span-1">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Phone Number</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2 hover:text-purple"><a href="tel:+1{responseData.phone_number}">{responseData.phone_number}</a></dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div>
                            <div className="mx-4 py-2 border-b border-gray-100 ">
                                <h3 className="text-base font-semibold leading-7 text-purple">Emergency Contact Information</h3>
                            </div>
                            <div className="mt-2 mb-6">
                                <dl className="grid grid-cols-1 sm:grid-cols-2">
                                    <div className="px-4 py-6 sm:col-span-1 ">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Emergency Contact Name</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{responseData.emergency_contact_name}</dd>
                                    </div>
                                    <div className="px-4 py-6 sm:col-span-1 ">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Emergency Contact Phone</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2 hover:text-purple"><a href="tel:+1{responseData.emergency_contact_phone}">{responseData.emergency_contact_phone}</a></dd>
                                    </div>
                                    <div className="px-4 py-6 sm:col-span-1 ">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Emergency Contact Relationship</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">{responseData.emergency_contact_relationship}</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        {/* End Shared Data */}

                        {/* Volunteer Data */}
                            {responseData.registration_type === 'Volunteer' && (
                                <div>
                                    <div className="mx-4 py-2 border-b border-gray-100 ">
                                        <h3 className="text-base font-semibold leading-7 text-purple">Volunteer Information</h3>
                                    </div>
                                    <div className="flex grid-cols-2 gap-4">
                                        <div className=" px-4 py-6 sm:col-span-2 ">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Volunteer Location Request</dt>
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                                                {responseData.volunteer_preference}
                                            </dd>
                                        </div>
                                        
                                        <div className=" px-4 py-6 sm:col-span-2 ">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">Relevant Experience</dt>
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                                                {responseData.comment}
                                            </dd>
                                        </div>

                                        <div className=" px-4 py-6 sm:col-span-2 ">
                                            <dt className="text-sm font-medium leading-6 text-gray-900">How they heard about Equip for Living</dt>
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                                                {responseData.how_heard}
                                            </dd>
                                        </div>

                                    </div>
                                </div>
                            )}
                        {/* End Volunteer Data */}
                            {responseData.how_heard && (
                                <div>
                                    <div className="mx-4 py-2 border-b border-gray-100 ">
                                        <h3 className="text-base font-semibold leading-7 text-purple">How they heard about Equip for Living </h3>
                                    </div>
                                    <div className="flex grid-cols-2 gap-4">
                                        
                                        <div className=" px-4 py-6 sm:col-span-12 ">
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                                                {responseData.how_heard}
                                            </dd>
                                        </div>

                                    </div>
                                </div>
                            )}
                        
                                
                        {/* Surfer Data */}
                            {responseData.registration_type === 'Surfer' && (
                                <div>
                                    <div className="mx-4 py-2 border-b border-gray-100 ">
                                        <h3 className="text-base font-semibold leading-7 text-purple">Surfing Information</h3>
                                    </div>
                                    <div className="mt-2">
                                        <dl className="flex flex-wrap">
                                            <div className="px-4 py-6 flex items-center">
                                                <dt className="mt-1 mr-2 text-sm font-medium leading-6 text-gray-900">Surfing Experiance:</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700">{responseData.first_time_surfing ? 'Never surfed' : 'Has surfed'}</dd>
                                            </div>
                                            <div className="px-4 py-6 flex items-center">
                                                <dt className="mt-1 mr-2 text-sm font-medium leading-6 text-gray-900">Height:</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700">{responseData.height}</dd>
                                            </div>
                                            <div className="px-4 py-6 flex items-center">
                                                <dt className="mt-1 mr-2 text-sm font-medium leading-6 text-gray-900">Weight:</dt>
                                                <dd className="mt-1 text-sm leading-6 text-gray-700">{responseData.weight}</dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className="px-4 py-6 mb-6">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Abilities and Limitations</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                                            {responseData.disability_background}
                                        </dd>
                                    </div>
                                </div>
                            )}
                        {/* End Surfer Data */}
                        {/* Parent Data */} 
                        {responseData.wetsuit && (
                                <div>
                                    <div className="mx-4 py-2 border-b border-gray-100 ">
                                        <h3 className="text-base font-semibold leading-7 text-purple">Does the participant want to borrow a wetsuit? </h3>
                                    </div>
                                    <div className="flex grid-cols-2 gap-4">
                                        
                                        <div className=" px-4 py-6 sm:col-span-12 ">
                                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:mt-2">
                                                {responseData.wetsuit}
                                            </dd>
                                        </div>

                                    </div>
                                </div>
                        )}
                    </div>
                    
                </div>
                <div className="pagebreak"></div>
                {/* Release Signature Data */}
                <div className="full-width-print waiver">
                    <div className="hidden border-b border-gray-900/10 pb-12">
                        <div className="mt-10">
                            <h2 className="mt-10 text-3xl font-semibold leading-8 text-purple">Release of Liability For: {responseData.first_name} {responseData.last_name}</h2>

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
                    </div>
                    <div className="hide-for-print mx-4 py-2 border-b border-gray-100 ">
                        <h3 className="text-base font-semibold leading-7 text-purple">Waiver</h3>
                    </div>
                    <div className="mt-2 mb-6">
                        <dl className="flex flex-wrap">
                            <div className="px-4 py-6 flex items-center">
                                <dt className="mt-1 mr-2 text-sm font-medium leading-6 text-gray-900">Digital Signature:</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700">{responseData.signature}</dd>
                            </div>
                            <div className="px-4 py-6 flex items-center">
                                <dt className="mt-1 mr-2 text-sm font-medium leading-6 text-gray-900">Signature Date:</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700">{responseData.date}</dd>
                            </div>
                            <div className="px-4 py-6 flex items-center">
                                <dt className="mt-1 mr-2 text-sm font-medium leading-6 text-gray-900">Signed By:</dt>
                                <dd className="mt-1 text-sm leading-6 text-gray-700">{responseData.release_role}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                {/* End Signature Data */}

                <button onClick={handlePrint} className="hide-for-print print-button px-4 py-2 bg-purple text-white rounded hover:bg-purple-700">
                    Print
                </button>
            </div>          
        }
    </div>
  );
};





