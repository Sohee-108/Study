const quotes = [
    {
        quote: "어렸을 때는 그냥 훌륭한 사람이 되고 싶었는데 지금은 그저 행복한 사람이 되고 싶다.",
        author: "인생"
    },
    {
        quote: "뜨거움의 열기가 한 풀 꺾여 차분함으로 식혀주는 그런 가을이였으면 해.",
        author: "인생"
    },
    {
        quote: "완전한 사랑이라는 것은 없어.",
        author: "사랑"
    },
    {
        quote: "미완성된 사랑을 끊임없이 만들어가는 과정일 뿐이지.",
        author: "사랑"
    },
    {
        quote: "어쩌면 세상엔 완전한 사랑이 존재하지 않을지도 몰라.",
        author: "사랑"
    },
    {
        quote: "몰랐던 점들을 서서히 알게 되었을 때 그때부터 이별을 서서히 준비하고 있었을지도 몰라.",
        author: "이별"
    },
    {
        quote: "권태기일까, 깊은 사랑을 위해 필요한 관문인걸까.",
        author: "이별"
    },
    {
        quote: "마음의 크기는 서로 동등해야 해.",
        author: "연애"
    },
    {
        quote: "어느 한쪽에 공백이 생겼을 때 그 공백의 크기만큼 고스란히 상처로 남게 되지.",
        author: "연애"
    },
    {
        quote: "호기심으로부터 시작했던 관심히 호감으로 이어졌고, 너에 대한 감정은 어느새 점점 더 퍼져나갔지.",
        author: "연애"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;