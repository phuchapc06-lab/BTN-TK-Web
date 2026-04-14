document.addEventListener("DOMContentLoaded", function () {

  // ===== FIX FLEX GAP =====
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

  // ===== MODAL + FORM =====
  const modal = document.getElementById("pricingModal");
  const btns = document.querySelectorAll(".btn-pricing");
  const closeBtn = document.getElementById("closeModal");
  const form = document.getElementById("pricingForm");

  // MỞ MODAL
  btns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
    });
  });

  // ĐÓNG MODAL
  const close = () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  };

  if (closeBtn) closeBtn.onclick = close;

  window.addEventListener("click", function (e) {
    if (e.target === modal) close();
  });

  // ===== TOAST =====
  const toast = document.createElement("div");
  toast.textContent = "🎉 Đăng ký thành công!";
  document.body.appendChild(toast);

  toast.style.position = "fixed";
  toast.style.top = "20px";
  toast.style.right = "20px";
  toast.style.background = "#51cf66";
  toast.style.color = "#fff";
  toast.style.padding = "1.4rem 2.4rem";
  toast.style.borderRadius = "8px";
  toast.style.fontSize = "1.6rem";
  toast.style.fontWeight = "600";
  toast.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
  toast.style.opacity = "0";
  toast.style.transform = "translateY(-20px)";
  toast.style.transition = "all 0.4s ease";
  toast.style.zIndex = "9999999";

  // ===== SUBMIT =====
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // đóng modal trước
      close();

      // hiện toast
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