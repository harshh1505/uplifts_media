export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-28 px-6">

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-24">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0A1A3A] mb-6">
          We Don’t Just Build Brands.
          <br />
          <span className="text-[#3B82F6]">We Engineer Growth.</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
          Uplifts Media is a growth-focused digital studio helping startups,
          creators, and businesses turn ideas into scalable systems.
          From high-converting websites to performance marketing,
          everything we build is designed for one thing — results.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-24">

        <div>
          <h2 className="text-3xl font-semibold text-[#0A1A3A] mb-4">
            Who We Are
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            We are engineers, designers, and marketers who believe growth is not
            luck — it’s architecture. Every funnel, every landing page, every ad,
            and every line of code should move your business forward.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Instead of “just making websites”, we craft digital ecosystems that
            attract, convert, and retain customers. That’s why our clients don’t
            just launch — they scale.
          </p>
        </div>

        <div className="bg-gray-100 rounded-2xl p-10 text-left shadow-md">
          <h3 className="font-semibold mb-4 text-lg">What makes us different?</h3>
          <ul className="space-y-3 text-gray-600 text-sm">
            <li>✅ Strategy before design</li>
            <li>✅ Performance-first development</li>
            <li>✅ Data-driven marketing decisions</li>
            <li>✅ Startup speed with agency quality</li>
          </ul>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#0A1A3A] text-white rounded-3xl py-20 px-8 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>

          <p className="text-gray-200 leading-relaxed text-lg">
            To empower businesses with technology and marketing systems that
            generate predictable growth. We aim to remove guesswork and replace it
            with strategy, creativity, and measurable outcomes.
          </p>
        </div>
      </section>

      {/* Services Philosophy */}
      <section className="max-w-6xl mx-auto mb-24">

        <h2 className="text-3xl font-semibold text-center text-[#0A1A3A] mb-14">
          How We Help You Grow
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="p-8 border rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-3">Build</h3>
            <p className="text-gray-600 text-sm">
              Lightning-fast websites and digital products built with modern tech
              stacks that convert visitors into customers.
            </p>
          </div>

          <div className="p-8 border rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-3">Launch</h3>
            <p className="text-gray-600 text-sm">
              Performance marketing campaigns, funnels, and automation systems
              that bring qualified traffic consistently.
            </p>
          </div>

          <div className="p-8 border rounded-2xl shadow-sm">
            <h3 className="font-semibold mb-3">Scale</h3>
            <p className="text-gray-600 text-sm">
              Analytics, optimization, and growth experiments to maximize ROI and
              scale what works.
            </p>
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="text-center pb-20">
        <h2 className="text-3xl font-semibold text-[#0A1A3A] mb-4">
          Ready to grow with us?
        </h2>

        <p className="text-gray-600 mb-6">
          Let’s build something that actually moves your business forward.
        </p>

        <a
          href="/#enquiry"
          className="inline-block bg-[#3B82F6] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition"
        >
          Start a Conversation
        </a>
      </section>

    </main>
  );
}
