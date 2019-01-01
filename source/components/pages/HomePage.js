import React from 'react'
import PropTypes from 'proptypes'

class HomePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <main className="HomePage page-landing">
        <header className="landing-header">
          <h2 className="wrap wrap-large centered">
            Don’t let another weekend slip by without a portfolio you’re
            <u>confident</u> in. <span style={{ fontWeight: "normal"}}>👌️ 👍 🙌</span>
          </h2>
          <div className="header-cta-container" style={{paddingBottom: "2.4rem"}}>
            <a href="https://writing.enchant.co/crafting-your-ux-portfolio-a-weekend-guide-to-getting-it-done-632e13acd3d1" className="button button-cta">Start reading for free</a>
            <a href="https://gumroad.com/l/weekendportfolio" className="button button-cta button-secondary">Pick up a PDF copy - $9</a>
          </div>
          <div className="overlay"></div>
        </header>

        <section className="wrap the-pain">
          <h3>Presenting yourself is tough.</h3>
          <p>You’ve "been working on it" for weeks, months, or even years (⌛?!) Maybe you've got one out in the wild, but it still feels "off". You know you need to make it better, but making the time to write about your projects is tough... and even when you carve out time, you don’t know where to start.</p>
          <p>Yeah, we know the dreaded pain 😖. We've been there, too. That's why we've put together this <i>Weekend Guide to Crafting Your UX Portfolio</i>: to help you through the grueling (but ultimately rewarding) process we've seen so many other designers slog through.</p>

          <hr />

          <div className="recommendation-card">
            <img src="https://s3.amazonaws.com/f.cl.ly/items/0M0w251K1E2j3L3k3p2q/1537b45.jpg" />
            <q>I was working on my portfolio for weeks, hearing all sorts of vague, non-actionable advice. It was confusing, but your guide cleared so much up for me.</q>
            <cite>&ndash; <a href="http://www.andreaangquist.com/" target="_blank">Andrea Ängquist</a>, Designer at <a href="http://pivotallabs.com/" target="_blank">Pivotal Labs</a></cite>
          </div>
        </section>

        <section className="wrap the-dream">
          <hr />

          <p>This guide will teach you the 20% of the stuff you need to make 80% of the impact.</p>
          <p>The stuff you can put together in a weekend, no matter where you're at today. Imagine: you pick up this guide, spend a few focused hours next weekend on your portfolio, and the following week you’ll have a ✨ kickass portfolio ✨ that gets you in front of more design teams with more confidence in yourself, your work, and your process.</p>

          <p>What would you do for just one more job interview, or for a shot at presenting yourself more clearly at the next one?</p>
          <p>How about the next 5 interviews? <b>With the stuff in this guide, you’ll learn how to <i>heavily</i> increase your chances at getting more interviews.</b> More interviews = more chances at landing the design job of your dreams. 😎</p>

          <hr />
          <div className="recommendation-card">
            <img src="https://s3.amazonaws.com/f.cl.ly/items/1O2q3B3W12270L3u2Y33/56650_10101272875658833_637278183_o.jpg" />
            <q>I can't count the number of portfolios I've put together in my day, but even
            with my experience, I learned some great stuff reading through this.</q>
            <cite>&ndash; <a href="https://twitter.com/nefaurk" target="_blank">Nefaur Khandker</a>, Designer at <a href="https://www.khanacademy.org/" target="_blank">Khan Academy</a></cite>
          </div>
        </section>

        <section className="wrap the-fix">
          <hr />
          <h3>You'll learn the most important stuff:</h3>
          <ul>
            <li>What type of work should you put in your portfolio? What if you have no or little experience?</li>
            <li>How should you describe yourself? Should you change it up from person to person, or company to company?</li>
            <li>What is the bare minimum that you should include in your portfolio?</li>
            <li>Portfolios are difficult to write. How can you make it easier? How do you speed up the process?</li>
            <li>You’ve heard case studies are important… why? What makes a great case study?</li>
            <li>What types of companies should you look for? How do you pick between a startup, an agency, a big tech co., freelancing, or other types of companies?</li>
          </ul>

          <hr />

          <div className="recommendation-card">
            <img src="https://s3.amazonaws.com/f.cl.ly/items/2D3j0z133k2Q433h0X3R/ruohan.jpg" />
            <q>After graduating from GA, I've been reading lots of articles... I haven't found anything as thorough as this guide. It provides more specific guidance than other materials I could find.</q>
            <cite>&ndash; <a href="https://www.linkedin.com/in/ruohanchennyu" target="_blank">Ruohan Chen</a>, UX Designer; graduate of <a href="https://generalassemb.ly/education/user-experience-design" target="_blank">General Assembly</a></cite>
          </div>

          <hr />

          <ul>
            <li>Why should you ask for feedback on your portfolio? What types of feedback should you be looking for?</li>
            <li>How do you take control of your social presence? Why is it important to update (and stay on top of) your social media profiles?</li>
            <li>Do you just apply to a bunch of job postings online, or take a more specific approach? How do you find people on design teams? Do you send a cold email? Tweet them? Show up in person at their office?</li>
            <li>Do you still need a resume? What should you put in it? Do you need anything special from a standard resume?</li>
            <li>Staffing companies can help you get hired? How?</li>
            <li>How do you help recruiters (and other hiring people) understand what *they* are looking for, and how you fit (or don’t fit)?</li>
            <li>What should you expect during the interview process? How do you prepare for it? How do you negotiate salary?</li>
          </ul>
        </section>

        <footer style={{ backgroundColor: "#fafafa"}}>
        <hr />
          <section className="wrap" style={{ paddingBottom: "10rem" }}>
            <h3 className="centered" style={{ fontSize: "3.6rem"}}>
              About the writers
            </h3>
            <div className="group">
              <div className="card-profile brittany">
                <div className="profile-photo"></div>
                <div className="profile-overview">
                  <a className="button button-material button-action button-twitter" href="http://twitter.com/brim" target="_blank"></a>
                  <h3><a href="http://enchant.co/brittany">Brittany Mederos</a></h3>
                  <p>Brittany explores design concepts at <a href="http://www.microsoft.com/en-us/design" target="_blank">Microsoft</a> as a senior designer on the Office 365 team in Silicon Valley. She specializes in user research, usability, and interaction design.</p>
                </div>
              </div>
              <div className="card-profile paul">
                <div className="profile-photo"></div>
                <div className="profile-overview">
                  <a className="button button-material button-action button-twitter" href="http://twitter.com/pvm" target="_blank"></a>
                  <h3><a href="http://paulmederos.com">Paul Mederos</a></h3>
                  <p>Paul runs <a href="https://www.circleofmana.com" target="_blank">Circle of Mana</a>, a wellness + food company. He specializes in behavior design (making and breaking habits), product management, interface design, and prototyping.</p>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </main>
    )
  }
}


HomePage.propTypes = {}

export default HomePage;
