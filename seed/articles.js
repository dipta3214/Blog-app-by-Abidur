const db = require('../db')
const Article = require('../models/article')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {

    const abidur = await User.find({ author: 'Abidur' })

    const articles = [
        {
            title: 'Stacking the NFLs 12 greatest long-term quarterback rivalries: Why Patrick Mahomes-Justin Herbert could be next',
            content: 'On Thursday night, we will see the third game of a burgeoning rivalry between two of the most talented young quarterbacks in football. Justin Herbert made an unexpected debut in Week 2 against Patrick Mahomes and the Chiefs last season, taking over the Chargers` starting job with no advance notice after Tyrod Taylor`s lung was punctured by the team doctor before the game. Herbert gave a good accounting of himself in a narrow 23-20 loss, but while the Chiefs pulled this one out in 2020, Herbert & Co. roared back with a 30-24 victory in Week 3 this season. More than any other combination of young quarterbacks in the league at the moment, this feels like it has the chance to turn into a classic rivalry in the years to come. All of the criteria you would look for are there. These are two of the best signal-callers, playing for successful teams, in a division in which they will get to face off twice per season. Mahomes might end up getting pitted against guys such as Josh Allen and Lamar Jackson, but until the Broncos and Raiders land on someone as good as Herbert, this is going to be his closest rivalry.',
            image: 'https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1215%2Fr951682_1296x518_5%2D2.jpg&w=1320&h=528&scale=crop&cquality=40&location=center&format=jpg',
            category: 'sports',
            user_id: abidur[0]._id,
            author_name: abidur[0].author
        },
        {
            title: 'Ben Simmons timeline - All of the major happenings with the Philadelphia 76ers star in 2021',
            content: 'It was almost 11 months ago that the Brooklyn Nets completed a blockbuster trade with the Houston Rockets for James Harden -- which, as a result, meant All-Star guard Ben Simmons would remain with the Philadelphia 76ers. `I mean, this is a business` Simmons said then. `Things like that happen. Only thing I can control is, you know, how I approach my workouts, the games and my day-to-day thing. So, you know, I`m just trying to be professional and to do the right thing and help my team get wins. That quote came after a Sixers game in Philadelphia against the Miami Heat on Jan. 14. The Heat returned to Philadelphia on Wednesday -- but this time, Simmons wasn`t playing. Instead, he has turned the tables on the 76ers, first asking to be traded in the offseason and then spending the past two-plus months engaged in a contentious holdout to attempt to make that request a reality as soon as possible.',
            image: 'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0628%2Fr873807_1296x518_5%2D2.jpg&w=1256&h=502&scale=crop&cquality=40&location=center&format=jpg',
            category: 'sports',
            user_id: abidur[0]._id,
            author_name: abidur[0].author
        },
        {
            title: 'How to fix the NHL`s 3-on-3 overtime problem',
            content: 'Hearing someone say that the NHL`s 3-on-3 overtime has gotten boring is like hearing someone say, "Hey, remember when pizza was good?" It`s pizza. Even when it`s bad, it`s good. I`ve chanted the same mantra about the 3-on-3 overtime format, which the NHL implemented in 2015 to end games before they reached the shootout. All it takes is one errant shot and a rush the other way before the game detonates in mayhem. At its best, the 3-on-3 overtime encapsulates all the pinnacle of offensive hockey: Kinetic energy, nonstop action, star players making transcendent plays, unpredictable outcomes and goaltenders cursing its very existence. At its worst ... well, it looks like what we`ve seen in overtime this season.',
            image: 'https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1216%2Fr951880_1296x729_16%2D9.jpg&w=920&h=518&scale=crop&cquality=80&location=origin&format=jpg',
            category: 'sports',
            user_id: abidur[0]._id,
            author_name: abidur[0].author
        },
        {
            title: 'How Apple could remove the notch on the iPhone 14 Pro for good',
            content: 'The iPhone 13 was released three months ago, and alleged leaks for the iPhone 14 are already flowing in at a steady pace. One rumor, which is as hopeful as it is persistent, is that the iPhone 14 Pro and 14 Pro Max will get new displays without a notch and instead use a hole-punch cutout for their selfie cameras. This rumor isn`t entirely new and, in fact, earlier this year, there were murmurs that the iPhone 13 would go notchless, too. Turns out there is a notch on all four of the iPhone 13 models, albeit one that is 20% smaller.Not everyone with an iPhone is sensitive about the notch. But as someone who is, I find it ugly. If I`m watching a full screen video or playing a game, it looks like someone with a wide mouth took a bite out of my display. It also doesn`t seem very "Apple" because the notch feels like a compromise. On the flip side, the notch has become an undeniably recognizable part of the iPhone. If you are out and see someone with a notched-screen, you know they`re using an iPhone.',
            image: 'https://cdn.vox-cdn.com/thumbor/-jyPOI__ph90S0vi_cotUjTQNaY=/0x0:2028x1352/1820x1213/filters:focal(852x514:1176x838):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70282305/vpavic_210916_4760_0082.0.jpg',
            category: 'tech',
            user_id: abidur[0]._id,
            author_name: abidur[0].author
        },
        {
            title: 'AMAZON ECHO SHOW 15 REVIEW: ALEXA`S ON YOUR WALL',
            content: 'The $249.99 Echo Show 15 is billed as a shared hub for families to see things like upcoming calendar appointments, to-dos, digital sticky note reminders, and shopping lists. It`s also an excellent kitchen TV (not a high bar, to be fair). Of course, it does everything other Echo displays and speakers do, thanks to the presence of Amazon`s smart voice assistant, Alexa. This includes playing music, showing weather reports, streaming video, controlling smart home gadgets, telling fart jokes, all the stuff you`ve come to rely on Alexa for. A very solid piece of hardware, the Echo Show 15 is a stunning device. It looks impressive on your wall when called into action, and otherwise blends into the background as a digital photo frame displaying art or family photos. It fills a niche that no device has reliably conquered to date: a wall-mounted tablet to replace the plethora of analog paper tools busy households traditionally rely on to communicate with each other. You can use it on your countertop with an optional stand if you can find the room — at 15.8 x 9.9 x 1.4 inches, this thing is huge — but the wall is the better option.',
            image: 'https://cdn.vox-cdn.com/thumbor/PV3BgYuZ_pGLi-VTdf94ZFZcvJs=/0x0:2040x1360/2820x1586/filters:focal(1041x609:1367x935):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70282099/jtuohy_211209_4924_0012.0.jpg',
            category: 'tech',
            user_id: abidur[0]._id,
            author_name: abidur[0].author
        },
        {
            title: 'OnePlus` latest true wireless earbuds offer noise cancellation for $99',
            content: 'OnePlus` latest pair of true wireless earbuds are the $99 OnePlus Buds Z2. They`re double the price of the $49.99 OnePlus Buds Z from last year but now benefit from active noise cancellation, a shorter stem, and a more lightweight construction. They`re available now in the US and will release in the UK and EU on December 20th for £99 and €99, respectively. Although the Buds Z2`s price sits halfway between the Buds Z and OnePlus` more premium $150 Buds Pro, it actually has better battery life than both of them. Battery life from the earbuds themselves is around five hours with ANC turned on, rising to seven hours when you turn it off, and combined with the case you get up to 38 hours total (dropping to 27 hours with ANC on). In comparison, the Buds Z offered five hours from the buds and up to 20 hours including the case. The Buds Pro offer seven hours of playback with ANC off, five hours with it on, and up to 31 hours when combined with the case.THE BUDS Z2 OFFER UP TO 38 HOURS OF BATTERY LIFE WITH THEIR CASE Elsewhere, the Buds Z2 match many of the specs of the Buds Pro, despite their more affordable price. They offer the same 94ms of latency when used in their “Pro Gaming mode,” there are still three mics in each earbud, they come in either black or white, and they even have the same 11mm drivers as the Buds Pro. But the Buds Z2 don`t offer wireless charging, a feature present on the Buds Pro.',
            image: 'https://cdn.vox-cdn.com/thumbor/4ef8_iUDrDR1RuwOVn2QslxXFtI=/0x0:1440x920/1820x1213/filters:focal(605x345:835x575):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70281631/image.0.jpg',
            category: 'tech',
            user_id: abidur[0]._id,
            author_name: abidur[0].author
        },
        {
            title: 'Hilary Duff Searches for True Love in First `How I Met Your Father` Trailer',
            content: 'Hilary Duff is looking for love. The actress leads Hulu`s upcoming How I Met Your Mother spinoff, How I Met Your Father, as Sophie, who, in the near future, is telling her son the story of how she met his father. Like the original series, HIMYF takes us back to 2022, when Sophie and her close-knit group of friends are in the midst of figuring out who they are, what they want out of life and how to fall in love in the age of dating apps and limitless options. Hulu dropped the first trailer on Thursday, which opens with former Sex and the CIty star Kim Cattrall, who plays the older version of Sophie and narrates the series, teeing up the adventure that awaits Sophie and her friends. "This is the story of how I met your father," Cattrall says as the trailer begins. "It was hard to live in the moment in 2022. There was always some place else you could be, someone else you could be with." Cut to Duff`s Sophie venting to her BFFs about her 87 failed Tinder dates, bringing up her most recent one as probably the worst. But sometimes, all you need is a good group of ride-or-dies and Sophie certainly has that with her inner circle. "Screw being mature! We can still make bad choices for a few more years!" she exclaims. ',
            image: 'https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2021-12/himyf.jpg?h=5a4d1bae&itok=s-FZgdjP',
            category: 'entertainment',
            user_id: abidur[0]._id,
            author_name: abidur[0].author
        },
        {
            title: '"Younger" Creator Darren Star Talks Possible Movie or Spinoff Series (Exclusive)',
            content: 'Younger fans can take heart in the idea that the beloved series starring Sutton Foster and Hilary Duff might not be done just yet. ET`s Leanne Aguilera spoke with the show`s creator, Darren Star, at the premiere of the second season of his Netflix series, Emily in Paris, and asked if Younger might have a second life as a film.  "I would love to do a Younger movie, and I think the entire cast, at some point, would like to get back together for it," Starr told ET. But that doesn`t mean fans can necessarily expect something soon. "Younger needs to rest for a little while," he added. "People have to want it, and I think there`s seven seasons to watch and catch up on for everyone who hasn`t seen it. I would love to do a Younger movie, that would be a blast." ',
            image: 'https://www.etonline.com/sites/default/files/styles/280x280/public/images/2021-05/image9_0.jpg?h=6c83441f&itok=pBhGVgIg',
            category: 'entertainment',
            user_id: abidur[0]._id,
            author_name: abidur[0].author
        },
        {
            title: '"Station Eleven": Why the Must-See Dystopian Series Is More Than Another Pandemic Story (Exclusive)',
            content: 'Station Eleven, which follows the lives of people trying to rebuild 20 years after society as we know it was wiped out, is easily one of the best shows of 2021 and a must-watch despite its initial setup: a deadly flu. Adapted from the novel by Emily St. John Mandel, the limited series has more in common with The Leftovers and Watchmen than it does with Contagion or any other pandemic-themed films or series. “It`s a show about a small group of interconnected people before, during, and after a pandemic,” showrunner Patrick Somerville tells ET, explaining that the “fault line at its center is this major catastrophe.” While the first episode opens with a handful of characters, including Jeevan (Himesh Patel) and Kirsten (Matilda Lawler), learning to cope and survive amid the spread of a devastating virus that results in the world quickly falling apart, it ends with the story jumping forward in time as it shows a grownup Kirsten (Mackenzie Davis) living among a group of surviving actors and musicians known as the Traveling Symphony. The remaining nine episodes then jump back and forth through time as it depicts the past and present lives of its central characters. ',
            image: 'https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2021-12/matilda-lawler%20copy.jpg?h=c673cd1c&itok=8XVgCQx8',
            category: 'entertainment',
            user_id: abidur[0]._id,
            author_name: abidur[0].author
        },
        {
            title: 'Dow up as cyclicals gain; Nasdaq, S&P 500 fall on tech weakness',
            content: 'By Shreyashi Sanyal (Reuters) -The Dow climbed on Thursday after the Federal Reserve`s announcement of a faster end to its pandemic-era stimulus pushed investors towards more economically sensitive sectors, while a fall in technology stocks hurt the Nasdaq and the S&P 500. The U.S. central bank said on Wednesday it would end its bond purchases in March and signaled three quarter-percentage-point interest rate hikes by the end of 2022. Fed Chair Jerome Powell said the U.S. economy no longer needed increasing amounts of policy support as annual inflation has been running at more than double the central bank`s target in recent months, while the economy nears full employment. "Powell gave markets the Christmas present they were looking for," said Paul Nolte, portfolio manager at Kingsview Asset Management, referring to the Fed`s plan to combat inflation as a welcome relief for markets. Nine of the 11 major S&P 500 sector indexes were higher, with economy-focused financials, energy and materials leading gains, while the S&P 500 banks index added 2.5%. Tech and consumer discretionary, the sectors housing most mega-cap growth stocks, declined. The Nasdaq index was pressured by declines in shares of Apple Inc (NASDAQ:AAPL), Tesla (NASDAQ:TSLA) Inc, Amazon.com Inc (NASDAQ:AMZN) and Microsoft Corp (NASDAQ:MSFT) fell between 2.0% and 4.4%.',
            image: 'https://i-invdn-com.investing.com/trkd-images/LYNXMPEHBF0LR_L.jpg',
            category: 'investing',
            user_id: abidur[0]._id,
            author_name: abidur[0].author
        },
        {
            title: 'Citigroup sends New York staff home, Goldman cancels remaining holiday parties',
            content: 'By Noor Zainab Hussain and Matt Scuffham (Reuters) - Citigroup Inc (NYSE:C) has told its employees in the New York metro area that they can work from home through the holidays, while Goldman Sachs Group Inc (NYSE:GS) has canceled its remaining holiday parties there, people with knowledge of the matter told Reuters on Thursday. The Wall Street giants are the latest financial institutions to rethink their plans to return to business-as-usual amid a spike in COVID-19 cases in New York and other financial hubs and growing concerns over the fast-spreading Omicron variant. Citigroup told staff at its New York metro area offices on Wednesday they should work from home if they are able to, a person familiar with the matter said. Vaccinated staff had been allowed to return to some Citigroup offices in recent months. Goldman Sachs, which has not sent staff home, had hosted holiday parties over the last few weeks but on Thursday said it was canceling remaining gatherings due to worries over COVID-19, according to a separate source familiar with the bank`s plans. he spread of Omicron has disrupted firms` efforts to return to normalcy, prompting other large banks in the United States and Canada to push back their back-to-office plans, spike holiday gatherings and impose stricter precautions. The new variant has been detected in 77 countries since it was first identified three weeks ago, fuelling concerns that its large number of mutations will help it spread faster and evade protection provided by COVID-19 vaccines and therapeutics. Earlier this week, JPMorgan Chase & Co (NYSE:JPM) told unvaccinated staff in Manhattan to work from home, while investment bank Jefferies (NYSE:JEF) Financial Group last week asked staff in Manhattan and elsewhere to again steer clear of the office to a spate of COVID-19 cases.',
            image: 'https://i-invdn-com.investing.com/trkd-images/LYNXMPEHBF0UB_L.jpg',
            category: 'investing',
            user_id: abidur[0]._id,
            author_name: abidur[0].author
        },
        {
            title: 'Crude Oil Higher; Risk Appetite Boosted by Fed Confidence',
            content: 'By Peter Nurse Investing.com -- Oil prices rose Thursday, boosted in line with most other risk assets on the back of the Federal Reserve`s confidence in the strength of the U.S. economy as well as the sharpest weekly drop in U.S. crude inventories since September.By 8:45 AM ET (1345 GMT), U.S. crude futures traded 0.7% higher at $71.39 a barrel, while the Brent contract rose 0.7% to $74.41. U.S. Gasoline RBOB Futures were up 0.7% at $2.1412 a gallon. The Fed announced plans, at the conclusion of its two-day policy meeting on Wednesday, to tackle inflation by speeding up the pace at which the central bank ends its asset-buying program, judging the U.S. economic recovery to be sufficiently strong to cope with the tighter policy. This gave most risky assets a boost, with the S&P 500 closing near its all-time high Wednesday. The oil market was no exception. Adding to the positive sentiment was Wednesday`s report by the U.S. Energy Information Administration, which indicated that crude stockpiles shrunk by 4.6 million barrels last week, the largest draw in inventories for three months as demand for oil in the world`s largest economy remained strong. ',
            image: 'https://i-invdn-com.investing.com/news/LYNXNPEC1A050_L.jpg',
            category: 'investing',
            user_id: abidur[0]._id,
            author_name: abidur[0].author
        }

        
    ]

    await Article.insertMany(articles)
    console.log('Created articles')
};

const run = async () => {
    await main()
    db.close()
};

run()