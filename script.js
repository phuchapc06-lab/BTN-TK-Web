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
    flex.remove();

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();

  // ===== MOBILE MENU =====
  const btnNav = document.querySelector(".btn-mobile-nav");
  const nav = document.querySelector(".main-nav-list");

  if (btnNav && nav) {
    btnNav.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // ===== MODAL (giữ nguyên để mở được modal pricing) =====
  const modal = document.getElementById("pricingModal");
  const btns = document.querySelectorAll(".btn-pricing");
  const closeBtn = document.getElementById("closeModal");

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

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  window.addEventListener("click", function (e) {
    if (e.target === modal) closeModal();
  });

  // ===== CHỈ XỬ LÝ FORM CTA - HIỆN THÔNG BÁO THÀNH CÔNG =====
  const ctaForm = document.querySelector(".cta-form");
  const successMessage = document.getElementById("successMessage");

  if (ctaForm && successMessage) {
    ctaForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Hiện thông báo thành công
      successMessage.style.display = "block";

      // Cuộn mượt mà xuống thông báo để người dùng dễ thấy
      successMessage.scrollIntoView({ 
        behavior: "smooth",
        block: "center"
      });

      // Reset form sau 4 giây và ẩn thông báo
      setTimeout(() => {
        ctaForm.reset();
        successMessage.style.display = "none";
      }, 4500);

      console.log("Đăng ký CTA thành công - Thông báo đã hiện!");
    });
  }

  // ===== FORM FREE SAMPLE (giữ nguyên) =====
  const sampleForm = document.getElementById("sampleForm");
  const successMsg = document.getElementById("successMsg");

  if (sampleForm && successMsg) {
    sampleForm.addEventListener("submit", function (e) {
      e.preventDefault();

      sampleForm.style.display = "none";
      successMsg.style.display = "block";

      setTimeout(() => {
        sampleForm.reset();
        sampleForm.style.display = "block";
        successMsg.style.display = "none";
      }, 4000);
    });
  }

});