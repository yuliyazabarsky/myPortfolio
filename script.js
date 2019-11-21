$(".navbar a").on("click", function(e) {
    if(this.hash !==""){
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top
            },
            1000
        );
    };
})


function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}


function gototab(reload)
   {
    window.location.hash = '#home';
    window.location.reload(true);
    console.log("home");
 }
