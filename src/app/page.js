"use client";
import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function App() {
  const editor = useEditor({
    extensions: [StarterKit],
  });

  return <div>Here</div>;
}
