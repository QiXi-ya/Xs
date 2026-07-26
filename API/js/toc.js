document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".toc a");
    const sections = Array.from(links)
        .map(a => document.querySelector(a.getAttribute("href")))
        .filter(Boolean);

    function onScroll() {
        const scrollY = window.scrollY + 120;
        let current = sections[0];

        for (const sec of sections) {
            if (sec.offsetTop <= scrollY) current = sec;
        }

        links.forEach(l => l.classList.remove("active"));
        const active = document.querySelector(
            '.toc a[href="#' + current.id + '"]'
        );
        if (active) active.classList.add("active");
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
});
