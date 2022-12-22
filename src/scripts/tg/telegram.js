const TOKEN = "5983802864:AAExgkBMJmvq7cbGUPLMr-MU86njTObuuzE";
const CHAT_ID = "-1001740432577";

const iNAme = document.querySelector('.i-name');
const iPhone = document.querySelector('.i-phone');
const iMessage = document.querySelector('.i-message');

const form = document.getElementById('form');

iPhone.addEventListener('keypress', e => {
    if (!/\d/.test(e.key)) e.preventDefault();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessageTg()
})

function sendMessageTg() {
    let message = `<b>Имя: </b> ${iNAme.value}\n`;
    message += `<b>Номер телефона: </b> <a href="tel:${iPhone.value}">${iPhone.value}</a>\n`;
    message += `<b>Сообщение: </b> ${iMessage.value}`;

    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'User-Agent': 'Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)',
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            text: message,
            parse_mode: 'HTML',
            disable_web_page_preview: false,
            disable_notification: false,
            reply_to_message_id: null,
            chat_id: CHAT_ID
        })
    };

    fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(sendMessageErr());
}

function sendMessageErr() {
    gsap.from(iNAme, {
        background: '#FF6939'
    });
    gsap.from(iPhone, {
        background: '#FF6939'
    });
    gsap.from(iMessage, {
        background: '#FF6939'
    });
}