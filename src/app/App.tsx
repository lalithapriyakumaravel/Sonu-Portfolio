import { RouterProvider } from "react-router";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { router } from "./routes";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--card)",
            color: "var(--foreground)",
            border: "1px solid var(--border)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
          },
        }}
      />
    </ThemeProvider>
  );
}
