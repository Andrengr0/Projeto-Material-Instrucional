$(()=>{
    let acertos = 0;
    $('.btn-responder').on('click', function() {
        
        idInputPg1 = $('input[name=pg1]:checked').val();
        if(idInputPg1 == 3){
            acertos += 1;
            $('.c1_3').css('background-color','#87ff93');
        }else{
            $('.c1_'+idInputPg1).css('background-color','#ff9595');
            $('.c1_3').css('background-color','#87ff93');
        }


        idInputPg2 = $('input[name=pg2]:checked').val();
        if(idInputPg2 == 2){
            acertos += 1;
            $('.c2_2').css('background-color','#87ff93');
        }else{
            $('.c2_'+idInputPg2).css('background-color','#ff9595');
            $('.c2_2').css('background-color','#87ff93');
        }

        let porc_acertos = (acertos / 2) * 100;

        var feedback;
        if(porc_acertos <= 30){
            feedback = 'Não foi um desempenho legal, tente prestar mais atenção nas informações, e pesquise mais sobre o assunto.';
        }else if(porc_acertos <= 50){
            feedback = 'Foi um desempenho legal, mas você pode melhorar mais, se atente melhor as informações e procure pesquisar mais sobre o assunto.';
        }else if(porc_acertos <= 70){
            feedback = 'Bom desempenho! Se puder rever as informações e puder entender melhor, será ótimo!';
        }else if(porc_acertos <= 95){
            feedback = 'Foi quase lá!!! Você demonstra boa comprensão sobre segurança digital, continue com seu estudo se tornar fera no assunto.';
        } else if(porc_acertos <= 100){
            feedback = 'Você está CRAQUE na segurança digital, compreende muito bem os conceitos e informações, não deixe de estudar e assim sempre se atualize no assunto.';
        }

        $('.body').append('<div class="box-write p-2 pt-4 pb-4 text-center"><h3>Seu acerto foi de '+porc_acertos+'%</h3><br/><h6>'+feedback+'</h6></div>');
        $('.body').append('<br/>')

        window.scroll({
            top: 1000,
            left: 0,
            behavior: "smooth",
          });
    })
})