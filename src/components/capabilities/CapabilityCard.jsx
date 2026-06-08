export default function CapabilityCard({
    anchorId,
    chapter,
    title,
    description,
    competencyLabel = "MAIN COMPETENCY",
    competencyText,
    image,
    imageAlt,
    imagePosition = "right",
    details = [],
}) {
    const isImageLeft = imagePosition === "left";

    return (
        <article className="border border-white/10 bg-black/20 px-8 py-9 md:px-10 md:py-10 lg:px-12 lg:py-12" id={anchorId}>
            <div
                className={`grid gap-8 lg:grid-cols-[1fr_260px] lg:items-start ${isImageLeft ? "lg:grid-cols-[260px_1fr]" : ""
                    }`}
            >
                <div className={isImageLeft ? "lg:order-2" : ""}>
                    {chapter && (
                        <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-tight text-lime-400">
                            {chapter}
                        </p>
                    )}

                    {title && (
                        <h3 className="mb-4 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                            {title}
                        </h3>
                    )}

                    {description && (
                        <p className="max-w-3xl text-sm leading-7 text-slate-400">
                            {description}
                        </p>
                    )}
                </div>

                {(image || competencyText) && (
                    <div
                        className={`flex min-h-[92px] items-center justify-center border border-white/10 bg-black/30 p-4 ${isImageLeft ? "lg:order-1" : ""
                            }`}
                    >
                        {image ? (
                            <img
                                src={image}
                                alt={imageAlt || title || "Capability image"}
                                className="h-full max-h-[130px] w-full object-cover"
                            />
                        ) : (
                            <div className="text-center">
                                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                                    {competencyLabel}
                                </p>

                                <p className="font-mono text-[11px] font-bold uppercase leading-5 text-lime-400">
                                    {competencyText}
                                </p>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {details.length > 0 && (
                <>
                    <div className="my-8 h-px w-full bg-white/10" />

                    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
                        {details.map((item, index) => (
                            <div key={index}>
                                {item.title && (
                                    <h4 className="mb-3 font-mono text-[11px] font-bold uppercase leading-5 text-white">
                                        {item.title}
                                    </h4>
                                )}

                                {item.text && (
                                    <p className="text-xs leading-6 text-slate-500">
                                        {item.text}
                                    </p>
                                )}

                                {item.list && (
                                    <ol className="space-y-1 text-xs leading-5 text-slate-500">
                                        {item.list.map((listItem, listIndex) => (
                                            <li key={listIndex}>
                                                {listIndex + 1}. {listItem}
                                            </li>
                                        ))}
                                    </ol>
                                )}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </article>
    );
}