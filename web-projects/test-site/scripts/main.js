var myImage = document.querySelector('img');

myImage.onclick = function() { //切換圖片
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lower.jpg') {
      myImage.setAttribute ('src','images/a_016.jpg'); //如果圖片來源是 images/lower.jpg，切換圖片來源為 images/a_016.jpg
    } else {
      myImage.setAttribute ('src','images/lower.jpg'); //如果圖片來源不是 images/lower.jpg，切換圖片來源為 images/lower.jpg
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() { // 用來更改變數 'name' 裡的值
    let myName = prompt('Please enter your name.'); // prompt():對話函式
    if(!myName || myName === null){
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) { //如果 getItem() 沒抓到名字，跑 setUserName()
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() { //利用 myButtom 按鈕來叫出 setUserName()，以便更改 'name' 變數
    setUserName();
}

//因為這組客製化過的訊息是存在 localStorage 裡的，所以即使您將網頁關起來，她還是會保留著，所以當您下次開啟這個網頁時，這段客製化的訊息依然會出現！

/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

