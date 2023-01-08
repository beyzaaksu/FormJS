let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit', formHandler) //submit eventi gerçekleştiği zaman formHandler func çalışacak
const alertDOM= document.querySelector("#alert")

const alertFunction=(title,message) =>`<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>` //title ve message manuel olarak aşağıda formHandler func içinde eklendi. class vs özellikleri bootstrap

function formHandler(event){ //submit eventinin sonucu olarak gerçekleşecek
    event.preventDefault() //ilk önce submitten sonra otomatik yenilenmeyi engelledik
    const USER_NAME= document.querySelector("#userName")
    const SCORE = document.querySelector("#score")
    if(USER_NAME.value && SCORE.value){ //eğer username ve score'un value'su varsa o zaman bunları addItem func ile ekliyoruz ve daha sonra sıfırlıyoruz
    addItem(USER_NAME.value , SCORE.value)
    USER_NAME.value=""
    SCORE.value=""
    }
    else{ //eğer value'ları yoksa o zaman alertFunction func çalışıyor
        alertDOM.innerHTML= alertFunction("UYARI","Kullanici adi ve score'u boş birakilamaz") //title ve message parametrelerini gönderdik
    }
}
let userListDOM=document.querySelector("#userList")
const addItem = (userName, score) =>{ //addItem func birden fazla işlem yaptığı için arrow ile yaptık
 let liDOM=document.createElement('li') //liDOM için element üretiyoruz
 liDOM.innerHTML = `${userName}  
 <span class="badge bg-primary rounded-pill">${score}</span> 
 ` // ürettiğimiz element'in innerHTML 'ine submit edilen userName'i ve score'u ekliyoruz, score'un özelliklerini backtick içinde ekleyip bootstrap özelliklerini de sağlıyoruz
 liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center') //liDOM'un içine bootstrapten aldığımız classları ekliyoruz
 userListDOM.append(liDOM) //alt alta eklenmesi için
}