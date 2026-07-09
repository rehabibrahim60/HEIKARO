import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../utils/api";

const fallbackCases = [
  {
    tag: "Brand & Identity",
    title: "Global Brand Architecture Evolution",
  },
  {
    tag: "Design & Experience",
    title: "Enterprise SaaS Performance Portal",
  },
  {
    tag: "Marketing & Growth",
    title: "D2C Market Dominance Campaign",
  },
];

export default function CaseArchitectures() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  const getImageUrl = (url) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    return `${API}${url}`;
  };
  const formatCategory = (category = "") =>
  category
    .replace(/&/g, " & ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toUpperCase();

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${API}/projects?limit=3`, {
          cache: "no-store",
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data?.message || "Failed to load projects");
        }

        const firstThreeProjects = (data.data || []).slice(0, 3);

        setCases(firstThreeProjects);
      } catch (error) {
        console.error("Failed to load case architectures:", error);
        setCases([]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const displayCases = cases.length > 0 ? cases : fallbackCases;

  return (
    <section
      className="case-architectures-section bg-[#050505] px-6 py-28 text-white lg:px-20"
      style={{ fontFamily: "Aspekta, sans-serif" }}
    >
      <div className="mx-auto max-w-[1100px]">
        <p className="text-[13px] font-black uppercase tracking-[0.35em] text-[#bbfe0f]">
          The Proof
        </p>

        <h2 className="mt-5 text-[38px] font-black uppercase leading-[1.08] tracking-[-0.05em] text-white md:text-[48px] lg:text-[58px]">
          Case Architectures.
        </h2>

        {loading ? (
          <p className="mt-20 text-[14px] font-black uppercase tracking-[0.2em] text-white/40">
            Loading projects...
          </p>
        ) : (
          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {displayCases.map((item) => {
              const isFromBackend = Boolean(item._id || item.slug);
              const cardContent = (
                <>
                  <div className="absolute left-0 top-7 h-[5px] w-full bg-white/10" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    {item.coverImage ? (
                      <img
                        src={getImageUrl(item.coverImage)}
                        alt={item.title}
                        className="h-full w-full object-cover opacity-35 transition duration-500 group-hover:scale-105 group-hover:opacity-55"
                      />
                    ) : (
                      <>
                        <div className="relative h-32 w-32 opacity-20">
                          <span className="absolute left-1/2 top-1/2 h-[4px] w-full -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white/40" />
                          <span className="absolute left-1/2 top-1/2 h-[4px] w-full -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white/40" />
                        </div>

                        <p className="absolute text-[20px] font-black uppercase tracking-[-0.02em] text-white/15">
                          HEIKARO ASSET
                        </p>
                      </>
                    )}
                  </div>

                  <div className="absolute bottom-7 left-6 right-6 z-10">
                 <p className="text-[12px] font-black uppercase leading-[1.4] tracking-[[0.04em] text-[#0f33fe]">
                  {formatCategory(item.category || item.tag)}
                </p>

                    <h3 className="mt-4 max-w-[260px] text-[24px] font-black uppercase leading-[1.05] tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                  </div>

                  <span className="absolute bottom-7 right-6 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-[16px] text-white/70 transition group-hover:border-[#0f33fe] group-hover:text-[#0f33fe]">
                    ↗
                  </span>
                </>
              );

              if (isFromBackend && item.slug) {
                return (
                  <Link
                    key={item._id || item.slug}
                    to={`/projects/${item.slug}`}
                    className="group relative h-[330px] overflow-hidden border border-white/10 bg-[#050505] transition duration-300 hover:border-[#0f33fe]"
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <article
                  key={item.title}
                  className="group relative h-[330px] overflow-hidden border border-white/10 bg-[#050505] transition duration-300 hover:border-[#0f33fe]"
                >
                  {cardContent}
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
