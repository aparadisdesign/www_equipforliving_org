export default function EventReleaseForm({ isParentGuardian, setIsParentGuardian, isVolunteer}) {
    return (
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
                name="legal-guardian-radio"
                type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  onClick={()=>{setIsParentGuardian(true)}}
                />
                <label htmlFor="legal-guardian" cclassName="block text-sm font-medium leading-6 text-gray-900">I am the parent or legal guardian of the participant, signing this document on their behalf.</label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="participant"
                  name="legal-guardian-radio"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  onClick={()=>{setIsParentGuardian(false)}}
                />
                <label htmlFor="participant" cclassName="block text-sm font-medium leading-6 text-gray-900">I am a participant over the age of 18 and am signing this document for myself.</label>
              </div>
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
                      name="legal-guardian-acknowledgement-radio"
                      type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        onClick={()=>{setIsParentGuardian(true)}}
                      />
                      <label htmlFor="legal-guardian-acknowledgement" className="block text-sm font-medium leading-6 text-gray-900">I HEREBY CERTIFY that I am the parent or legal guardian of the participant, named above, and do hereby give my consent without reservation to the foregoing on behalf of this individual.</label>
                  </div>
                </fieldset>

                <input type="hidden" name="registration-type" value={isVolunteer !== undefined ? (isVolunteer ? 'Volunteer' : 'Surfer') : 'Undefined'}/>

                <div className="mt-10 sm:col-span-3">
                  <label htmlFor="signature" className="block text-sm font-medium leading-6 text-gray-900">
                    Signature
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="signature"
                      id="signature"
                      autoComplete="signature"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mt-10 sm:col-span-3">
                  <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                    Date
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      autoComplete="date"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </fieldset>
            </>
          ) : (
            <>
              <fieldset className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <legend className="text-base font-semibold leading-7 text-gray-900">BY SIGNING THIS DOCUMENT I AGREE THA HAVE READ THIS DOCUMENT AND UNDERSTAND IT. I FURTHER UNDERSTAND THAT BY SIGNING THIS RELEASE, I VOLUNTARILY SURRENDER CERTAIN LEGAL RIGHTS.</legend>
                {/* If isVolunteer create a Hidden Input that stores the value Volunteer else stores the value Surfer */}
                <input type="hidden" name="registration-type" value={isVolunteer !== undefined ? (isVolunteer ? 'Volunteer' : 'Surfer') : 'Undefined'}/>

                <div className="mt-10 sm:col-span-3">
                  <label htmlFor="signature" className="block text-sm font-medium leading-6 text-gray-900">
                    Signature
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="signature"
                      id="signature"
                      autoComplete="signature"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="mt-10 sm:col-span-3">
                  <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                    Date
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      autoComplete="date"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </fieldset>
            </>
          )
        ) : (
          // Render when isParentGuardian is undefined
          <p className='mt-10 text-indigo-500'>Please Select a Legal Guardian Acknowledgement</p>
        )}
      </div>
    )
}