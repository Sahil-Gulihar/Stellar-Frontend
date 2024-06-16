import { ReactNode } from "react";
import { MountainIcon } from "./SignIn";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import FAQ from "./FAQ";

const Link = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) => (
  <a href={href} className={className}>
    {children}
  </a>
);
export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-dvh">
      <header className="bg-gray-900 text-white px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center justify-center gap-4">
            <MountainIcon className="h-10 w-10 text-blue-500" />
            <span className="text-3xl font-semibold">Decentr</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/search" className="hover:text-gray-400">
            Find Freelancers
          </Link>
          <Link href="/search" className="hover:text-gray-400">
            Post a Job
          </Link>
          <Link href="/gigs" className="hover:text-gray-400">
            Opportunites
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              navigate("/signin");
            }}
            className="text-white hover:bg-gray-800 border border-white py-2 px-4 rounded"
          >
            Sign In
          </button>

          <button
            onClick={() => {
              navigate("/signup");
            }}
            className="bg-[#00b894] hover:bg-[#00a185] text-white py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gray-900 text-white py-20 md:py-32">
          <div className="container max-w-4xl mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Unlock Your Potential with Decentr
              </h1>
              <p className="text-lg text-gray-400">
                Decentr is a decentralized freelance marketplace where you can
                buy and sell skills using our custom token system.
              </p>
              <div className="flex gap-4">
                <Link href="/search">
                <button className="bg-[#00b894] hover:bg-[#00a185] text-white py-2 px-4 rounded">
                  Find Freelancers
                </button>
                </Link>
                <Link href="/search">
                <button className="text-white hover:bg-gray-800 border border-white py-2 px-4 rounded">
                  Post a Job
                </button>
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://assets-global.website-files.com/606a802fcaa89bc357508cad/60f5c26a5b1f4b782dd521f2_30.jpg"
                width={600}
                height={400}
                alt="Hero"
                className="rounded-xl"
              />
            </div>
          </div>
        </section>
        <section className="py-20 md:py-32 bg-gray-200">
          <div className="container max-w-4xl mx-auto px-4 md:px-6 grid gap-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl animate__animated animate__fadeInDown">
                How Decentr Works
              </h2>
              <p className="text-lg text-black ">
                Decentr is a decentralized platform that connects freelancers
                and clients seamlessly.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Link href="/signup">
                <div className="bg-white rounded-xl  border border-black shadow-md p-6 space-y-4 hover:shadow-lg animate__animated animate__fadeInUp">
                  <UserIcon className="w-10 h-10 text-[#00b894]" />

                  <h3 className="text-xl font-semibold">Create a Profile</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Build your professional profile, showcase your skills, and
                    let clients discover you.
                  </p>
                </div>
              </Link>

              <Link href="/search">
              <div className="bg-white rounded-xl  border border-black shadow-md p-6 space-y-4 hover:shadow-lg animate__animated animate__fadeInUp">
                <BriefcaseIcon className="w-10 h-10 text-[#00b894]" />
                <h3 className="text-xl font-semibold">Browse and Hire</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Clients can browse freelancer profiles, review portfolios, and
                  hire the perfect talent for their projects.
                </p>
              </div>
              </Link>
              <Link href="https://aws.amazon.com/blockchain/decentralization-in-blockchain/">
              <div className="bg-white rounded-xl  border border-black shadow-md p-6 space-y-4 hover:shadow-lg animate__animated animate__fadeInUp">
                <WalletIcon className="w-10 h-10 text-[#00b894]" />
                <h3 className="text-xl font-semibold">Secure Payments</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Decentr's escrow system ensures secure payments and
                  transparent transactions.
                </p>
              </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 dark:bg-gray-800 py-20 md:py-32">
          <div className="container max-w-4xl mx-auto px-4 md:px-6 grid gap-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Explore Top Freelancers
              </h2>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                Browse our talented pool of freelancers and find the perfect
                match for your project.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl space-y-4">
                <div className="flex items-center">
                  <img
                    src="https://pbs.twimg.com/profile_images/1759330620160049152/2i_wkOoK_400x400.jpg"
                    alt="User Avatar"
                    className="w-14 h-14 border-2 border-[#00b894] rounded-full"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">Prime Agent</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Web Developer
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <StarIcon className="w-5 h-5 fill-[#00b894]" />
                  <StarIcon className="w-5 h-5 fill-[#00b894]" />
                  <StarIcon className="w-5 h-5 fill-[#00b894]" />
                  <StarIcon className="w-5 h-5 fill-[#00b894]" />
                  <StarIcon className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
                  <span className="text-sm font-medium">4.8</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                  Experienced web developer with a passion for building scalable
                  and user-friendly applications. Proficient in React, Node.js,
                  and database technologies.
                </p>
                <button className="w-full bg-[#00b894] hover:bg-[#00a185] text-white py-2 px-4 rounded">
                  Hire Prime
                </button>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl space-y-4">
                <div className="flex items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVa3N56l1vKwYzBFNPwJNKudianr-p4x-JvA&s"
                    alt="User Avatar"
                    className="w-14 h-14 border-2 border-[#00b894] rounded-full"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">Melkey dev</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    System Admin
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <StarIcon className="w-5 h-5 fill-[#00b894]" />
                  <StarIcon className="w-5 h-5 fill-[#00b894]" />
                  <StarIcon className="w-5 h-5 fill-[#00b894]" />
                  <StarIcon className="w-5 h-5 fill-[#00b894]" />
                  <StarIcon className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
                  <span className="text-sm font-medium">4.7</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                  Talented System admin developer with great contributions to
                  open source
                </p>
                <button className="w-full bg-[#00b894] hover:bg-[#00a185] text-white py-2 px-4 rounded">
                  Hire Milky
                </button>
              </div>
              <div className="bg-white dark:bg-gray-700 p-6 rounded-xl space-y-4">
                <div className="flex items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR9720tEvrLdHigGXBfTvNdLEU66LLlNpiUA&s"
                    alt="User Avatar"
                    className="w-14 h-14 border-2 border-[#00b894] rounded-full"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">Th3o</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Content Writer
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <StarIcon className="w-5 h-5 fill-[#00b894]" />
                  <StarIcon className="w-5 h-5 fill-[#00b894]" />
                  <StarIcon className="w-5 h-5 fill-[#00b894]" />
                  <StarIcon className="w-5 h-5 fill-[#00b894]" />
                  <StarIcon className="w-5 h-5 fill-gray-300 dark:fill-gray-600" />
                  <span className="text-sm font-medium">4.9</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 line-clamp-3">
                  Skilled content writer with a knack for controversies. Great
                  example of wasted potential
                </p>
                <button className="w-full bg-[#00b894] hover:bg-[#00a185] text-white py-2 px-4 rounded">
                  Hire Th3o
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FAQ />
      <Footer />
    </div>
  );
}

