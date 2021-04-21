/**  @jsxRuntime classic **/
/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'Who is the team?',
    contents: (
      <div>
        The Global Give Founders and Project Team will continue to grow. It is a requirement that if you want to be a team member of this project, then you must reveal your identity. All of our team members and all of our new additions will be added to the website so you can see for yourself who each and every one of us are. MANY other tokens in this space have dev teams that are choosing to remain anonymous. The Global Give Token Team are proud of this project and we are here for the long term. We feel that if you truly believe in what you are doing and are proud of what you are doing then you should have nothing to hide.
      </div>
    ),
  },
  {
    title: 'What assurance do I have that the project development wallet and charity wallet will not be rug pulled?',
    contents: (
      <div>
        There is no single person that can access these wallets. The team has created a security protocol in which none of these funds can be accessed unless 4 out of the 5 board members separately authorize a withdraw of the funds. The 5 board members are the founders of the project. They are located in the US, UK and Argentina. Furthermore, the Charity Donation Wallet will have a mechanic that will only allow a monthly withdraw limit, that be exclusively designated for donations. All of the wallet activity can be tracked in BSCScan and we will always be excited to share with the community what we are using the funds from these wallets for.
      </div>
    ),
  },
  {
    title: `Are you doing and Airdrop?    `,
    contents: (
      <div>
        Yes, an initial one time air drop of 1000 tokens to the first 100 members to join the project will be executed.
      </div>
    ),
  },
  {
    title: ` Did you do a Presale?`,
    contents: (
      <div>
        Yes, the Presale will allocate a soft cap of 20% of the supply with a Hard Cap of 30% of the total supply. This is to provide plenty of Liquidity to the pool at launch so we can have a more stable price moving forward. This also helps fulfill listing requirements for Coin Gecko.
      </div>
    ),
  },
  {
    title: ` How will you do the donations? `,
    contents: (
      <div>
        We will initially make donations to charities that already accept cryptocurrency. If we find a charity that we want to donate to, who do not yet have the ability to accept cryto currency then we will help guide them through the process so they can start receiving donations from us.      </div>
    ),
  },
  {
    title: `What makes this token different from other Charity Tokens. `,
    contents: (
      <div>
        We are not a token that is designed to focus on just one cause. We will build a roster of partnerships with every type of charity we can possibly reach out  to. Whether the cause is environmental, medical, or humanitarian in nature, we plan to be there to help. Beyond development of foundational partnerships with established charity organizations, we will be allowing the community to vote on charities that we will donate to. Of course it should go without saying that we will have a vetting process to ensure our donations are going to organizations that will use the money responsibly. We will not donate to 'scam charities'. Furthermore, we are starting to see 'meme tokens' pivot to charity as a way to keep the hype going for their project. We are NOT a meme token, we take charity seriously and we created this token for this purpose. We believe charity is not something that should just be exploited as a marketing strategy to keep your meme coin alive. We are building something that is going to be here for many years to come.       </div>
    ),
  },
  {
    title: ` What is this 'toxic whale tax' and why did you create it?
    `,
    contents: (
      <div>
        We have seen a very large problem of whale manipulation in the new token space. Generally whales are good for project growth and continued adoption, but there are always a handful of 'Toxic Whales' that do not care about the project at all, they are only there to massively dump their tokens and try to scare others into selling off at a loss just so they can make a profit and then buy back into their positions so they can do it over and over again. These Toxic Whales effectively end up using the project as their own personal piggy bank. We have seen many projects growth and development be completely arrested by these toxic practices. We are sick of seeing this so we have created a solution. We have implemented a progressive tax system that will make it very painful for a whale to try and engage in these toxic practices. This progressive tax system will ensure that the profits of the whales that believe in the project and sell responsibly and are there to grow with the project will be protected, it also ensures that the profits of the smaller investors will be protected. The only people we foresee having a problem with the progressive tax system are the toxic whale manipulators, and frankly we don't care what they think. They are welcome to leave our project and go find others that they can attempt to manipulate.
      </div>
    ),
  },
  {
    title: ` Is this safe to invest in? / can this be rug pulled?`,
    contents: (
      <div>
        This project is 100% safe to invest in.
        When you add tokens and then add liquidity to those tokens, you receive something called an LP-Token, or Liquidity Provider token, in exchange. This allows you to remove the liquidity at any time, which is how rug pulls happen. Without the LP-tokens, you can’t remove the liquidity, which means you can’t rug pull. The Global Give Team sent our LP-Tokens to a "burn address" so they can’t be accessed or recovered. This is a method called “burning liquidity”, and it helps ensure the safety and stability of a project like ours.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }} id="faq">
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
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
  );
}
