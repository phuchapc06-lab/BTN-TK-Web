///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
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
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
///////////////////////////////////////////////////////////
// Hiển thị thông báo đăng ký thành công (modal form)

const pricingForm = document.getElementById("pricingForm");
const modal = document.getElementById("pricingModal");

// Tạo toast nếu chưa có trong HTML
let toast = document.getElementById("toast-success");

if (!toast) {
  toast = document.createElement("div");
  toast.id = "toast-success";
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
  toast.style.zIndex = "999999";
}

// Xử lý submit
if (pricingForm) {
  pricingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Hiện toast
    toast.style.opacity = "1";
    toast.style.transform = "translateY(0)";

    // Ẩn sau 3s
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-20px)";
    }, 3000);

    // Reset form
    pricingForm.reset();

    // Đóng modal
    if (modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
