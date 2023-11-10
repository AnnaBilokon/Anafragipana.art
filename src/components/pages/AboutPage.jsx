import React from 'react'
import aboutImage from '../../images/about-image.png'

const AboutPage = () => {
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <a rel="preload" href="/">
          <img src={aboutImage} width={388} height={388} alt="aboutPic" />
        </a>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          {/* <h2 className="text-4xl font-bold text-[#1D053D] mb-4"></h2> */}
          <p className="text-[#1D053D] lg:text-lg">
            Hi! My name is Anastasiia Aliapkina. I am a Graphic Designer based
            in Stockholm, Sweden.
            <br />
            In my previous career, I held the position of a professional dancer,
            utilizing the art of body movement as my primary mode of
            self-expression. Subsequently, I had the privilege of delving into
            the realm of children diagnosed with Autism Spectrum Disorder, where
            I devoted over two years of my professional life as a valuable
            resource for a child with autism. This transformative experience
            broadened my horizons and significantly reshaped my perspective on
            the world around me.
            <br />
            Today, I am driven by a profound desire to communicate my thoughts
            and ideas through visual language. As a result, I aspire to
            establish myself as a graphic designer, a field that embodies the
            principles of exploration, revelation, and artistic self-expression.
            Graphic design, to me, represents an ongoing voyage of learning—a
            pursuit that I wholeheartedly embrace.
            <br />
            My passion for design ignites a profound sense of joy within me as I
            navigate every facet of the creative process, commencing with
            meticulous research and culminating in the delivery of a polished
            final product.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
