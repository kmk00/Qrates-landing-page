import styled from "styled-components";
import RowHeader from "./Progress/RowHeader";
import Divider from "./Progress/Divider";
import progress1Img from "../assets/progress1.png";
import progress2Img from "../assets/progress2.png";
import progress3Img from "../assets/progress3.png";
import progress4Img from "../assets/progress4.png";
import progress5Img from "../assets/progress5.png";
import progress6Img from "../assets/progress6.png";

const Container = styled.div`
  color: #000;
  display: flex;
  background-color: #e4e5de;
`;

const Wrapper = styled.div`
  max-width: 600px;
  padding: 1rem;

  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
`;

const LeftSide = styled.div`
  background-color: #e4e5de;
  flex: 1;
  display: flex;
  flex-direction: column;

  & > ${Wrapper} {
    margin: 2rem 2rem 2rem auto;
  }
`;

const RightSide = styled.div`
  background-color: #fff804;
  flex: 1;

  & > ${Wrapper} {
    margin: 2rem auto 2rem 2rem;
  }

  @media (max-width: 1000px) {
    margin-right: 1rem;
    border-right: 3px solid #000;

    & > ${Wrapper} {
      margin: 0;
    }
  }

  @media (max-width: 500px) {
    border-left: 3px solid #000;
  }
`;

const DesktopContainer = styled.div`
  & > ${Container}:last-child > ${RightSide} {
    padding-bottom: 4rem;
  }

  & > ${Container}:last-child > ${LeftSide} {
    padding-bottom: 4rem;
  }

  @media (max-width: 1000px) {
    display: none;
  }

  & > ${Container}:first-child > ${LeftSide} {
    padding-right: 1rem;
  }

  & > ${Container}:first-child > ${RightSide} {
    padding-right: 1rem;
  }
`;

const MobileContainer = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: block;

    & > ${Container} > ${LeftSide} > ${Wrapper} {
      margin: auto;
    }

    & > ${Container} > ${LeftSide}:first-child > ${Wrapper} {
      margin: 2rem auto;
    }

    & > ${Container} > ${LeftSide}:last-child > ${Wrapper} {
      margin: 2rem auto;
    }

    & > ${Container} > ${RightSide}:first-child > ${Wrapper} {
      margin: 2rem auto;
    }
    & > ${Container}:nth-last-child(2) > ${RightSide} {
      border-bottom: 3px solid #000;
    }

    & > ${Container} > ${RightSide}:first-child {
      border-top: 3px solid #000;
    }

    & > ${Container} > ${RightSide}:first-child {
      border-left: 3px solid #000;
    }

    & > ${Container}:last-child {
      padding-left: 0;
    }
  }
