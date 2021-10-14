import Home from "../components/home";

function Index() {
     return (
          <div>
               <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
               <div >
                    <div className="row">
                         <div className="d-flex justify-content-center">
                              <div className="col-md-6">
                                   <Home></Home>
                              </div>
                         </div>
                         <div className="d-flex justify-content-center">
                              <div className="col-md-6 text-left">
                                   <div>
                                        <p><img src="https://img.shields.io/badge/buld-1.0-brightgreen" alt="buld" /> <img src="https://img.shields.io/badge/version-1.0-red" alt="version" /> <img src="https://img.shields.io/badge/env-javascript-yellow" alt="env" /></p>
                                        <h1 id="introduction">introduction</h1>
                                        <p>eletronix is ​​a quick starter system for software implementation in electron using next.js in a simplified way.</p>
                                        <h2 id="install">install</h2>
                                        <p>to implement electronix in your system, clone this project and add it to your repository.</p>
                                        <pre className="bg-dark text-success"><code className="lang-bash">~<span className="hljs-meta"># git clone https:<span className="hljs-comment">//github.com/victorratts13/eletronix.js.git</span></span>{"\n"}</code></pre>
                                        <p>then, delete the flagged content inside <code>main.js</code> and insert your code.</p>
                                        <pre className="bg-dark text-success">
                                             <code className="lang-js">
                                                  <span className="hljs-comment">
                                                       <span className="markdown">
                                                            /
                                                            <span className="hljs-strong">
                                                                 *****
                                                            </span>init
                                                       </span>your
                                                       <span className="markdown"> code
                                                            <span className="hljs-strong">*****
                                                            </span>*/</span></span>{"\n"}{"\n"}
                                                  <span className="hljs-comment">
                                                                 /* {"\n"}{"  "}delete this part {"\n"}{"  "}of the code {"\n"}{"  "}and insert your {"\n"}{"  "}codes from that point.{"\n"}{"\n"}*/
                                                  </span>{"\n"}{"\n"}
                                                  <span className="hljs-comment">
                                                       <span className="markdown">/
                                                            <span className="hljs-strong">*****
                                                            </span>end </span>your
                                                       <span className="markdown"> code
                                                            <span className="hljs-strong">*****
                                                            </span>*/</span></span>{"\n"}
                                             </code>
                                        </pre>
                                        <h2 id="frontend">frontend</h2>
                                        <p>to do the frontend manipulation with next, it will be necessary to explore the <code>renderer/</code> where all Next.js components are found. </p>
                                        <blockquote className="bg-dark text-success">
                                             <ul>
                                                  <li>WARNING: in order for your project to be successfully compiled, it is necessary to pay attention to the Next configuration file, inside the renderer folder:
                                                       <code>/renderer/next.config.js</code></li>
                                             </ul>
                                        </blockquote>
                                        <p>to build your application, run the <code>npm run build</code> command and after the process is finished, run <code>npm start</code></p>
                                        <h3 id="contacts">contacts</h3>
                                        <blockquote>
                                             <p>telegram: @victorratts</p>
                                        </blockquote>
                                   </div>
                              </div>
                         </div>
                    </div>

               </div>
               <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
          </div>
     )
}

export default Index;