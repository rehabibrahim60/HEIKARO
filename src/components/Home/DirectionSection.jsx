export default function DirectionSection({
  title,
  subtitle1,
  subtitle2,
  description,
  buttonText,
  buttonHref,
  imagePosition = "right",
}) {
  const finalHref = buttonHref?.startsWith("/") ? buttonHref : `/${buttonHref}`;

  return (
    <section
      className="bg-black px-6 py-28 text-white lg:px-20"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 lg:grid-cols-2">
        {imagePosition === "left" && (
          <div className="flex justify-start hover:scale-105 active:scale-95 transition duration-300">
            <div className="h-[350px] w-full border border-white/10 bg-white/[0.02]" />
          </div>
        )}

        <div>
          <h2 className="text-[40px] font-black uppercase leading-[1.05] tracking-[-0.04em] text-white md:text-[50px] lg:text-[62px]">
            {title}
          </h2>

          {subtitle1 && (
            <p className="mt-8 max-w-[700px] text-[20px] font-semibold leading-[1.8] text-[#0f33fe]">
              {subtitle1}
            </p>
          )}

          {subtitle2 && (
            <p className="mt-7 max-w-[700px] text-[19px] font-medium leading-[1.85] text-[#94A3B8]">
              {subtitle2}
            </p>
          )}

          {description && (
            <p className="mt-7 max-w-[650px] text-[19px] font-medium leading-[1.9] text-slate-400">
              {description}
            </p>
          )}

          {buttonText && (
            <a
              href={finalHref}
              className="mt-10 inline-flex border border-[#0f33fe]/40 px-8 py-4 text-[14px] font-black uppercase tracking-[1.5px] text-white transition hover:border-[#0f33fe] hover:bg-white hover:text-black"
            >
              {buttonText}
            </a>
          )}
        </div>

        {imagePosition === "right" && (
          <div className="flex justify-end hover:scale-105 active:scale-95 transition duration-300">
            <div className="h-[350px] w-full border border-white/10 bg-white/[0.02]" />
          </div>
        )}
      </div>
    </section>
  );
}