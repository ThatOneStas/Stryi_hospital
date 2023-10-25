const GetUrlParam=()=>{
    let urlParams = new URLSearchParams(window.location.search);
    let VALUE = urlParams.get('name')
    return VALUE
}

const ChangeMainProfile=(doc_name)=>{
    if(doc_name=="Мицько"){
        console.log("1")
    }
    else if(doc_name=="Саковець"){
        console.log("2")
    }
    else if(doc_name=="Проценко"){
        console.log("3")
    } 
}

document.addEventListener("DOMContentLoaded",()=>{
    ChangeMainProfile(GetUrlParam())
})