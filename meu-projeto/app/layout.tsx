import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <header style={{ padding: "20px", background: "#0070f3", color: "white", textAlign: "center" }}>
          <h1>Meu Projeto Next.js</h1>
          <nav>
            <Link href="/" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Home</Link>
            <Link href="/about" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Sobre</Link>
            <Link href="/contact" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Contato</Link>
          </nav>
        </header>
        
        <main style={{ padding: "20px" }}>
          {children}
        </main>
        
        <footer style={{ padding: "10px", background: "#222", color: "white", textAlign: "center" }}>
          <p>© 2025 Pedro Simões - Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
