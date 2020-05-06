import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Elements extends Component {
  render() {
    return (
      <div id="wrapper">
        {/* <!-- Header --> */}
        <header id="header">
          <a href="index.html" class="logo">
            Massively
          </a>
        </header>

        {/* <!-- Nav --> */}
        <nav id="nav">
          <ul class="links">
            <li>
              <Link to="/">This is Massively</Link>
            </li>
            <li>
              <Link to="/Generic">Generic Page</Link>
            </li>
            <li class="active">
              <Link to="/Elements">Elements Reference</Link>
            </li>
          </ul>
          <ul class="icons">
            <li>
              <a href="#" class="icon brands fa-twitter">
                <span class="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon brands fa-facebook-f">
                <span class="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon brands fa-instagram">
                <span class="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon brands fa-github">
                <span class="label">GitHub</span>
              </a>
            </li>
          </ul>
        </nav>

        {/*<!-- Main --> */}
        <div id="main">
          {/* <!-- Post --> */}
          <section class="post">
            <header class="major">
              <h1>
                Elements
                <br />
                Reference
              </h1>
            </header>

            {/* <!-- Text stuff --> */}
            <h2>Text</h2>
            <p>
              This is <b>bold</b> and this is <strong>strong</strong>. This is{" "}
              <i>italic</i> and this is <em>emphasized</em>. This is{" "}
              <sup>superscript</sup> text and this is <sub>subscript</sub> text.
              This is <u>underlined</u> and this is code:{" "}
              <code>for (;;) {"{...}"}</code>. Finally, this is a{" "}
              <a href="#">link</a>.
            </p>
            <hr />
            <h2>Heading Level 2</h2>
            <h3>Heading Level 3</h3>
            <h4>Heading Level 4</h4>
            <h5>Heading Level 5</h5>
            <h6>Heading Level 6</h6>
            <hr />
            <header>
              <h2>Heading with a Subtitle</h2>
              <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
            </header>
            <p>
              Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
              odio porttitor sem non mi integer non faucibus ornare mi ut ante
              amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
              accumsan varius montes viverra nibh in adipiscing blandit tempus
              accumsan.
            </p>
            <header>
              <h3>Heading with a Subtitle</h3>
              <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
            </header>
            <p>
              Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
              odio porttitor sem non mi integer non faucibus ornare mi ut ante
              amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
              accumsan varius montes viverra nibh in adipiscing blandit tempus
              accumsan.
            </p>
            <header>
              <h4>Heading with a Subtitle</h4>
              <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
            </header>
            <p>
              Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida
              odio porttitor sem non mi integer non faucibus ornare mi ut ante
              amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem
              accumsan varius montes viverra nibh in adipiscing blandit tempus
              accumsan.
            </p>

            <hr />

            {/* <!-- Lists --> */}
            <h2>Lists</h2>
            <div class="row">
              <div class="col-6 col-12-small">
                <h3>Unordered</h3>
                <ul>
                  <li>Dolor pulvinar etiam.</li>
                  <li>Sagittis lorem eleifend.</li>
                  <li>Felis feugiat dolore viverra.</li>
                  <li>Dolor pulvinar etiam.</li>
                </ul>

                <h3>Alternate</h3>
                <ul class="alt">
                  <li>Dolor pulvinar etiam etiam.</li>
                  <li>Sagittis adipiscing eleifend.</li>
                  <li>Felis enim dolore viverra.</li>
                  <li>Dolor pulvinar etiam etiam.</li>
                </ul>
              </div>
              <div class="col-6 col-12-small">
                <h3>Ordered</h3>
                <ol>
                  <li>Dolor pulvinar etiam.</li>
                  <li>Etiam vel felis at viverra.</li>
                  <li>Felis enim feugiat magna.</li>
                  <li>Etiam vel felis nullam.</li>
                  <li>Felis enim et tempus.</li>
                </ol>

                <h3>Icons</h3>
                <ul class="icons">
                  <li>
                    <a href="#" class="icon brands fa-twitter">
                      <span class="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands fa-facebook-f">
                      <span class="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands fa-instagram">
                      <span class="label">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands fa-github">
                      <span class="label">Github</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands fa-dribbble">
                      <span class="label">Dribbble</span>
                    </a>
                  </li>
                </ul>
                <ul class="icons alt">
                  <li>
                    <a href="#" class="icon brands alt fa-twitter">
                      <span class="label">Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands alt fa-facebook-f">
                      <span class="label">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands alt fa-instagram">
                      <span class="label">Instagram</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands alt fa-github">
                      <span class="label">Github</span>
                    </a>
                  </li>
                  <li>
                    <a href="#" class="icon brands alt fa-dribbble">
                      <span class="label">Dribbble</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <h3>Definition</h3>
            <dl>
              <dt>Item 1</dt>
              <dd>
                <p>
                  Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                  vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                  adipiscing accumsan eu faucibus. Integer ac pellentesque
                  praesent.
                </p>
              </dd>
              <dt>Item 2</dt>
              <dd>
                <p>
                  Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                  vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                  adipiscing accumsan eu faucibus. Integer ac pellentesque
                  praesent.
                </p>
              </dd>
              <dt>Item 3</dt>
              <dd>
                <p>
                  Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                  vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                  adipiscing accumsan eu faucibus. Integer ac pellentesque
                  praesent.
                </p>
              </dd>
            </dl>

            <h3>Actions</h3>
            <ul class="actions">
              <li>
                <a href="#" class="button primary">
                  Primary
                </a>
              </li>
              <li>
                <a href="#" class="button">
                  Default
                </a>
              </li>
            </ul>
            <ul class="actions small">
              <li>
                <a href="#" class="button primary small">
                  Small
                </a>
              </li>
              <li>
                <a href="#" class="button small">
                  Small
                </a>
              </li>
            </ul>
            <div class="row">
              <div class="col-6 col-12-small">
                <ul class="actions stacked">
                  <li>
                    <a href="#" class="button primary">
                      Default
                    </a>
                  </li>
                  <li>
                    <a href="#" class="button">
                      Default
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-12-small">
                <ul class="actions stacked">
                  <li>
                    <a href="#" class="button primary small">
                      Small
                    </a>
                  </li>
                  <li>
                    <a href="#" class="button small">
                      Small
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="row">
              <div class="col-6 col-12-small">
                <ul class="actions stacked">
                  <li>
                    <a href="#" class="button primary fit">
                      Default
                    </a>
                  </li>
                  <li>
                    <a href="#" class="button fit">
                      Default
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-12-small">
                <ul class="actions stacked">
                  <li>
                    <a href="#" class="button primary small fit">
                      Small
                    </a>
                  </li>
                  <li>
                    <a href="#" class="button small fit">
                      Small
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <hr />

            {/* <!-- Blockquote --> */}
            <h2>Blockquote</h2>
            <blockquote>
              Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
              sagittis eget tempus euismod. Vestibulum ante ipsum primis in
              faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat
              ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
              faucibus vestibulum. Blandit adipiscing eu felis.
            </blockquote>

            <hr />

            {/* <!-- Table --> */}
            <h2>Table</h2>

            <h3>Default</h3>
            <div class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Item 1</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Item 2</td>
                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Item 3</td>
                    <td> Morbi faucibus arcu accumsan lorem.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Item 4</td>
                    <td>Vitae integer tempus condimentum.</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Item 5</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2"></td>
                    <td>100.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <h3>Alternate</h3>
            <div class="table-wrapper">
              <table class="alt">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Item 1</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Item 2</td>
                    <td>Vis ac commodo adipiscing arcu aliquet.</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Item 3</td>
                    <td> Morbi faucibus arcu accumsan lorem.</td>
                    <td>29.99</td>
                  </tr>
                  <tr>
                    <td>Item 4</td>
                    <td>Vitae integer tempus condimentum.</td>
                    <td>19.99</td>
                  </tr>
                  <tr>
                    <td>Item 5</td>
                    <td>Ante turpis integer aliquet porttitor.</td>
                    <td>29.99</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="2"></td>
                    <td>100.00</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <hr />

            {/* <!-- Buttons --> */}
            <h2>Buttons</h2>
            <ul class="actions">
              <li>
                <a href="#" class="button primary">
                  Primary
                </a>
              </li>
              <li>
                <a href="#" class="button">
                  Default
                </a>
              </li>
            </ul>
            <ul class="actions">
              <li>
                <a href="#" class="button primary large">
                  Large
                </a>
              </li>
              <li>
                <a href="#" class="button">
                  Default
                </a>
              </li>
              <li>
                <a href="#" class="button small">
                  Small
                </a>
              </li>
            </ul>
            <ul class="actions fit">
              <li>
                <a href="#" class="button primary fit">
                  Fit
                </a>
              </li>
              <li>
                <a href="#" class="button fit">
                  Fit
                </a>
              </li>
            </ul>
            <ul class="actions fit small">
              <li>
                <a href="#" class="button primary fit small">
                  Fit + Small
                </a>
              </li>
              <li>
                <a href="#" class="button fit small">
                  Fit + Small
                </a>
              </li>
            </ul>
            <ul class="actions">
              <li>
                <a href="#" class="button primary icon solid fa-search">
                  Icon
                </a>
              </li>
              <li>
                <a href="#" class="button icon solid fa-download">
                  Icon
                </a>
              </li>
            </ul>
            <ul class="actions">
              <li>
                <span class="button primary disabled">Primary</span>
              </li>
              <li>
                <span class="button disabled">Default</span>
              </li>
            </ul>

            <hr />

            {/* <!-- Form --> */}
            <h2>Form</h2>

            <form method="post" action="#">
              <div class="row gtr-uniform">
                <div class="col-6 col-12-xsmall">
                  <input
                    type="text"
                    name="demo-name"
                    id="demo-name"
                    value=""
                    placeholder="Name"
                  />
                </div>
                <div class="col-6 col-12-xsmall">
                  <input
                    type="email"
                    name="demo-email"
                    id="demo-email"
                    value=""
                    placeholder="Email"
                  />
                </div>
                {/* <!-- Break --> */}
                <div class="col-12">
                  <select name="demo-category" id="demo-category">
                    <option value="">- Category -</option>
                    <option value="1">Manufacturing</option>
                    <option value="1">Shipping</option>
                    <option value="1">Administration</option>
                    <option value="1">Human Resources</option>
                  </select>
                </div>
                {/* <!-- Break --> */}
                <div class="col-4 col-12-small">
                  <input
                    type="radio"
                    id="demo-priority-low"
                    name="demo-priority"
                    checked
                  />
                  <label for="demo-priority-low">Low</label>
                </div>
                <div class="col-4 col-12-small">
                  <input
                    type="radio"
                    id="demo-priority-normal"
                    name="demo-priority"
                  />
                  <label for="demo-priority-normal">Normal</label>
                </div>
                <div class="col-4 col-12-small">
                  <input
                    type="radio"
                    id="demo-priority-high"
                    name="demo-priority"
                  />
                  <label for="demo-priority-high">High</label>
                </div>
                {/* <!-- Break --> */}
                <div class="col-6 col-12-small">
                  <input type="checkbox" id="demo-copy" name="demo-copy" />
                  <label for="demo-copy">Email me a copy</label>
                </div>
                <div class="col-6 col-12-small">
                  <input
                    type="checkbox"
                    id="demo-human"
                    name="demo-human"
                    checked
                  />
                  <label for="demo-human">I am a human</label>
                </div>
                {/* <!-- Break --> */}
                <div class="col-12">
                  <textarea
                    name="demo-message"
                    id="demo-message"
                    placeholder="Enter your message"
                    rows="6"
                  ></textarea>
                </div>
                {/* <!-- Break --> */}
                <div class="col-12">
                  <ul class="actions">
                    <li>
                      <input
                        type="submit"
                        value="Send Message"
                        class="primary"
                      />
                    </li>
                    <li>
                      <input type="reset" value="Reset" />
                    </li>
                  </ul>
                </div>
              </div>
            </form>

            <hr />

            {/* <!-- Image --> */}
            <h2>Image</h2>

            <h3>Fit</h3>
            <span class="image fit">
              <img src="images/pic01.jpg" alt="" />
            </span>
            <div class="box alt">
              <div class="row gtr-50 gtr-uniform">
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic02.jpg" alt="" />
                  </span>
                </div>
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic03.jpg" alt="" />
                  </span>
                </div>
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic04.jpg" alt="" />
                  </span>
                </div>
                {/* <!-- Break --> */}
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic04.jpg" alt="" />
                  </span>
                </div>
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic02.jpg" alt="" />
                  </span>
                </div>
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic03.jpg" alt="" />
                  </span>
                </div>
                {/* <!-- Break --> */}
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic03.jpg" alt="" />
                  </span>
                </div>
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic04.jpg" alt="" />
                  </span>
                </div>
                <div class="col-4">
                  <span class="image fit">
                    <img src="images/pic02.jpg" alt="" />
                  </span>
                </div>
              </div>
            </div>

            <h3>Left &amp; Right</h3>
            <p>
              <span class="image left">
                <img src="images/pic08.jpg" alt="" />
              </span>
              Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis
              sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
              faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat
              ac adipiscing accumsan eu faucibus. Integer ac pellentesque
              praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum
              ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante
              ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis
              iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac
              pellentesque praesent tincidunt felis sagittis eget. tempus
              euismod. Vestibulum ante ipsum primis in faucibus vestibulum.
              Blandit adipiscing eu felis iaculis volutpat ac adipiscing
              accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum
              ante ipsum primis in faucibus magna blandit adipiscing eu felis
              iaculis.
            </p>
            <p>
              <span class="image right">
                <img src="images/pic09.jpg" alt="" />
              </span>
              Lorem ipsum dolor sit accumsan interdum nisi, quis tincidunt felis
              sagittis eget. tempus euismod. Vestibulum ante ipsum primis in
              faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat
              ac adipiscing accumsan eu faucibus. Integer ac pellentesque
              praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum
              ante ipsum primis sagittis eget. tempus euismod. Vestibulum ante
              ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis
              iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac
              pellentesque praesent tincidunt felis sagittis eget. tempus
              euismod. Vestibulum ante ipsum primis in faucibus vestibulum.
              Blandit adipiscing eu felis iaculis volutpat ac adipiscing
              accumsan eu faucibus. Integer ac pellentesque praesent. Vestibulum
              ante ipsum primis in faucibus magna blandit adipiscing eu felis
              iaculis.
            </p>

            <hr />

            {/* <!-- Box --> */}
            <h2>Box</h2>
            <div class="box">
              <p>
                Felis sagittis eget tempus primis in faucibus vestibulum.
                Blandit adipiscing eu felis iaculis volutpat ac adipiscing
                accumsan eu faucibus. Integer ac pellentesque praesent tincidunt
                felis sagittis eget. tempus euismod. Magna sed etiam ante ipsum
                primis in faucibus vestibulum. Blandit adipiscing eu ipsum
                primis in faucibus vestibulum. Blandit adipiscing eu felis
                iaculis volutpat ac adipiscing accumsan eu faucibus lorem ipsum
                dolor sit amet nullam. Integer ac pellentesque praesent
                tincidunt felis sagittis eget. tempus euismod. Vestibulum ante
                ipsum primis sagittis eget. tempus euismod. Vestibulum ante
                ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis
                iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac
                pellentesque praesent tincidunt felis sagittis eget. tempus
                euismod. Vestibulum ante ipsum primis in faucibus vestibulum.
                Blandit adipiscing eu felis iaculis volutpat ac adipiscing
                accumsan eu faucibus. Integer ac pellentesque praesent.
                Vestibulum ante ipsum primis in faucibus magna blandit
                adipiscing eu felis iaculis volutpat lorem ipsum dolor.
              </p>
            </div>

            <hr />

            {/* <!-- Preformatted Code --> */}
            <h2>Preformatted</h2>
            <pre>
              <code>
                i = 0;
                <br />
                while (!deck.isInOrder()) {"{"} <br />
                print1 'Iteration ' + i;
                <br />
                deck.shuffle();
                <br />
                i++;
                <br />
                {"}"}
                <br />
                print 'It took ' + i + ' iterations to sort the deck.';
                <br />
              </code>
            </pre>
          </section>
        </div>

        {/* <!-- Scripts --> */}
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/jquery.scrollex.min.js"></script>
        <script src="assets/js/jquery.scrolly.min.js"></script>
        <script src="assets/js/browser.min.js"></script>
        <script src="assets/js/breakpoints.min.js"></script>
        <script src="assets/js/util.js"></script>
        <script src="assets/js/main.js"></script>
      </div>
    );
  }
}
