export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white px-6">
      <div className="max-w-4xl text-center">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-gray-800 to-gray-600 flex items-center justify-center text-white text-5xl font-light">
            <img src="src/components/PREM SINGH BOLISETTI  1 (2).jpg" alt="Prem Singh Bolisetty" className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl font-light tracking-tight text-gray-900 mb-6">
            Prem Singh Bolisetty
        </h1>
        <p className="text-xl md:text-2xl font-light text-gray-600 mb-4">
          Final-Year Engineering Student | Software & ML Enthusiast
        </p>
        <div className="w-24 h-px bg-gray-300 mx-auto my-8"></div>
        <p className="text-lg font-light text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating innovative solutions through technology and engineering excellence
        </p>
      </div>
    </section>
  );
}
