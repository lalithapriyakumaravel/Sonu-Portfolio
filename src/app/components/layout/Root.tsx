import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { Cursor } from "../ui/Cursor";

export function Root() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Cursor />
      <Nav />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
          <Footer />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
