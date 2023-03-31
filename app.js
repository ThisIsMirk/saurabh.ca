const options = {
    threshold:0.09
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.style.opacity = '1.0'
        } else {
                entry.target.classList.remove('show');
                entry.target.style.opacity = '0.0'
        }
    });
},options);


const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

