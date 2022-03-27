const quotes = [
    {
        quote: "내 경험상 틀린 길은 없었다.",
        author: "오늘 내가 사는게 재미있는 이유 - 김혜남 중에서"
    },
    {
        quote: "위로는, 헤아림이라는 땅 위에 피는 꽃이다.",
        author: "언어의 온도 - 이기주 중에서"
    },
    {
        quote: "시간은 삶이며, 삶은 우리 마음 속에 깃들여 있는 것이다.",
        author: "모모 - 미하엘 엔데 중에서"
    },
    {
        quote: "나는 가끔 사진 속의 당신과 눈을 맞춘다.",
        author: "생각이 나서 - 황경신 중에서"
    },
    {
        quote: "실패했을 때 어떻게 하느냐가 그 사람에 대한 평가를 좌우한다.",
        author: "선택하지 않은 인생은 잊어도 좋다 - 고지마 게이코 중에서"
    },
    {
        quote: "나는 가끔 무슨 말을 하고 싶은데 무슨 말을 하고 싶은지 모르겠다고 했다.",
        author: "눈 먼 부엉이 - 정지돈 중에서"
    },
    {
        quote: "결국 내가 잃어버린 것은 구름이 아니라 구름을 바라볼 시간과 마음이었다.",
        author: "한 걸음씩 걸어서 거기 도착하려네 - 나희덕 중에서"
    },
    {
        quote: "오랫동안 고민해 선택한 결과가 대단하지 않더라도 자신조차 시시하게 여기지 말라는 것.",
        author: "무례한 사람에게 웃으며 대처하는 법 - 정문정 중에서"
    },
    {
        quote: "시간을 '보내는 것'이 삶이라면 될 수 있는 한 '잘 대접해서' 보내주고 싶다.",
        author: "소란 - 박연준 중에서"
    },
    {
        quote: "내 앞에 서있는 네가 시고, 그림이고, 영화다.",
        author: "심심한 날의 오후 다섯시 - 김용택 중에서"
    }
]

const quote = document.querySelector("#quote h3:first-child");
const author = document.querySelector("#quote h3:last-child");

const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;