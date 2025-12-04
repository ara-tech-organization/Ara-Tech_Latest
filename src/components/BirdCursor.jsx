import React, { useEffect, useRef, useState } from "react";
import styles from "./BirdCursor.module.css";

const BODY_CLASS = "showCursor";

export default function BirdCursor() {
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // ref to avoid re-creating functions in listeners
  const isInsideFAQRef = useRef(false);

  useEffect(() => {
    // safe helper: check a node (Element) and its ancestors for selector
    const nodeOrAncestorsMatch = (node, checkFn) => {
      let cur = node;
      while (cur) {
        try {
          if (cur.nodeType === 1 && checkFn(cur)) return true; // ELEMENT_NODE
        } catch (err) {
          // ignore
        }
        cur = cur.parentElement;
      }
      return false;
    };

    // try to detect via the event's composedPath (best for portals / shadow DOM / svg)
    const pathHasFAQ = (e) => {
      if (typeof e.composedPath === "function") {
        const path = e.composedPath();
        if (Array.isArray(path)) {
          for (let node of path) {
            if (!node) continue;
            // check dataset flag or attribute
            try {
              if (node.dataset && node.dataset.faqAccordion !== undefined)
                return true;
              if (
                node.getAttribute &&
                node.getAttribute("[data-faq-accordion]") !== null
              ) {
                // defensive - most likely dataset check above covers it
                return true;
              }
            } catch (err) {
              // ignore
            }
          }
        }
      }
      return false;
    };

    // pointermove handler (main cursor mover)
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // 1) quick path: check composedPath for data attribute
      const inFAQ_viaPath = pathHasFAQ(e);
      if (inFAQ_viaPath) {
        isInsideFAQRef.current = true;
      } else {
        // 2) fallback: use elementFromPoint -> closest (normal DOM)
        const el = document.elementFromPoint(e.clientX, e.clientY);
        const inFAQ_viaClosest =
          !!el && !!el.closest && !!el.closest("[data-faq-accordion]");
        isInsideFAQRef.current = !!inFAQ_viaClosest;
      }

      // elementUnderPointer for clickability checks (use elementFromPoint)
      const elUnder = document.elementFromPoint(e.clientX, e.clientY);

      const isClickable = (() => {
        if (!elUnder) return false;

        // direct clickable tags
        if (
          elUnder.tagName === "A" ||
          elUnder.tagName === "BUTTON" ||
          elUnder.tagName === "INPUT" ||
          elUnder.tagName === "SELECT" ||
          elUnder.tagName === "TEXTAREA" ||
          (elUnder.getAttribute && elUnder.getAttribute("role") === "button")
        ) {
          return true;
        }

        // detect anything inside a button (FontAwesome icons, SVG, span, div, etc)
        if (elUnder.closest("button")) return true;

        // detect FontAwesome icon (SVG or path)
        if (
          elUnder.closest(".fa") || // font-awesome class
          elUnder.closest("svg[data-icon]") || // FA v5/v6 unique attribute
          elUnder.tagName === "svg" ||
          elUnder.tagName === "path"
        ) {
          return true;
        }

        // fallback: onclick handler exists
        if (elUnder.onclick !== null) return true;

        return false;
      })();

      // header detection (keep your original behavior)
      const inHeader =
        !!elUnder &&
        !!elUnder.closest &&
        (elUnder.closest("header") || elUnder.closest(".header"));

      const shouldShowNative =
        isClickable || inHeader || isInsideFAQRef.current;

      setIsHoveringClickable(shouldShowNative);

      if (shouldShowNative) {
        document.body.classList.add(BODY_CLASS);
      } else {
        document.body.classList.remove(BODY_CLASS);
      }

      // === DEBUG (uncomment to inspect in console while moving)
      // console.log({
      //   pos: { x: e.clientX, y: e.clientY },
      //   inFAQ_viaPath,
      //   inFAQ_viaClosest: isInsideFAQRef.current,
      //   isClickable,
      //   shouldShowNative,
      // });
    };

    // pointerover/out to maintain state when other events occur (optional redundancy)
    const onPointerOver = (e) => {
      if (pathHasFAQ(e)) {
        isInsideFAQRef.current = true;
        // force native cursor immediately
        document.body.classList.add(BODY_CLASS);
        setIsHoveringClickable(true);
      }
    };
    const onPointerOut = (e) => {
      // re-evaluate based on current pointer position
      const x = e.clientX ?? -1;
      const y = e.clientY ?? -1;
      const el = x >= 0 && y >= 0 ? document.elementFromPoint(x, y) : null;
      const stillInFAQ =
        !!el && !!el.closest && !!el.closest("[data-faq-accordion]");
      if (!stillInFAQ) {
        isInsideFAQRef.current = false;
        document.body.classList.remove(BODY_CLASS);
        setIsHoveringClickable(false);
      }
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    window.addEventListener("pointerout", onPointerOut, { passive: true });

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
      document.body.classList.remove(BODY_CLASS);
    };
  }, []);

  // hide bird when we want native cursor
  if (isHoveringClickable) return null;

  return (
    <img
      src="./birdCursor.gif"
      className={styles.bird}
      alt="bird cursor"
      style={{
        left: pos.x + "px",
        top: pos.y + "px",
      }}
    />
  );
}
