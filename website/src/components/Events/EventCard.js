  
  export default function EventCard({event}) {
 
    return (
        <a href={event.href} key={event.id} className="py-5 px-5 rounded-2xl relative isolate flex flex-col gap-8 lg:flex-row hover:shadow-sm transition duration-300 ease-in-out hover:bg-gray-50">
            <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <img src={event.image} alt={event.alt} className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover" />
            </div>

            <div>
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={event.datetime} className="text-gray-500">
                    {event.date}
                    </time>
                    <div className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">{event.time}</div>
                </div>
                <div className="group relative max-w-xl">
                    <h3 className="mt-1 text-lg font-semibold leading-6">
                        <span className="absolute inset-0" />
                        {event.title}
                    </h3>
                    <p className="mt-1 text-sm lead ing-6 text-gray-600">{event.address}</p>
                    <p className="mt-5 text-sm leading-6 text-gray-600">{event.description}</p>
                    <button className="rounded-md bg-purple mt-5 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple">Register for this event</button>
                </div>
                <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                        <img src={event.host.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                        <div className="text-sm leading-6">
                            <p className="text-gray-600">{event.host.role}:</p>
                            <p className="font-semibold text-gray-900">
                                <span className="absolute inset-0" />
                                {event.host.name}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
  }
