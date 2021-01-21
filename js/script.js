console.log('het werkt!')



// fotocloud popup

function fotoCloudPopUp() {
 document.getElementById("fotoPopUp").classList.toggle("active");
  
}

// foto upload fotocloud

let img = document.getElementById('uploadimg')
let button = document.getElementById('uploadbutton')

button.addEventListener('change', function () {
    console.log(this.files[0].name)
    console.log(this.files[0].type)
    console.log(this.files[0].size)
    if (this.files[0].type != 'image/jpeg' && this.files[0].type != 'image/png' && this.files[0].type != 'image/gif') {
        alert('sorry, je moet een afbeelding uploaden')
    } else {
        img.style.display = 'block'
        img.src = URL.createObjectURL(this.files[0])
    }
})