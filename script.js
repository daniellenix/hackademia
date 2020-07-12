function load(){
    var monthOptions = "";
    var dayOptions = "";
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var i;
    for (i = 0; i < 12; i++) {
        monthOptions += "<option value='"+months[i]+"'>"+months[i]+"</option>"
    }
    for (i = 1; i < 32; i++) {
        dayOptions += "<option value='"+i+"'>"+i+"</option>"
    }
    document.getElementById('months').innerHTML = monthOptions;
    document.getElementById('days').innerHTML = dayOptions;
    const theForm = document.getElementById('theForm')
    theForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const sign = calculate()
        document.getElementById('result').style.display = 'block'
        document.getElementById('result_title').innerHTML = 'Your sign is ' + sign

        var img = document.createElement("img");
        let imgsrc = "img/" + sign + ".svg";
        img.src = imgsrc;
        let src = document.getElementById("constellation");
        console.log(src);
        if (src.children.length > 0) {
          // It has at least one
          src.removeChild(src.children[0]);
          src.appendChild(img);

        }
        else {
          src.appendChild(img);
        }

        showInformation(sign.toLowerCase(), 'Element', 'Qualities', 'Ruler', 'Representation', 'Perfect Match', 'Imperfect Match', 'Professional', 'Career Path')
				
    })
}

function calculate(){
    const months = document.getElementById('months')
    const month = months.options[months.selectedIndex].text

    const days = document.getElementById('days')
    const day = days.options[days.selectedIndex].text

    if (month == 'March') {
        if (day < 21) {
            return 'Pisces'
        } else {
            return 'Aries'
        }
    } else if (month == 'April') {
        if (day < 20) {
            return 'Aries'
        } else {
            return 'Taurus'
        }
    } else if (month == 'May') {
        if (day < 21) {
            return 'Taurus'
        } else {
            return 'Gemini'
        }
    } else if (month == 'June') {
        if (day < 21) {
            return 'Gemini'
        } else {
            return 'Cancer'
        }
    } else if (month == 'July') {
        if (day < 23) {
            return 'Cancer'
        } else {
            return 'Leo'
        }
    } else if (month == 'August') {
        if (day < 23) {
            return 'Leo'
        } else {
            return 'Virgo'
        }
    } else if (month == 'September') {
        if (day < 23) {
            return 'Virgo'
        } else {
            return 'Libra'
        }
    } else if (month == 'October') {
        if (day < 23) {
            return 'Libra'
        } else {
            return 'Scorpio'
        }
    } else if (month == 'November') {
        if (day < 22) {
            return 'Scorpio'
        } else {
            return 'Sagittarius'
        }
    } else if (month == 'December') {
        if (day < 22) {
            return 'Sagittarius'
        } else {
            return 'Capricorn'
        }
    } else if (month == 'January') {
        if (day < 20) {
            return 'Capricorn'
        } else {
            return 'Aquarius'
        }
    } else if (month == 'February') {
        if (day < 19) {
            return 'Aquarius'
        } else {
            return 'Pisces'
        }
    }
}

function showInformation(sign, el, qual, ruler, repr, perf, imperf, prof, career) {
    document.getElementById(el).innerHTML = 'Element: ' + signs[sign].element
    document.getElementById(qual).innerHTML = 'Qualities: ' + signs[sign].qualities
    document.getElementById(ruler).innerHTML = 'Ruler: ' + signs[sign].ruler
    document.getElementById(repr).innerHTML = 'Representation: ' + signs[sign].representation
    document.getElementById(perf).innerHTML = 'Perfect Match: ' + signs[sign]["perfect match"]
    document.getElementById(imperf).innerHTML = 'Imperfect Match: ' + signs[sign]["imperfect match"]
    document.getElementById(prof).innerHTML = 'Professional traits: ' + signs[sign].professional
    document.getElementById(career).innerHTML = 'Ideal Careers: ' + signs[sign]["career path"]

  }

function popup(planet, sign){
	document.getElementById("overlay").style.height = "100%"
	document.getElementById('planet-sign').innerHTML = ''+ planet + ' - ' + sign
	showInformation(sign, 'element', 'qualities', 'ruler', 'representation', 'perfect_match', 'imperfect_match', 'professional', 'career_path')	
	document.getElementById('ruler').innerHTML =''
}

function closePopup() {
	document.getElementById("overlay").style.height = "0%"
}