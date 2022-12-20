function pre() {
    let btn = document.getElementById("btn")
    btn.onclick = function () {
        var secret = prompt("请输入暗号")
        if (hex_md5(secret) == "83fe8429e5ef0b05e39da167ce19756c") {
            window.location.href = "/public/search_playlist.html"
        } else {
            alert("有内鬼,终止交易!")
        }
    }
}
window.onload = pre