(function () {
  const ADMIN_STORAGE_KEY = "gz_admin_role";
  const ADMIN_STORAGE_VALUE = "admin";
  const ADMIN_URL_PARAM = "adminUnlock";

  // Fast local unlock for private development builds. This is not strong security.
  const ADMIN_UNLOCK_CODE = "GZ-DEV-CREATOR-2026";

  function isAdmin() {
    return localStorage.getItem(ADMIN_STORAGE_KEY) === ADMIN_STORAGE_VALUE;
  }

  function setAdminMode(enabled) {
    if (enabled) {
      localStorage.setItem(ADMIN_STORAGE_KEY, ADMIN_STORAGE_VALUE);
      return;
    }

    localStorage.removeItem(ADMIN_STORAGE_KEY);
  }

  function applyUrlUnlockIfPresent() {
    const url = new URL(window.location.href);
    const unlockCode = url.searchParams.get(ADMIN_URL_PARAM);
    if (!unlockCode) {
      return;
    }

    if (unlockCode === ADMIN_UNLOCK_CODE) {
      setAdminMode(true);
      alert("Admin mode enabled on this device.");
    } else {
      alert("Invalid admin code.");
    }

    url.searchParams.delete(ADMIN_URL_PARAM);
    window.history.replaceState({}, "", url.toString());
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
      setAdminMode(true);
      alert("Admin mode enabled on this device.");
      window.location.reload();
      return;
    }

    alert("Invalid admin code.");
  }

  function handleShortcuts(event) {
    const key = event.key.toLowerCase();
    const openUnlock = (event.ctrlKey && event.shiftKey && key === "u") || (event.ctrlKey && event.altKey && key === "u");
    if (openUnlock) {
      event.preventDefault();
      event.stopPropagation();
      promptAdminUnlock();
      return;
    }

    const disableAdmin = (event.ctrlKey && event.shiftKey && key === "k") || (event.ctrlKey && event.altKey && key === "k");
    if (disableAdmin) {
      event.preventDefault();
      event.stopPropagation();
      setAdminMode(false);
      alert("Admin mode disabled.");
      window.location.href = "index.html";
    }
  }

  applyUrlUnlockIfPresent();
  window.addEventListener("keydown", handleShortcuts, true);
  hideCreatorLinksForPublic();
  blockCreatorPageForPublic();
})();
