/**  @jsxRuntime classic **/
/** @jsx jsx */
import {jsx, Container, Box} from 'theme-ui'
import SectionHeader from 'components/section-header'
import Accordion from 'components/accordion/accordion'
const faqs = [
  {
    title: ` What is GlobalGive Token $GGIVE?
    `,
    contents: (
      <div>
        Launched on 1st May 2021, GlobalGive is a community-driven charity token with a difference! Our unprecedented charity partnership program ensures charities of all sizes benefit, not just from a one-off donation but continued support and cause awareness. 				
      </div>
    ),
  },
  {
    title: `Who are the team behind GlobalGive?`,
    contents: (
      <div>
        The GlobalGive Token Team are proud of this project which is why the founders are doxxed and have been revealed on the website since launch! You can see for yourself who each and every one of us are, and we are here for the long term! We feel that if you truly believe in what you are doing and are proud of what you are doing then you should have nothing to hide. 				
      </div>
    ),
  },
  {
    title: ` Was there presale?`,
    contents: (
      <div>
        Yes. The presale allocation was 30% of the total supply. This provided plenty of liquidity to the pool at launch to ensure a more stable price moving forward. This also ensured our record-breaking time to listing on CoinGecko - under 36 hours! 						
						
						
						
      </div>
    ),
  },
  {
    title: ` Is there a tax on buys?`,
    contents: (
      <div>
        No! We don't believe that anyone should be taxed for investing in a genuine charity project such as GlobalGive. This is a massive incentive to investors and prevents donators from being penalised! and this is exclusive to GlobalGive								
      </div>
    ),
  },
  {
    title: ` Is there a tax on sales?`,
    contents: (
      <div>
        There is a 10% on sales; of which 2% is redistributed to HODlers, 2% is burnt, and 6% is added to the liquidity pool. We have also impletemented a progressive whale tax to additional investor protection. Donations to charity wallets are exempt from tax.									
      </div>
    ),
  },
  {
    title: ` What is a toxic whale tax and how does it protect my investment?`,
    contents: (
      <div>
        "GlobalGive is a community project and our unparalleled whale tax was impletemented to protect our community from toxic whales. The whale tax means that the higher the amount of tokens sold, the higher the percentage tax is paid. 

        We do not support people who dump large amounts to undermine the price of the token. 

        We want to protect everyone from instability, irrespective of how much you have to invest in the project. 

        To the best of our knowledge, we are also the only token to implement a progressive whale tax to avoid whale dumps. "												
      </div>
    ),
  },
  {
    title: ` Why is GlobalGive different to other charity tokens?`,
    contents: (
      <div>
       "Partnerships! Our vision has always been long term relationships with charities.

        We were never interested in just handing out money as a way to promote the token. From very beginning, GlobalGive was created for the purpose of charity and not as an afterthought simply to maintain hype!

        Our unprecedented charity partnership is mutually beneficial. We promote and donate and charities stand next to us in support of this great project just like the rest of the community and the world at large in due time.
        "																
      </div>
    ),
  },
  {
    title: ` How are charity partners chosen?`,
    contents: (
      <div>
       All of our charity partners are carefully vetted and verified. Once accepted, partners receive an initial donation and continue to benefit from GlobalGive's support. We encourage our community members put forward their suggestions for charities. Once vetted and shortlisted, we hold a community vote for each month's charity of the month. 																						
      </div>
    ),
  },
  {
    title: ` Do charities have to be partners with GlobalGive to benefit?`,
    contents: (
      <div>
      There are numerous benefits to becoming a partner, but any registered charity is able to open their own dedicated wallet and start accepting $GGIVE tokens by promoting on their platforms and website. 																							
      </div>
    ),
  },
  {
    title: ` What is the official $GGIVE charity wallet address?`,
    contents: (
      <div>
       0xb37185db7f6607dfe9fecb7869bc2dfc24d537e3														
      </div>
    ),
  },
  {
    title: ` Do you have proof of donating?`,
    contents: (
      <div>
       Of course! Our first donation was made to the orangutan charity redapes.org, the official acknowledgement can be seen on Twitter here																				
      </div>
    ),
  },
  {
    title: ` What is the official $GGIVE smart contract address`,
    contents: (
      <div>
       0x60e9880daef10e960da3c45b076dbdac4f111edf											
      </div>
    ),
  },
  {
    title: ` Where can I buy $GGIVE`,
    contents: (
      <div>
       You can buy $GGIVE on PancakeSwap
       You can also trade $GGIVE on BigONE, Coinsbit and coming soon - CoinsbitINDIA								
      </div>
    ),
  },
  {
    title: ` I've sent funds directly to the $GGIVE smart contract address, can it be retrieved?`,
    contents: (
      <div>
       If you send funds directly to our contract address, it cannot be retrieved or sent back.									
      </div>
    ),
  },
  {
    title: ` Are you on socials?`,
    contents: (
      <div>
       Of course! Join the community and stay up to date with all the latest GlobalGive news
       <ul sx={{listStyle: 'none'}}>
           <li>
               <a sx={{color: "#fff"}} href="https://t.me/globalgivetokencommunity" target="_blank">Telegram</a>
           </li>
           <li>
               <a sx={{color: "#fff"}} href="https://www.twitter.com/globalgivetoken" target="_blank">Twitter</a>
           </li>
           <li>
               <a sx={{color: "#fff"}} href="https://www.reddit.com/r/globalgive/" target="_blank">Reddit</a>
           </li>
           <li>
               <a sx={{color: "#fff"}} href="https://www.instagram.com/globalgivetoken/" target="_blank">Instagram</a>
           </li>
           <li>
               <a sx={{color: "#fff"}} href="https://discord.gg/QGcTVpHTVv" target="_blank">Discord</a>
           </li>
           <li>
               <a sx={{color: "#fff"}} href="https://www.youtube.com/channel/UCOv_Op-b4KWOcubauyYjg-g" target="_blank">YouTube</a>
           </li>
           <li>
               <a sx={{color: "#fff"}} href="https://soundcloud.com/nic-davidson-637718802" target="_blank">SoundCloud AMAs</a>
           </li>
       </ul>										
      </div>
    ),
  },
]
export default function Faq() {
  return (
    <section sx={{variant: 'section.faq'}} id='faq'>
      <Container>
        <SectionHeader
          title='Frequently asked questions'
          slogan='Get your question answer'
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  )
}

const styles = {
    socials: {
        color: '#fff',
    }
}
