
const IntroSection = ({title, intro}) => {
    return (
      
      <div className="intro-section bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">{title}</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {intro}
          </p>
        </div>
      </div>
    )
  }

export default IntroSection