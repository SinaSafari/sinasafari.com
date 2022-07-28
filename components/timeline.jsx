import React from 'react'

const data = {
  title: 'My professional Experiences',
  experiences: [
    {
      id: 1,
      beginYear: '2015',
      from: 'May 2015',
      to: 'Feb 2018',
      title: 'Research Assistant - Translator',
      companyName: 'Roshd Andishe Behafarin',
      description: `Performed various translation and interpretation duties from Persian into English and English into Persian, including academic texts and ISI articles.`,
    },
    {
      id: 2,
      beginYear: '2017',
      from: 'Feb 2017',
      to: 'Feb 2018',
      title: 'Data Visualization Assistant',
      companyName: 'Roshd Andishe Behafarin',
      description: `Collaborated with the data analysis team with a focus on data visualization and representation.`,
    },
    {
      id: 3,
      beginYear: '2017',
      from: 'Feb 2017',
      to: 'Dec 2021',
      title: 'Computer Engineering B.Sc.',
      companyName: 'IAU TNB',
      description: `I study computer engineering majoring in software, However, I also did some research on field of artificial intelligence.`,
    },
    {
      id: 4,
      beginYear: '2019',
      from: 'Nov 2019',
      to: 'Dec 2019',
      title: 'Web development internship',
      companyName: 'Pouyesh System Saba',
      description: `3 weeks internship program in field of web development specifically SSR in react and nextjs.`,
    },
    {
      id: 5,
      beginYear: '2019',
      from: 'Dec 2019',
      to: 'Sep 2020',
      title: 'Web developer',
      companyName: 'Pouyesh System Saba',
      description: `My responsibilities were developing web applications with technologies like nextjs, django and nodejs, also collaborating with the development team in other sections.`,
    },
    {
      id: 6,
      beginYear: '2020',
      from: 'Nov 2020',
      to: 'Mar 2021',
      title: 'Frontend developer',
      companyName: 'Hamimohajer',
      description: `Nextjs developer and part of frontend developers' team.
working on Hamimohajer website, admin panel, and Karino.`,
    },
    {
      id: 7,
      beginYear: '2021',
      from: 'Mar 2021',
      to: 'Sep 2021',
      title: 'Fullstack web developer',
      companyName: 'Hamimohajer',
      description: `My responsibilities was to collaborate in the development team of Hami Mohajer, in both frontend and backend fields.
The main project I was involved with, was the Hamimohajer intra-organizational CRM.`,
    },
    {
      id: 8,
      beginYear: '2021',
      from: 'Sep 2021',
      to: 'Present',
      title: 'Software engineer',
      companyName: 'TOP',
      description: `Web developer in top.ir and top wallet websites project development team.`,
    },
  ],
  aLittleMoreAboutMe: {
    title: 'A little more about me',
    sections: [
      {
        id: 1,
        title: 'More personal',
        text: (
          <>
            <p>
              I remember my uncles were teaching me how to use computer when I was four or five
              years old. but I did not write any line of code until 17. I tried many jobs but I
              always knew that somehow I will end up with computers. now I can&apos;t imagine myself
              without programming, or developing something even a single day!
              <br />
            </p>
            <div className="my-4 flex flex-col lg:flex-row">
              <p className="my-6 pr-4">
                and this is a photo of me. most of the time, I&apos;m not seen like this in the
                woods. I&apos;m usually at my desk writing code or learning something. but I want to
                go out, definitely woods will be my choice.
              </p>
              <div className="my-5 flex h-96 w-full items-center justify-center">
                <img className="h-96 rounded-xl object-cover" src="/me2.jpg" />
              </div>
            </div>

            <p></p>
          </>
        ),
      },
      {
        id: 2,
        title: 'Hobbies and routines',
        text: (
          <>
            <p>
              books and movies are my main hobbies. I also listen to some podcasts in my free time.
            </p>
            <div className="my-5 flex flex-col justify-between lg:flex-row">
              <p>
                usually I read books which are about computer science and engineering but It&apos;s
                so enjoyable for me.
              </p>
              <div className="flex w-full items-center justify-center ">
                <img className="h-60 rounded-xl object-cover" src="/book.jpg" />
              </div>
            </div>
          </>
        ),
      },
      {
        id: 3,
        title: 'Courses and certificates',
        text: (
          <>
            <p>
              After taking some university courses about artificial intelligence, I start to learn
              amazing world of AI. I took a couple of courses and still taking some.
            </p>
            <div
              className="my-5 flex w-full cursor-pointer items-center space-x-5"
              onClick={() =>
                window.open('https://coursera.org/share/fbe0115adb5867be5271ffd07c4a955e')
              }
            >
              <div>
                <img src="/coursera.png" className="w-14 rounded" />
              </div>
              <div className="flex flex-grow flex-col">
                <p className="text-lg">Neural Networks and Deep Learning</p>
                <p>deeplearning.ai - coursera.org</p>
              </div>
            </div>
            <div
              className="my-5 flex w-full cursor-pointer items-center  space-x-5"
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/15xeY15Ddujn9_ol2q9L91hNSKMRzuAOZ/view'
                )
              }
            >
              <div>
                <img src="/part.jpeg" className="w-14 rounded" />
              </div>
              <div className="flex flex-grow flex-col">
                <p className="text-lg">Artificial Intelligence School</p>
                <p>partcollege.ai</p>
              </div>
            </div>
            <p className="my-3"></p>
          </>
        ),
      },
      {
        id: 4,
        title: 'Perspective and future',
        text: `With the power of AI, future will be full of surprises. integrating AI world and web (which is my carrer) or mobile apps, is so amazing.`,
      },
      // {
      //   id: 5,
      //   title: "A memory",
      //   text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
      // saepe dicta minus quos fugiat id debitis sit temporibus. In,
      // sunt fuga?`,
      // },
    ],
  },
}

