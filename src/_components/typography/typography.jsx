import React from 'react';

const Typography = () => {
  
  return ( 

     <>   
        {/* Typography */}
            <section className="comp-section" id="comp_typography">
                <h3 className="section-title">Typography</h3>
                <div className="row">
                  <div className="col-md-12">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Headings</h4>
                        <h1>h1. Bootstrap heading</h1>
                        <h2>h2. Bootstrap heading</h2>
                        <h3>h3. Bootstrap heading</h3>
                        <h4>h4. Bootstrap heading</h4>
                        <h5>h5. Bootstrap heading</h5>
                        <h6>h6. Bootstrap heading</h6>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Blockquotes</h4>
                        <blockquote>
                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </blockquote>
                        <blockquote className="blockquote">
                          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Text elements</h4>
                        <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                        <p><del>This line of text is meant to be treated as deleted text.</del></p>
                        <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                        <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
                        <p><u>This line of text will render as underlined</u></p>
                        <p><small>This line of text is meant to be treated as fine print.</small></p>
                        <p><strong>This line rendered as bold text.</strong></p>
                        <p><em>This line rendered as italicized text.</em></p>
                        <p className="text-monospace">This is in monospace</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Coloured Link</h4>
                        <p className="text-primary">.text-primary</p>
                        <p className="text-secondary">.text-secondary</p>
                        <p className="text-success">.text-success</p>
                        <p className="text-danger">.text-danger</p>
                        <p className="text-warning">.text-warning</p>
                        <p className="text-info">.text-info</p>
                        <p className="text-light bg-dark">.text-light</p>
                        <p className="text-dark">.text-dark</p>
                        <p className="text-muted">.text-muted</p>
                        <p className="text-white bg-dark">.text-white</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Coloured text</h4>
                        <p><a href="#" className="text-primary">Primary link</a></p>
                        <p><a href="#" className="text-secondary">Secondary link</a></p>
                        <p><a href="#" className="text-success">Success link</a></p>
                        <p><a href="#" className="text-danger">Danger link</a></p>
                        <p><a href="#" className="text-warning">Warning link</a></p>
                        <p><a href="#" className="text-info">Info link</a></p>
                        <p><a href="#" className="text-light bg-dark">Light link</a></p>
                        <p><a href="#" className="text-dark">Dark link</a></p>
                        <p><a href="#" className="text-muted">Muted link</a></p>
                        <p><a href="#" className="text-white bg-dark">White link</a></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Bullet Lists</h4>
                        <ul>
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Consectetur adipiscing elit</li>
                          <li>Integer molestie lorem at massa</li>
                          <li>Facilisis in pretium nisl aliquet</li>
                          <li>Nulla volutpat aliquam velit
                            <ul>
                              <li>Phasellus iaculis neque</li>
                              <li>Purus sodales ultricies</li>
                              <li>Vestibulum laoreet porttitor sem</li>
                              <li>Ac tristique libero volutpat at</li>
                            </ul>
                          </li>
                          <li>Faucibus porta lacus fringilla vel</li>
                          <li>Aenean sit amet erat nunc</li>
                          <li>Eget porttitor lorem</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Bullet Lists</h4>
                        <ol>
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Consectetur adipiscing elit</li>
                          <li>Integer molestie lorem at massa</li>
                          <li>Facilisis in pretium nisl aliquet</li>
                          <li>Nulla volutpat aliquam velit
                            <ul>
                              <li>Phasellus iaculis neque</li>
                              <li>Purus sodales ultricies</li>
                              <li>Vestibulum laoreet porttitor sem</li>
                              <li>Ac tristique libero volutpat at</li>
                            </ul>
                          </li>
                          <li>Faucibus porta lacus fringilla vel</li>
                          <li>Aenean sit amet erat nunc</li>
                          <li>Eget porttitor lorem</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Unstyled Lists</h4>
                        <ul className="list-unstyled">
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Consectetur adipiscing elit</li>
                          <li>Integer molestie lorem at massa</li>
                          <li>Facilisis in pretium nisl aliquet</li>
                          <li>Nulla volutpat aliquam velit
                            <ul>
                              <li>Phasellus iaculis neque</li>
                              <li>Purus sodales ultricies</li>
                              <li>Vestibulum laoreet porttitor sem</li>
                              <li>Ac tristique libero volutpat at</li>
                            </ul>
                          </li>
                          <li>Faucibus porta lacus fringilla vel</li>
                          <li>Aenean sit amet erat nunc</li>
                          <li>Eget porttitor lorem</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
        {/* /Typography */}
   </>
  )
}

export default Typography