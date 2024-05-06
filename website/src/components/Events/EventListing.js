import EventCard from './EventCard'
import eventImage from '../../images/adaptive-surfing-135.webp'
import TaraAndAAron from '../../images/tara-aaron.webp'

const posts = [
    {
      id: 1,
      title: 'Equip For Surfing',
      href: '/event-sign-up',
      description:
        'Equip For Living will be offering adaptive surfing at Long Sands Beach, in York Maine. We will have trained instructors, wet suits, surf boards all ready to assist in this FREE Equip for Surfing event!',
      imageUrl: {eventImage, alt: 'Surfer using adaptive equipment'},
      date: 'August 8th, 2024',
      datetime: '2024-08-08',
      time: '4:30PM - 7:30PM',
      category: { title: 'Water Sports', href: '#' },
      address: 'Long Sands Beach, 171-175 Long Beach Ave, York, ME 03909, USA',
      host: {
        name: 'Equip For Living',
        role: 'Tara & Aaron',
        imageUrl: TaraAndAAron,
      },
    },
    {
        id: 2,
        title: 'Equip For Surfing',
        href: '/event-sign-up',
        description:
          'Equip For Living will be offering adaptive surfing at Long Sands Beach, in York Maine. We will have trained instructors, wet suits, surf boards all ready to assist in this FREE Equip for Surfing event!',
          imageUrl: {eventImage},
        date: 'July 11th, 2024',
        datetime: '2024-11-07',
        time: '4:30PM - 7:30PM',
        category: { title: 'Water Sports', href: '#' },
        address: 'Long Sands Beach, 171-175 Long Beach Ave, York, ME 03909, USA',
        host: {
          name: 'Equip For Living',
          role: 'Tara & Aaron',
          imageUrl: TaraAndAAron,
        },
      },
      {
        id: 3,
        title: 'Equip For Surfing',
        href: '/event-sign-up',
        description:
          'Equip For Living will be offering adaptive surfing  at Long Sands Beach, in York Maine. We will have trained instructors, wet suits, surf boards all ready to assist in this FREE Equip for Surfing event!',
          imageUrl: {eventImage},
        date: 'June 20th, 2024',
        datetime: '2024-06-20',
        time: '4:30PM - 7:30PM',
        category: { title: 'Water Sports', href: '#' },
        address: 'Long Sands Beach, 171-175 Long Beach Ave, York, ME 03909, USA',
        host: {
          name: 'Equip For Living',
          role: 'Tara & Aaron',
          imageUrl: TaraAndAAron,
        },
      },
    // More posts...
  ]
  
  export default function EventListing() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Upcoming Events</h2>
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
