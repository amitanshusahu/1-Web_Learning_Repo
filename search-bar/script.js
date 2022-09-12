//getting all the required elements
const searchInput = document.querySelector(".search-input")
const inputBox = searchInput.querySelector("input")
const suggBox = document.querySelector(".autocomp-box")

// if user press any key and releases
inputBox.onkeyup = (e) =>{
    let searchKey = e.target.value;
    let arr = [];
    if(searchKey){
        arr = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(searchKey.toLocaleLowerCase());
        });
        arr = arr.map((data)=>{
            return data = "<li>"+ data +"</li>"
        })
        console.log(arr);
        searchInput.classList.add("active")
        showSuggestions(arr);

        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)")
        }
    }else{
        searchInput.classList.remove("active")
    }
;}

function select(element){
    let selectedValue = element.textContent;
    inputBox.value = selectedValue;
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        let inputValue = inputBox.value;
        listData = "<li>"+ inputValue +"</li>"
    }
    else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}