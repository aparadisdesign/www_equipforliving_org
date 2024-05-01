import EventCard from './EventCard'
import eventImage from '../../images/adaptive-surfing-135.webp'

const posts = [
    {
      id: 1,
      title: 'Equip For Surfing',
      href: '/event-sign-up',
      description:
        'Equip For Living will be offering adaptive surfing  at Long Sands Beach, in York Maine. We will have trained instructors, wet suits, surf boards all ready to assist in this FREE Equip for Surfing event!',
      imageUrl: {eventImage},
      date: 'Aug 17, 2023',
      datetime: '2023-08-17',
      category: { title: 'Water Sports', href: '#' },
      address: 'Long Sands Beach, 171-175 Long Beach Ave, York, ME 03909, USA',
      host: {
        name: 'Equip For Living',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        title: 'Equip For Surfing',
        href: '/event-sign-up',
        description:
          'Equip For Living will be offering adaptive surfing  at Long Sands Beach, in York Maine. We will have trained instructors, wet suits, surf boards all ready to assist in this FREE Equip for Surfing event!',
          imageUrl: {eventImage},
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Water Sports', href: '#' },
        address: 'Long Sands Beach, 171-175 Long Beach Ave, York, ME 03909, USA',
        host: {
          name: 'Equip For Living',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 3,
        title: 'Equip For Surfing',
        href: '/event-sign-up',
        description:
          'Equip For Living will be offering adaptive surfing  at Long Sands Beach, in York Maine. We will have trained instructors, wet suits, surf boards all ready to assist in this FREE Equip for Surfing event!',
          imageUrl: {eventImage},
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Water Sports', href: '#' },
        address: 'Long Sands Beach, 171-175 Long Beach Ave, York, ME 03909, USA',
        host: {
          name: 'Equip For Living',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    // More posts...
  ]
  
  export default function EventListing() {

    console.log(posts)
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upcoming Events</h2>
            {/* <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p> */}
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post) => (
                <EventCard event={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
