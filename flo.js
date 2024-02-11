/*토스트 알림*/
let removeToast;

function toast(string) {
    const toast = document.getElementById("toast");

    toast.classList.contains("reveal") ?
        (clearTimeout(removeToast), removeToast = setTimeout(function () {
            document.getElementById("toast").classList.remove("reveal")
        }, 3000)) :
        removeToast = setTimeout(function () {
            document.getElementById("toast").classList.remove("reveal")
        }, 3000)
    toast.classList.add("reveal"),
        toast.innerText = string
}

function toast2(string) {
    const toast2 = document.getElementById("toast2");

    toast2.classList.contains("reveal") ?
        (clearTimeout(removeToast), removeToast = setTimeout(function () {
            document.getElementById("toast2").classList.remove("reveal")
        }, 3000)) :
        removeToast = setTimeout(function () {
            document.getElementById("toast2").classList.remove("reveal")
        }, 3000)
    toast2.classList.add("reveal"),
        toast2.innerText = string
}

function toast3(string) {
    const toast3 = document.getElementById("toast3");

    toast3.classList.contains("reveal") ?
        (clearTimeout(removeToast), removeToast = setTimeout(function () {
            document.getElementById("toast3").classList.remove("reveal")
        }, 5000)) :
        removeToast = setTimeout(function () {
            document.getElementById("toast3").classList.remove("reveal")
        }, 5000)
    toast3.classList.add("reveal"),
        toast3.innerText = string
}
