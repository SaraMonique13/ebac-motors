$(document).ready(function(){
    $('#carousel').slick({
        autoplay:true //carrossel passa automaticamente

    })

    $('.menu-hamburguer').click(function(){
            $('nav').slideToggle() //ao clicar no menu ele mostra ou some com as opções
        })

        
        //mask
       $('#itel').mask('(00) 00000-0000', {placeholder:'(xx) xxxxx-xxxx'}) 

       $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            tel:{
                required:true
            },
            msg:{
                required:true
            },
            vInteresse:{
                required:false
            }
        },
        messages:{
            nome:'Por favor, insira o seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        //se os campos nao forem preenchidos
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
       })

       $('.lista-veiculos button').onclick(function(){
        const destino = $('#contato')

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
       })
       
})