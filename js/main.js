(() => {
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------- mobile nav ---------- */
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- active nav link ---------- */
  const navMap = new Map();
  links.querySelectorAll('a[href^="#"]').forEach((a) => navMap.set(a.getAttribute("href").slice(1), a));
  const sections = [...document.querySelectorAll("main .section")];
  const setActive = () => {
    const y = window.scrollY + window.innerHeight * 0.3;
    let current = sections[0].id;
    for (const s of sections) if (s.offsetTop <= y) current = s.id;
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = sections.at(-1).id;
    navMap.forEach((a, id) => a.classList.toggle("active", id === current));
  };
  window.addEventListener("scroll", setActive, { passive: true });
  setActive();
})();
