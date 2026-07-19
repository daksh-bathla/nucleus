export default function Page() {
  return (
    <main className="n-container n-section n-flow">
      <span className="n-overline">Next.js App Router</span>
      <h1 className="n-text-3xl n-text-balance">Built with Nucleus CSS</h1>
      <p className="n-lead">Import once in app/layout.tsx, then use n-prefixed classes.</p>

      <div className="n-cluster">
        <button className="n-btn n-btn-primary">Primary</button>
        <button className="n-btn n-btn-outline-primary">Secondary</button>
        <span className="n-badge n-badge-success">Stable</span>
      </div>

      <article className="n-card">
        <div className="n-card-body n-flow">
          <h3>Server components friendly</h3>
          <p className="n-text-muted">Nucleus is plain CSS — no client runtime.</p>
        </div>
      </article>
    </main>
  );
}
