import React, { useState, useRef } from "react";
import { Image, Type, Video, Trash2 } from "lucide-react";
import TextEditor from "../../components/Admin/TextEditor";

const ContentBuilder = ({
  titlePlaceholder = "Title...",
  publishLabel = "Publish",
  onPublish,
  onCancel,
  extraFields = null,
  showCategory = false,
}) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState([]);

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

  const addText = () => {
    setContent((prev) => [...prev, { id: Date.now(), type: "text", value: "" }]);
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
        file: file,
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
        file: file,
      },
    ]);

    e.target.value = "";
  };

  const updateContent = (id, value) => {
    setContent((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value } : item))
    );
  };

  const deleteContent = (id) => {
    setContent((prev) => prev.filter((item) => item.id !== id));
  };

  const handlePublish = () => {
    if (!title.trim()) {
      alert("Please enter blog title");
      return;
    }

    const firstImage = content.find((item) => item.type === "image" && item.file);

    if (!firstImage) {
      alert("Please add at least one image. The first image will be used as cover image.");
      return;
    }

    const firstText = content.find((item) => item.type === "text" && item.value);

    const description = firstText
      ? firstText.value.replace(/<[^>]+>/g, "").slice(0, 180)
      : "";

    if (showCategory && !category) {
      alert("Please select blog category");
      return;
    }

    const data = {
      title,
      description,
      category: showCategory ? category : "General",
      coverImage: firstImage.file,
      content,
      createdAt: new Date(),
    };

    if (onPublish) onPublish(data);
  };

  return (
    <div className="min-h-screen bg-black pt-[480px] pb-10 px-4">
      <div className="max-w-5xl mx-auto" dir="ltr">

        {/* Fixed top editor controls */}

        <div className="fixed top-[130px] left-[244px] right-0 h-[320px] z-[9999] bg-black px-8 pt-4 pb-4 border-b border-gray-900 overflow-hidden">
          <div className="max-w-5xl mx-auto bg-[#050505] border border-gray-800 rounded-2xl p-4 shadow-2xl">
            <input
              type="text"
              placeholder={titlePlaceholder}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-4 text-left text-3xl font-bold border border-gray-800 rounded-xl mb-4 bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0f33fe]"
            />

            {showCategory && (
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-4 mb-4 text-left text-lg font-semibold border border-gray-800 rounded-xl bg-black text-white focus:outline-none focus:ring-2 focus:ring-[#0f33fe]"
                dir="ltr"
              >
                <option value="" style={{ backgroundColor: "#000", color: "#9ca3af", textAlign: "left" }}>
                  Select Category...
                </option>

                {categories.map((cat) => (
                  <option
                    key={cat}
                    value={cat}
                    style={{ backgroundColor: "#000", color: "#ffffff", textAlign: "left" }}
                  >
                    {cat}
                  </option>
                ))}
              </select>
            )}

            {extraFields && <div className="mb-4">{extraFields}</div>}

            <div className="flex flex-wrap gap-3 bg-gray-900/90 backdrop-blur border border-gray-800 p-4 rounded-xl shadow">
              <button
                onClick={() => imageInputRef.current.click()}
                className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-800 transition-colors"
              >
                <Image size={18} /> Image
              </button>

              <button
                onClick={addText}
                className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-800 transition-colors"
              >
                <Type size={18} /> Text
              </button>

              <button
                onClick={() => videoInputRef.current.click()}
                className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-800 transition-colors"
              >
                <Video size={18} /> Video
              </button>
            </div>
          </div>
        </div>

        <input type="file" accept="image/*" ref={imageInputRef} onChange={addImageFromDevice} hidden />
        <input type="file" accept="video/*" ref={videoInputRef} onChange={addVideoFromDevice} hidden />

        <div className="space-y-6">
          {content.map((item) => (
            <div key={item.id} className="bg-gray-900 border border-gray-800 rounded-xl shadow p-4 relative">
              {item.type === "image" && <img src={item.src} alt="" className="w-full rounded-xl" />}

              {item.type === "video" && (
                <video controls className="w-full rounded-xl">
                  <source src={item.src} />
                </video>
              )}

              {item.type === "text" && (
                <TextEditor value={item.value} onChange={(value) => updateContent(item.id, value)} />
              )}

              <button
                onClick={() => deleteContent(item.id)}
                className="absolute top-4 right-4 text-red-400 bg-gray-800 rounded-full p-1 shadow hover:bg-gray-700 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-8 py-3 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 transition-colors"
          >
            إلغاء
          </button>

          <button
            onClick={handlePublish}
            className="bg-[#0f33fe] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#0d2bd9] transition-colors"
          >
            {publishLabel}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ContentBuilder;
