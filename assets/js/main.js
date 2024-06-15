(() => {
  // Theme switch
  const body = document.body;
  const lamp = document.getElementById("mode");

  const setTheme = (state) => {
    localStorage.setItem("theme", state);
    document.body.setAttribute("data-theme", state);
  }

  const toggleTheme = (state) => {
    state === "dark" ? setTheme("light") : setTheme("dark");
  };

  lamp.addEventListener("click", () =>
    toggleTheme(localStorage.getItem("theme"))
  );

  window.addEventListener('DOMContentLoaded', () => {
    const userThemePreference = localStorage.getItem("theme");

    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (!!userThemePreference && userThemePreference.length > 0) {
      setTheme(userThemePreference);
    } else {
      console.log('No theme preference found in local storage. Setting theme based on user preference.')
      setTheme(prefersDarkScheme.matches ? 'dark' : 'light');
    }

    prefersDarkScheme.addEventListener('change', (mediaQuery) => {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    });
  })

  // Blur the content when the menu is open
  const cbox = document.getElementById("menu-trigger");

  cbox.addEventListener("change", function () {
    const area = document.querySelector(".wrapper");
    this.checked
      ? area.classList.add("blurry")
      : area.classList.remove("blurry");
  });
})();
