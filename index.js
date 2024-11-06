//if satser som säger ifall man har trucking på en knapp som t.ex. "monocromatic så går man in ifen och kör en GET från api"
const navBtn = document.getElementById("nav-btn")
let colorscheme=[]



navBtn.addEventListener("click", function(){
    
    const colorInputNav = document.getElementById("color-input-nav").value.slice(1)
    const mode= document.getElementById("color-scheme").value
    
       console.log(colorInputNav)
       console.log(mode)
       
        fetch(`https://www.thecolorapi.com/scheme?hex=${colorInputNav}&mode=${mode}&count=5`)
            .then(response=>response.json())
            .then(data=> { 
                
            colorscheme = data.colors.map(color => color.hex.value)
            
            let list = document.querySelectorAll(".color")
            let hexValues = document.querySelectorAll(".hex")
            console.log(list.length)
            console.log(colorscheme)
            for (let i = 0; i<colorscheme.length; i++){
                    
                list[i].style.background=`${colorscheme[i]}`
                hexValues[i].textContent=`${colorscheme[i]}`
                hexValues[i].addEventListener("click", () => {
                    
                    navigator.clipboard.writeText(hexValues[i].textContent).then(
                        () => { console.log("hex Value copied")},
                        
                        () => { console.log("hex value was not copied")})

                    
                })
            }   
     })
            
})
    