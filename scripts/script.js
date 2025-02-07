window.onload = function(){

    var formhandler = document.forms.silly_form;

    var slider = formhandler.phonenum;
    var output = document.getElementById("val");
    var value = "(" + slider.value.substring(0,3) + ") " + slider.value.substring(3,6) + "-" + slider.value.slice(6);
    output.innerHTML = value;

    slider.oninput = function() {
    output.innerHTML = ("(" + this.value.substring(0,3) + ") " + this.value.substring(3,6) + "-" + this.value.slice(6));
    }

    // country
    var countrySelect = formhandler.country;
    var countryMessage = document.getElementById("country-output");

    var funnyComments = {
        "usa": "You live in the Land of freedom and… deep-fried everything. Good luck! <i class=\"emoji fa-regular fa-face-tired\"></i>",
        "can": "Ah yes, land of maple syrup and moose. Are you sure? <i class=\"emoji fa-regular fa-face-grin-tears\"></i>",
        "ind": "Bollywood, spices, and traffic jams. Enjoy! <i class=\"emoji fa-regular fa-face-grimace\"></i>"
    };

    countrySelect.addEventListener("change", function () {
        let selectedCountry = this.value;
        if (funnyComments[selectedCountry]) {
            countryMessage.innerHTML = funnyComments[selectedCountry];
        } else {
            countryMessage.innerHTML = "Interesting choice... hope you survive!";
        }
        
    });

    // gender
    var gender = formhandler.querySelectorAll('input[name="gender"]');
    var genderoutput = document.getElementById("gender_output");

    gender.forEach(function (checkbox) {
        checkbox.addEventListener("change", function(){
            var selectedGenders = [];
            gender.forEach(function(checkbox) {
                if (checkbox.checked) {
                    selectedGenders.push(checkbox.value);
                }
            });
    
            console.log(selectedGenders);
            if(selectedGenders.includes('o') && selectedGenders.includes('f') && selectedGenders.includes('m')){
                genderoutput.innerHTML = "huh?";
            }else if (selectedGenders.includes('o') && selectedGenders.includes('m')) {
                genderoutput.innerHTML = "My Friend, How can you prefer not to say and then say you are a Boy";
            }else if(selectedGenders.includes('o') && selectedGenders.includes('f')){
                genderoutput.innerHTML = "My Friend, How can you prefer not to say and then say you are a Girl";
            }

        })
    });

    //age
    var userage = formhandler.age;

    var kidsec = document.getElementById("kid-section");
    var teensec = document.getElementById("teen-section");
    var adultsec = document.getElementById("adult-section");
    var oldsec = document.getElementById("old-section");

    userage.onchange = function () {
        var selectedage = userage.value; // Simpler way to get selected value

        // Hide all sections first
        kidsec.style.display = "none";
        teensec.style.display = "none";
        adultsec.style.display = "none";
        oldsec.style.display = "none";

        // Show only the selected section
        if (selectedage == "kid") {
            kidsec.style.display = "block";
        } else if (selectedage == "teen") {
            teensec.style.display = "block";
        } else if (selectedage == "adult") {
            adultsec.style.display = "block";
        } else if (selectedage == "old") {
            oldsec.style.display = "block";
        }
    };

    // Captcha section
    document.getElementById("captcha").addEventListener("input", function() {
        if (this.value !== "Nope" || this.value !== "NOPE" || this.value !== "nope") {
            alert("Suspicious activity detected...");
        }
    });
}