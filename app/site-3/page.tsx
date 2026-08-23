import AnimatedPreviewButton from "@/components/shared/preview-button/animated-preview-button/animated-preview-button";
import { UserCircle2 } from "lucide-react";
import Link from "next/link";
import { FiLayout } from "react-icons/fi";
import { RiBookmark3Fill, RiUserSettingsFill } from "react-icons/ri";

const navLinks = ["Platform", "White-Label", "Industries", "Pricing"];

const industries = ["Barbershops", "Dental Clinics", "Contractors"];

const features = [
  {
    shape: "rounded-sm",
    title: "White-Label Branding",
    icon: <RiUserSettingsFill />,
    description:
      "Upload your logo, set your business name, edit your website copy, and connect your own domain. Your clients see your brand — never ours.",
  },
  {
    shape: "rounded-full",
    title: "Your Client Portals",
    icon: <RiBookmark3Fill />,
    description:
      "Manage every business you serve from one owner portal. Each client gets their own secure login and sees only their own business.",
  },
  {
    shape: "rotate-45",
    title: "Dead-Simple Dashboards",
    icon: <FiLayout />,
    description:
      "No AI jargon. Your clients log in and instantly see: 37 calls handled today. 4 appointments booked. 2 follow-ups needed.",
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-card font-sans ">
      {/* Navigation */}
      <nav className="flex items-center justify-between border-b shadow border-gray-200 px-8 py-5">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg ">
            <div className="size-3 rounded-full " />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            AI BOT
          </span>
        </div>
        <div className="hidden items-center gap-8 text-base  font-medium md:flex">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="transition-colors text-gray-600 hover:text-black "
            >
              {link}
            </Link>
          ))}
        </div>

        <div className="items-center gap-2 hidden lg:flex">
          <button className="hidden items-center gap-2 rounded-xl border border-white/20 bg-black/20 px-5 py-3 sm:flex cursor-pointer login2-button relative overflow-hidden">
            <UserCircle2
              size={18}
              className="absolute top-1/2 -translate-y-1/2"
            />
            <UserCircle2 size={18} className="opacity-0" />
            <div className="overflow-hidden">
              <div className="original-text duration-300">Sign In</div>
            </div>
          </button>

          <AnimatedPreviewButton
            bgColor="black"
            hoverBgColor="black/30"
            textColor="#ffffff"
            className="mt-0!"
            arrowBgColor="#ffffff"
            arrowColor="black"
            text="Get Started"
          />
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-8 pt-20 pb-16">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-azure/20 bg-azure/10 px-3 py-1 text-xs font-medium tracking-wider text-azure uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-azure opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-azure" />
                </span>
                Now onboarding business owners
              </div>
              <h1 className="mb-6 font-display text-6xl leading-[1.1] font-extrabold tracking-tight text-balance lg:text-7xl">
                Your brand. Your clients.{" "}
                <span className="text-azure">Our AI engine.</span>
              </h1>
              <p className="mb-10 max-w-lg text-lg text-gray-600 leading-relaxed text-pretty ">
                Launch your own white-label AI business. Sell AI receptionist
                services to local businesses under your name, on your domain —
                we power everything behind the scenes.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="hidden items-center gap-2 rounded-xl border border-white/20 bg-black/20 px-5 py-3 sm:flex cursor-pointer  relative overflow-hidden">
                  Become a Business Owner
                </button>

                <AnimatedPreviewButton
                  bgColor="black"
                  hoverBgColor="black/30"
                  textColor="#ffffff"
                  className="mt-0!"
                  arrowBgColor="#ffffff"
                  arrowColor="black"
                  text="See How It Works"
                />
              </div>
              <div className="mt-12 flex text-gray-600 flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium ">
                <span>Built for the businesses you'll serve:</span>
                <div className="flex flex-wrap gap-x-6 gap-y-2 font-display font-bold">
                  {industries.map((industry) => (
                    <span key={industry} className="whitespace-nowrap">
                      {industry.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-azure/5 blur-3xl" />
              <img
                src={"/dashboard.jpg"}
                alt="AI BOT Dashboard"
                width={1200}
                height={1008}
                className="relative aspect-[6/5] w-full rounded-2xl   object-cover shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="bg-surface px-8 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <h2 className="mb-4 font-display text-4xl font-bold">
                One platform. Three experiences.
              </h2>
              <p className="mx-auto text-gray-600 max-w-2xl ">
                From our master platform to your owner portal to your client's
                dashboard — everyone sees exactly what they need, and nothing
                they don't.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-gray-200  bg-card p-8 shadow-md transition-shadow hover:shadow-md"
                >
                  <div className="mb-6 flex size-12 items-center justify-center rounded-xl  transition-colors group-hover:bg-azure ">
                    <div className="text-4xl">{feature.icon}</div>
                  </div>
                  <h3 className="mb-3 font-display text-xl font-bold">
                    {feature.title}
                  </h3>
                  <p className="mb-6 text-sm text-gray-600 leading-relaxed ">
                    {feature.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-azure"
                  >
                    Learn more &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-8 py-20">
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl  p-12 text-center ">
            <div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-10">
              <div className="absolute top-[-50%] left-[-10%] h-[200%] w-[120%] bg-[radial-gradient(circle_at_center,var(--color-azure)_0%,transparent_50%)]" />
            </div>
            <div className="relative z-10">
              <h2 className="mb-6 font-display text-4xl font-bold">
                Ready to run your own AI business?
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-gray-600 text-lg ">
                The storefront is already built — your website, your portal, and
                your clients' dashboards provision themselves the moment you
                join. You just hang your sign on the door.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <button className="hidden items-center gap-2 rounded-xl border border-white/20 bg-black/20 px-5 py-3 sm:flex cursor-pointer relative overflow-hidden">
                  Become an Owner
                </button>
                <AnimatedPreviewButton
                  bgColor="black"
                  hoverBgColor="black/30"
                  textColor="#ffffff"
                  className="mt-0!"
                  arrowBgColor="#ffffff"
                  arrowColor="black"
                  text="Book a Walkthrough"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-300 px-8 py-12 text-center">
        <div className="mb-6 flex items-center justify-center gap-2">
          <div className="flex size-6 items-center justify-center rounded ">
            <div className="size-2 rounded-full " />
          </div>
          <span className="font-display font-bold tracking-tight ">AI BOT</span>
        </div>
        <p className="text-xs font-semibold tracking-widest  uppercase">
          &copy; 2026 AI BOT. The white-label AI business platform.
        </p>
      </footer>
    </div>
  );
}
