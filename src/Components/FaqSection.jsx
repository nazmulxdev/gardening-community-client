import React from "react";

const FaqSection = () => {
  return (
    <section className="my-12">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <h2 className="p-2 text-4xl font-bold leading-none text-center sm:text-5xl">
          <span className="primaryColor">Frequently</span> Asked Questions
        </h2>
        <p className="mb-12 text-lg font-medium tracking-wider text-center uppercase">
          Get answers to your most common questions and see how everything
          works—quick, simple, and helpful.
        </p>
        <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline primaryColor font-semibold">
              1. How do I share a gardening tip on the platform?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Just sign in, head to the "Share a Tip" section, and fill out
                the form with your tip, photos, and category (e.g. composting,
                hydroponics, balcony gardening). Once submitted, it’ll be
                visible to the community!
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline primaryColor font-semibold">
              2. Is the platform free to use?
            </summary>
            <div className="px-4 pb-4">
              <p>
                Yes! Core features like sharing tips, posting questions, and
                joining events are completely free. Some premium features may be
                added in the future (like expert Q&A), but the heart of the
                community will stay open.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline primaryColor font-semibold">
              3. How do I know if a tip is trustworthy or effective?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Each tip can be liked, commented on, and reviewed by the
                community. Look for high-rated posts, detailed instructions, or
                tips from users with verified gardening experience.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline primaryColor font-semibold">
              4. What can I do on this gardening platform?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                You can share gardening tips, ask and answer questions, connect
                with local gardeners, join or host events, explore topics like
                composting or hydroponics, and build your gardening profile —
                all in one place.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline primaryColor font-semibold">
              5. What topics are available on this platform?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Tons! Explore topics like composting, hydroponics, balcony
                gardening, native plants, organic farming, and more. Follow your
                favorite topics to stay updated.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer focus:underline primaryColor font-semibold">
              6. Can I like or save tips I find helpful?
            </summary>
            <div className="px-4 pb-4 space-y-2">
              <p>
                Yes, you can like any tip to show appreciation. You can also
                save your favorite tips to your profile for quick access later.
              </p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
