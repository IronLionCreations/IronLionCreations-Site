export default function IronLionCreationsWebsite() {
  const featuredProducts = [
    {
      title: "Dino DIY Kits",
      description:
        "3D metal dinosaur kits designed for hands-on builds at home with family.",
    },
    {
      title: "Custom Metal Signs",
      description:
        "Finished custom signs built to order and ready to display in your home, shop, or ranch.",
    },
    {
      title: "Industrial Decor",
      description:
        "Handcrafted metal pieces with a bold, rugged look built to last.",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="border-b border-stone-800 bg-stone-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="text-2xl font-black tracking-[0.2em] text-amber-300">
              IRON LION
            </div>
            <div className="text-sm uppercase tracking-[0.35em] text-stone-400">
              Creations
            </div>
          </div>
          <nav className="hidden gap-6 text-sm uppercase tracking-wide text-stone-300 md:flex">
            <a href="#about" className="transition hover:text-amber-300">About</a>
            <a href="#products" className="transition hover:text-amber-300">Products</a>
            <a href="#custom" className="transition hover:text-amber-300">Custom Work</a>
            <a href="#contact" className="transition hover:text-amber-300">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.14),_transparent_40%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div className="relative z-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              Made in Texas • Built to last
            </p>
            <h1 className="max-w-2xl text-5xl font-black uppercase leading-none tracking-tight md:text-7xl">
              Bold metalwork for homes, shops, and family builds.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">
              Iron Lion Creations is a small Texas-based shop run by Nic and Chrissy. We build handcrafted metal pieces, from custom signs to industrial-style decor, plus select 3D designs that can ship as DIY kits so families can build something together.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#products"
                className="rounded-2xl bg-amber-300 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-stone-950 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5"
              >
                Shop Products
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-stone-700 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-stone-100 transition hover:border-amber-300 hover:text-amber-300"
              >
                Start a Custom Order
              </a>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-[2rem] border border-stone-800 bg-stone-900 p-3 shadow-2xl">
              <img
                src="sandbox:/mnt/data/front face logo.png"
                alt="Iron Lion Creations logo"
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
              About Iron Lion
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
              Small shop. Real work. No mass production.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-stone-300">
              <p>
                We started Iron Lion Creations because we love creating things that actually last, and family is a big priority for us.
              </p>
              <p>
                Every piece is built with care, and we take our time to do it right instead of just pushing things out. What we make, we stand behind — simple as that.
              </p>
              <p>
                That is a big part of why we offer some of our 3D designs as DIY kits — so you can build something yourself or make it a project with your family. Our signs and other metal pieces come fully built and ready to go.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Texas-based small shop",
              "Custom metal signs",
              "3D DIY dino kits",
              "Industrial-style decor",
              "Built with care",
              "Made to last",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-stone-800 bg-stone-900/80 p-6 text-base font-medium text-stone-200 shadow-lg shadow-black/20"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="border-y border-stone-800 bg-stone-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Featured Products
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
            What we make
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <div
                key={product.title}
                className="rounded-[2rem] border border-stone-800 bg-stone-950 p-8 shadow-xl shadow-black/20"
              >
                <div className="text-xl font-black uppercase text-amber-300">
                  {product.title}
                </div>
                <p className="mt-4 text-base leading-7 text-stone-300">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="custom" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2rem] border border-stone-800 bg-gradient-to-br from-stone-900 to-stone-950 p-8 md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
            Custom Work
          </p>
          <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
            Have an idea? Let’s build it.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
            Whether you want a one-of-a-kind sign, a custom metal piece for your space, or a standout 3D design, we’re always up for bringing something new to life.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "Tell us what you want",
              "We design and build it",
              "Shipped finished or as select DIY kits",
            ].map((step, index) => (
              <div key={step} className="rounded-3xl border border-stone-800 bg-stone-900/70 p-6">
                <div className="text-sm font-bold uppercase tracking-[0.3em] text-amber-300">
                  0{index + 1}
                </div>
                <div className="mt-3 text-xl font-bold text-stone-100">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-stone-800 bg-stone-900/60">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_0.9fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-300">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
                Reach out for custom orders or questions.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-300">
                The easiest way to get started is to send a message with what you’re looking for, the size you need, and whether you want it fully built or one of our available DIY kit options.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-800 bg-stone-950 p-8 shadow-xl shadow-black/20">
              <div className="space-y-5 text-stone-300">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-stone-500">
                    Shop Name
                  </div>
                  <div className="mt-2 text-xl font-semibold text-stone-100">
                    Iron Lion Creations
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-stone-500">
                    Based In
                  </div>
                  <div className="mt-2 text-xl font-semibold text-stone-100">
                    Texas
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-stone-500">
                    Best For
                  </div>
                  <div className="mt-2 text-xl font-semibold text-stone-100">
                    Custom signs, metal decor, and 3D DIY builds
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-stone-500">
                    Email
                  </div>
                  <div className="mt-2 space-y-2 text-base font-medium text-stone-100">
                    <div><a href="mailto:info@ironlioncreations.com" className="hover:text-amber-300">info@ironlioncreations.com</a></div>
                    <div><a href="mailto:nic@ironlioncreations.com" className="hover:text-amber-300">nic@ironlioncreations.com</a></div>
                    <div><a href="mailto:chrissy@ironlioncreations.com" className="hover:text-amber-300">chrissy@ironlioncreations.com</a></div>
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.3em] text-stone-500">
                    Follow Along
                  </div>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a href="https://www.facebook.com/profile.php?id=61578433996887" target="_blank" rel="noreferrer" className="rounded-2xl border border-stone-700 px-4 py-2 text-sm font-bold uppercase tracking-wide text-stone-100 transition hover:border-amber-300 hover:text-amber-300">Facebook</a>
                    <a href="https://www.instagram.com/ironlioncreations/" target="_blank" rel="noreferrer" className="rounded-2xl border border-stone-700 px-4 py-2 text-sm font-bold uppercase tracking-wide text-stone-100 transition hover:border-amber-300 hover:text-amber-300">Instagram</a>
                    <a href="#" className="rounded-2xl border border-stone-700 px-4 py-2 text-sm font-bold uppercase tracking-wide text-stone-500 transition">Etsy Soon</a>
                  </div>
                </div>
                <a
                  href="mailto:info@ironlioncreations.com"
                  className="mt-4 inline-block rounded-2xl bg-amber-300 px-6 py-3 text-sm font-bold uppercase tracking-wide text-stone-950 transition hover:-translate-y-0.5"
                >
                  Start a Custom Order
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
