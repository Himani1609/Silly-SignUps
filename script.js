window.onload = function () {

    // Taglines that show on index.html
    const tagLine = document.getElementById("funnyTagline");
    if (tagLine) {
        const funnyTaglines = [
            "The world's first anti-boring signup form!",
            "The most ridiculous form you'll ever fill out.",
            "Sign up... if you dare!",
            "Warning: Side effects may include uncontrollable laughter!",
            "More fun than trying to tickle a grumpy cat!",
            "Guaranteed to waste 2 minutes of your life."
        ];

    setInterval(() => {
        tagLine.innerText = funnyTaglines[Math.floor(Math.random() * funnyTaglines.length)];
    }, 3000);
    }


    // Let's get started button on index.html
    const getStartedBtn = document.getElementById("getstarted");
    if (getStartedBtn) {
        getStartedBtn.onclick = function () {
            let sound = new Howl({
                src: ["./sounds/boing.mp3"], 
                volume: 1,
                onend: function () {
                    window.location.href = "form.html";
                }
            });

            sound.play();
           
        };
    }

    if (window.location.pathname.includes('form.html')) {
       
        const formHandler = document.forms.signup_form;


        // Changing heading on form.html
    const formHeading = document.getElementById("form-heading");
    if(formHeading){
        const funnyHeadings = ["Welcome to the Most Ridiculous Signup Form!",
            "Brace Yourself... This Form Has a Sense of Humor!",
            "Fill This Out If You Dare!",
            "A Form So Silly, Even Robots Laugh!",
            "More Fun Than Trying to Tickle a Grumpy Cat!",
            "Congratulations! You've Found the Internet's Weirdest Form!",
            "You'll Probably Regret This… But Here We Go!",
            "Sign Up for What? We Have No Idea Either!",
            "Warning: Side Effects May Include Uncontrollable Laughter!",
            "You're Just a Few Clicks Away from Ultimate Nonsense!"]
            
            setInterval(() => {
                formHeading.innerText = funnyHeadings[Math.floor(Math.random()*funnyHeadings.length)];
            }, 3000);
    }

    // On every keyboard press there should be some funny message below your name field
    const funnyNameText = document.getElementById("funny-name-text");
    const nameInput = formHandler.yourname;

    if(funnyNameText && nameInput){

        nameInput.addEventListener("input",function(){

            const name = nameInput.value.trim();

            const funnyNames = [ `Wow, ${name}? Sounds like a superhero in disguise!`,
                `${name}, huh? My pet rock has a cooler name, but I'll allow it.`,
                `I once knew a ${name}... they were legendary! Or was it a dream?`,
                `Welcome, ${name}! You have officially entered the Fun Zone.`,
                `Hmm, ${name}? I like it! Sounds like a secret agent name.`,
                `${name}, did you know that typing your name increases brain power?`,
                `${name}? Nice! If I had a goldfish, I'd name it that too.`,
                `Breaking news: A new ${name} has just appeared in the wild!`,
                `Oh wow, ${name} is a name fit for a king or queen!`,
                `Hey ${name}, ever thought about being a stand-up comedian?`];

            if(name.length>0){
                funnyNameText.innerText = funnyNames[Math.floor(Math.random()*funnyNames.length)];
            }
            else{
                funnyNameText.innerText = "Are you gonna take a year to type your name?";
            }
        });
    }

    // populating the date of birth dropdowns

    const dayDropdown = document.getElementById("dob-day");

    const dayWords = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
        "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
        "Eighteen", "Nineteen", "Twenty", "Twenty-One", "Twenty-Two", "Twenty-Three",
        "Twenty-Four", "Twenty-Five", "Twenty-Six", "Twenty-Seven", "Twenty-Eight",
        "Twenty-Nine", "Thirty", "Thirty-One"]

    function populateDate(){
        if (!dayDropdown) return;
        dayWords.forEach((word, index) => {
            let option = document.createElement("option");
            option.value = index + 1; // 1 to 31
            option.textContent = word;
            dayDropdown.appendChild(option);
        });
    }


    const yearDropdown = document.getElementById("dob-year");

    const yearText = [
        "1999 - If You're 1999 Born or Below, You're Ancient Dude!","2000 - The Start of Chaos","2001 - The Year of Internet Cafés",
        "2002 - Flip Phones Were Cool","2003 - The MSN Messenger Era", "2004 - The Facebook Baby",
        "2005 - YouTube Was Born","2006 - When Emo Was a Lifestyle","2007 - iPhones Changed Everything",
        "2008 - The Twilight Craze", "2009 - FarmVille Addicts Everywhere","2010 - The Rise of Memes",
        "2011 - Planking Challenge Era", "2012 - We All Thought the World Would End","2013 - The Selfie Generation",
        "2014 - Ice Bucket Challenge Everywhere","2015 - The Year of Dabbing","2016 - Pokémon GO Summer",
        "2017 - Fidget Spinners Took Over","2018 - The Fortnite Craze","2019 - TikTok Explosion", "2020 - The Year We Stayed Home",
        "2021 - Work From Home Masters", "2022 - The Year of Binge-Watching","2023 - AI Started Taking Over",
        "2024 - The Year of Unexpected Twists", "2025 - The Year You Found This Form", "2026 - Are you from future?"
    ];
    

    function populateYear(){
        if (!yearDropdown) return;
        yearText.forEach((word,index)=>{
            let option = document.createElement("option");
            option.value = index + 1;
            option.innerText = word;
            yearDropdown.appendChild(option);
        });
    }

    populateDate();
    populateYear();
    

    // Gender Output
    var gender = formHandler.querySelectorAll('input[name="gender"]');
    var genderoutput = document.getElementById("gender-output");

    gender.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            var selectedGenders = [];
            gender.forEach(function (checkbox) {
                if (checkbox.checked) {
                    selectedGenders.push(checkbox.value);
                }
            });

            if (selectedGenders.length === 0) {
                genderoutput.innerHTML = "Mysterious entity detected... Are you a ghost?";
            } else if (selectedGenders.length > 1) {
                genderoutput.innerHTML = "Wait... Are you evolving?";
            } else {
                var messages = {
                    "m": "Ah, a fine gentleman has arrived! Do you prefer coffee or tea?",
                    "f": "A wonderful lady graces us! Time to shine!",
                    "o": "A mysterious enigma appears! Are you a wizard?"
                };
                genderoutput.innerHTML = messages[selectedGenders[0]] || "A legendary being has entered the chat!";
            }
        });
    });



    //phone number slider output
    var slider = formHandler.phonenum;
    var output = document.getElementById("val");
    var value = "(" + slider.value.substring(0,3) + ") " + slider.value.substring(3,6) + "-" + slider.value.slice(6);
    output.innerHTML = value;

    slider.oninput = function() {
    output.innerHTML = ("(" + this.value.substring(0,3) + ") " + this.value.substring(3,6) + "-" + this.value.slice(6));
    }
    

    var userage =  formHandler.age;

    var kidsec = document.getElementById("kid-section");
    var teensec = document.getElementById("teen-section");
    var adultsec = document.getElementById("adult-section");
    var oldsec = document.getElementById("old-section");

    userage.onchange = function () {
        var selectedage = userage.value; 

        kidsec.style.display = "none";
        teensec.style.display = "none";
        adultsec.style.display = "none";
        oldsec.style.display = "none";

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


    // country flags API
    var flags = document.getElementById("flags");
    var url = "https://restcountries.com/v3.1/all?fields=name,flags";
    var sel_img = document.getElementById("selected_flag");

    let countryData = []; 

    fetch(url)
        .then(response => response.json())
        .then(data => {
            countryData = data; 

            data.forEach(country => {
                const option = document.createElement('option');
                option.value = country.name.common;
                if(country.flags.alt !== ""){
                option.textContent = country.flags.alt;
                option.setAttribute("data-flag", country.flags.png); 
                option.setAttribute("data-alt", country.flags.alt);
                flags.appendChild(option);
                };
                
            });
        });

    flags.onchange = function() {
        const selectedOption = flags.options[flags.selectedIndex];
        const flagUrl = selectedOption.getAttribute("data-flag");
        const altText = selectedOption.getAttribute("data-alt");

        if (flagUrl) {
            sel_img.innerHTML = `<img src="${flagUrl}" alt="${altText}" width="100"/>`;
        } else {
            sel_img.innerHTML = "";
        }
    };


    // Add sound when user submits the form
    let submitButton = document.getElementById("form-submit");
    if (submitButton) {
        submitButton.addEventListener("click", function (event) {
            event.preventDefault(); 

            let sound = new Howl({
                src: ["./sounds/submit.mp3"], 
                volume: 1,
                onend: function () {
                    window.location.replace("congrats.html");
                }
            });

            sound.play();
        });
    }

        
    }


    
};
