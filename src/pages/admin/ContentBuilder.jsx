import React, { useState, useRef } from "react";
import { Image, Type, Video, Trash2 } from "lucide-react";
import TextEditor from "../../components/TextEditor";

const ContentBuilder = ({
  titlePlaceholder = "Title...",
  publishLabel = "Publish",
  onPublish,
  extraFields = null,
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState([]);

  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  const addText = () => {
    setContent((prev) => [...prev, { id: Date.now(), type: "text", value: "" }]);
  };

  const addImageFromDevice = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setContent((prev) => [...prev, { id: Date.now(), type: "image", src: imageUrl }]);
  };

  const addVideoFromDevice = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const videoUrl = URL.createObjectURL(file);
    setContent((prev) => [...prev, { id: Date.now(), type: "video", src: videoUrl }]);
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
    const data = { title, content, createdAt: new Date() };
    if (onPublish) {
      onPublish(data);
    } else {
      console.log(data);
      alert("Published Successfully");
    }
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-10 px-4">
      <div className="max-w-5xl mx-auto">

        <input
          type="text"
          placeholder={titlePlaceholder}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-4 text-3xl font-bold border border-gray-800 rounded-xl mb-8 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        {/* Extra Fields (زي GitHub link في Portfolio) */}
        {extraFields && <div className="mb-8">{extraFields}</div>}

        <div className="sticky top-24 z-20 flex flex-wrap gap-3 bg-gray-900/90 backdrop-blur border border-gray-800 p-4 rounded-xl shadow mb-8">
          <button onClick={() => imageInputRef.current.click()} className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-800 transition-colors">
            <Image size={18} /> Image
          </button>
          <button onClick={addText} className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-800 transition-colors">
            <Type size={18} /> Text
          </button>
          <button onClick={() => videoInputRef.current.click()} className="flex items-center gap-2 px-4 py-2 border border-gray-700 rounded-lg text-gray-200 hover:bg-gray-800 transition-colors">
            <Video size={18} /> Video
          </button>
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
              <button onClick={() => deleteContent(item.id)} className="absolute top-4 right-4 text-red-400 bg-gray-800 rounded-full p-1 shadow hover:bg-gray-700 transition-colors">
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <button onClick={handlePublish} className="bg-cyan-500 text-black font-semibold px-8 py-3 rounded-xl hover:bg-cyan-400 transition-colors">
            {publishLabel}
          </button>
        </div>

      </div>
    </div>
  );
};

export default ContentBuilder;