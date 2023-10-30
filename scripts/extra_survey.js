let rate = 1

const changeStars = (number)=>{
    const STAR_2 = $(".form__stars_item.2")
    const STAR_3 = $(".form__stars_item.3")
    const STAR_4 = $(".form__stars_item.4")
    const STAR_5 = $(".form__stars_item.5")
    if(number==1){
        rate = 1
        STAR_2.removeClass("active")
        STAR_3.removeClass("active")
        STAR_4.removeClass("active")
        STAR_5.removeClass("active")
    }
    else if(number==2){
        rate = 2
        STAR_2.addClass("active")
        STAR_3.removeClass("active")
        STAR_4.removeClass("active")
        STAR_5.removeClass("active")
    }
    else if(number==3){
        rate = 3
        STAR_2.addClass("active")
        STAR_3.addClass("active")
        STAR_4.removeClass("active")
        STAR_5.removeClass("active")
    }
    else if(number==4){
        rate = 4    
        STAR_2.addClass("active")
        STAR_3.addClass("active")
        STAR_4.addClass("active")
        STAR_5.removeClass("active")
    }
    else if(number==5){
        rate = 5  
        STAR_2.addClass("active")
        STAR_3.addClass("active")
        STAR_4.addClass("active")
        STAR_5.addClass("active")  
    }
}

const getUserFormFData=(selector)=>{
    const TARGET = $(selector)
     const VALUE = TARGET.val()
    return VALUE
}

document.addEventListener("DOMContentLoaded",()=>{
    const FORM = $(".form")
    FORM.on("submit",(e)=>{
        e.preventDefault()
        comment = getUserFormFData(".form__textarea")
        checkbox = getUserFormFData(".form__checkbox")
        user_form_data = {
            rate,
            comment,
            checkbox
        }
        console.log(user_form_data)
    })
})