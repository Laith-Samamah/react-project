import { Footer } from "../exp-index";
import wiki from '../assest/wiki.png'

const About = () => {


  return (
    <>
      <div class="container">

        <div class="section section-padding pb-0 " style={{ color: "black", textAlign: "left", marginTop: "100px" }}>
          <div class="">
            <div class="row learts-mb-n30">

              <div class="col-md-6 col-12 align-self-center learts-mb-30 ">
                <div class="about-us3">
                  <h2 class="title">Wiki Meal</h2>
                  <div class="desc">
                    <p class="">Simply Recipes is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we’re all about.</p>
                    <p class="">We’re supported by a diverse group of recipe developers, food writers, recipe and product testers, photographers, and other creative professionals.</p>
                    <p class="">Our recipes primarily use fresh, unprocessed ingredients but we also believe there is a time and a place for canned, frozen, and other prepared ingredients. We believe in a diet that includes a wide variety of foods: real butter and cream, extra virgin olive oil, eggs, lots of fruits and vegetables, and protein from meat, fish, beans, and cheese. Plus cake for dessert.</p>
                  </div>

                </div>
              </div>
              <div class="col-md-6 col-12 text-center learts-mb-30 ">
                <img src={wiki} alt="" class="img-fluid" />
              </div>

            </div>
          </div>

        </div>
        <br />
        <br />
        <br />






      </div>
      <Footer />
    </>
  );
};

export default About;