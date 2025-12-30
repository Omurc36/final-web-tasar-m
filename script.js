document.addEventListener("DOMContentLoaded", function () {

  const profile = document.querySelector(".profile-container");
  const panel = document.getElementById("loginPanel");

  if (profile && panel) {
    profile.addEventListener("click", function () {
      panel.style.display =
        panel.style.display === "block" ? "none" : "block";
    });
  }

});
