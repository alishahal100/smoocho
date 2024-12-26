
const About = () => {
  

  return (
    <section className="w-screen mt-10 mx-auto px-6 lg:px-60 py-20 flex flex-col items-center text-start">
      <h1 className="text-2xl lg:text-3xl font-bold mb-6">About Us</h1>
      <p className="mt-4 leading-relaxed">
        Welcome to Smoo-Cho, where we transform everyday moments into cherished memories through the art of chocolate. Our passion drives us to craft unique, indulgent experiences that tantalize your taste buds and warm your heart.
      </p>
      <p className="mt-4 leading-relaxed">
        At Smoo-Cho, we believe chocolate is more than just a treat; it’s a medium that brings people together. Each creation is a celebration of the finest ingredients, meticulously blended to offer a symphony of flavors in every bite.
      </p>
      <p className="mt-4 leading-relaxed">
        Join us in turning the ordinary into the extraordinary with the enchanting power of chocolate. Discover the sweet escape you’ve been craving, where every bite reflects our dedication to quality and love for chocolate.
      </p>
      <a
        className='w-60 mt-10 h-10 border border-pink-500 rounded-lg text-pink-500 bg-transparent text-center flex justify-center items-center hover:bg-pink-500 hover:text-white transform transition-all duration-300 ease-in-out hover:scale-105'
        href='/about'
          >
        Learn More
      </a>
    </section>
  );
};

export default About;
