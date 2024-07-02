import EventCard from './EventCard'
import eventImage1 from '../../images/surfing-event-1.jpg'
import eventImage2 from '../../images/surfing-event-2.jpg'
import eventImage3 from '../../images/surfing-event-4.webp'
import TaraAndAAron from '../../images/tara-aaron.webp'

const posts = [
  {
    id: 5,
    title: 'Water Skiing at Pine Tree Camp',
    href: 'https://pinetree.campintouch.com/v2/login/login.aspx',
    description:
      'Equip For Living is partnering with Pine Tree Camp and leap of faith to bring an adaptive water sports camp to Pine Tree Camp (a completely accessible camp) that includes water skiing. Free of charge.',
    image: "https://images.squarespace-cdn.com/content/v1/5b7b09bf85ede1e2f55703ab/c79bf948-dba5-4ba4-8c01-fc701e3a795a/PineTreeCamp4.jpg", 
    alt: 'Female surfer surfing with certified trainers\'s assistance',
    date: 'September 8th, 2024',
    datetime: '2024-09-08',

    category: { title: 'Water Sports', href: '#' },
    address: '114 Pine Tree Camp Rd, Rome, ME 04963',
    host: {
      name: 'Equip For Living & Pine Tree Camp',
      role: 'Event Host',
      imageUrl: "https://pinetreesociety.org/wp-content/uploads/2023/03/PTC_Left-Aligned_REVISED-2023-2-1-scaled.jpg",
    },
  },
  {
    id: 4,
    title: 'Water Skiing at Pine Tree Camp',
    href: 'https://pinetree.campintouch.com/v2/login/login.aspx',
    description:
      'Equip For Living is partnering with Pine Tree Camp and leap of faith to bring an adaptive water sports camp to Pine Tree Camp (a completely accessible camp) that includes water skiing. Free of charge.',
    image: "https://images.squarespace-cdn.com/content/v1/5b7b09bf85ede1e2f55703ab/c79bf948-dba5-4ba4-8c01-fc701e3a795a/PineTreeCamp4.jpg", 
    alt: 'Female surfer surfing with certified trainers\'s assistance',
    date: 'September 7th, 2024',
    datetime: '2024-09-07',

    category: { title: 'Water Sports', href: '#' },
    address: '114 Pine Tree Camp Rd, Rome, ME 04963',
    host: {
      name: 'Equip For Living & Pine Tree Camp',
      role: 'Event Host',
      imageUrl: "https://pinetreesociety.org/wp-content/uploads/2023/03/PTC_Left-Aligned_REVISED-2023-2-1-scaled.jpg",
    },
  },
    {
      id: 1,
      title: 'Equip For Surfing',
      href: '/event-sign-up',
      description:
        'Equip For Living will be offering adaptive surfing at Long Sands Beach, in York Maine. We will have trained instructors, wet suits, surf boards all ready to assist in this FREE Equip for Surfing event!',
      image: eventImage1, 
      alt: 'Female surfer surfing with certified trainers\'s assistance',
      date: 'August 8th, 2024',
      datetime: '2024-08-08',
      time: '4:30PM - 7:30PM',
      category: { title: 'Water Sports', href: '#' },
      address: 'Long Sands Beach, 171-175 Long Beach Ave, York, ME 03909, USA',
      host: {
        name: 'Equip For Living',
        role: 'Event Host',
        imageUrl: TaraAndAAron,
      },
    },
    {
        id: 2,
        title: 'Equip For Surfing',
        href: '/event-sign-up',
        description:
          'Equip For Living will be offering adaptive surfing at Long Sands Beach, in York Maine. We will have trained instructors, wet suits, surf boards all ready to assist in this FREE Equip for Surfing event!',
        image: eventImage2, 
        alt: 'Male surfer using adaptive equipment',
        date: 'July 11th, 2024',
        datetime: '2024-11-07',
        time: '4:30PM - 7:30PM',
        category: { title: 'Water Sports', href: '#' },
        address: 'Long Sands Beach, 171-175 Long Beach Ave, York, ME 03909, USA',
        host: {
          name: 'Equip For Living',
          role: 'Event Host',
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
                <EventCard key={post.id} event={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
