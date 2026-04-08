(function () {
  const ADMIN_STORAGE_KEY = "gz_admin_role";
  const ADMIN_STORAGE_VALUE = "admin";

  // Fast local unlock for private development builds. This is not strong security.
  const ADMIN_UNLOCK_CODE = "GZ-DEV-CREATOR-2026";

  function isAdmin() {
    return localStorage.getItem(ADMIN_STORAGE_KEY) === ADMIN_STORAGE_VALUE;
  }

  function hideCreatorLinksForPublic() {
    if (isAdmin()) {
      return;
    }

    document.querySelectorAll('a[href="creator.html"]').forEach((link) => {
      link.setAttribute("hidden", "hidden");

      const parentCard = link.closest("article");
      if (parentCard) {
        parentCard.setAttribute("hidden", "hidden");
      }
    });
  }

  function blockCreatorPageForPublic() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    if (currentPage !== "creator.html" || isAdmin()) {
      return;
    }

    alert("Weapon Creator is currently admin-only while updates are in progress.");
    window.location.replace("index.html");
  }

  function promptAdminUnlock() {
    const typedCode = prompt("Admin unlock code:");
    if (!typedCode) {
      return;
    }

    if (typedCode === ADMIN_UNLOCK_CODE) {
      localStorage.setItem(ADMIN_STORAGE_KEY, ADMIN_STORAGE_VALUE);
      alert("Admin mode enabled on this device.");
      window.location.reload();
      return;
    }

    alert("Invalid admin code.");
  }

  function handleShortcuts(event) {
    if (!event.ctrlKey || !event.shiftKey) {
      return;
    }

    if (event.key.toLowerCase() === "u") {
      event.preventDefault();
      promptAdminUnlock();
      return;
    }

    if (event.key.toLowerCase() === "k") {
      event.preventDefault();
      localStorage.removeItem(ADMIN_STORAGE_KEY);
      alert("Admin mode disabled.");
      window.location.href = "index.html";
    }
  }

  document.addEventListener("keydown", handleShortcuts);
  hideCreatorLinksForPublic();
  blockCreatorPageForPublic();
})();
