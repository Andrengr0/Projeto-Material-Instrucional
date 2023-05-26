$(()=>{

    let numRandom = Math.floor(Math.random() * 8)
    
    if(numRandom == 0){
        $('.text-curiosidade').append('Engenharia social: A engenharia social é uma tática comum usada por hackers para obter acesso a informações confidenciais. Ela envolve a manipulação psicológica das pessoas, geralmente por meio de técnicas de persuasão ou falsa identidade.')
    }else if(numRandom == 1){
        $('.text-curiosidade').append('Senhas comuns: Apesar dos riscos conhecidos, muitas pessoas ainda usam senhas comuns e previsíveis, como "123456" e "password". Essas senhas fáceis de adivinhar são responsáveis por muitas violações de segurança.')
    }else if(numRandom == 2){
        $('.text-curiosidade').append('Ataques de força bruta: Os ataques de força bruta são uma técnica usada para quebrar senhas por meio de tentativa e erro. Os hackers usam programas automatizados para testar combinações de senhas até encontrarem a correta.')
    }else if(numRandom == 3){
        $('.text-curiosidade').append('Ransomware: O ransomware é um tipo de malware que criptografa os arquivos de um computador e exige um resgate para descriptografá-los. É uma ameaça crescente e muitas vezes é distribuído por meio de e-mails de phishing.')
    }else if(numRandom == 4){
        $('.text-curiosidade').append('Dark web: A dark web é uma parte da internet que não pode ser acessada pelos mecanismos de pesquisa convencionais. Ela é frequentemente associada a atividades ilegais, como venda de drogas, armas e dados roubados.')
    }else if(numRandom == 5){
        $('.text-curiosidade').append('VPN: Uma VPN (Virtual Private Network) é uma tecnologia usada para aumentar a segurança e privacidade online. Ela cria uma conexão criptografada entre o dispositivo do usuário e o servidor VPN, ocultando o tráfego da internet e protegendo os dados pessoais.')
    }else if(numRandom == 6){
        $('.text-curiosidade').append('Biometria: A autenticação biométrica, como impressões digitais e reconhecimento facial, é cada vez mais utilizada para proteger dispositivos e contas online. No entanto, os dados biométricos também podem ser comprometidos e não podem ser alterados, ao contrário de senhas.')
    }else if(numRandom == 7){
        $('.text-curiosidade').append('Hackers éticos: Existem hackers éticos, conhecidos como "white-hat hackers", que são especialistas em segurança digital contratados por empresas para encontrar vulnerabilidades em seus sistemas. Eles ajudam a identificar e corrigir falhas de segurança antes que sejam exploradas por hackers mal-intencionados.')
    }
})