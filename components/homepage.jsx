import React from 'react'

const sentences = [
  "and a man who can't stop in a place.",
  'and a man who has a huge queue in his head.',
  'and a man who generates a lot of tasks.',
  'and a man who reads books on screen but gets the printed version as well.',
  'and a man who drinks coffee more than he needs.',
  'and a man who believes complicated ways are more fun to implement.',
]

export const HomePageIntro = () => {
  return (
    <div className="flex h-64 flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
        I am Sina
      </h1>
      <h2 className="text-center text-lg leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-2xl md:leading-14">
        A Software Developer
      </h2>
      <p className="text-center text-gray-300 underline decoration-yellow-500">
        {sentences[[Math.floor(Math.random() * sentences.length)]]}
      </p>
    </div>
  )
}
