import { EnquiryForm } from '@/components/enquiry-form';

export default function ContactPage() {
  return (
    <div className="bg-white px-6">

      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#0A1A3A] mb-4">
          Let’s Grow Your Business 🚀
        </h1>

        <p className="text-gray-600 text-lg">
          Tell us about your goals and we’ll craft a custom growth strategy for you.
          No fluff. Just results.
        </p>
      </section>

      {/* Form (REUSED) */}
      <section className="max-w-3xl mx-auto">
        <EnquiryForm />
      </section>

    </div>
  );
}
