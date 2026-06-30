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
        className={`grid items-stretch ${
          hasMedia
            ? isImageLeft
              ? "lg:grid-cols-[0.92fr_1.08fr]"
              : "lg:grid-cols-[1.08fr_0.92fr]"
            : ""
        }`}
      >
        {/* Content column */}
        <div
          className={`px-7 py-8 md:px-9 md:py-10 lg:px-10 lg:py-11 flex flex-col ${
            isImageLeft ? "lg:order-2" : "lg:order-1"
          }`}
        >
          {chapter && (
            <p className="mb-4 font-mono text-[11px] font-bold uppercase tracking-tight text-[#bbfe0f]">
              {chapter}
            </p>
          )}

          {title && (
            <h3 className="mb-4 text-xl font-semibold tracking-tight text-white md:text-2xl">
              {title}
            </h3>
          )}

          {description && (
            <p className="max-w-[620px] text-sm leading-7 text-slate-400">
              {description}
            </p>
          )}

          {details.length > 0 && (
            <div
              className={`mt-8 pt-8 border-t border-white/10 grid gap-x-8 gap-y-9 ${
                hasMedia ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-4"
              }`}
            >
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
                    <ol className="space-y-1.5 text-xs leading-5 text-slate-500">
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

        {/* Image column */}
        {hasMedia && (
          <div
            className={`flex items-center justify-center bg-[#0d0d0d] p-3 md:p-4 ${
              isImageLeft ? "lg:order-1" : "lg:order-2"
            }`}
          >
            {image ? (
              <div className="relative aspect-square w-full max-w-[560px] overflow-hidden bg-[#0d0d0d]">
                <img
                  src={image}
                  alt={imageAlt || title || "Capability image"}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ) : (
              <div className="flex min-h-[320px] w-full items-center justify-center bg-[#0d0d0d]">
                <div className="text-center">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                    {competencyLabel}
                  </p>
                  <p className="font-mono text-[11px] font-bold uppercase leading-5 text-[#bbfe0f]">
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
