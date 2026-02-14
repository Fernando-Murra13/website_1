const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", function(){
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        toggleButton.textContent="Light Mode";
    }else{
        toggleButton.textContent ="Dark Mode";
    }
});

const form = document.getElementById("contact-form");

form.addEventListener("submit",function(event){
    event.preventDefault();

    alert("Thank you! Your contact info was received.")

    form.reset();
});