`;

const Progress = () => {
  return (
    <>
      <DesktopContainer>
        <Container>
          <LeftSide>
            <Wrapper>
              <RowHeader
                titleButton="YOU"
                h2="Focus on making music"
                text="You can focus on your music production with peace of mind: the Artist Toolkit has lots of information about music production, knowledge about
            vinyl records and cassettes, and tips on how to sell your music. Artist
            Toolkit"
              />
            </Wrapper>
          </LeftSide>
          <RightSide>
            <Wrapper>
              <RowHeader
                titleButton="QRATES"
                h2="We'll take care of the hassle"
                text="Qrates supports a wide range of artists while eliminating the hassles, costs and risks associated with pressing records, giving artists more time and income back in their hands."
              />
            </Wrapper>
          </RightSide>
        </Container>
        <Container>
          <LeftSide>
            <Wrapper>
              <RowHeader
                h2="Express your work on Qrates"
                text="Your product details should match the details of your music. Tweak and customize your vinyl, sleeve, jacket, and more."
              />
            </Wrapper>
          </LeftSide>
          <Divider number={1} />
          <RightSide>
            <Wrapper>
              <RowHeader
                h2="Over 120,000 customization possibilities
              3D Visualizer"
                text="Choose from vinyl or cassette, each with a wide range of options including colors, packaging, obi strips, download cards, etc. There are over 120,000 variations of colors and specs for vinyl and cassette that can be customized in the Qrates Studio."
                icon={progress1Img}
              />
            </Wrapper>
          </RightSide>
        </Container>
        <Container>
          <LeftSide>
            <Wrapper>
              <RowHeader
                h2="Start a Qrates page,
              confirm and pay for production costs.
              Pay up front? Crowdfunding?"
                text="Pay for the production of your product in advance and start production immediately, or choose the crowdfunding option and press as many copies you like with pledges you collect from your fans."
                icon={progress2Img}
              />
            </Wrapper>
          </LeftSide>
          <Divider number={2} />
          <RightSide>
            <Wrapper>
              <RowHeader
                h2="We support a wide range of artists' needs"
                text="Vinyl records can be made from 100 copies, and cassette tapes from 50 copies. ou can pay for the production of your product in advance and begin the production process immediately. We also have a pre-order function, which allows you to take orders during production until completion, and the crowdfunding method, which allows you to collect orders in advance and then begin the manufacturing process. If you don't want to pay for the production costs upfront, or if you want to collect orders from your fans before deciding on the final number of pieces to be produced, try crowdfunding. No risk, no waste."
              />
            </Wrapper>
          </RightSide>
        </Container>
        <Container>
          <LeftSide>
            <Wrapper>
              <RowHeader
                h2="Collect orders from fans"
                text="Share your Qrates page and collect orders from your fans. A variety of tools are also available to promote your music."
              />
            </Wrapper>
          </LeftSide>
          <Divider number={3} />
          <RightSide>
            <Wrapper>
              <RowHeader
                h2="Wholesale distribution network"
                text="Simply start selling on your Qrates page and receive orders from over 150 record stores and distributors worldwide that we partner with."
                icon={progress3Img}
              />
            </Wrapper>
          </RightSide>
        </Container>
        <Container>
          <LeftSide>
            <Wrapper>
              <RowHeader
                h2="Upload your product assets and start production"
                text="Prepare your audio and print files required for production."
              />
            </Wrapper>
          </LeftSide>
          <Divider number={4} />
          <RightSide>
            <Wrapper>
              <RowHeader
                h2="Professional audio mastering and artwork support."
                text="Qrates offers a audio mastering service with a partner professional audio engineer to support optimal sound creation. We help ensure that your artwork conforms to printing standards and that your product is as beautiful as possible."
              />
            </Wrapper>
          </RightSide>
        </Container>
        <Container>
          <LeftSide>
            <Wrapper>
              <RowHeader
                h2="Express your work on Qrates"
                text="Your product details should match the details of your music. Tweak and customize your vinyl, sleeve, jacket, and more."
                icon={progress4Img}
              />
            </Wrapper>
          </LeftSide>
          <Divider number={5} />
          <RightSide>
            <Wrapper>
              <RowHeader
                h2="Pressing records and making cassette tapes"
                text="We partner with factories that have a long history of manufacturing vinyl records and cassette tapes with proven technical capabilities and produce world-class quality products. Vinyl records are shipped from our factory within an average of 16 weeks after ordering. Cassette tapes can be shipped from the factory in an average of 8 weeks or less."
              />
            </Wrapper>
          </RightSide>
        </Container>
        <Container>
          <LeftSide>
            <Wrapper />
          </LeftSide>
          <Divider number={6} />
          <RightSide>
            <Wrapper>
              <RowHeader
                h2="Warehousing and Distribution"
                text="When you sell records or cassettes on Qrates, you can store your products for free in one of our three worldwide distribution centers (USA, UK, Japan). When a product is purchased from a customer, Qrates carefully packages the product and ships it worldwide. We can also ship products to any designated location."
                icon={progress5Img}
              />
            </Wrapper>
          </RightSide>
        </Container>
        <Container>
          <LeftSide>
            <Wrapper>
              <RowHeader
                h2="Receive revenue"
                text="Make a request to receive your revenue. We can deposit your funds to your pre-registered bank account or Paypal account."
                icon={progress6Img}
              />
            </Wrapper>
          </LeftSide>
          <Divider number={7} />
          <RightSide>
            <Wrapper>
              <RowHeader
                h2="Continue selling on Qrates"
                text="By storing your inventory in the Qrates warehouse, you can continue to sell your work on Qrates. You can manufacture the exact number of copies as your project collected at the end of the crowdfunding campaign, or you can make more copies and continue to sell them on Qrates."
              />
            </Wrapper>
          </RightSide>
        </Container>
      </DesktopContainer>

      <MobileContainer>
        <Container>
          <LeftSide>
            <Wrapper>
              <RowHeader
                titleButton="YOU"
                h2="Focus on making music"
                text="You can focus on your music production with peace of mind: the Artist Toolkit has lots of information about music production, knowledge about
            vinyl records and cassettes, and tips on how to sell your music. Artist
            Toolkit"
              />
            </Wrapper>
          </LeftSide>
        </Container>
        <Container>
          <Divider number={1} />
          <LeftSide>
            <Wrapper>
              <RowHeader
                h2="Express your work on Qrates"
                text="Your product details should match the details of your music. Tweak and customize your vinyl, sleeve, jacket, and more."
              />
            </Wrapper>
          </LeftSide>
        </Container>
        <Container>
          <Divider number={2} />
          <LeftSide>
            <Wrapper>
              <RowHeader
                h2="Start a Qrates page,
              confirm and pay for production costs.
              Pay up front? Crowdfunding?"
                text="Pay for the production of your product in advance and start production immediately, or choose the crowdfunding option and press as many copies you like with pledges you collect from your fans."
                icon={progress2Img}
              />
            </Wrapper>
          </LeftSide>
        </Container>
        <Container>
          <RightSide>
            <Wrapper>
              <RowHeader
                titleButton="QRATES"
                h2="We'll take care of the hassle"
                text="Qrates supports a wide range of artists while eliminating the hassles, costs and risks associated with pressing records, giving artists more time and income back in their hands."
              />
            </Wrapper>
          </RightSide>
        </Container>
        <Container>
          <Divider number={3} />
          <RightSide>
            <Wrapper>
              <RowHeader
                h2="Wholesale distribution network"
                text="Simply start selling on your Qrates page and receive orders from over 150 record stores and distributors worldwide that we partner with."
                icon={progress3Img}
              />
            </Wrapper>
          </RightSide>
        </Container>
        <Container>
          <Divider number={4} />
          <RightSide>
            <Wrapper>
              <RowHeader
                h2="Professional audio mastering and artwork support."
                text="Qrates offers a audio mastering service with a partner professional audio engineer to support optimal sound creation. We help ensure that your artwork conforms to printing standards and that your product is as beautiful as possible."
              />
            </Wrapper>
          </RightSide>
        </Container>
        <Container>
          <Divider number={5} />
          <RightSide>
            <Wrapper>
              <RowHeader
                h2="Pressing records and making cassette tapes"
                text="We partner with factories that have a long history of manufacturing vinyl records and cassette tapes with proven technical capabilities and produce world-class quality products. Vinyl records are shipped from our factory within an average of 16 weeks after ordering. Cassette tapes can be shipped from the factory in an average of 8 weeks or less."
              />
            </Wrapper>
          </RightSide>
        </Container>
        <Container>
          <Divider number={6} />
          <RightSide>
            <Wrapper>
              <RowHeader
                h2="Warehousing and Distribution"
                text="When you sell records or cassettes on Qrates, you can store your products for free in one of our three worldwide distribution centers (USA, UK, Japan). When a product is purchased from a customer, Qrates carefully packages the product and ships it worldwide. We can also ship products to any designated location."
                icon={progress5Img}
              />
            </Wrapper>
          </RightSide>
        </Container>
        <Container>
          <Divider number={7} />
          <RightSide>
            <Wrapper>
              <RowHeader
                h2="Continue selling on Qrates"
                text="By storing your inventory in the Qrates warehouse, you can continue to sell your work on Qrates. You can manufacture the exact number of copies as your project collected at the end of the crowdfunding campaign, or you can make more copies and continue to sell them on Qrates."
              />
            </Wrapper>
          </RightSide>
        </Container>
        <Container>
          <LeftSide>
            <Wrapper>
              <RowHeader
                titleButton="YOU"
                h2="Receive revenue"
                text="Make a request to receive your revenue. We can deposit your funds to your pre-registered bank account or Paypal account."
                icon={progress6Img}
              />
            </Wrapper>
          </LeftSide>
        </Container>
      </MobileContainer>
    </>
  );
};

export default Progress;
