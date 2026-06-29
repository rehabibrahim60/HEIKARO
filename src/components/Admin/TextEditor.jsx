import { useState, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import { API } from "../../utils/api";
import {
  Bold,
  Italic,
  Heading1,
  Heading2,
  Link2,
  FileText,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Quote,
} from "lucide-react";

export default function TextEditor({ value, onChange }) {
  const [isFocused, setIsFocused] = useState(false);
  const documentInputRef = useRef(null);
  const savedSelectionRef = useRef(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        link: false,
      }),

      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),

      Link.configure({
        openOnClick: true,
        HTMLAttributes: {
          class: "text-[#0f33fe] underline cursor-pointer",
          target: "_blank",
          rel: "noopener noreferrer",
        },
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    onFocus: () => setIsFocused(true),
    onBlur: () => setIsFocused(false),
  });

  if (!editor) return null;

  const ToolbarButton = ({ onClick, active, title, children }) => (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      title={title}
      className={`p-2 rounded-lg transition-colors ${
        active ? "bg-[#0f33fe] text-white" : "text-gray-300 hover:bg-gray-700"
      }`}
    >
      {children}
    </button>
  );

  const handleDocumentUpload = async (e) => {
    console.log("DOCUMENT FILE CHANGED");

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
        e.target.value = "";
        return;
      }

      const savedSelection = savedSelectionRef.current;

      if (savedSelection && savedSelection.from !== savedSelection.to) {
        const { from, to } = savedSelection;

        const linkMark = editor.schema.marks.link.create({
          href: data.url,
          target: "_blank",
          rel: "noopener noreferrer",
        });

        const tr = editor.state.tr.addMark(from, to, linkMark);
        editor.view.dispatch(tr);
        editor.view.focus();
      } else {
        const linkText = window.prompt("Enter link text", file.name);

        if (!linkText) {
          e.target.value = "";
          return;
        }

        editor
          .chain()
          .focus()
          .insertContent(
            `<a href="${data.url}" target="_blank" rel="noopener noreferrer">${linkText}</a>`
          )
          .run();
      }

      const html = editor.getHTML();
      console.log("FINAL EDITOR HTML:", html);
      onChange(html);

      savedSelectionRef.current = null;
      alert("Document uploaded successfully");
      e.target.value = "";
    } catch (error) {
      console.error(error);
      alert("Something went wrong while uploading the document");
      e.target.value = "";
    }
  };

  return (
    <div>
      {isFocused && (
        <div className="flex flex-wrap items-center gap-1 p-2 border border-gray-700 border-b-0 rounded-t-xl bg-gray-800">
          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBold().run()}
            active={editor.isActive("bold")}
            title="Bold"
          >
            <Bold size={18} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleItalic().run()}
            active={editor.isActive("italic")}
            title="Italic"
          >
            <Italic size={18} />
          </ToolbarButton>

          <div className="w-px h-6 bg-gray-600 mx-1" />

          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            active={editor.isActive("heading", { level: 1 })}
            title="Heading 1"
          >
            <Heading1 size={18} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            active={editor.isActive("heading", { level: 2 })}
            title="Heading 2"
          >
            <Heading2 size={18} />
          </ToolbarButton>

          <div className="w-px h-6 bg-gray-600 mx-1" />

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            active={editor.isActive("bulletList")}
            title="Bullet List"
          >
            <List size={18} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            active={editor.isActive("orderedList")}
            title="Numbered List"
          >
            <ListOrdered size={18} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            active={editor.isActive("blockquote")}
            title="Quote"
          >
            <Quote size={18} />
          </ToolbarButton>

          <div className="w-px h-6 bg-gray-600 mx-1" />

          <ToolbarButton
            onClick={() => {
              const url = window.prompt("Enter URL");

              if (url) {
                editor
                  .chain()
                  .focus()
                  .setLink({
                    href: url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })
                  .run();
              } else {
                editor.chain().focus().unsetLink().run();
              }
            }}
            active={editor.isActive("link")}
            title="Link"
          >
            <Link2 size={18} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => {
              savedSelectionRef.current = {
                from: editor.state.selection.from,
                to: editor.state.selection.to,
              };

              console.log("DOCUMENT BUTTON CLICKED");

              documentInputRef.current?.click();
            }}
            active={false}
            title="Upload Document"
          >
            <FileText size={18} />
          </ToolbarButton>

          <div className="w-px h-6 bg-gray-600 mx-1" />

          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("left").run()}
            active={editor.isActive({ textAlign: "left" })}
            title="Align Left"
          >
            <AlignLeft size={18} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            active={editor.isActive({ textAlign: "center" })}
            title="Align Center"
          >
            <AlignCenter size={18} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => editor.chain().focus().setTextAlign("right").run()}
            active={editor.isActive({ textAlign: "right" })}
            title="Align Right"
          >
            <AlignRight size={18} />
          </ToolbarButton>
        </div>
      )}

      <input
        ref={documentInputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        hidden
        onChange={handleDocumentUpload}
      />

      <EditorContent
        editor={editor}
        className={`tiptap-content p-4 transition-colors ${
          isFocused
            ? "min-h-[120px] bg-gray-900 border border-gray-700 rounded-b-xl focus:outline-none"
            : "min-h-[40px] rounded-xl hover:bg-gray-800/50 cursor-text"
        }`}
      />
    </div>
  );
}