(() => {
  const root = document.documentElement;
  const themeStorageKey = "nucleus-demo-theme";
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  const savedTheme = (() => {
    try {
      return localStorage.getItem(themeStorageKey);
    } catch {
      return null;
    }
  })();

  if (savedTheme === "light" || savedTheme === "dark") {
    root.dataset.demoTheme = savedTheme;
  }

  const activeTheme = () => root.dataset.demoTheme || (systemDark.matches ? "dark" : "light");
  const updateThemeToggles = () => {
    const isDark = activeTheme() === "dark";
    const next = isDark ? "Light" : "Dark";
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.textContent = next;
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("aria-label", `Switch to ${next.toLowerCase()} mode`);
    });
  };

  document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = activeTheme() === "dark" ? "light" : "dark";
      root.dataset.demoTheme = next;
      try {
        localStorage.setItem(themeStorageKey, next);
      } catch {
        // Persistence is optional; the current page can still switch themes.
      }
      updateThemeToggles();
    });
  });

  systemDark.addEventListener?.("change", () => {
    if (!root.dataset.demoTheme) updateThemeToggles();
  });
  updateThemeToggles();

  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#nav-main .n-nav-link").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path) {
      link.setAttribute("aria-current", "page");
    }
  });

  const playground = document.querySelector("#demo-playground");
  const theme = document.querySelector("#playground-theme");
  const density = document.querySelector("#playground-density");
  const dark = document.querySelector("#playground-dark");

  theme?.addEventListener("change", () => {
    if (theme.value) playground?.setAttribute("data-theme", theme.value);
    else playground?.removeAttribute("data-theme");
  });

  density?.addEventListener("change", () => {
    if (density.value) playground?.setAttribute("data-density", density.value);
    else playground?.removeAttribute("data-density");
  });

  dark?.addEventListener("click", () => {
    const pressed = dark.getAttribute("aria-pressed") === "true";
    dark.setAttribute("aria-pressed", String(!pressed));
    dark.textContent = pressed ? "Dark preview" : "Light preview";
    playground?.classList.toggle("n-dark-mode", !pressed);
  });

  async function copyText(value) {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(value);
        return;
      } catch {
        // Fall through to the selection-based compatibility path.
      }
    }
    const field = document.createElement("textarea");
    field.value = value;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.append(field);
    field.select();
    const copied = document.execCommand("copy");
    field.remove();
    if (!copied) throw new Error("Clipboard access was denied");
  }

  document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
      const target = document.getElementById(button.dataset.copyTarget);
      if (!target) return;
      const previous = button.textContent;
      try {
        await copyText(target.textContent.trim());
        button.textContent = "Copied";
      } catch {
        const range = document.createRange();
        range.selectNodeContents(target);
        window.getSelection()?.removeAllRanges();
        window.getSelection()?.addRange(range);
        button.textContent = /Mac|iPhone|iPad/.test(navigator.platform) ? "Press ⌘C" : "Press Ctrl+C";
      }
      window.setTimeout(() => { button.textContent = previous; }, 1600);
    });
  });

  const darkSwitch = document.querySelector("#patterns-dark-switch");
  darkSwitch?.addEventListener("change", () => {
    document.body.classList.toggle("n-dark-mode", darkSwitch.checked);
  });

  document.querySelectorAll('[role="tablist"]').forEach((tablist) => {
    const tabs = [...tablist.querySelectorAll('[role="tab"]')];
    const activate = (tab, moveFocus = true) => {
      tabs.forEach((item) => {
        const selected = item === tab;
        item.setAttribute("aria-selected", String(selected));
        item.tabIndex = selected ? 0 : -1;
        const panel = document.getElementById(item.getAttribute("aria-controls"));
        if (panel) panel.hidden = !selected;
      });
      if (moveFocus) tab.focus();
    };

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activate(tab, false));
      tab.addEventListener("keydown", (event) => {
        let next = null;
        if (event.key === "ArrowRight") next = tabs[(index + 1) % tabs.length];
        if (event.key === "ArrowLeft") next = tabs[(index - 1 + tabs.length) % tabs.length];
        if (event.key === "Home") next = tabs[0];
        if (event.key === "End") next = tabs[tabs.length - 1];
        if (!next) return;
        event.preventDefault();
        activate(next);
      });
    });
  });
})();
