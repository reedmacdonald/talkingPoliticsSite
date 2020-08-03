import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <div style={{ backgroundColor: "#FAEBD7" }}>
      <div
        style={{
          textAlign: "center",
          fontFamily: "American Typewriter",
          backgroundColor: "#FAEBD7",
          margin: `0 auto`,
          maxWidth: 960,
          padding: `2rem 1.0875rem 1.45rem`,
        }}
      >
        <h1 style={{ textAlign: "center", fontFamily: "American Typewriter" }}>
          Talkin' Politics
        </h1>
        <h2 style={{ textAlign: "center", fontFamily: "American Typewriter" }}>
          The Drinking Game of Wayward Political Debate
        </h2>
        <div
          style={{
            maxWidth: `300px`,
            marginBottom: `1.45rem`,
            display: "inlineBlock",

            margin: "0 auto",
          }}
        >
          <Image />
        </div>
        <Link to="/privacy-policy/">Privacy Policy</Link> <br />
      </div>
    </div>
    <div style={{ backgroundColor: "#3A3A6B" }}>
      <div
        style={{
          textAlign: "center",
          fontFamily: "American Typewriter",
          //backgroundColor: "#FAEBD7",
          margin: `0 auto`,
          maxWidth: 960,
          padding: `2rem 1.0875rem 1.45rem`,
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontFamily: "American Typewriter",
            color: "#CECECF",
          }}
        >
          Why Play This?
        </h1>
        <h2
          style={{
            textAlign: "center",
            fontFamily: "American Typewriter",
            color: "#CECECF",
          }}
        >
          Because you want to talk about politics while drinking,
          of&nbsp;course!
        </h2>
        <h3
          style={{
            textAlign: "center",
            fontFamily: "American Typewriter",
            color: "#CECECF",
          }}
        >
          And without this game, drinking and arguing about current events is
          sometimes fun! ...Until a debate goes on too long. Until it starts to
          get personal. Until "liveliness" just kind of turns into anger. Until
          contrarianism arises out of boredom.
        </h3>
        <h3
          style={{
            textAlign: "center",
            fontFamily: "American Typewriter",
            color: "#CECECF",
          }}
        >
          This game addresses those "untils", helping facilitate fun and
          engaging conversation!
        </h3>
      </div>
    </div>
    <div style={{ backgroundColor: "#AD6464" }}>
      <div
        style={{
          textAlign: "center",
          fontFamily: "American Typewriter",

          margin: `0 auto`,
          maxWidth: 960,
          padding: `2rem 1.0875rem 1.45rem`,
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontFamily: "American Typewriter",
            color: "#2D2C5D",
          }}
        >
          Is Politics Some Sort of Joke to You?
        </h1>
        <h2
          style={{
            textAlign: "center",
            fontFamily: "American Typewriter",
            color: "#2D2C5D",
          }}
        >
          No, but this isn't a substitute for civic activism. Quite the
          opposite! Well, maybe not the exact opposite. It's just supposed to
          get you thinking about political issues, hopefully in ways you hadn't
          before.
        </h2>
      </div>
    </div>
    <div style={{ backgroundColor: "#FAEBD7" }}>
      <div
        style={{
          textAlign: "center",
          fontFamily: "American Typewriter",
          backgroundColor: "#FAEBD7",
          margin: `0 auto`,
          maxWidth: 960,
          padding: `2rem 1.0875rem 1.45rem`,
        }}
      >
        <h1 style={{ textAlign: "center", fontFamily: "American Typewriter" }}>
          How do you play?
        </h1>
        <h3 style={{ textAlign: "center", fontFamily: "American Typewriter" }}>
          1. Choose two players and a moderator. If this is a two person game,
          one player can also be the moderator.
        </h3>
        <h3 style={{ textAlign: "center", fontFamily: "American Typewriter" }}>
          2. Players will be given the question, their positions, and additional
          criteria.
        </h3>
        <h3 style={{ textAlign: "center", fontFamily: "American Typewriter" }}>
          3. Players have 90 seconds to debate. Players will be prompted to
          drink randomly.
        </h3>
        <h3 style={{ textAlign: "center", fontFamily: "American Typewriter" }}>
          4. At the end of the debate, the other player(s) will be prompted to
          drink based on the results of the debate. Moderator can settle
          disputes here.
        </h3>
        <h3 style={{ textAlign: "center", fontFamily: "American Typewriter" }}>
          5. Moderator chooses the winner of the debate, who becomes the next
          moderator.
        </h3>
        <h3 style={{ textAlign: "center", fontFamily: "American Typewriter" }}>
          6. Have fun!
        </h3>
      </div>
    </div>
    <div style={{ backgroundColor: "#3A3A6B" }}>
      <div
        style={{
          textAlign: "center",
          fontFamily: "American Typewriter",
          //backgroundColor: "#FAEBD7",
          margin: `0 auto`,
          maxWidth: 960,
          padding: `2rem 1.0875rem 1.45rem`,
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontFamily: "American Typewriter",
            color: "#CECECF",
          }}
        >
          Why Did You Make This?
        </h1>
        <h3
          style={{
            textAlign: "center",
            fontFamily: "American Typewriter",
            color: "#CECECF",
          }}
        >
          Well, I made a web-app a while ago called{" "}
          <a
            style={{ color: "#CECECF" }}
            target="_blank"
            href="https://outofcharacter.io"
          >
            Out of Character
          </a>{" "}
          that was kind of supposed to take what was fun about improv games (I
          had been taking an improv class, pre-covid) and apply them to video
          calls, which I thought were boring as shit (and people did too, which
          is why Zoom happy-hours basically disappeared).
          <br />
          <br />
          But yeah, that game never really caught-on, but I had a category
          called "Politics" that I thought would be better off spun-off as an
          iPhone App, so here we are :)
          <br />
          <br />
          Feel free to dm me at{" "}
          <a
            href="https://twitter.com/macdonald_reed"
            style={{ color: "#CECECF" }}
            target="_blank"
          >
            @macdonald_reed
          </a>
        </h3>
      </div>
    </div>
  </div>
)

export default IndexPage
