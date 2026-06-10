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
    const hasMedia = image || competencyText;

    return (
        <article
            className="border border-white/10 bg-[#0d0d0d] overflow-hidden"
            id={anchorId}
        >
            <div
                className={`grid ${hasMedia ? "lg:grid-cols-2" : ""}`}
            >
                {/* Content column — title + description + details all inside */}
                <div
                    className={`px-8 py-9 md:px-10 md:py-10 lg:px-12 lg:py-12 flex flex-col ${
                        isImageLeft ? "lg:order-2" : "lg:order-1"
                    }`}
                >
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
                        <p className="text-sm leading-7 text-slate-400">
                            {description}
                        </p>
                    )}

                    {/* Details live inside the content column */}
                    {details.length > 0 && (
                        <div className={`mt-8 pt-8 border-t border-white/10 grid gap-7 ${hasMedia ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-4"}`}>
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
                    )}
                </div>

                {/* Image column — stretches full height of the card */}
                {hasMedia && (
                    <div
                        className={`relative min-h-[320px] ${
                            isImageLeft ? "lg:order-1" : "lg:order-2"
                        }`}
                    >
                        {image ? (
                            <img
                                src={image}
                                alt={imageAlt || title || "Capability image"}
                                className="absolute inset-0 h-full w-full object-cover"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center border-l border-white/10 bg-black/30">
                                <div className="text-center">
                                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                                        {competencyLabel}
                                    </p>
                                    <p className="font-mono text-[11px] font-bold uppercase leading-5 text-lime-400">
                                        {competencyText}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </article>
    );
}