export const TimeLine = ({ locale = 'en' }) => {
  const content = {
    en: {
      sections: [
        {
          id: 1,
          title: 'More personal',
          text: (
            <>
              <p>
                I remember my uncles were teaching me how to use computer when I was four or five
                years old. but I did not write any line of code until 17. I tried many jobs but I
                always knew that somehow I will end up with computers. now I can&apos;t imagine
                myself without programming, or developing something even a single day!
                <br />
              </p>
              <div className="my-4 flex flex-col lg:flex-row">
                <p className="my-6 pr-4">
                  and this is a photo of me. most of the time, I&apos;m not seen like this in the
                  woods. I&apos;m usually at my desk writing code or learning something. but I want
                  to go out, definitely woods will be my choice.
                </p>
                <div className="my-5 flex h-96 w-full items-center justify-center">
                  <img className="h-96 rounded-xl object-cover" src="/me2.jpg" />
                </div>
              </div>

              <p></p>
            </>
          ),
        },
        {
          id: 2,
          title: 'Hobbies and routines',
          text: (
            <>
              <p>
                books and movies are my main hobbies. I also listen to some podcasts in my free
                time.
              </p>
              <div className="my-5 flex flex-col justify-between lg:flex-row">
                <p>
                  usually I read books which are about computer science and engineering but
                  It&apos;s so enjoyable for me.
                </p>
                <div className="flex w-full items-center justify-center ">
                  <img className="h-60 rounded-xl object-cover" src="/book.jpg" />
                </div>
              </div>
            </>
          ),
        },
        {
          id: 3,
          title: 'Courses and certificates',
          text: (
            <>
              <p>
                After taking some university courses about artificial intelligence, I start to learn
                amazing world of AI. I took a couple of courses and still taking some.
              </p>
              <div
                className="my-5 flex w-full cursor-pointer items-center space-x-5"
                onClick={() =>
                  window.open('https://coursera.org/share/fbe0115adb5867be5271ffd07c4a955e')
                }
              >
                <div className="w-1/4 md:w-auto">
                  <img src="/coursera.png" className="w-full rounded md:w-14" />
                </div>
                <div className="flex flex-grow flex-col">
                  <p className="text-sm md:text-lg">Neural Networks and Deep Learning</p>
                  <p>deeplearning.ai - coursera.org</p>
                </div>
              </div>
              <div
                className="my-5 flex w-full cursor-pointer items-center space-x-5"
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/15xeY15Ddujn9_ol2q9L91hNSKMRzuAOZ/view'
                  )
                }
              >
                <div className="w-1/4 md:w-auto">
                  <img src="/part.jpeg" className="m-0 w-full rounded md:w-14" />
                </div>
                <div className="flex flex-grow flex-col">
                  <p className="text-sm md:text-lg">Artificial Intelligence School</p>
                  <p>partcollege.ai</p>
                </div>
              </div>
            </>
          ),
        },
        {
          id: 4,
          title: 'Perspective and future',
          text: `With the power of AI, future will be full of surprises. integrating AI world and web (which is my carrer) or mobile apps, is so amazing.`,
        },
        // {
        //   id: 5,
        //   title: "A memory",
        //   text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        // saepe dicta minus quos fugiat id debitis sit temporibus. In,
        // sunt fuga?`,
        // },
      ],
    },
    fr: {
      sections: [
        {
          id: 1,
          title: 'Plus personnel',
          text: (
            <>
              <p>
                Je me souviens que mes oncles m&apos;apprenaient à utiliser l&apos;ordinateur quand
                j&apos;avais quatre ou cinq ans. mais je n&apos;ai écrit aucune ligne de code avant
                17 ans. J&apos;ai essayé de nombreux travaux mais j&apos;ai toujours su que
                d&apos;une manière ou d&apos;une autre je finirais avec des ordinateurs. maintenant
                je ne peux pas m&apos;imaginer sans programmer, ou développer quelque chose même un
                seul jour !
                <br />
              </p>
              <div className="my-4 flex flex-col md:flex-row">
                <p className="my-6 pr-4">
                  et c&apos;est une photo de moi. la plupart du temps, je ne suis pas vu comme ça
                  dans les bois. Je suis généralement à mon bureau en train d&apos;écrire du code ou
                  d&apos;apprendre quelque chose. mais je veux sortir, les bois seront
                  définitivement mon choix.
                </p>
                <div className="my-5 flex h-96 w-full items-center justify-center">
                  <img className="h-96 rounded-xl object-cover" src="/me2.jpg" />
                </div>
              </div>

              <p></p>
            </>
          ),
        },
        {
          id: 2,
          title: 'Les Loisirs et routines',
          text: (
            <>
              <p>
                les livres et les films sont mes passe-temps principaux. J&apos;écoute aussi
                quelques podcasts pendant mon temps libre.
              </p>
              <div className="my-5 flex justify-between">
                <p>
                  d&apos;habitude, je lis des livres qui traitent de l&apos;informatique et de
                  l&apos;ingénierie, mais c&apos;est tellement agréable pour moi.
                </p>
                <div className="flex w-full items-center justify-center ">
                  <img className="h-60 rounded-xl object-cover" src="/book.jpg" />
                </div>
              </div>
            </>
          ),
        },
        {
          id: 3,
          title: 'Les Cours et les certificats',
          text: (
            <>
              <p>
                Après avoir suivi des cours universitaires sur l&apos;intelligence artificielle, je
                commence à découvrir le monde incroyable de l&apos;IA. J&apos;ai suivi quelques
                cours et j&apos;en prends encore.
              </p>
              <div
                className="my-5 flex w-full cursor-pointer items-center space-x-5"
                onClick={() =>
                  window.open('https://coursera.org/share/fbe0115adb5867be5271ffd07c4a955e')
                }
              >
                <div>
                  <img src="/coursera.png" className="w-14 rounded" />
                </div>
                <div className="flex flex-grow flex-col">
                  <p className="text-lg">Neural Networks and Deep Learning</p>
                  <p>deeplearning.ai - coursera.org</p>
                </div>
              </div>
              <div
                className="my-5 flex w-full cursor-pointer items-center  space-x-5"
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/15xeY15Ddujn9_ol2q9L91hNSKMRzuAOZ/view'
                  )
                }
              >
                <div>
                  <img src="/part.jpeg" className="w-14 rounded" />
                </div>
                <div className="flex flex-grow flex-col">
                  <p className="text-lg">Artificial Intelligence School</p>
                  <p>partcollege.ai</p>
                </div>
              </div>
              <p className="my-3"></p>
            </>
          ),
        },
        {
          id: 4,
          title: "La Perspective et l'avenir",
          text: `Avec la puissance de l'IA, l'avenir sera plein de surprises. intégrer le monde de l'IA et le web (c'est ma carrière) ou des applications mobiles, c'est tellement incroyable.`,
        },
        // {
        //   id: 5,
        //   title: "Un souvenir",
        //   text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        // saepe dicta minus quos fugiat id debitis sit temporibus. In,
        // sunt fuga?`,
        // },
      ],
    },
    sv: {
      sections: [
        {
          id: 1,
          title: 'More personal',
          text: (
            <>
              <p>
                I remember my uncles were teaching me how to use computer when I was four or five
                years old. but I did not write any line of code until 17. I tried many jobs but I
                always knew that somehow I will end up with computers. now I can&apos;t imagine
                myself without programming, or developing something even a single day!
                <br />
              </p>
              <div className="my-4 flex flex-col lg:flex-row">
                <p className="my-6 pr-4">
                  and this is a photo of me. most of the time, I&apos;m not seen like this in the
                  woods. I&apos;m usually at my desk writing code or learning something. but I want
                  to go out, definitely woods will be my choice.
                </p>
                <div className="my-5 flex h-96 w-full items-center justify-center">
                  <img className="h-96 rounded-xl object-cover" src="/me2.jpg" />
                </div>
              </div>

              <p></p>
            </>
          ),
        },
        {
          id: 2,
          title: 'Hobbies and routines',
          text: (
            <>
              <p>
                books and movies are my main hobbies. I also listen to some podcasts in my free
                time.
              </p>
              <div className="my-5 flex flex-col justify-between lg:flex-row">
                <p>
                  usually I read books which are about computer science and engineering but
                  It&apos;s so enjoyable for me.
                </p>
                <div className="flex w-full items-center justify-center ">
                  <img className="h-60 rounded-xl object-cover" src="/book.jpg" />
                </div>
              </div>
            </>
          ),
        },
        {
          id: 3,
          title: 'Courses and certificates',
          text: (
            <>
              <p>
                After taking some university courses about artificial intelligence, I start to learn
                amazing world of AI. I took a couple of courses and still taking some.
              </p>
              <div
                className="my-5 flex w-full cursor-pointer items-center space-x-5"
                onClick={() =>
                  window.open('https://coursera.org/share/fbe0115adb5867be5271ffd07c4a955e')
                }
              >
                <div>
                  <img src="/coursera.png" className="w-14 rounded" />
                </div>
                <div className="flex flex-grow flex-col">
                  <p className="text-lg">Neural Networks and Deep Learning</p>
                  <p>deeplearning.ai - coursera.org</p>
                </div>
              </div>
              <div
                className="my-5 flex w-full cursor-pointer items-center  space-x-5"
                onClick={() =>
                  window.open(
                    'https://drive.google.com/file/d/15xeY15Ddujn9_ol2q9L91hNSKMRzuAOZ/view'
                  )
                }
              >
                <div>
                  <img src="/part.jpeg" className="w-14 rounded" />
                </div>
                <div className="flex flex-grow flex-col">
                  <p className="text-lg">Artificial Intelligence School</p>
                  <p>partcollege.ai</p>
                </div>
              </div>
              <p className="my-3"></p>
            </>
          ),
        },
        {
          id: 4,
          title: 'Perspective and future',
          text: `With the power of AI, future will be full of surprises. integrating AI world and web (which is my carrer) or mobile apps, is so amazing.`,
        },
        // {
        //   id: 5,
        //   title: "A memory",
        //   text: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
        // saepe dicta minus quos fugiat id debitis sit temporibus. In,
        // sunt fuga?`,
        // },
      ],
    },
  }
  return (
    <div>
      <h2 className="text-4xl font-bold italic md:text-6xl ">{data.title}</h2>
      <div className="text-dark-back flex w-full flex-col-reverse lg:flex-row-reverse">
        <div className="w-full flex-grow">
          <div className=" text-white-text px-6 py-12">
            <h3 className="mb-8 text-2xl font-bold italic">
              {/* A little more about me */}
              {data.aLittleMoreAboutMe.title}
            </h3>

            {content[locale].sections.map((section) => (
              <div className=" mb-10" key={section.title}>
                <h4 className="text-xl font-bold">{section.title}</h4>
                <p>{section.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="container relative mx-auto my-12 flex flex-grow flex-col space-y-8 px-6">
          <p className=" text-white-text mb-6 text-2xl font-bold italic">BigBang!</p>

          <div className="bg-white-text left-17 absolute inset-0 z-0 h-full w-2 shadow-md "></div>

          {data.experiences.map((item) => (
            <div className="relative z-10" key={item.title}>
              <div className="timeline-img bg-white-text text-dark-back flex items-center justify-center text-2xl font-bold italic">
                {item.beginYear}
              </div>
              <div className="timeline-container">
                <div className="timeline-pointer" aria-hidden="true"></div>
                <div className="bg-white-text rounded-md p-6 shadow-md">
                  <span className="text-sm font-bold tracking-wide text-indigo-600">
                    {item.from} - {item.to}
                    {/* Jan 2021 */}
                  </span>
                  <h1 className="pt-1 text-2xl font-bold">{item.title}</h1>
                  <p className="font-thin">{item.companyName}</p>
                  <p className="pt-1">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
