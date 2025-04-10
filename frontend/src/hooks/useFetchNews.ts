// import { useQuery } from '@tanstack/react-query';
// import { getRequest } from './api';

export const useFetchNews = () => {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ['news'],
  //   queryFn: () => getRequest('news'),
  // });

  const data = {
    status: 'ok',
    totalResults: 33,
    articles: [
      {
        source: {
          id: null,
          name: 'CBS Sports',
        },
        author: null,
        title:
          '2025 Masters expert picks, best bets, odds, sleepers: Golf insider ducking Jon Rahm at Augusta National - CBS Sports',
        description:
          'Golf expert Sia Nejad has revealed his Masters 2025 picks and PGA best bets for Augusta National, beginning Thursday, April 10',
        url: 'https://www.cbssports.com/golf/news/2025-masters-expert-picks-best-bets-odds-sleepers-golf-insider-ducking-jon-rahm-at-augusta-national/',
        urlToImage:
          'https://sportshub.cbsistatic.com/i/r/2025/04/08/58e2dfed-aa5e-4765-83d0-823da98c07a5/thumbnail/1200x675/49ccb5ae8fc1a5a9005f45ce45ca58db/jon-rahm-masters-imagn-images.jpg',
        publishedAt: '2025-04-09T19:38:48Z',
        content:
          'Along with the PGA Championship, the Masters 2025 is the only other major that gives all past winners a lifetime invitation. If you have a green jacket, then you can tee off at the 2025 Masters, and … [+7588 chars]',
      },
      {
        source: {
          id: null,
          name: 'TVLine',
        },
        author: 'Vlada Gelman',
        title:
          'Casting News: Mr. Darcy and Carrie Contenders, and More - TVLine',
        description:
          "'Slow Horses' actor Jack Lowden is in talks to star as Mr. Darcy in Netflix's forthcoming 'Pride and Prejudice' series, from author Dolly Alderton.",
        url: 'https://tvline.com/casting-news/pride-and-prejudice-series-cast-jack-lowden-darcy-netflix-1235430364/',
        urlToImage:
          'https://tvline.com/wp-content/uploads/2025/04/jack-lowden.jpg?w=650',
        publishedAt: '2025-04-09T19:21:16Z',
        content:
          'It is a truth universally acknowledged that many actors must be in want of the role of Mr. Darcy in Netflix’s forthcoming Pride and Prejudice series — but only Jack Lowden may get the part.\r\nThe Slow… [+1611 chars]',
      },
      {
        source: {
          id: null,
          name: 'NPR',
        },
        author: '',
        title:
          'Appeals court rules Trump can fire probationary federal workers once again - NPR',
        description:
          'The decision from the Fourth Circuit Court of Appeals further clears the way for the Trump administration to re-fire, for now, thousands of probationary federal employees.',
        url: 'https://www.npr.org/2025/04/09/nx-s1-5357415/trump-federal-probationary-employees-firings',
        urlToImage:
          'https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4958x2789+0+329/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F5d%2F51%2Fc74b2856427283261122250590a0%2Fgettyimages-2206492383.jpg',
        publishedAt: '2025-04-09T18:44:20Z',
        content:
          'In a win for President Trump, a panel of judges on the Fourth Circuit Court of Appeals has vacated a lower court ruling ordering 20 federal agencies to reinstate tens of thousands of employees they h… [+2952 chars]',
      },
      {
        source: {
          id: 'nbc-news',
          name: 'NBC News',
        },
        author: 'Gary Grumbach, Chloe Atkins, Suzanne Gamboa',
        title:
          "Federal judges limit Trump's use of Alien Enemies Act for some deportations - NBC News",
        description:
          'A Texas judge blocked deportations of anyone held in a South Texas detention facility who may be removed under the wartime law and a New York judge planned a similar order in part of that state.',
        url: 'https://www.nbcnews.com/news/latino/federal-judges-limit-trump-alien-enemies-act-deportations-rcna200418',
        urlToImage:
          'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-03/250317-el-salvador-mb-0634-ca3642.jpg',
        publishedAt: '2025-04-09T18:25:34Z',
        content:
          'A federal judge in Texas issued an order Wednesday temporarily blocking the Trump administrations use of the Alien Enemies Act to deport people held in a south Texas immigration detention center with… [+5826 chars]',
      },
      {
        source: {
          id: null,
          name: 'NBCSports.com',
        },
        author: 'Connor Rogers',
        title:
          '2025 NFL Mock Draft: Pats go Tetairoa McMillan, Shedeur Sanders falls out of Round 1 if Connor Rogers were GM - NBC Sports',
        description:
          "Connor Rogers' latest NFL mock draft takes a look at what he would do if he were in the GM chair for each team’s first selection.",
        url: 'https://www.nbcsports.com/nfl/news/2025-nfl-mock-draft-pats-go-tetairoa-mcmillan-shedeur-sanders-falls-out-of-round-1-if-connor-rogers-was-gm',
        urlToImage:
          'https://nbcsports.brightspotcdn.com/dims4/default/ccaebbd/2147483647/strip/true/crop/1920x1080+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fb1%2F19%2Fa7c425b348b5a05d7bd3f4332313%2Ftmacmock.jpg',
        publishedAt: '2025-04-09T18:22:24Z',
        content:
          'Mock drafts often serve two primary purposes: introduce prospects and predict what teams will do in Round 1 of the NFL draft. To break it up once per year, I decide to sit in the GM chair for every t… [+11401 chars]',
      },
      {
        source: {
          id: 'cnn',
          name: 'CNN',
        },
        author: 'Andy Rose',
        title:
          'With more than 250 student visas revoked, international scholars worry as the government expands reasons for deportation - CNN',
        description:
          'An increasing number of student deportation threats involve the revocation of visas based on relatively minor offenses like years-old misdemeanors, according to immigration attorneys, or sometimes no reason at all.',
        url: 'https://www.cnn.com/2025/04/09/us/us-immigration-student-visas-revoked/index.html',
        urlToImage:
          'https://media.cnn.com/api/v1/images/stellar/prod/ap25093674396299.jpg?c=16x9&q=w_800,c_fill',
        publishedAt: '2025-04-09T17:53:00Z',
        content:
          'Kseniia Petrovas path from a Harvard laboratory to an immigration cell began with frogs.\r\nThe Russian national who has been working as a researcher at Harvard Medical School failed to declare non-haz… [+9788 chars]',
      },
      {
        source: {
          id: 'the-hill',
          name: 'The Hill',
        },
        author: 'Nathaniel Weixel',
        title:
          'RFK Jr. says he’s ‘not familiar’ with $11b cuts to state and local health departments - The Hill',
        description:
          'Health and human services secretary Robert F. Kennedy Jr. said he was unaware that his agency is trying to rescind more than $11 billion from state and local health departments.  “No I’m not familiar with those cuts. We’d have to go … the cuts were mainly DEI…',
        url: 'https://thehill.com/policy/healthcare/5240663-health-human-services-secretary-cuts-grants/',
        urlToImage:
          'https://thehill.com/wp-content/uploads/sites/2/2025/01/RFK-jr-takeaways_stanage_GregNash.jpeg?w=1280',
        publishedAt: '2025-04-09T17:44:00Z',
        content:
          'Skip to content\r\nHealth and human services secretary Robert F. Kennedy Jr. said he was unaware that his agency is trying to rescind more than $11 billion from state and local health departments. \r\n“N… [+3514 chars]',
      },
      {
        source: {
          id: null,
          name: 'Sports Illustrated',
        },
        author: 'Liam McKeone',
        title:
          "Luka Doncic's Camp Reportedly Nixed Mavericks' Special Offers for Return to Dallas - Sports Illustrated",
        description:
          "The Mavs 'lined up lucrative sponsorship deals,' for the return to Dallas but Doncic's camp nixed it.",
        url: 'https://www.si.com/nba/luka-doncics-camp-reportedly-nixed-mavericks-special-offers-for-return-to-dallas',
        urlToImage:
          'https://images2.minutemediacdn.com/image/upload/c_crop,w_3910,h_2199,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/si/01jrdnghnncqe2kdzjkp.jpg',
        publishedAt: '2025-04-09T16:43:23Z',
        content:
          "On Wednesday evening Luka Doncic will return to Dallas wearing a different uniform. While it's the second time Doncic has played his old team, the Slovenian superstar will take the floor for the Los … [+1252 chars]",
      },
      {
        source: {
          id: null,
          name: 'CNBC',
        },
        author: 'Hakyung Kim, Brian Evans',
        title:
          'S&P 500 ticks higher even as trade tensions worsen: Live updates - CNBC',
        description:
          'Stocks seesawed Wednesday as traders looked for a market bottom after days of volatility, despite retaliatory tariffs from China and the European Union.',
        url: 'https://www.cnbc.com/2025/04/08/stock-market-today-live-updates-.html',
        urlToImage:
          'https://image.cnbcfm.com/api/v1/image/108129184-17442128072025-04-09t145343z_874815961_rc2eudacuchx_rtrmadp_0_usa-stocks.jpeg?v=1744217190&w=1920&h=1080',
        publishedAt: '2025-04-09T16:31:00Z',
        content:
          'Stocks climbed higher Wednesday afternoon, recovering some of their recent losses, despite retaliatory tariffs from China and the European Union on U.S. goods in the latest escalation of the global t… [+2718 chars]',
      },
      {
        source: {
          id: null,
          name: 'Financial Times',
        },
        author: 'Michael Acton, John Reed',
        title:
          'Apple turns to India to help ease Trump’s China tariffs - Financial Times',
        description:
          'iPhone maker is facing one of the biggest threats to its business in years',
        url: 'https://www.ft.com/content/5c4b2bc9-f0ac-46f3-a93b-cfa6273428f9',
        urlToImage:
          'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Ff189df63-88a2-4e07-850d-e5dec23e8a5d.jpg?source=next-barrier-page',
        publishedAt: '2025-04-09T16:01:46Z',
        content:
          'Markets Insights\r\nAccess expert analysis on global markets and economic trends.\r\nEconomist Perspectives\r\nInsights from leading economists and market strategists including Katie Martin and John Plende… [+276 chars]',
      },
      {
        source: {
          id: null,
          name: 'Deadline',
        },
        author: 'Katie Campione',
        title:
          '‘The Last Of Us’ Renewed For Season 3 At HBO Ahead Of Season 2 Premiere - Deadline',
        description:
          'The Last of Us has been renewed for a third season, ahead of the Season 2 premiere',
        url: 'http://deadline.com/2025/04/the-last-of-us-renewed-season-3-hbo-1236364271/',
        urlToImage:
          'https://deadline.com/wp-content/uploads/2025/03/bella-ramsey.jpg?w=1024',
        publishedAt: '2025-04-09T16:00:00Z',
        content:
          'HBO has picked up The Last of Us for a third season.\r\nThe announcement comes ahead of the anticipated Season 2 debut on April 13. Deadline understands that a decision has not been made yet whether Se… [+3897 chars]',
      },
      {
        source: {
          id: null,
          name: "Investor's Business Daily",
        },
        author: "JED GRAHAM, Investor's Business Daily",
        title:
          "Fed May Step In As Trump Tariffs Unglue Treasury Yields - Investor's Business Daily",
        description:
          'Treasury yields are spiking despite a rising risk of recession.',
        url: 'https://www.investors.com/news/economy/federal-reserve-trump-tariffs-10-year-treasury-yield-sp-500/',
        urlToImage:
          'https://www.investors.com/wp-content/uploads/2017/10/stock-FederalReserve-02-adobe.jpg',
        publishedAt: '2025-04-09T15:40:00Z',
        content:
          "Federal Reserve Chairman Jerome Powell said just last Friday that there's no rush for policymakers to cushion the blow from escalating Trump tariffs. Yet he may already be rethinking that view as Tre… [+4435 chars]",
      },
      {
        source: {
          id: 'politico',
          name: 'Politico',
        },
        author: 'Chris Marquette, Meredith Lee Hill',
        title:
          "'Stop making up math': GOP holdouts dig in as Trump presses on House budget - Politico",
        description:
          '“It is IMPERATIVE that Republicans in the House pass the Tax Cut Bill, NOW!” he said online Wednesday.',
        url: 'https://www.politico.com/live-updates/2025/04/09/congress/donald-trump-house-budget-pressure-00280601',
        urlToImage:
          'https://www.politico.com/dims4/default/93e8122/2147483647/resize/1200x/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2F20%2Fb2%2F31cdbe1e4277a24c66d18e542e57%2F2025-0409-congress-francis-5-1.jpg',
        publishedAt: '2025-04-09T15:23:35Z',
        content: null,
      },
      {
        source: {
          id: 'associated-press',
          name: 'Associated Press',
        },
        author: 'The Associated Press',
        title:
          'China denies significant numbers of its citizens are fighting for Russia in Ukraine - AP News',
        description:
          'A Beijing official says Ukraine’s claim that significant numbers of Chinese nationals are fighting alongside Russia’s invading army in Ukraine is “totally unfounded.” Ukraine’s President Volodymyr Zelenskyy announced Tuesday that the Ukrainian military had ca…',
        url: 'https://apnews.com/article/russia-ukraine-war-china-soldiers-donetsk-captured-05a412aba1cfe13b623b2403db5db533',
        urlToImage:
          'https://dims.apnews.com/dims4/default/b089f9b/2147483647/strip/true/crop/5890x3313+0+306/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0d%2Ff7%2Faadbc6620625472183041a136d10%2F5ac9312955624c4db85068d46d1c8d71',
        publishedAt: '2025-04-09T15:18:00Z',
        content:
          'Ukraines claim that significant numbers of Chinese nationals are fighting for Russias invading army is totally unfounded, a Beijing official said Wednesday, as the U.S. strives to secure a ceasefire … [+5147 chars]',
      },
      {
        source: {
          id: null,
          name: 'Page Six',
        },
        author: 'Tamantha Ryan',
        title:
          '‘White Lotus’ co-stars Walton Goggins and Aimee Lou Wood spark feud rumors after finale - Page Six',
        description:
          'Wood, 31, and Goggins, 53, played love interests Chelsea and Rick in the third season of the hit HBO show.',
        url: 'https://pagesix.com/2025/04/09/celebrity-news/white-lotus-co-stars-walton-goggins-and-aimee-lou-wood-spark-feud-rumors-after-finale/',
        urlToImage:
          'https://pagesix.com/wp-content/uploads/sites/3/2025/04/102169004.jpg?quality=75&strip=all&w=1024',
        publishedAt: '2025-04-09T15:05:00Z',
        content:
          '“White Lotus” co-stars Walton Goggins and Aimee Lou Wood have sparked feud rumors after the HBO show wrapped its third season.\r\nSeveral eagle-eyed fans began theorizing there was trouble in Thai para… [+3229 chars]',
      },
      {
        source: {
          id: null,
          name: 'NPR',
        },
        author: '',
        title:
          'If Planet Nine is out there, this telescope might actually find it - NPR',
        description:
          'A powerful new observatory is the best hope yet for finding the elusive Planet 9, a large planet that some scientists say is hidden in our solar system.',
        url: 'https://www.npr.org/2025/04/09/nx-s1-5347688/planet-nine-vera-rubin-observatory',
        urlToImage:
          'https://npr.brightspotcdn.com/dims3/default/strip/false/crop/7795x4385+0+407/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F08%2F38%2F86b778b44bf6a3d4bfc9ad495d99%2Fdsc00761-enhanced-nr.jpg',
        publishedAt: '2025-04-09T15:00:36Z',
        content:
          'Mike Brown\r\n is convinced that beyond Neptune, at the far reaches of our solar system, there\'s an unseen giant planet.\r\n"This is the 5th largest planet in our solar system, lurking out there, waiting… [+4617 chars]',
      },
      {
        source: {
          id: null,
          name: 'Variety',
        },
        author: 'Adam B. Vary',
        title:
          'Noah Wyle Was Nearing a ‘Nervous Breakdown.’ Then Came ‘The Pitt’: It’s ‘Infuriating We Can’t Come to a Consensus’ on Masks and Vaccines - Variety',
        description:
          'Noah Wyle didn\'t want to play a doctor again after his 15 years on "ER." Then came COVID and "The Pitt."',
        url: 'https://variety.com/2025/tv/news/noah-wyle-the-pitt-er-sequel-lawsuit-1236362824/',
        urlToImage:
          'https://variety.com/wp-content/uploads/2025/04/Noah-Wyle-Variety-Cover-Story-3.jpg?crop=0px%2C57px%2C1500px%2C842px&resize=1000%2C563',
        publishedAt: '2025-04-09T15:00:00Z',
        content:
          'Noah Wyle is sitting in a corner booth at the Smoke House, a classic Hollywood haunt across from the Warner Bros. lot that he began to frequent when he was making “ER,” the groundbreaking medical dra… [+17490 chars]',
      },
      {
        source: {
          id: 'nbc-news',
          name: 'NBC News',
        },
        author: 'Alexandra Marquez',
        title:
          'Gretchen Whitmer goes to Washington with a call for bipartisanship to grow the economy - NBC News',
        description:
          "WASHINGTON — Michigan Gov. Gretchen Whitmer laid out what she called a “consistent national strategy” for bringing manufacturing back to the United States in a lengthy speech Wednesday in the nation's capital, just hours after President Donald Trump’s tariffs…",
        url: 'https://www.nbcnews.com/politics/elections/gretchen-whitmer-goes-washington-call-bipartisanship-grow-economy-rcna200375',
        urlToImage:
          'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2025-04/250409-gretchen-whitmer-mn-1015-bcfc72.jpg',
        publishedAt: '2025-04-09T14:46:57Z',
        content:
          "WASHINGTON Michigan Gov. Gretchen Whitmer laid out what she called a consistent national strategy for bringing manufacturing back to the United States in a lengthy speech Wednesday in the nation's ca… [+4975 chars]",
      },
      {
        source: {
          id: null,
          name: 'NPR',
        },
        author: '',
        title:
          "U.S. says it is now monitoring immigrants' social media for antisemitism - NPR",
        description:
          'Effective immediately, the government says it will begin screening immigrant social media for activity that officials think indicates support for antisemitism.',
        url: 'https://www.npr.org/2025/04/09/g-s1-59149/immigrants-social-media-antisemitism-dhs',
        urlToImage:
          'https://npr.brightspotcdn.com/dims3/default/strip/false/crop/6415x3608+0+174/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F12%2Fd1%2F1046df0d4f19ba81e5b5a726abe0%2Fnoem.jpg',
        publishedAt: '2025-04-09T14:42:47Z',
        content:
          "U.S. Citizenship and Immigration Services has announced\r\n it will begin screening immigrants' social media for evidence of antisemitic activity as grounds for denying immigration benefit requests. Th… [+1724 chars]",
      },
      {
        source: {
          id: null,
          name: 'BleepingComputer',
        },
        author: 'Sergiu Gatlan',
        title:
          'Microsoft: April 2025 updates break Windows Hello on some PCs - BleepingComputer',
        description:
          'Microsoft says some Windows users might be unable to log into their accounts via Windows Hello after installing the April 2025 security updates.',
        url: 'https://www.bleepingcomputer.com/news/microsoft/microsoft-april-2025-updates-break-windows-hello-on-some-pcs/',
        urlToImage:
          'https://www.bleepstatic.com/content/hl-images/2025/04/09/Windows.jpg',
        publishedAt: '2025-04-09T14:01:49Z',
        content:
          'Microsoft says some Windows users might be unable to log into their accounts via Windows Hello after installing the April 2025 security updates.\r\nThis known issue impacts both client (Windows 11 24H2… [+2293 chars]',
      },
    ],
  };

  return { news: data.articles };
};
