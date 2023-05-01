const form = document.getElementById('generate-form');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    // This calls the clearUI function below
    clearUI();

    // These get the value from the Form for the respective element
    const url = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    
    // This fires an alert if a URL isn't entered by the Submit button clicked
    // If there is a URL entered, then it shows the Spinner briefly, then hides it again with setTimeout,
    // and generates the QR Code
    if(url === ''){
        alert('Please enter a URL');
    } else {
        showSpinner();

        setTimeout(() => {
            hideSpinner();
            generateQRCode(url, size);

            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
            }, 50)
        }, 1000);
    };
};

// This takes in the  URL provided and the Size selected to generate the QR code
const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size
    });
};

// This changes the styling for the Spinner SVG, turning off the display: none
const showSpinner = () => {
    document.getElementById('spinner').style.display = 'block';
};

// This hides the Spinner SVG again by setting the display to 'none'
const hideSpinner = () => {
    document.getElementById('spinner').style.display = 'none';
};

// This acts to clear the HTML section where the QR code appears
// Without it they would just keep stacking up if you selected a new Size
// and hit Submit again
const clearUI = () => {
    qr.innerHTML = ''
    const saveLink = document.getElementById('save-link');
    if (saveLink)
        saveLink.remove();
}

// While users can right click and use Save Image As
// we opted to create a button that grabs the 
const createSaveBtn = (saveURL) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList = 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveURL;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
}

hideSpinner();

form.addEventListener('submit', onGenerateSubmit);