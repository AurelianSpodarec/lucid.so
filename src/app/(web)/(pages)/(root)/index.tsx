import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


function IconStar() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="249.748"
      height="239.338"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0"
      className="w-4 h-4 fill-[#fbbf24]"
      vectorEffect="non-scaling-stroke"
      viewBox="0 -10 187.673 179.503"
    >
      <path
        fill="var(--clr-rating)"
        stroke="none"
        d="M187.183 57.47a9.96 9.96 0 0 0-8.587-6.86l-54.167-4.918-21.42-50.134a9.98 9.98 0 0 0-9.172-6.052 9.97 9.97 0 0 0-9.172 6.061l-21.42 50.125L9.07 50.611a9.97 9.97 0 0 0-8.578 6.858 9.96 9.96 0 0 0 2.917 10.596l40.944 35.908-12.073 53.184a9.97 9.97 0 0 0 3.878 10.298A9.95 9.95 0 0 0 42 169.357a9.94 9.94 0 0 0 5.114-1.424l46.724-27.925 46.707 27.925a9.94 9.94 0 0 0 10.964-.478 9.98 9.98 0 0 0 3.88-10.298l-12.074-53.184 40.944-35.9a9.98 9.98 0 0 0 2.925-10.604zm0 0"
      ></path>
    </svg>
  )
}



function PageHome() {
  return (
    <div className="mt-22">

      <section id="hero" className="relative" style={{ backgroundImage: `url("/images/hero.webp")` }}>
        <div
          className="absolute top-0 w-full bg-white h-[520px]"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 15%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 15%, transparent 100%)',
          }}
        />
        <div
          className="absolute bottom-0 w-full bg-white h-[620px]"
          style={{
            WebkitMaskImage: 'linear-gradient(to top, black 15%, transparent 100%)',
            maskImage: 'linear-gradient(to top, black 15%, transparent 100%)',
          }}
        />

        <div className="flex flex-col items-center align-center text-center py-20 z-10 relative">



          <div className="flex space-x-2 items-center align-center mb-4">
            <div className="flex -space-x-2 overflow-hidden">
              <img src="https://pbs.twimg.com/profile_images/1935348909238321152/ZB51UHkk_normal.jpg" alt="" className="inline-block size-10 rounded-full ring-2 ring-white" />
              <img src="https://unavatar.io/x/flowagent1" alt="" className="inline-block size-10 rounded-full ring-2 ring-white" />
              <img src="https://unavatar.io/x/carlvellotti" alt="" className="inline-block size-10 rounded-full ring-2 ring-white" />
              <img src="https://pbs.twimg.com/profile_images/1918840927352733696/Wh95CwV5_400x400.jpg" alt="" className="inline-block size-10 rounded-full ring-2 ring-white" />
              <img src="https://pbs.twimg.com/profile_images/1790068799204634625/p5zTn3iI_normal.jpg" alt="" className="inline-block size-10 rounded-full ring-2 ring-white" />
            </div>
            <div>
              <div className="flex">
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
                <IconStar />
              </div>
              <p>Loved by 150+ writers worldwide</p>
            </div>
          </div>

          {/* Supercharge your Writing with AI Partner in one tab */}
          {/* An AI Writing Partner, Right Where You Write. */}
          {/* 1: Supercharge your writing with AI Partner in one tab
          2: Your Writing Supercharged by AI Partner in one tab
          3: An AI Writing Partner, Right Where You Write. */}
          {/* <div className="flex flex-col items-center mb-8">
            <h1 className="text-7xl font-medium text-gray-800 max-w-[1000px] mb-4 font-instrument-serif">
              Your Writing <br/>
              <span className="svg-underline mr-5">
                Supercharged by AI Partner
              </span>
              in one tab
            </h1>
            <p className="text-xl max-w-[700px] text-gray-800">Lucid is your AI-powered writing partner — draft, research, edit, and chat with context, all in one seamless workspace.</p>
          </div> */}

          <div className="flex flex-col items-center mb-8">
            <h1 className="text-7xl font-medium text-gray-800 max-w-[800px] mb-4 font-instrument-serif">
              {/* Supercharge your writing with AI Partner in one tab <br /> */}
              An <span className="svg-underline">AI Writing Partner</span>, <br/> Right Where You Write.


              {/* <span className="svg-underline mr-5">
                Supercharged by AI Partner
              </span>
              in one tab */}
            </h1>
            <p className="text-xl max-w-[700px] text-gray-800">Lucid blends AI-powered drafting, research, and editing into one seamless workspace. Write smarter, faster, and with context—all in a single tab.</p>
          </div>


          <div className="mb-16 space-x-4">
            <button className="cursor-pointer px-10 py-4 text-lg font-semibold text-gray-100 bg-[#67279e] border-[#160526] rounded-lg ">
              <div className="flex items-center space-x-2">
                <span>Start Writing</span>
                <ArrowRight />
              </div>
            </button>
            <button className="cursor-pointer text-gray-800 px-10 py-4 text-lg border bg-white/90 border-gray-400 rounded-lg">Learn more</button>
          </div>

          <div className="mb-6">
            <ul className="flex flex-row">
              <li className="after:content-['•'] after:mx-2 last:after:content-none">No credit card required</li>
              <li className="after:content-['•'] after:mx-2 last:after:content-none">Unlimited Messages</li>
              <li>AI Assisted Writing</li>
            </ul>
          </div>


          <Image src="/images/product-thumbnail.webp" alt="Product Image" className="w-[1000px] rounded-lg z-10" width="1000" height="1000" />
        </div>
      </section>


      {/* Benefit */}
      <section>
        <header>
          <span>
            Why Lucid
          </span>
          <h2>Built for Modern Writing</h2>
        </header>


        Write smarter with autocomplete
        ✅ Drop in PDFs, URLs, and files — Lucid reads them
        ✅ Chat with your doc and get context-aware answers
        ✅ Edit tone, length, and structure instantly
        ✅ Never face a blank page again


      </section>


      <section>
        <header>
          <h2>Features</h2>
        </header>
      </section>

      <section>
        <header>
          <h2>Testimonials</h2>
          <p>Words from Our Writers</p>
        </header>
      </section>

      <section>
        <header>
          <h2>Membership</h2>
          <p>As a member, you get everything you need to turn ideas into polished writing — effortlessly.</p>
        </header>

        <div>

        </div>
      </section>

      <section>
        <header>
          <h2>Things We Get Asked a Lot</h2>
        </header>

        <div>
          What models power Lucid?
          We use a combination of models for differnt purspoes
        </div>

        Have anothe rquestoi? Send us an email at:
      </section>

      <section>
        <h2>Ready to revolutionise your writing with AI?</h2>
        <p>Enhance your writing with Lucid AI Writer — smarter, faster editing powered by AI in one place.</p>
        <button>Begin</button>
      </section>

      <footer>

      </footer>

    </div>
  );
}

export default PageHome