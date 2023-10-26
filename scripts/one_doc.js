const GetUrlParam=()=>{
    let urlParams = new URLSearchParams(window.location.search);
    let VALUE = urlParams.get('name')
    return VALUE
}

const ChangeMainProfile=(doc_name)=>{
    const PICTURE = $(".profile__picture")
    const NAME = $(".profile__info_name")
    const PROFESSION = $(".profile__info_profession")
    const ROOM = $(".profile__info_text_changable.room")
    const CATEGORY = $(".profile__info_text_changable.category")
    const EDUCATION = $(".profile__info_text_changable.education")
    const EXPIRIENCE = $(".profile__info_text_changable.experience")
    if(doc_name=="Мицько"){
        PICTURE.attr("src","imgs/5eda08da7492ea6fcde0aec01e5d26ea 1.png");
        NAME.text("Мицько Мар’яна");
        PROFESSION.text("Лікар-невропатолог");
    }
    else if(doc_name=="Саковець"){
        PICTURE.attr("src","imgs/808458c0f9254b3df8e561de9b851ac9 1.png");
        NAME.text("Саковець Оксана");
        PROFESSION.text("Лікар-гастроентеролог");
    }
    else if(doc_name=="Проценко"){
        PICTURE.attr("src","imgs/666e05e3f240f2e03dad7ab309097eb4 1.png");
        NAME.text("Проценко Олексій");
        PROFESSION.text("Лікар-уролог");
    } 
}

document.addEventListener("DOMContentLoaded",()=>{
    ChangeMainProfile(GetUrlParam())
})