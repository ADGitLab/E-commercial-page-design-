const closeFull = document.getElementById("close-full");
const fullPage = document.getElementById("full-page");

closeFull.addEventListener("click", () => {
  fullPage.style.display = "none";
});

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const itmNum = document.getElementById("itm-num");

plus.addEventListener("click", () => {
  ++itmNum.textContent;
});

minus.addEventListener("click", () => {
  if (itmNum.textContent == 0) {
    itmNum.textContent = 0;
  } else {
    --itmNum.textContent;
  }
});

const links = document.querySelectorAll(".nav-link");
const collect = document.getElementById("colact");
const men = document.getElementById("man");
const women = document.getElementById("omn");
const about = document.getElementById("about");
const contact = document.getElementById("Contact");

links.forEach((link) => {
  let linkName = link.getAttribute("id");
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (linkName == "colact") {
      link.style.borderBottom = "4px solid orange";
      men.style.border = "none";
      women.style.border = "none";
      about.style.border = "none";
      contact.style.border = "none";
    } else if (linkName == "man") {
      link.style.borderBottom = "4px solid orange";
      collect.style.border = "none";
      women.style.border = "none";
      about.style.border = "none";
      contact.style.border = "none";
    } else if (linkName == "omn") {
      link.style.borderBottom = "4px solid orange";
      collect.style.border = "none";
      men.style.border = "none";
      about.style.border = "none";
      contact.style.border = "none";
    } else if (linkName == "about") {
      link.style.borderBottom = "4px solid orange";
      collect.style.border = "none";
      women.style.border = "none";
      men.style.border = "none";
      contact.style.border = "none";
    } else if (linkName == "Contact") {
      link.style.borderBottom = "4px solid orange";
      collect.style.border = "none";
      women.style.border = "none";
      about.style.border = "none";
      men.style.border = "none";
    }
  });
});

const thumbnails = document.querySelectorAll(".thum");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const t1 = document.getElementById("t1");
const t2 = document.getElementById("t2");
const t3 = document.getElementById("t3");
const t4 = document.getElementById("t4");

function tOne() {
  t1.style.outline = "none";
  t1.style.opacity = "1";
}

function tTwo() {
  t2.style.outline = "none";
  t2.style.opacity = "1";
}

function tThree() {
  t3.style.outline = "none";
  t3.style.opacity = "1";
}

function tFour() {
  t4.style.outline = "none";
  t4.style.opacity = "1";
}

thumbnails.forEach((th) => {
  p1.style.display = "block";
  let currntThum = th.getAttribute("id");
  th.addEventListener("click", () => {
    if (currntThum == "t1") {
      th.style.outline = "2px solid rgb(255, 94, 0)";
      th.style.opacity = ".5";
      p1.style.display = "block";
      p2.style.display = "none";
      p3.style.display = "none";
      p4.style.display = "none";
      tTwo();
      tThree();
      tFour();
    } else if (currntThum == "t2") {
      th.style.outline = "2px solid rgb(255, 94, 0)";
      th.style.opacity = ".5";
      p2.style.display = "block";
      p1.style.display = "none";
      p3.style.display = "none";
      p4.style.display = "none";
      tOne();
      tThree();
      tFour();
    } else if (currntThum == "t3") {
      th.style.outline = "2px solid rgb(255, 94, 0)";
      th.style.opacity = ".5";
      p3.style.display = "block";
      p1.style.display = "none";
      p2.style.display = "none";
      p4.style.display = "none";
      tOne();
      tTwo();
      tFour();
    } else if (currntThum == "t4") {
      th.style.outline = "2px solid rgb(255, 94, 0)";
      th.style.opacity = ".5";
      p4.style.display = "block";
      p1.style.display = "none";
      p2.style.display = "none";
      p3.style.display = "none";
      tOne();
      tThree();
      tTwo();
    }
  });
});

const cartHover = document.querySelector(".cart-hover");
const cart = document.getElementById("cart");
const closeCart = document.querySelector(".cart-head");

cart.addEventListener("click", () => {
  cartHover.style.display = "block";
});

closeCart.addEventListener("click", () => {
  cartHover.style.display = "none";
});

const leftBtn = document.getElementById("left-icon");
const rightBtn = document.getElementById("right-icon");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const l4 = document.getElementById("l4");
l1.style.display = "block";

let sum = 0;
function changeRight() {
  if (sum == 0) {
    l1.style.display = "none";
    l2.style.display = "block";
    l3.style.display = "none";
    l4.style.display = "none";
    sum = 1;
  } else if (sum == 1) {
    l2.style.display = "none";
    l3.style.display = "block";
    l1.style.display = "none";
    l4.style.display = "none";
    sum = 2;
  } else if (sum == "2") {
    l3.style.display = "none";
    l4.style.display = "block";
    l1.style.display = "none";
    l2.style.display = "none";
    sum = 3;
  } else if (sum == "3") {
    l4.style.display = "none";
    l1.style.display = "block";
    l2.style.display = "none";
    l3.style.display = "none";
    sum = 0;
  }
}

rightBtn.addEventListener("click", changeRight);

function changeLeft() {
  if (sum == 0) {
    l2.style.display = "none";
    l1.style.display = "block";
    l3.style.display = "none";
    l4.style.display = "none";
    sum = 1;
  } else if (sum == 1) {
    l1.style.display = "none";
    l4.style.display = "block";
    l3.style.display = "none";
    l2.style.display = "none";
    sum = 2;
  } else if (sum == "2") {
    l4.style.display = "none";
    l3.style.display = "block";
    l1.style.display = "none";
    l2.style.display = "none";
    sum = 3;
  } else if (sum == "3") {
    l3.style.display = "none";
    l2.style.display = "block";
    l1.style.display = "none";
    l4.style.display = "none";
    sum = 0;
  }
}

leftBtn.addEventListener("click", changeLeft);

const bigPngBtn = document.getElementById("big-png");
const fullPageOpen = document.getElementById("full-page");

bigPngBtn.addEventListener("click", () => {
  fullPageOpen.style.display = "flex";
});

const addedBtn = document.querySelector(".add-to-cart");
const defultMsg = document.querySelector(".emt-msg");
const addedItem = document.querySelector(".added");
const deletBtn = document.getElementById("delet");
const itemNum = document.querySelector(".cart-item-num");
const itemamount = document.getElementById("itm-num");
const addedAmount = document.getElementById("amount");
const totalCost = document.getElementById("total-cost");

addedBtn.addEventListener("click", () => {
  let finalPrice = itemamount.textContent * 125;

  defultMsg.style.display = "none";
  addedItem.style.display = "block";
  itemNum.textContent = itemamount.textContent;
  addedAmount.textContent = itemamount.textContent;
  itemNum.style.display = "flex";
  totalCost.textContent = `$${finalPrice}.00`;
});

deletBtn.addEventListener("click", () => {
  addedItem.style.display = "none";
  defultMsg.style.display = "block";
  itemNum.style.display = "none";
});

const closeMenu = document.getElementById("close-menu");
const menu = document.querySelector(".all-link");
const menuBtn = document.querySelector(".menu");

closeMenu.addEventListener("click", () => {
  menu.style.left = "-20rem";
});

menuBtn.addEventListener("click", () => {
  menu.style.left = "0rem";
});

const cartColor = document.getElementById("cartCol");
cartColor = "red";
