        var link = document.querySelector(".modal-link");
        var popup = document.querySelector(".write-us");
        var close = popup.querySelector(".modal-close");
        var form = popup.querySelector("form");
        var name = popup.querySelector("[name=name]");
        var email = popup.querySelector("[name=e-mail]");
        var text = popup.querySelector("[name=comment]");

        link.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.add("modal-show");

        });

        close.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        });

        form.addEventListener("submit", function (evt) {
            var name = popup.querySelector("[name=name]");
            var email = popup.querySelector("[name=e-mail]");
            var text = popup.querySelector("[name=comment]");
            if (!name.value) {
                name.classList.add("invalid");
                return false;
            } else if (!email.value) {
                name.classList.remove("invalid");
                email.classList.add("invalid");
                return false;
            } else {
                email.classList.remove("invalid");
                localStorage.setItem("name", name.value);
                localStorage.setItem("email", email.value);
                localStorage.setItem("text", text.value);
                popup.classList.remove("modal-show");
            }
        });

        window.addEventListener("keydown", function (evt) {
            if (evt.keyCode === 27) {
                if (popup.classList.contains("modal-show")) {
                    popup.classList.remove("modal-show");
                }
            }
        });
