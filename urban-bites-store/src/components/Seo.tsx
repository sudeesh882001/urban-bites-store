import { useEffect } from "react";

export default function Seo({ title, description }: { title?: string; description?: string }) {
  useEffect(() => {
    document.title = title ?? "Urban Bites — Premium Dry Fruits, Chocolate & Seeds Online Store";
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
  return null;
}