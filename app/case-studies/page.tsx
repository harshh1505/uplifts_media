import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CaseStudies } from '@/components/case-studies';

export default function CaseStudiesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* We don't need Header here as it's in the root layout */}
            <main className="flex-grow">
                <CaseStudies />
            </main>
            {/* Footer is also in root layout */}
        </div>
    );
}
