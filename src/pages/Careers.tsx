import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { CalendarClock } from 'lucide-react';


const Careers = () => {
  const description = 'Careers at MangosOrange: We will post job openings soon. Join our talent network and stay updated.';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Careers at MangosOrange',
    description,
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo title="Careers at MangosOrange | Jobs Coming Soon" description={description} jsonLd={jsonLd} />
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <header className="text-center max-w-3xl mx-auto mb-10 animate-enter">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Careers at MangosOrange</h1>
          <p className="mt-3 text-muted-foreground">
            We're gearing up for our next hiring cycle. Explore how we work, what we value, and what to expect when roles open.
          </p>
        </header>

        <section className="max-w-2xl mx-auto animate-fade-in">
          <div className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm hover-scale animate-fade-in transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5">
            <div className="flex items-start gap-4">
              <CalendarClock className="h-6 w-6 text-primary mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">Open roles coming soon</h2>
                <p className="mt-1 text-muted-foreground">
                  No openings right now. Check back soon—we update this page regularly when new positions go live.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-2xl font-semibold text-foreground">Working at MangosOrange</h2>
          <p className="mt-2 text-muted-foreground">
            We build reliable, human-centered software and cloud solutions. You'll collaborate with a supportive team,
            own meaningful projects, and grow through mentorship and real impact.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="group rounded-xl border border-border/50 bg-card p-5 hover-scale animate-fade-in transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5">
              <h3 className="font-medium text-foreground transition-colors group-hover:text-primary">Ownership & impact</h3>
              <p className="mt-1 text-sm text-muted-foreground">Ship features end-to-end and see your work in production.</p>
            </div>
            <div className="group rounded-xl border border-border/50 bg-card p-5 hover-scale animate-fade-in transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5">
              <h3 className="font-medium text-foreground transition-colors group-hover:text-primary">Continuous learning</h3>
              <p className="mt-1 text-sm text-muted-foreground">Access to courses, certifications, and peer learning.</p>
            </div>
            <div className="group rounded-xl border border-border/50 bg-card p-5 hover-scale animate-fade-in transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5">
              <h3 className="font-medium text-foreground transition-colors group-hover:text-primary">Flexible collaboration</h3>
              <p className="mt-1 text-sm text-muted-foreground">Remote-friendly culture with structured communication.</p>
            </div>
          </div>
        </section>

        <section className="mt-12 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-2xl font-semibold text-foreground">What we look for</h2>
          <ul className="mt-3 space-y-2 text-muted-foreground">
            <li>• Strong fundamentals in your craft (engineering, design, product, or operations)</li>
            <li>• Clear communication and a collaborative mindset</li>
            <li>• Pragmatism, curiosity, and a focus on outcomes</li>
          </ul>
        </section>

        <section className="mt-12 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-2xl font-semibold text-foreground">Hiring process</h2>
          <ol className="mt-3 space-y-3 text-muted-foreground">
            <li>1. Application review</li>
            <li>2. Intro chat about your goals and experience</li>
            <li>3. Technical/role-focused conversation</li>
            <li>4. Final culture add conversation</li>
          </ol>
        </section>

        <section className="mt-12 max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-2xl font-semibold text-foreground">Areas we hire for</h2>
          <div className="mt-3 flex flex-wrap gap-2 animate-fade-in">
            <span className="rounded-full border border-border/50 bg-card px-3 py-1 text-sm text-foreground hover-scale transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary">Web Developers</span>
            <span className="rounded-full border border-border/50 bg-card px-3 py-1 text-sm text-foreground hover-scale transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary">AI/ML Engineers</span>
            <span className="rounded-full border border-border/50 bg-card px-3 py-1 text-sm text-foreground hover-scale transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary">Software Engineering</span>
            <span className="rounded-full border border-border/50 bg-card px-3 py-1 text-sm text-foreground hover-scale transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary">Cloud & DevOps</span>
            <span className="rounded-full border border-border/50 bg-card px-3 py-1 text-sm text-foreground hover-scale transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary">Data & Analytics</span>
            <span className="rounded-full border border-border/50 bg-card px-3 py-1 text-sm text-foreground hover-scale transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary">Product Management</span>
            <span className="rounded-full border border-border/50 bg-card px-3 py-1 text-sm text-foreground hover-scale transition-colors duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary">UI/UX Design</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">If a role isn't listed yet, it may open soon—stay tuned.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
