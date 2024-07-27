import '../animations/AnimatedBody';
import AnimatedBody from '../animations/AnimatedBody';
import AnimatedTitle from '../animations/AnimatedTitle';

const About = () => {
  return (
    <section
    className='relative z-10 w-full items-centre justify-centre overflow-hidden bg-[#0E1016] bg-cover bg-centre pt-16 pg-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56'
    id="about"
    >
      <div className='mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]'>
        <AnimatedTitle
        text={
          'I MAKE POWERFUL APPLICATIONS AND CONTENT CAPTIVATING.'
        }
        className={
          "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
        }
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        />

        <div className='mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20'>
          <div className='mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px]'>
            <AnimatedBody
            text={
              'My passion lies in creating software that is both functional and visually appealing.'
            }
            />
            <AnimatedBody
            text={
              'Whether it is a website, a mobile application, I strive to make it the best it can be.'
            }
            className={"hidden"}
            />
            <AnimatedBody
            text={
              'In addition to my work in software development, I am also an active learner and member of tech communities on campus, including the Google Developer Student Clubs and Microsoft Learn Student Ambassadors.'
            }
            />
            <AnimatedBody
            text={
              'I am always looking for new opportunities to grow and learn.'
            }
            />
          </div>

          <div className='mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]'>
            <div className='flex flex-col gap-4 md:gap-3'>
              <AnimatedTitle
                text={"FrontEnd Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux Toolkit, React Testing Library, HTML5, Git/GitHub."
                }
              />
            </div>
            <div className='flex flex-col gap-4 md:gap-3'>
              <AnimatedTitle
                text={"BackEnd Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Node.js, Express, MongoDB, Mongoose, Firebase, PostgreSQL, RESTful APIs, JWT, OAuth, Passport.js."
                }
              />
          </div>
          <div className='flex flex-col gap-3'>
            <AnimatedTitle
              text={"Design Tools"}
              className={
                "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
            <AnimatedBody
              text={
                "Figma, Adobe XD, Adobe Illustrator, Adobe Photoshop, Canva."
              }
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default About;