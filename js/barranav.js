document.addEventListener("DOMContentLoaded", function(){
    decremento = 0
    altura = document.getElementById("barra1").offsetHeight;
    window.addEventListener('scroll', function() {
        if (this.window.scrollY > altura){
            document.getElementById('barra1').classList.add('fixed-top','bg-body-tertiary');
            document.getElementById('barra1').classList.remove('bg-transparent');
            document.getElementById('barra1').style.height = (altura-decremento)+"px"
        } else {
            document.getElementById('barra1').classList.remove('bg-body-tertiary');
            document.getElementById('barra1').classList.add('bg-transparent');
            document.getElementById('barra1').style.height=altura+"px";
        }
    });



    var menuIsotope = $('.menu-container').isotope({
        itemSelector: '.menu-item',
        layoutMode: 'masonry',
        filter: '.Sabores'
        });
        $('#menu-filtros li').on('click', function() {
        $("#menu-filtros li").removeClass('filter-active, lineaabajo');
        $(this).addClass('filter-active, lineaabajo');
        $("#titcat").text($(this).text());
        menuIsotope.isotope({
        filter: $(this).data('filter')
        });
        });


});