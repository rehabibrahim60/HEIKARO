export default function DirectionSection({
    title,
    subtitle1,
    subtitle2,
    description,
    buttonText,
    buttonHref,
    imagePosition = "right",
}) {
    return (
        <section className="bg-black px-6 py-24 text-white lg:px-20">
            <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-2">

                {imagePosition === "left" && (
                    <div className="flex justify-start">
                        <div className="h-[350px] w-full border border-white/10" />
                    </div>
                )}

                <div>
                    <h2 className="text-5xl font-black uppercase leading-none">
                        {title}
                    </h2>

                    <p className="mt-8 max-w-[650px] text-lg   text-[#0A5BFF]">
                        {subtitle1}
                    </p>
                    <p className="mt-8 max-w-[650px] text-md   text-[#94A3B8]">
                        {subtitle2}
                    </p>

                    <p className="mt-8 max-w-[520px] text-lg leading-8 text-slate-400">
                        {description}
                    </p>

                    <a
                        href={buttonHref}
                        className="mt-10 inline-flex border border-[#0A5BFF]/30 px-8 py-4 text-xs font-bold uppercase  transition hover:border-[#0A5BFF]"
                    >
                        {buttonText}
                    </a>
                </div>

                {imagePosition === "right" && (
                    <div className="flex justify-end">
                        <div className="h-[350px] w-full border border-white/10" />
                    </div>
                )}
            </div>
        </section>
    );
}