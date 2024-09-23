import EventCard from './EventCard'
import eventImage1 from '../../images/adaptive-surf-2024.webp'
import eventImage2 from '../../images/adaptive-ski-2.webp'
import eventImage3 from '../../images/adaptive-ski-1.webp'
import TaraAndAAron from '../../images/tara-aaron.webp'

const posts = [
  // {
  //   id: 5,
  //   title: 'Water Skiing at Pine Tree Camp',
  //   href: 'https://pinetree.campintouch.com/v2/login/login.aspx',
  //   description:
  //     'Equip For Living is partnering with Pine Tree Camp and LOF Adaptive Skiers  to bring an adaptive water sports camp to Pine Tree Camp (a completely accessible camp) that includes water skiing. Free of charge.',
  //   image: eventImage3,
  //   alt: 'Female surfer surfing with certified trainers\'s assistance',
  //   date: 'September 8th, 2024',
  //   datetime: '2024-09-08',

  //   category: { title: 'Water Sports', href: '#' },
  //   address: '114 Pine Tree Camp Rd, Rome, ME 04963',
  //   host: {
  //     name: 'Equip For Living & Pine Tree Camp',
  //     role: 'Event Host',
  //     image: eventImage3,
  //   },
  // },
  // {
  //   id: 4,
  //   title: 'Water Skiing at Pine Tree Camp',
  //   href: 'https://pinetree.campintouch.com/v2/login/login.aspx',
  //   description:
  //     'Equip For Living is partnering with Pine Tree Camp and LOF Adaptive Skiers  to bring an adaptive water sports camp to Pine Tree Camp (a completely accessible camp) that includes water skiing. Free of charge.',
  //   image: eventImage2, 
  //   alt: 'Female surfer surfing with certified trainers\'s assistance',
  //   date: 'September 7th, 2024',
  //   datetime: '2024-09-07',

  //   category: { title: 'Water Sports', href: '#' },
  //   address: '114 Pine Tree Camp Rd, Rome, ME 04963',
  //   host: {
  //     name: 'Equip For Living & Pine Tree Camp',
  //     role: 'Event Host',
  //     image: eventImage2, 
  //   },
  // },
    {
      id: 1,
      title: 'No Events Scheduled',
      href: '#',
      description:
        'Check in soon for more events!',
      image: eventImage1, 
      alt: 'Female surfer surfing with certified trainers\'s assistance',
      date: '',
      datetime: '',
      time: '',
      category: { title: 'Water Sports', href: '#' },
      address: '',
      host: {
        name: 'Equip For Living',
        role: 'Event Host',
        imageUrl: TaraAndAAron,
      },
    }
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
