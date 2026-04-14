document.addEventListener("DOMContentLoaded", function () {

  function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();

  const modal = document.getElementById("pricingModal");
  const btns = document.querySelectorAll(".btn-pricing");
  const closeBtn = document.getElementById("closeModal");
  const form = document.getElementById("pricingForm");

  btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const plan = btn.closest(".pricing-plan")
        .querySelector(".plan-name").textContent;

      document.getElementById("selectedPlan").value = plan;

      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  const close = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };

  if (closeBtn) closeBtn.onclick = close;

  window.addEventListener("click", function (e) {
    if (e.target === modal) close();
  });

  const toast = document.createElement("div");
  toast.textContent = "🎉 Đăng ký thành công!";
  document.body.appendChild(toast);

  Object.assign(toast.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    background: "#51cf66",
    color: "#fff",
    padding: "1.4rem 2.4rem",
    borderRadius: "8px",
    fontSize: "1.6rem",
    fontWeight: "600",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    opacity: "0",
    transform: "translateY(-20px)",
    transition: "all 0.4s ease",
    zIndex: "9999999"
  });

  if (form) {
    console.log("FORM OK");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      close();

      toast.style.opacity = "1";
      toast.style.transform = "translateY(0)";

      setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(-20px)";
      }, 3000);

      form.reset();
    });
  }

});