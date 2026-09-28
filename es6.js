number = 0;


isAuth? "dashboard" : "loginPage"


console.log(x);



let numbers = [5,6,9,20]

// let y = x; //shallow copy


//deep copy

let y = [...numbers]







numbers.push(10)

console.log("numbers", numbers);
console.log("y", y);




let news = {
    "source": {
        "id": null,
        "name": "PRNewswire"
    },
    "author": null,
    "title": "ID.me Expands Executive Team, Names Susannah Stroud Wright New Chief Legal Officer and Darragh Whelan EVP of Engineering",
    "description": "MCLEAN, Va., Sept. 28, 2026 /PRNewswire/ -- ID.me, the market-leading digital identity wallet, today announced two major additions to its executive management team. Susannah Stroud Wright has joined as Chief Legal Officer to lead ID.me's legal, compliance, an…",
    "url": "https://www.prnewswire.com/news-releases/idme-expands-executive-team-names-susannah-stroud-wright-new-chief-legal-officer-and-darragh-whelan-evp-of-engineering-302891737.html",
    "urlToImage": "https://mmx.prnewswire.com/media/MS1208763/ID-me-Logo.jpg?id=OA2974210&p=facebook",
    "publishedAt": "2026-09-28T17:05:00Z",
    "content": "MCLEAN, Va., Sept. 28, 2026 /PRNewswire/ -- ID.me, the market-leading digital identity wallet, today announced two major additions to its executive management team. Susannah Stroud Wright has joined … [+4169 chars]"
};


// let auther = news.author;
// let title = news.title;
// let url = news.url

let {auther,title,url} = news

console.log(auther,title,url);

