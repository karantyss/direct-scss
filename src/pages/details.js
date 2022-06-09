import { Link } from "react-router-dom";
import "../styles/details.scss";
function Details() {
  return (
    <div className="section">
      <h1>Details Page</h1>
      <div>
        <p className="question">
          Why we should not use CSS/SCSS directly except one global css style?
        </p>
        <ul className="answer">
          <li>It is having Global Scope by default.</li>
          <li>
            In React, as it is SPA (Single Page Application) it will load the
            imported style file (.css/.scss) into the DOM from every component,
            regardless of that it is rendered or not.
          </li>
          <li>
            As it is having global scope, the styles between the files may ran
            into the conflicts issue and renders the elements with unexpected
            results.
          </li>
        </ul>
      </div>
      <div>
        <p className="question">
          What are CSS Modules and why should we use it?
        </p>
        <ul className="answer">
          <li>
            These are CSS files in which all class names and animation names are
            scoped locally by default.
          </li>
          <li>
            CSS Modules is a process in build step, where WebPack changes the
            class names and selectors to be scoped and namespaced.
          </li>
          <li>
            WebPack looks for the files ending with **.module.scss /
            **.module.css and converts it into JS code as a JSON with namespaced
            selectors.
          </li>
          <li>
            <h5>For Example:</h5>
            <strong>Filename: user-page.module.scss</strong>
            <p>
              {`.dashed-class-name {
                border: 1px dashed #000;
            }`}
            </p>

            <strong>It will be imported as:</strong>
            <p>
              <i>import UserPageStyle from 'user-page.module.scss';</i>
            </p>

            <strong>UserPageStyle will be a JSON which will look like:</strong>
            <p>
              {`{
                'dashed-class-name': 'user-page_dashed-class-name__2aYfr'
              }`}
            </p>

            <strong>It can be accessed like:</strong>
            <p>{`<div className={UserPageStyle['dashed-class-name']} />`}</p>

            <strong>It will be rendered as:</strong>
            <p>{`<div class="user-page_dashed-class-name__2aYfr"></div>`}</p>
          </li>
          <li>
            The namespace is created with the combination of Filename, selector
            and a 5 Letter hash key. file-name_selector__hash5
          </li>

          <li>
            By this way it will be unique and will be locally scoped to it's
            usage or component.
          </li>
        </ul>
      </div>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
}

export default Details;