function BriefcaseIcon(props: { className: string }) {
  return (
    <svg {...props}>
      <path d="M6 2h4a1 1 0 011 1v1h2V3a1 1 0 011-1h4a1 1 0 011 1v3h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h1V3a1 1 0 011-1zm-1 3V4h4v1H5zm14 0V4h-4v1h4zm-3 3h-2V6h-2v2H8V6H6v2H5v2h14V8h-3zm3 4v5H5v-5h14z" />
    </svg>
  );
}

function UserIcon(props: { className: string }) {
  return (
    <svg {...props}>
      <path d="M12 2a5 5 0 00-5 5v1a5 5 0 0010 0V7a5 5 0 00-5-5zm-3 6V7a3 3 0 116 0v1a3 3 0 01-6 0zm3 7c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
    </svg>
  );
}

function WalletIcon(props: { className: string }) {
  return (
    <svg {...props}>
      <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm4 2a1 1 0 100-2H4v2h2zm0 2v6h12v-6H6zm8 1a1 1 0 110 2 1 1 0 010-2z" />
    </svg>
  );
}

function StarIcon(props: { className: string }) {
  return (
    <svg {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.964a1 1 0 00.95.69h4.17c.97 0 1.372 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.964c.3.921-.755 1.688-1.539 1.118L12 14.401l-3.38 2.455c-.783.57-1.838-.197-1.539-1.118l1.286-3.964a1 1 0 00-.364-1.118L4.623 9.39c-.784-.57-.381-1.81.588-1.81h4.17a1 1 0 00.95-.69l1.286-3.964z" />
    </svg>
  );
}
