import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCube, Pagination } from "swiper";
import Footer from "../components/FooterBlock";


export default function Home() {
  SwiperCore.use([Autoplay])





  return (
    <main className="flex flex-col items-center justify-center mt-32">

    <section
        className="flex flex-wrap items-center -mx-3 font-sans px-4 mx-auto w-full lg:max-w-screen-xl sm:max-w-screen-sm md:max-w-screen-md pb-20">

        <div className="px-3 w-full lg:w-2/5">
            <div
                className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                <h2 className="mb-4 text-3xl font-bold text-left lg:text-5xl">
                    Exclusive Cocktail App

                    <span className="text-5xl text-blue-500 leading-relaxeds"
                        >For Your
                    </span>

                    Enjoy Every Day
                </h2>

                <p
                    className="visible mx-0 mt-3 mb-0 text-sm leading-relaxed text-left text-slate-400">
                    You must to use it app with responsibility!!!
                </p>
            </div>

            <div className="text-center lg:text-left">
                <a
                    className="block visible py-4 px-8 mb-4 text-xs font-semibold tracking-wide leading-none text-white bg-blue-500 rounded cursor-pointer sm:mr-3 sm:mb-0 sm:inline-block"
                    >Key Features</a
                >

                <a
                    className="block visible py-4 px-8 text-xs font-semibold leading-none bg-white rounded border border-solid cursor-pointer sm:inline-block border-slate-200 text-slate-500"
                    >How We Work?</a
                >
            </div>
        </div>


        <div className="homeSwiper px-3 mb-12 w-full lg:mb-0 lg:w-3/5">

            <div className="flex justify-center items-center">
            <Swiper
              autoplay={{ delay: 3000 }}
              effect={"cube"}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              // pagination={true}
              modules={[EffectCube, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className='bg-none'>
                <img className='w-30cqw min-w mx-auto pt-16' src="./cartoonImg/1.png" alt="cartoon" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-30cqw min-w mx-auto pt-20' src="./cartoonImg/2.png" alt="cartoon" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-30cqw min-w mx-auto' src="./cartoonImg/3.png" alt="cartoon" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-30cqw min-w mx-auto pt-16' src="./cartoonImg/4.png" alt="cartoon" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-30cqw min-w mx-auto pt-16' src="./cartoonImg/6.png" alt="cartoon" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-30cqw min-w mx-auto pt-16' src="./cartoonImg/8.png" alt="cartoon" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-30cqw min-w mx-auto pt-16' src="./cartoonImg/9.png" alt="cartoon" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-30cqw min-w mx-auto pt-16' src="./cartoonImg/10.png" alt="cartoon" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-30cqw min-w mx-auto pt-16' src="./cartoonImg/11.png" alt="cartoon" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='w-30cqw min-w mx-auto pt-16' src="./cartoonImg/12.png" alt="cartoon" />
              </SwiperSlide>
              </Swiper>
            </div>
        </div>
    </section>
 
      <section
        className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center"
        style={{backgroundImage: `url(./nightImg/1.jpeg)`}}
        >
        <h1 className="text-white text-5xl font-semibold mt-20 mb-10">
            Here is available more than 700 drinks!
        </h1>
      </section>

    {/* <section
        // className="flex flex-col w-full h-[500px] bg-cover"
        className="flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center justify-center items-center"
        style={{backgroundImage: `url(./nightImg/4.jpeg)`}}
        >
        <h1 className="text-white text-5xl font-semibold mt-20 mb-10">
            This is Parallax Effect
        </h1>

        <span className="text-center font-bold my-20 text-white/90">
            <a
                href="https://egoistdeveloper.github.io/twcss-to-sass-playground/"
                target="_blank"
                className="text-white/90 hover:text-white">
                Convetert to SASS
            </a>

            <hr className="my-4" />

            <a
                href="https://unsplash.com/photos/8Pm_A-OHJGg"
                target="_blank"
                className="text-white/90 hover:text-white">
                Image Source
            </a>

            <hr className="my-4" />

            <p>
                <a
                    href="https://github.com/EgoistDeveloper/my-tailwind-components/blob/main/src/templates/parallax-landing-page.html"
                    target="_blank"
                    className="text-white/90 hover:text-white">
                    Source Code
                </a>
                |
                <a
                    href="https://egoistdeveloper.github.io/my-tailwind-components/./src/templates/parallax-landing-page.html"
                    target="_blank"
                    className="text-white/90 hover:text-white">
                    Full Preview
                </a>
            </p>
        </span>
    </section> */}


    <section className="p-20 space-y-8">
        <h1 className="text-4xl text-center my-20">Tempor sit labore nostrud</h1>

        <p>
            Exercitation non Lorem exercitation tempor amet ad esse velit. Anim
            deserunt id nulla quis ex magna culpa exercitation. Mollit consequat
            enim eiusmod cupidatat commodo eiusmod nulla. Id quis amet incididunt
            cillum dolore consectetur nulla incididunt laborum excepteur
            consectetur consectetur sunt tempor. Minim fugiat sint sunt ad elit
            laboris est sit est laboris labore do velit. Cillum aliquip pariatur
            deserunt eiusmod. Consequat irure nulla adipisicing deserunt culpa.
            Veniam enim deserunt sint consequat labore. Enim ullamco ea aute duis
            et nostrud voluptate fugiat consectetur et velit cillum anim dolore.
            In exercitation proident proident nostrud voluptate. Fugiat elit esse
            labore pariatur ex. Ex labore esse voluptate nisi in. Ad anim deserunt
            reprehenderit est. Aliquip pariatur nulla dolor amet quis aliqua sit
            nisi officia enim velit. Ad enim eu dolor quis ipsum. Nulla amet
            consectetur adipisicing ullamco qui tempor dolor excepteur dolore anim
            pariatur quis laboris consequat. Consectetur ullamco consectetur minim
            eiusmod quis veniam esse consectetur anim nostrud est pariatur
            laborum. Mollit tempor minim amet esse. Lorem officia consequat
            eiusmod sunt. Proident occaecat velit et consequat irure est cupidatat
            tempor ullamco. Aliquip est pariatur ea ut qui ad sit dolor laboris
            adipisicing officia eiusmod sit. Proident Lorem ex cillum sint
            cupidatat amet nulla veniam laborum velit pariatur. Fugiat excepteur
            culpa sunt est anim sunt. Ea voluptate non do proident sunt ad cillum
            enim esse.
        </p>
    </section>
  <Footer/>

</main>










  )
}
