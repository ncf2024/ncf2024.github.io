window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;

    // 滾輪滑動後，添加或刪除透明 Navbar 的樣式
    if (scrollPosition > 0) {
        navbar.classList.add('opaque-navbar');
        navbar.classList.add('navbar-light');
        navbar.classList.remove('transparent-navbar');
        navbar.classList.remove('navbar-dark');
    } else {
        navbar.classList.remove('opaque-navbar');
        navbar.classList.remove('navbar-light');
        navbar.classList.add('transparent-navbar');
        navbar.classList.add('navbar-dark');
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const fadeInText = document.querySelector('.fadeInText');
    if (fadeInText) {
        const fadeInTrigger = -(fadeInText.parentElement.offsetTop - window.innerHeight * 0.75);
        document.addEventListener('scroll', function () {
            const scrollPosition = window.scrollY;
            if (scrollPosition > fadeInTrigger - 5) {  // && scrollPosition < (fadeInTrigger + fadeInText.parentElement.offsetHeight) #超出也會淡出
                fadeInText.classList.add('fade-in');
                fadeInText.classList.remove('fade-out');
            } else {
                fadeInText.classList.remove('fade-in');
                fadeInText.classList.add('fade-out');
            }

        });
    } else {
        console.log('No element with class "fadeInText pre" found');
    }
});


function toggleDisplay(TitleId, BlockId, precolor = "#cce1e0", newcolor = "#ff6e6ef4") {
    var Block = document.getElementById(BlockId);
    var TitleButton = document.getElementById(TitleId);

    if (Block.style.display === 'none') {
        Block.style.display = '';
        TitleButton.style.color = newcolor;
    } else {
        Block.style.display = 'none';
        TitleButton.style.color = precolor;
    }
}

