let $ = document;

let serviceLi = $.querySelector(".service");
let loanLi = $.querySelector(".loanLi");
let contactLi = $.querySelector(".contactUs");

let serviceDrop = $.querySelector(".serviceDropdown");
let loanDrop = $.querySelector(".loanDropDown");
let contactDrop = $.querySelector(".contactDropDown")
function closeAllDropdowns() {
    serviceDrop.classList.remove("serviceDropdownOn");
    loanDrop.classList.remove("loanDropDownOn");
    loanDrop.classList.remove("contactDropDownOn");
}

serviceLi.addEventListener("click", function (event) {
    event.preventDefault();
    let isOpen = serviceDrop.classList.contains("serviceDropdownOn");
    closeAllDropdowns(); 
    if (!isOpen) {
        serviceDrop.classList.add("serviceDropdownOn");
    }
});

loanLi.addEventListener("click", function (event) {
    event.preventDefault();
    let isOpen = loanDrop.classList.contains("loanDropDownOn");
    closeAllDropdowns();
    if (!isOpen) {
        loanDrop.classList.add("loanDropDownOn");
    }
});

contactLi.addEventListener("click", function(event){
    event.preventDefault();
    let isOpen = contactDrop.classList.contains("contactDropDownOn");
    closeAllDropdowns();
    if(!isOpen){
        contactDrop.classList.add("contactDropDownOn")
    }
})

$.addEventListener("click", function (e) {
    if (
        !serviceLi.contains(e.target) &&
        !loanLi.contains(e.target) &&
        !serviceDrop.contains(e.target) &&
        !loanDrop.contains(e.target) &&
        !contactLi.contains(e.target) &&
        !contactDrop.contains(e.target)
    ) {
        closeAllDropdowns();
    }
});

/*document.addEventListener("click", (e) => {
  let service = document.querySelector(".serviceDropdown");
  let loan = document.querySelector(".loanDropDown");
  let contact = document.querySelector(".contactDropDown");

  // بسته شدن همه دراپ‌داون‌ها
  [service, loan, contact].forEach(el => el.classList.remove("serviceDropdownOn", "loanDropDownOn", "contactDropDownOn"));

  // باز شدن مورد کلیک‌شده
  if (e.target.closest(".service")) {
    service.classList.add("serviceDropdownOn");
  } else if (e.target.closest(".loanLi")) {
    loan.classList.add("loanDropDownOn");
  } else if (e.target.closest(".contactUs")) {
    contact.classList.add("contactDropDownOn");
  }
});
*/

