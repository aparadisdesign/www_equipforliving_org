import { UserGroupIcon, TagIcon, SparklesIcon} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'ZUMBA IN THE PARK',
    description:
      'The Equip For Living Foundation partners with DJ Dave from Big Entertainment Live, and Certified Zumba instructor Barbara Kenney for a fun Free Zumba class in the park to benefit Equip For Funding. This event is family friendly and open to all abilities!',
    href: '#',
    icon: UserGroupIcon,
    button: 'Learn More',
  },
  {
    name: 'AUCTION FUNDRAISER',
    description:
      'This is grassroots event that started as little auction in my backyard, but has grown into a wonderful annual event. from now on I want to have it possibly in person but also online. It is an easy way to get the community to both donate and participate in the auction.',
    href: 'https://equipforliving.betterworld.org/auctions',
    icon: TagIcon,
    button: 'Online Auction',
  },
  {
    name: 'EQUIPPED FOR SURFING',
    description:
      'Equip For Living specializes in offering adaptive watersports. You can find us most summers hosting adaptive surfing events at Long Sands Beach, in York Maine. We have specially trained instructors, wet suits, surf boards and adaptive surfboards all ready to assist in this FREE Equip for Surfing event!',
    href: '/events',
    icon: SparklesIcon,
    button: 'Sign Up!',
  },
]

export default function ProgramCards() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">WHAT WE DO</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our mission is to support adults with special needs and improve their quality of life by:
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Providing a resource hub where people can give and receive funding for adaptive equipment and technology, receive education relating to what services and activities are available in their area, and swap equipment with others in the community.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-600">
                    {feature.button} <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
