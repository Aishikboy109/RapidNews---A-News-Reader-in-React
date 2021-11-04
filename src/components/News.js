import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  // articles = [
  //   {
  //     source: {
  //       id: null,
  //       name: "YouTube",
  //     },
  //     author: null,
  //     title: "Red Notice Review - IGN",
  //     description:
  //       "Red Notice debuts in theaters on Nov. 5 and on Netflix Nov. 12. Spoiler-free review by Tara Bennett.Red Notice starts with a lot of energetic potential but t...",
  //     url: "https://www.youtube.com/watch?v=3zXq5QU-NeY",
  //     urlToImage: "https://i.ytimg.com/vi/3zXq5QU-NeY/maxresdefault.jpg",
  //     publishedAt: "2021-11-04T06:00:01Z",
  //     content: null,
  //   },
  //   {
  //     source: {
  //       id: "cnn",
  //       name: "CNN",
  //     },
  //     author: "Raja Razek, CNN",
  //     title:
  //       "'Tiger King' Joe Exotic says he has been diagnosed with aggressive form of prostate cancer - CNN",
  //     description:
  //       'Joseph Maldonado, known as Joe Exotic on the 2020 Netflix docuseries "Tiger King: Murder, Mayhem and Madness," has been diagnosed with an aggressive form of prostate cancer, according to a letter written by Maldonado.',
  //     url: "https://www.cnn.com/2021/11/04/us/joe-exotic-tiger-king-prostate-cancer/index.html",
  //     urlToImage:
  //       "https://cdn.cnn.com/cnnnext/dam/assets/211104002659-joe-exotic-file-2013-super-tease.jpg",
  //     publishedAt: "2021-11-04T05:35:21Z",
  //     content:
  //       '(CNN)Joseph Maldonado, known as Joe Exotic on the 2020 Netflix docuseries "Tiger King: Murder, Mayhem and Madness," has been diagnosed with an aggressive form of prostate cancer, according to a lette… [+1225 chars]',
  //   },
  //   {
  //     source: {
  //       id: "independent",
  //       name: "Independent",
  //     },
  //     author: "Namita Singh",
  //     title:
  //       "Cleo Smith news — live: Kidnap suspect 'in hospital again' as 'hard police grind' credited for breakthrough - The Independent",
  //     description: "Follow the latest live updates here",
  //     url: "https://www.independent.co.uk/news/world/australasia/cleo-smith-found-update-abuctor-b1951152.html",
  //     urlToImage:
  //       "https://static.independent.co.uk/2021/11/03/06/FDPnYz9UYAoCxMz.jpg?width=1200&auto=webp&quality=75",
  //     publishedAt: "2021-11-04T04:42:40Z",
  //     content:
  //       "Missing four-year-old Cleo Smith found alive and well in Western Australia\r\nThe suspected kidnapper of four-year-old Cleo Smith has been treated in hospital for a second time amid reports he was atta… [+6442 chars]",
  //   },
  //   {
  //     source: {
  //       id: "reuters",
  //       name: "Reuters",
  //     },
  //     author: null,
  //     title:
  //       "'You are not alone': EU Parliament delegation tells Taiwan on first official visit - Reuters",
  //     description:
  //       "The European Parliament's first official delegation to Taiwan said on Thursday the diplomatically isolated island is not alone and called for bolder actions to strengthen EU-Taiwan ties as Taipei faces rising pressure from Beijing.",
  //     url: "https://www.reuters.com/world/you-are-not-alone-eu-parliament-delegation-tells-taiwan-first-official-visit-2021-11-04/",
  //     urlToImage:
  //       "https://www.reuters.com/resizer/hE_lq70sVi7hXpVv6Z8I08Uky4k=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/I32H3FAHDFJZDEPEZWJ3ZGSAZE.jpg",
  //     publishedAt: "2021-11-04T03:37:00Z",
  //     content:
  //       "Raphael Glucksmann, leader of the opposition Parti Socialiste and Place Publique (Socialist Party and Public Place) list for the European elections, attends a rally in Lyon, France May 16, 2019. REUT… [+2336 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "NBCSports.com",
  //     },
  //     author: "Mike Florio",
  //     title:
  //       "Aaron Rodgers violated COVID protocol by doing maskless indoor press conferences - NBC Sports",
  //     description:
  //       "The NFL won’t come right out and say it. Then again, the NFL doesn’t have to. Packers quarterback Aaron Rodgers has been conducting in-person press conferences in the Green Bay facility without wearing a mask. Because he was secretly unvaccinated, Rodgers vio…",
  //     url: "https://profootballtalk.nbcsports.com/2021/11/03/aaron-rodgers-violated-covid-protocol-by-doing-maskless-indoor-press-conferences/",
  //     urlToImage:
  //       "https://profootballtalk.nbcsports.com/wp-content/uploads/sites/25/2021/11/GettyImages-603114376-e1635995986422.jpg",
  //     publishedAt: "2021-11-04T03:21:00Z",
  //     content:
  //       "The NFL won’t come right out and say it. Then again, the NFL doesn’t have to.\r\nPackers quarterback Aaron Rodgers has been conducting in-person press conferences in the Green Bay facility without wear… [+2549 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "The Athletic",
  //     },
  //     author: "Grant Brisbee",
  //     title:
  //       "Buster Posey's career was like no other in Giants history - The Athletic",
  //     description:
  //       "There was a franchise without Buster Posey, and there was one with him, and those two franchises were radically, impossibly different.",
  //     url: "https://theathletic.com/2933824/2021/11/03/buster-poseys-career-was-like-no-other-in-giants-history/",
  //     urlToImage:
  //       "https://cdn.theathletic.com/app/uploads/2021/11/03215711/GettyImages-1345001271-1024x683.jpg",
  //     publishedAt: "2021-11-04T02:12:54Z",
  //     content:
  //       "In the long, long history of Giants baseball, there are only a few lines of demarcation that compare. There was the move from New York to San Francisco. There was the time the entire franchise was su… [+1430 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Variety",
  //     },
  //     author: "Michael Schneider",
  //     title:
  //       "‘The Masked Singer’ Reveals Identity of the Beach Ball: Here Are the Stars Under the Mask - Variety",
  //     description:
  //       "SPOILER ALERT: Do not read ahead if you have not watched “The Masked Singer” Season 6, Episode 8, “Giving Thanks,” which aired November 3 on Fox. Honey Boo Boo, we hardly knew you. Reality TV mother and daughter stars June Edith “Mama June” Shannon and Alana …",
  //     url: "https://variety.com/2021/tv/news/the-masked-singer-season-6-episode-8-recap-beach-ball-1235103452/",
  //     urlToImage:
  //       "https://variety.com/wp-content/uploads/2021/11/MS-S6_EP610-Show-MB_0578.jpg?w=1024",
  //     publishedAt: "2021-11-04T02:00:00Z",
  //     content:
  //       "SPOILER ALERT: Do not read ahead if you have not watched “The Masked Singer” Season 6, Episode 8, “Giving Thanks,” which aired November 3 on Fox.\r\nHoney Boo Boo, we hardly knew you. Reality TV mother… [+8024 chars]",
  //   },
  //   {
  //     source: {
  //       id: "fox-news",
  //       name: "Fox News",
  //     },
  //     author: "Thomas Barrabi",
  //     title:
  //       "Sen. Murkowski slams Dems over 'show votes' on federal election bills - Fox News",
  //     description:
  //       "Sen. Lisa Murkowski, R-Alaska, slammed Senate Democrats for pursuing “show votes” on federal election bills on Wednesday as Republicans used the filibuster to block consideration the John Lewis Voting Rights Advancement Act.",
  //     url: "https://www.foxnews.com/politics/murkowski-dems-show-votes-federal-election-bills",
  //     urlToImage:
  //       "https://static.foxnews.com/foxnews.com/content/uploads/2021/11/Lisa-Murkowski.jpg",
  //     publishedAt: "2021-11-04T01:57:36Z",
  //     content:
  //       'Sen. Lisa Murkowski, R-Alaska, slammed Senate Democrats for pursuing "show votes" on federal election bills on Wednesday as Republicans used the filibuster to block consideration of the John Lewis Vo… [+3071 chars]',
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Cbslocal.com",
  //     },
  //     author: "CBSBoston.com Staff",
  //     title:
  //       "Principal Beaten Unconscious At Dorchester School; Classes Canceled Thursday - CBS Boston",
  //     description:
  //       "Principal Patricia Lampron and another employee were assaulted at Henderson Upper Campus during dismissal on Wednesday.",
  //     url: "https://boston.cbslocal.com/2021/11/03/dorchester-henderson-school-closed-student-assaults-principal/",
  //     urlToImage:
  //       "https://boston.cbslocal.com/wp-content/uploads/sites/3859903/2021/11/bps.jpg?w=1024",
  //     publishedAt: "2021-11-04T01:55:00Z",
  //     content:
  //       "BOSTON (CBS) A Dorchester school will be closed on Thursday after a principal and another staff member were attacked by a student during dismissal Wednesday. Henderson Upper Campus Principal Patricia… [+1728 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "The Guardian",
  //     },
  //     author: "Oliver Laughland",
  //     title:
  //       "Ahmaud Arbery: judge seats nearly all-white jury in Georgia murder trial - The Guardian",
  //     description:
  //       "Judge acknowledges appearance of ‘intentional discrimination’ in case of three white men who killed Arbery, who was Black",
  //     url: "https://amp.theguardian.com/us-news/2021/nov/03/ahmaud-arbery-judge-seats-nearly-all-white-jury-in-georgia-trial",
  //     urlToImage: null,
  //     publishedAt: "2021-11-04T01:04:00Z",
  //     content:
  //       "Ahmaud ArberyJudge acknowledges appearance of intentional discrimination in case of three white men who killed Arbery, who was Black\r\nA Georgia judge has acknowledged there appeared to be intentional… [+3976 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "NPR",
  //     },
  //     author: "Ryan Finnerty",
  //     title:
  //       "New Yorkers vote against a potential expansion of ballot access for the state - NPR",
  //     description:
  //       "New York voters soundly rejected constitutional amendments that would have allowed for same-day voter registration and universal absentee voting in future elections.",
  //     url: "https://www.npr.org/2021/11/03/1052198559/new-yorkers-vote-against-a-potential-expansion-of-ballot-access-for-the-state",
  //     urlToImage:
  //       "https://media.npr.org/assets/img/2021/11/03/ap_21307732739325_wide-942ad608421a0f3ce55e971dacd9c3f70289994a.jpg?s=1400",
  //     publishedAt: "2021-11-04T01:02:17Z",
  //     content:
  //       "Voters fill in their ballots at a polling place in New York City on Tuesday.\r\nSeth Wenig/AP\r\nNew York voters soundly rejected constitutional amendments that would have allowed for same-day voter regi… [+1635 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "Page Six",
  //     },
  //     author: "Eileen Reslen",
  //     title:
  //       "Kim Kardashian and Pete Davidson have second date night in NYC at Zero Bond - Page Six",
  //     description:
  //       "The rumored couple went out to dinner Wednesday for the second night in a row at Manhattan’s A-list private members club, following a dinner on Staten Island Tuesday.",
  //     url: "https://pagesix.com/2021/11/03/kim-kardashian-and-pete-davidson-have-second-date-night-in-nyc/",
  //     urlToImage:
  //       "https://pagesix.com/wp-content/uploads/sites/3/2021/11/davidson-kardashian-index-1.jpg?quality=90&strip=all&w=1200",
  //     publishedAt: "2021-11-04T00:56:00Z",
  //     content:
  //       "It’s a rendezvous part deux.\r\nKim Kardashian and Pete Davidson’s rumored romance appears to be heating up as the pair went out to dinner for the second night in a row Wednesday, Page Six has exclusiv… [+3511 chars]",
  //   },
  //   {
  //     source: {
  //       id: "nbc-news",
  //       name: "NBC News",
  //     },
  //     author: "Henry J. Gomez, Dartunorro Clark, Phil Helsel",
  //     title:
  //       "Democrat Phil Murphy narrowly wins re-election as New Jersey governor, NBC News projects - NBC News",
  //     description:
  //       "New Jersey Governor Phil Murphy, a Democrat, won re-election in the NJ governor race on Tuesday against Republican challenger Jack Ciattarelli, NBC News projects.",
  //     url: "https://www.nbcnews.com/politics/politics-news/nj-governor-race-2021-phil-murphy-n1282924",
  //     urlToImage:
  //       "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_44/3516957/211103-phil-murphy-ew-306p.jpg",
  //     publishedAt: "2021-11-04T00:47:00Z",
  //     content:
  //       "Democratic Gov. Phil Murphy survived a closer-than-expected race to win a second term in New Jersey, NBC News projected Wednesday, offering more proof that Republicans are gaining ground in blue stat… [+6055 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "BBC News",
  //     },
  //     author: "https://www.facebook.com/bbcnews",
  //     title:
  //       "COP26: 190 nations and organisations pledge to quit coal - BBC News",
  //     description:
  //       "Big coal users like Poland and Canada vow to phase it out, but key players China and India have not.",
  //     url: "https://www.bbc.com/news/science-environment-59159018",
  //     urlToImage:
  //       "https://ichef.bbci.co.uk/news/1024/branded_news/19F4/production/_121344660_mediaitem121344659.jpg",
  //     publishedAt: "2021-11-04T00:35:38Z",
  //     content:
  //       "Image caption, Coal produced around 37% of the world's electricity in 2019\r\nMajor coal users including Poland, Vietnam and Chile are committing to shift away from the fossil fuel, in pledges made at … [+2012 chars]",
  //   },
  //   {
  //     source: {
  //       id: "al-jazeera-english",
  //       name: "Al Jazeera English",
  //     },
  //     author: "Al Jazeera",
  //     title:
  //       "China fires back after Biden slams Xi’s COP26 no-show - Al Jazeera English",
  //     description:
  //       "‘Actions speak louder than words,’ says Chinese foreign ministry following US criticism",
  //     url: "https://www.aljazeera.com/economy/2021/11/4/china-fires-back-after-biden-slams-xis-cop26-no-show",
  //     urlToImage:
  //       "https://www.aljazeera.com/wp-content/uploads/2020/07/a4e742b193d747f5b0ab15870a1ab14f_18.jpeg?fit=999%2C562",
  //     publishedAt: "2021-11-04T00:33:08Z",
  //     content:
  //       "China on Wednesday hit back at US President Joe Biden following his criticism of President Xi Jinpings decision to skip the make-or-break COP26 United Nations summit in Glasgow.\r\nXi, who leads the pl… [+1543 chars]",
  //   },
  //   {
  //     source: {
  //       id: "fox-news",
  //       name: "Fox News",
  //     },
  //     author: "Hannah Grossman",
  //     title:
  //       "Manchin calls election results a 'wake up call;' reacts to impact on Biden agenda - foxnews.com",
  //     description:
  //       "Fox News's Bret Baier spoke with Sen. Joe Manchin on the implications of the Virginia and New Jersey gubernatorial races.",
  //     url: "https://www.foxnews.com/media/joe-manchin-virginia-governors-election-results-wake-up-call-joe-biden-agenda-infrastructure",
  //     urlToImage:
  //       "https://static.foxnews.com/foxnews.com/content/uploads/2021/11/Video-80.jpg",
  //     publishedAt: "2021-11-04T00:14:49Z",
  //     content:
  //       "West Virginia Democratic Sen. Joe Manchin spoke with Fox News' Bret Baier Wednesday on \"Special Report\" about the implications of the Virginia governor's election as well as the tight New Jersey race… [+2799 chars]",
  //   },
  //   {
  //     source: {
  //       id: "usa-today",
  //       name: "USA Today",
  //     },
  //     author: "Mike Snider, USA TODAY",
  //     title:
  //       "Facebook, Instagram, Messenger and WhatsApp again hit with outages for some users - USA TODAY",
  //     description:
  //       "Were Facebook and Instagram down today?  Yes, and Facebook Messenger and WhatsApp were also hit with outages on Wednesday.",
  //     url: "https://www.usatoday.com/story/tech/2021/11/03/facebook-and-instagram-go-down-some-messenger-whatsapp-hit-too/6273048001/",
  //     urlToImage:
  //       "https://www.gannett-cdn.com/presto/2021/10/09/USAT/0a08c159-1374-43a4-b6be-caf6fc236faa-AFP_AFP_9P44YG.jpg?auto=webp&crop=3499,1969,x0,y126&format=pjpg&width=1200",
  //     publishedAt: "2021-11-04T00:00:00Z",
  //     content:
  //       "Yes, Facebook, Instagram and Meta's other platforms had some issues Wednesday.\r\nUsers on Facebook Messenger, along with Facebook and Instagram began reporting outages just after 2 p.m. ET Wednesday, … [+2283 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "CNBC",
  //     },
  //     author: "Eustance Huang",
  //     title:
  //       "Asia-Pacific stocks rise after Fed announces plans to start tapering bond purchases; oil falls 1% - CNBC",
  //     description:
  //       "The U.S. Federal Reserve announced Wednesday it will begin tapering the pace of asset purchases later in November.",
  //     url: "https://www.cnbc.com/2021/11/04/asia-markets-us-federal-reserve-currencies-oil.html",
  //     urlToImage:
  //       "https://image.cnbcfm.com/api/v1/image/106868547-1618443427035-gettyimages-1230415697-JAPAN_STOCK.jpeg?v=1635982105",
  //     publishedAt: "2021-11-03T23:43:42Z",
  //     content:
  //       "Fed announces tapering plans\r\nThe Fed announced Wednesday it will begin reducing the pace of monthly bond purchases later this month. The move was in line with market expectations following a series … [+1070 chars]",
  //   },
  //   {
  //     source: {
  //       id: "the-wall-street-journal",
  //       name: "The Wall Street Journal",
  //     },
  //     author: "The Editorial Board",
  //     title: "Voters Cancel the War on Police - The Wall Street Journal",
  //     description:
  //       "From Seattle to Long Island, Americans voted against public disorder.",
  //     url: "https://www.wsj.com/articles/minneapolis-election-results-police-vote-11635979356",
  //     urlToImage: "https://images.wsj.net/im-428833/social",
  //     publishedAt: "2021-11-03T23:43:00Z",
  //     content:
  //       "With crime surging in many cities, voters rejected the anti-police left this week. Minneapolis was the birthplace of the defund the police movement, but on Tuesday more than 56% of voters rejected a … [+509 chars]",
  //   },
  //   {
  //     source: {
  //       id: null,
  //       name: "CNBC",
  //     },
  //     author: "Jabari Young",
  //     title:
  //       "2021 World Series ratings: Braves-Astros Game 6 draws 14.3 million - CNBC",
  //     description:
  //       "The Atlanta Braves first World Series win in over 20 years averaged 11.7 million viewers for the six-game set against the Houston Astros.",
  //     url: "https://www.cnbc.com/2021/11/03/2021-world-series-ratings-braves-astros-game-6-draws-14point3-million.html",
  //     urlToImage:
  //       "https://image.cnbcfm.com/api/v1/image/106970123-1635956417904-gettyimages-1350960493-cm1_0809_20211102104323891.jpeg?v=1635956502",
  //     publishedAt: "2021-11-03T23:31:53Z",
  //     content:
  //       "The Atlanta Braves captured their first World Series championship in over 20 years, and also helped Major League Baseball's top event recover in terms of ratings.\r\nThe 2021 World Series averaged 11.7… [+2660 chars]",
  //   },
  // ];

  articles = [];
  constructor() {
    super();
    console.log("Hello I am the constructor");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=37f2607dcff648e391b3d365742ebbc6";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
  }

  handlePrevClick = async () => {
    console.log("previous")
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=37f2607dcff648e391b3d365742ebbc6&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };


  handleNextClick = async () => {
    console.log("next")
    if(Math.ceil(this.state.totalResults/20)<this.state.page+1){

    }
    else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=37f2607dcff648e391b3d365742ebbc6&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      
      this.setState({ articles: parsedData.articles, page: this.state.page + 1 });
    }
  };

  // handleDemoClick = () => {
  //   console.log("demo click working")
  // }
  render() {
    return (
      <div className="container my-3">
        <h2>RapidNews</h2>
        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-4" key={article.url}>
                <NewsItem
                  title={article.title}
                  description={article.description}
                  urlToImage={article.urlToImage}
                  newsUrl={article.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
          {/* <button
            type="button"
            class="btn btn-dark"
            onClick={this.handleDemoClick}
          > */}
            {/* Next &rarr;
          </button> */}
        </div>
      </div>
    );
  }
}