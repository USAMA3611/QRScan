let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let Qrtext  = document.getElementById("Qrtext");

function  generateQR(){
    if(Qrtext.value.length > 0){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Qrtext.Value;
        imgBox.classList.add("show-img");

    }else{
        Qrtext.classList.add('error');
        setTimeout(()=>{
            Qrtext.classList.remove('error');
        },1000);
    }

}