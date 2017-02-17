import React, {Component} from 'react';
import Phone from './main/Phone';
import Sign from './main/Sign';
import CONFIG_MAIN from '../constants/main.config';

class App extends Component {
  render() {
    return (
      <div>
        <section id="main-container">
          <div className="container">
            <div className="row">
              <div className="col s10 push-s1">
                <div className="row">
                  <Phone config={CONFIG_MAIN}/>
                  <Sign config={CONFIG_MAIN}/>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="site-footer">
          <div class="container">
            <div class="row">
              <div class="col s12 l3 center-align">
                <a class='dropdown-button btn btn-flat' href='#' data-activates='dropdown1'>Idioma</a>

                <ul id='dropdown1' class='dropdown-content'>
                  <li><a href="#!">Español</a></li>
                  <li><a href="#!">Inglés</a></li>
                </ul>
              </div>
              <div class="col s12 l3 push-l6 center-align">
                © 2016 Platzigram
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
