

input.addEventListener("input",conversion)

function conversion (e){

    number= e.target.value
    
    m.textContent =f.textContent= l.textContent = g.textContent=k.textContent =p.textContent = number

    mtf.textContent= (number * 3.28084).toFixed(3)
    ftm.textContent= (number / 3.2808).toFixed(3)
    ltg.textContent =(number * 0.26417205235815).toFixed(3)
    gtl.textContent =(number * 3.785412).toFixed(3)
    ktp.textContent =(number * 2.20462).toFixed(3)
    ptk.textContent =(number * 0.453592).toFixed(3)


}