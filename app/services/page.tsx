export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-28 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-4xl font-bold text-[#0A1A3A] mb-6">
          Our Services
        </h1>

        <p className="text-gray-600 mb-12">
          We help brands grow with performance marketing, design, and growth engineering.
        </p>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-6 rounded-2xl shadow-md border">
            <h2 className="font-semibold text-lg mb-2">Growth Marketing</h2>
            <p className="text-gray-600 text-sm">
              Paid ads, funnels, lead generation & conversions.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md border">
            <h2 className="font-semibold text-lg mb-2">Web Development</h2>
            <p className="text-gray-600 text-sm">
              High-performance websites built with modern tech stack.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md border">
            <h2 className="font-semibold text-lg mb-2">Brand Strategy</h2>
            <p className="text-gray-600 text-sm">
              Positioning, messaging and creative execution.
            </p>
          </div>

        </div>
      </div>
    </main>
  );
}
