import React, { useState, useRef } from "react";
import { Image, Type, Video, FileText, Trash2, Send, X } from "lucide-react";
import TextEditor from "../../components/Admin/TextEditor";
import { API } from "../../utils/api";

const ContentBuilder = ({
  titlePlaceholder = "Title...",
  publishLabel = "Publish",
  onPublish,
  onCancel,
  extraFields = null,
  showCategory = false,
  initialTitle = "",
  initialCategory = "",
  existingCoverImage = "",
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [category, setCategory] = useState(initialCategory);
  const [content, setContent] = useState([]);
  const [showCoverModal, setShowCoverModal] = useState(false);
  const [coverFile, setCoverFile] = useState(null);
  const [coverPreview, setCoverPreview] = useState(existingCoverImage || "");
  const [publishing, setPublishing] = useState(false);

  const categories = [
    "Brand&Identity",
    "Branding",
    "Design&Experience",
    "Content&Storytelling",
    "Marketing&Growth",
    "Media&Production",
    "AI&CGI",
    "Events&Experiential",
  ];

  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const documentInputRef = useRef(null);

  const addText = () => {
    setContent((prev) => [
      ...prev,
      { id: Date.now(), type: "text", value: "" },
    ]);
  };

  const addImageFromDevice = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setContent((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "image",
        src: imageUrl,
        file,
      },
    ]);

    e.target.value = "";
  };

  const addVideoFromDevice = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const videoUrl = URL.createObjectURL(file);

    setContent((prev) => [
      ...prev,
      {
        id: Date.now(),
        type: "video",
        src: videoUrl,
        file,
      },
    ]);

    e.target.value = "";
  };
  const addDocumentFromDevice = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${API}/upload/document`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Document upload failed");
        return;
      }

      const linkText = window.prompt("Enter link text", file.name);

      if (!linkText) {
        e.target.value = "";
        return;
      }

      setContent((prev) => [
        ...prev,
        {
          id: Date.now(),
          type: "text",
          value: `<p><a href="${data.url}" target="_blank" download>${linkText}</a></p>`,
        },
      ]);

      e.target.value = "";
    } catch (error) {
      console.error(error);
      alert("Something went wrong while uploading the document");
    }
  };

  const updateContent = (id, value) => {
    setContent((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value } : item)),
    );
  };

  const deleteContent = (id) => {
    setContent((prev) => prev.filter((item) => item.id !== id));
  };

  const handlePublish = () => {
    if (!title.trim()) {
      alert("Please enter title");
      return;
    }

    if (showCategory && !category) {
      alert("Please select category");
      return;
    }

    // افتح popup رفع cover image بدل النشر المباشر
    setShowCoverModal(true);
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setCoverFile(file);
    setCoverPreview(URL.createObjectURL(file));
  };

  const confirmPublish = async () => {
    if (!coverFile && !existingCoverImage) {
      alert("Please upload cover image");
      return;
    }

    const firstText = content.find(
      (item) => item.type === "text" && item.value,
    );

    const description = firstText
      ? firstText.value.replace(/<[^>]+>/g, "").slice(0, 180)
      : "";

    const data = {
      title,
      description,
      category: showCategory ? category : "General",
      coverImage: coverFile,
      content,
      createdAt: new Date(),
    };

    try {
      setPublishing(true);

      if (onPublish) {
        await onPublish(data);
      }

      setShowCoverModal(false);
      setCoverFile(null);
      setCoverPreview(existingCoverImage || "");
    } catch (error) {
      console.error(error);
      alert(error.message || "Publish failed");
    } finally {
      setPublishing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020202] px-6 py-10 text-white">
      <div
        className="mx-auto grid max-w-[1320px] grid-cols-1 gap-8 lg:grid-cols-[1fr_390px]"
        dir="ltr"
      >
        {/* LEFT CONTENT AREA */}
        <main className="min-h-[720px] rounded-[22px] border border-white/10 bg-black p-6 lg:p-8">
          <div className="mb-8 border-b border-white/10 pb-6">
            <p className="mb-3 text-[12px] font-black uppercase tracking-[3px] text-[#0f33fe]">
              Content Workspace
            </p>

            <h1 className="m-0 text-[34px] font-black uppercase tracking-[-0.04em] text-white">
              Build Your Content
            </h1>

            <p className="mt-3 max-w-[680px] text-[15px] leading-[1.8] text-slate-400">
              Add text, images, and videos here. The first uploaded image will
              be used as the cover image.
            </p>
          </div>

          <input
            type="file"
            accept="image/*"
            ref={imageInputRef}
            onChange={addImageFromDevice}
            hidden
          />

          <input
            type="file"
            accept="video/*"
            ref={videoInputRef}
            onChange={addVideoFromDevice}
            hidden
          />
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            ref={documentInputRef}
            onChange={addDocumentFromDevice}
            hidden
          />

          {content.length === 0 ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-[#050505] p-8 text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#0f33fe]">
                <Type size={28} />
              </div>

              <h2 className="text-[24px] font-black uppercase tracking-[-0.03em] text-white">
                No content added yet
              </h2>

              <p className="mt-3 max-w-[460px] text-[15px] leading-[1.8] text-slate-500">
                Use the side panel to add image, text, or video blocks. Your
                blocks will appear here without being hidden by the controls.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {content.map((item, index) => (
                <div
                  key={item.id}
                  className="relative rounded-2xl border border-white/10 bg-[#080808] p-5 shadow-xl"
                >
                  <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="m-0 text-[11px] font-black uppercase tracking-[2px] text-slate-500">
                        Block {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-1 text-[16px] font-black uppercase text-white">
                        {item.type}
                      </h3>
                    </div>

                    <button
                      onClick={() => deleteContent(item.id)}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-red-400 transition hover:bg-red-500 hover:text-white"
                      type="button"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  {item.type === "image" && (
                    <img
                      src={item.src}
                      alt=""
                      className="w-full rounded-xl border border-white/10 object-cover"
                    />
                  )}

                  {item.type === "video" && (
                    <video
                      controls
                      className="w-full rounded-xl border border-white/10"
                    >
                      <source src={item.src} />
                    </video>
                  )}

                  {item.type === "text" && (
                    <TextEditor
                      value={item.value}
                      onChange={(value) => updateContent(item.id, value)}
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </main>

        {/* RIGHT CONTROL PANEL */}
        <aside className="h-fit rounded-[22px] border border-white/10 bg-[#050505] p-5 shadow-2xl lg:sticky lg:top-8">
          <div className="mb-6 border-b border-white/10 pb-5">
            <p className="mb-3 text-[12px] font-black uppercase tracking-[3px] text-[#bbfe0f]">
              Publish Settings
            </p>

            <h2 className="text-[24px] font-black uppercase tracking-[-0.03em] text-white">
              Blog Setup
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-[12px] font-black uppercase tracking-[2px] text-slate-500">
                Title
              </label>

              <input
                type="text"
                placeholder={titlePlaceholder}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-black p-4 text-left text-[18px] font-bold text-white placeholder-slate-600 outline-none transition focus:border-[#0f33fe] focus:ring-2 focus:ring-[#0f33fe]/20"
              />
            </div>

            {showCategory && (
              <div>
                <label className="mb-2 block text-[12px] font-black uppercase tracking-[2px] text-slate-500">
                  Category
                </label>

                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-4 text-left text-[15px] font-semibold text-white outline-none transition focus:border-[#0f33fe] focus:ring-2 focus:ring-[#0f33fe]/20"
                  dir="ltr"
                >
                  <option
                    value=""
                    style={{
                      backgroundColor: "#000",
                      color: "#9ca3af",
                      textAlign: "left",
                    }}
                  >
                    Select Category...
                  </option>

                  {categories.map((cat) => (
                    <option
                      key={cat}
                      value={cat}
                      style={{
                        backgroundColor: "#000",
                        color: "#ffffff",
                        textAlign: "left",
                      }}
                    >
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {extraFields && <div>{extraFields}</div>}

            <div className="rounded-2xl border border-white/10 bg-[#0f172a]/70 p-4">
              <p className="mb-4 text-[12px] font-black uppercase tracking-[2px] text-slate-400">
                Add Blocks
              </p>

              <div className="grid grid-cols-1 gap-3">
                <button
                  onClick={() => imageInputRef.current.click()}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-black px-4 py-4 text-[15px] font-bold text-gray-200 transition hover:border-[#0f33fe] hover:text-white"
                  type="button"
                >
                  <span className="flex items-center gap-3">
                    <Image size={18} /> Image
                  </span>
                  <span>+</span>
                </button>

                <button
                  onClick={addText}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-black px-4 py-4 text-[15px] font-bold text-gray-200 transition hover:border-[#0f33fe] hover:text-white"
                  type="button"
                >
                  <span className="flex items-center gap-3">
                    <Type size={18} /> Text
                  </span>
                  <span>+</span>
                </button>

                <button
                  onClick={() => videoInputRef.current.click()}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-black px-4 py-4 text-[15px] font-bold text-gray-200 transition hover:border-[#0f33fe] hover:text-white"
                  type="button"
                >
                  <span className="flex items-center gap-3">
                    <Video size={18} /> Video
                  </span>
                  <span>+</span>
                </button>
                <button
                  onClick={() => documentInputRef.current.click()}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-black px-4 py-4 text-[15px] font-bold text-gray-200 transition hover:border-[#0f33fe] hover:text-white"
                  type="button"
                >
                  <span className="flex items-center gap-3">
                    <FileText size={18} /> Document
                  </span>
                  <span>+</span>
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black p-4">
              <p className="text-[13px] leading-[1.7] text-slate-500">
                Blocks added:{" "}
                <span className="font-black text-white">{content.length}</span>
              </p>

              <p className="mt-1 text-[13px] leading-[1.7] text-slate-500">
                Cover image:{" "}
                <span className="font-black text-white">
                  {coverFile || existingCoverImage ? "Ready" : "Required"}
                </span>
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-2">
              <button
                onClick={handlePublish}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#0f33fe] px-8 py-4 text-[15px] font-black text-white transition hover:bg-[#0d2bd9]"
                type="button"
              >
                <Send size={17} />
                {publishLabel}
              </button>

              <button
                onClick={onCancel}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-8 py-4 text-[15px] font-bold text-gray-300 transition hover:bg-white hover:text-black"
                type="button"
              >
                <X size={17} />
                Cancel
              </button>
            </div>
          </div>
        </aside>
      </div>
      {showCoverModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-4">
          <div className="w-full max-w-[440px] rounded-2xl border border-white/10 bg-[#0f172a] p-6 shadow-2xl">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-[11px] font-black uppercase tracking-[2px] text-[#bbfe0f]">
                  Cover Image
                </p>

                <h3 className="text-[22px] font-black uppercase tracking-[-0.03em] text-white">
                  Upload Cover Image
                </h3>

                <p className="mt-2 text-[13px] leading-[1.7] text-slate-400">
                  This image will appear on the blog/project card and details
                  page.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowCoverModal(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:bg-white hover:text-black"
              >
                <X size={16} />
              </button>
            </div>

            <label className="mb-5 block cursor-pointer rounded-2xl border border-dashed border-white/20 bg-black p-4 text-center transition hover:border-[#0f33fe]">
              {coverPreview ? (
                <img
                  src={coverPreview}
                  alt="Cover preview"
                  className="h-[220px] w-full rounded-xl object-cover"
                />
              ) : (
                <div className="flex h-[180px] flex-col items-center justify-center text-slate-500">
                  <Image size={32} className="mb-3 text-[#0f33fe]" />
                  <span className="text-[14px] font-bold">
                    Click to upload cover image
                  </span>
                </div>
              )}

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleCoverChange}
              />
            </label>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => {
                  setShowCoverModal(false);
                  setCoverFile(null);
                  setCoverPreview(existingCoverImage || "");
                }}
                className="rounded-xl border border-white/10 px-5 py-3 text-[14px] font-bold text-slate-300 transition hover:bg-white hover:text-black"
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={publishing || (!coverFile && !existingCoverImage)}
                onClick={confirmPublish}
                className={`rounded-xl px-5 py-3 text-[14px] font-black text-white transition ${
                  publishing || (!coverFile && !existingCoverImage)
                    ? "cursor-not-allowed bg-slate-700"
                    : "bg-[#0f33fe] hover:bg-[#0d2bd9]"
                }`}
              >
                {publishing ? "Publishing..." : "Confirm Publish"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentBuilder;
