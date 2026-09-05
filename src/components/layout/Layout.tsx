import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CursorHalo } from "./CursorHalo";
import { ScrollToTop } from "./ScrollToTop";
import { useReducedMotion } from "../../lib/hooks";

export function Layout() {
  const location = useLocation();
  const reduced = useReducedMotion();

  return (
    <div className="relative min-h-screen bg-background text-foreground font-body">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[70] focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <CursorHalo />
      <div className="relative z-10">
        <Navbar />
        <main id="main">
          {reduced ? (
            <Outlet />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
}
