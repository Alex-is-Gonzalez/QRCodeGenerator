const form = document.getElementById('generate-form');
const qr =document.getElementById('qrcode');



const onGenerateQR = (e) => {
    e.preventDefault();
    clearForm();
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    console.log(url, size);
    if (url === ''){
        alert('Please enter a URL')
    } else {
        showSpinner();
        setTimeout(()=>{
            hideSpinner();
            generateQRCode(url,size)
        setTimeout(()=> {
            const saveURL = qr.querySelector('img').src;
            createSaveBtn(saveURL)
        },50)    
        },1000);
    }
}

const generateQRCode =(url, size) => {
    const qrcode = new QRCode ('qrcode', {
        text: url,
        width: size,
        height: size,
    })
}
const showSpinner = () =>{
    document.getElementById('spinner');
    spinner.style.display = 'block';
}

const hideSpinner = () =>{
    document.getElementById('spinner');
    spinner.style.display = 'none';
}
const clearForm = () => {
    qr.innerHTML = '';
    const saveBtn = document.getElementById('save-link');
    if (saveBtn) saveBtn.remove();
}

// Create save button to download QR code as image
const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList =
      'bg-purple-600 hover:bg-purple-600 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
  };

 hideSpinner();
form.addEventListener('submit', onGenerateQR)