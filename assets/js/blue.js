document.addEventListener("DOMContentLoaded", function () {


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
        contactDrop.classList.remove("contactDropDownOn");
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

    contactLi.addEventListener("click", function (event) {
        event.preventDefault();
        let isOpen = contactDrop.classList.contains("contactDropDownOn");
        closeAllDropdowns();
        if (!isOpen) {
            contactDrop.classList.toggle("contactDropDownOn")
        }
    });

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

    let selectedColor = $.querySelectorAll(".colorSelectionItem")


    let videos = {
        blue: $.querySelector(".blueCard"),
        red: $.querySelector(".redCard"),
        green: $.querySelector(".greenCard"),
        purple: $.querySelector(".purpleCard"),
        yellow: $.querySelector(".yellowCard"),
        rosegold: $.querySelector(".rosegoldCard"),
        black: $.querySelector(".blackCard"),
    };

    let backCard = {
        blue: $.querySelector(".backBlue"),
        red: $.querySelector(".backRed"),
        green: $.querySelector(".backGreen"),
        purple: $.querySelector(".backPurple"),
        yellow: $.querySelector(".backYellow"),
        rosegold: $.querySelector(".backRosegold"),
        black: $.querySelector(".backBlack"),
    };

    let frontCard = {
        blue: $.querySelector(".frontBlue"),
        red: $.querySelector(".frontRed"),
        green: $.querySelector(".frontGreen"),
        purple: $.querySelector(".frontPurple"),
        yellow: $.querySelector(".frontYellow"),
        rosegold: $.querySelector(".frontRosegold"),
        black: $.querySelector(".frontBlack"),
    };

    function hideAllVideos() {
        for (let key in videos) {
            videos[key].style.opacity = "0";
            backCard[key].style.opacity = "0";
            frontCard[key].style.opacity = "0";

        }
    }


    hideAllVideos();

    videos.blue.style.opacity = "1";
    backCard.blue.style.opacity = "1";
    frontCard.blue.style.opacity = "1";

    selectedColor.forEach(item => {
        item.addEventListener("click", function () {
            selectedColor.forEach(element => {
                element.classList.remove("activeColor")
            });
            this.classList.add("activeColor")

            let color = this.querySelector("[data-color]")?.dataset.color;

            if (color && videos[color]) {
                hideAllVideos();
                videos[color].style.opacity = "1";
                backCard[color].style.opacity = "1";
                frontCard[color].style.opacity = "1";
            }
        })

    });

    let faqBtns = $.querySelectorAll(".faqBtn")



    allquestions = {
        general: $.getElementById("general"),
        openAccount: $.getElementById("openAccount"),
        card: $.getElementById("card"),
        loan: $.getElementById("loan"),
        userAccount: $.getElementById("userAccount"),
        trans: $.getElementById("trans"),
        bJunior: $.getElementById("bJunior"),

    };

    let questionSec = {
        general: $.querySelector(".general"),
        openAccount: $.querySelector(".openAccount"),
        card: $.querySelector(".card"),
        loan: $.querySelector(".loan"),
        userAccount: $.querySelector(".userAccount"),
        trans: $.querySelector(".trans"),
        bJunior: $.querySelector(".bJunior"),
    };

    function hideAllQSections() {
        for (let key in questionSec) {
            questionSec[key].classList.add("d-none")
        }
    }

    let defaultSection = "general";

    allquestions[defaultSection].classList.add("faqBtnClicked");
    hideAllQSections()
    questionSec[defaultSection].classList.remove("d-none")

    faqBtns.forEach(item => {
        item.addEventListener("click", function () {
            faqBtns.forEach(btn => {
                btn.classList.remove("faqBtnClicked")
                btn.classList.add("faqBtn")
            });

            this.classList.add("faqBtnClicked")
            this.classList.remove("faqBtn")
            let clickedId = this.id;


           hideAllQSections()
            if (questionSec[clickedId]) {
                questionSec[clickedId].classList.remove("d-none")
            }


        });
    });



    let questionBoxes = document.querySelectorAll(".questionBoxS");

    questionBoxes.forEach(questionBox => {

        // هر بار فقط عناصر داخلی همین questionBox رو می‌گیریم

        let plusIcon = questionBox.querySelector(".plusIcon");
        let questionBtn = questionBox.querySelector(".questionBtn");
        let answerBox = questionBox.querySelector(".answerBox");

        questionBox.addEventListener("click", () => {

            // حذف کلاس‌های فعال از بقیه سوال‌ها

            questionBoxes.forEach(box => {
                if (box !== questionBox) {
                    box.querySelector(".plusIcon").classList.remove("plusIconClicked");
                    box.querySelector(".questionBtn").classList.remove("questionBtnClicked");
                    box.classList.remove("questionBoxClicked");
                    let otherAnswer = box.querySelector(".answerBox");
                    otherAnswer.classList.remove("answerBoxClicked");
                    otherAnswer.style.maxHeight = "0";
                    otherAnswer.style.opacity = "0";

                }
            });

            // تغییر کلاس‌ها برای همین سوال
            plusIcon.classList.toggle("plusIconClicked");
            questionBtn.classList.toggle("questionBtnClicked");
            answerBox.classList.toggle("answerBoxClicked");
            questionBox.classList.toggle("questionBoxClicked")
            if (answerBox.classList.contains("answerBoxClicked")) {
                answerBox.style.maxHeight = answerBox.scrollHeight + "px";
                answerBox.style.opacity = "1";
            } else {
                answerBox.style.maxHeight = "0";
                answerBox.style.opacity = "0";
            }
        });
    });

});

