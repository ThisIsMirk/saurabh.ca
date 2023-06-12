const options = {
    threshold:0.06
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.style.opacity = '1.0'
        } 
    });
},options);


const hiddenElements = document.querySelectorAll('.hidden, .nav-hidden');
hiddenElements.forEach((el) => observer.observe(el));

