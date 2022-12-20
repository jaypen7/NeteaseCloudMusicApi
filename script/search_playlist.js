function pre() {
    let search = document.getElementById("search")
    let submit = document.getElementById("submit")
    search.onmouseover = function () {
        this.style.borderColor = "purple"
    }
    search.onmouseout = function () {
        this.style.borderColor = "gray"
    }
    submit.onclick = function () {
        let searchStr = search.placeholder
        if (search.value.length > 0) {
            searchStr = search.value
        }

        searchPlaylist(searchStr)
    }
}

async function searchPlaylist(keyword = "") {
    const res = await axios({
        url: `/cloudsearch?keywords=${keyword}?type=1000?timerstamp=${Date.now()}`
    })
    document.querySelector('#info').innerText = JSON.stringify(res.data, null, 2)
}
window.onload = pre