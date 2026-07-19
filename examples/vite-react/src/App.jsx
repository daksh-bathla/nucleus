// Nucleus CSS is imported once in main.jsx: `import "@navital/nucleus-css";`
export default function App() {
  return (
    <main className="n-container n-section n-flow">
      <span className="n-overline">Vite + React</span>
      <h1 className="n-text-3xl n-text-balance">Built with Nucleus CSS</h1>
      <p className="n-lead">Use n-prefixed classes with className — no config required.</p>

      <div className="n-auto-grid" style={{ "--n-grid-min": "16rem" }}>
        <article className="n-card n-card-interactive">
          <div className="n-card-body n-flow">
            <h3>Cards</h3>
            <p className="n-text-muted">Composed from real, documented classes.</p>
            <button className="n-btn n-btn-primary">Action</button>
          </div>
        </article>
        <article className="n-card n-card-interactive">
          <div className="n-card-body n-flow">
            <h3>Utilities</h3>
            <p className="n-text-muted">Spacing, flex, typography, and color helpers.</p>
            <button className="n-btn n-btn-outline-primary">Secondary</button>
          </div>
        </article>
      </div>

      <div className="n-alert n-alert-info" role="status">
        Validate with <code className="n-code">npx @navital/nucleus-css validate ./src</code>
      </div>
    </main>
  );
}
