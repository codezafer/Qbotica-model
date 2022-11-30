import React from 'react'

const Compentency = () => {
  return (
    <>
      {/* Compentency Config */}
      <div className='tab-pane' id='compentency_tab'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='form-group'>
              <label>Competency-based</label>
              <textarea
                rows={4}
                cols={5}
                className='form-control'
                name='competencies_desc'
                defaultValue={
                  "Competency-based performance management allow companies to evaluate employees' performance through define core competencies that align with the company’s mission, vision and goals. A 360-degree assessment can also be added to capture ratings and feedback "
                }
              />
            </div>
            <div className='submit-section my-3'>
              <button
                className='m-0 btn btn-sm btn-primary submit-btn performance_status '
                data-status='competency'
                style={{ margin: '23px 0px' }}
              >
                Activate Competency-based
              </button>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='form-group'>
              <table className='table table-bordered table-center'>
                <thead style={{ background: '#f2f2f2' }}>
                  <tr>
                    <th style={{ width: 250 }}>Competency</th>
                    <th>Definition</th>
                    <th style={{ width: 70, textAlign: 'center' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Adaptability</th>
                    <td>
                      <div className='task-textarea'>
                        <textarea
                          placeholder='Definition'
                          id='competency_definition_6'
                          className='form-control definition_edit_6'
                          readOnly
                          defaultValue={
                            'Ability to handle ambiguity and certain situations outside of their\n                                                                        control. Dealing with a change in process, systems, role, and direction of\n                                                                        the company. Adapting to new ways of doing things.'
                          }
                        />
                      </div>
                    </td>
                    <td className='text-center'>
                      <a
                        href=''
                        className='text-warning'
                        id='definition_edit_6'
                        data-original-title='Edit'
                      >
                        <i className='fa fa-pencil' />
                      </a>
                      <a
                        href='https://newhrms.com/newhrms_stagging/settings/delete_performance_competency/6'
                        className='text-danger'
                        data-bs-toggle='ajaxModal'
                        data-original-title='Delete'
                      >
                        <i className='fa fa-times' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Collaboration &amp; Teamwork</th>
                    <td>
                      <div className='task-textarea'>
                        <textarea
                          placeholder='Definition'
                          id='competency_definition_7'
                          className='form-control definition_edit_7'
                          readOnly
                          defaultValue={
                            'Works harmoniously with others to get a job done; shares critical information\n                                                                        with everyone involved in a project. Works cooperatively with others to achieve\n                                                                        common goals. Seeks opinions and values the contributions of others; involves\n                                                                        team in discussion and decision-making.'
                          }
                        />
                      </div>
                    </td>
                    <td className='text-center'>
                      <a
                        href=''
                        className='text-warning'
                        id='definition_edit_7'
                        data-original-title='Edit'
                      >
                        <i className='fa fa-pencil' />
                      </a>
                      <a
                        href='https://newhrms.com/newhrms_stagging/settings/delete_performance_competency/7'
                        className='text-danger'
                        data-bs-toggle='ajaxModal'
                        data-original-title='Delete'
                      >
                        <i className='fa fa-times' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Communication</th>
                    <td>
                      <div className='task-textarea'>
                        <textarea
                          placeholder='Definition'
                          id='competency_definition_8'
                          className='form-control definition_edit_8'
                          readOnly
                          defaultValue={
                            'Communicates in an engaging, effective, and respectful way to a wide\n                                                                        variety of groups. Delivers convincing and meaningful messages that\n                                                                        leave a positive impact. Effective oral and written communication skills.\n                                                                        The ability to persuade and convince others including management.'
                          }
                        />
                      </div>
                    </td>
                    <td className='text-center'>
                      <a
                        href=''
                        className='text-warning'
                        id='definition_edit_8'
                        data-original-title='Edit'
                      >
                        <i className='fa fa-pencil' />
                      </a>
                      <a
                        href='https://newhrms.com/newhrms_stagging/settings/delete_performance_competency/8'
                        className='text-danger'
                        data-bs-toggle='ajaxModal'
                        data-original-title='Delete'
                      >
                        <i className='fa fa-times' />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>Customer Service</th>
                    <td>
                      <div className='task-textarea'>
                        <textarea
                          placeholder='Definition'
                          id='competency_definition_9'
                          className='form-control definition_edit_9'
                          readOnly
                          defaultValue={
                            'Listens and responds effectively to customer questions; resolves\n                                                                        customer problems to the customer’s satisfaction; respects all internal\n                                                                        and external customers; follows up to evaluate customer satisfaction;\n                                                                        exceeds customer expectations.'
                          }
                        />
                      </div>
                    </td>
                    <td className='text-center'>
                      <a
                        href=''
                        className='text-warning'
                        id='definition_edit_9'
                        data-original-title='Edit'
                      >
                        <i className='fa fa-pencil' />
                      </a>
                      <a
                        href='https://newhrms.com/newhrms_stagging/settings/delete_performance_competency/9'
                        className='text-danger'
                        data-bs-toggle='ajaxModal'
                        data-original-title='Delete'
                      >
                        <i className='fa fa-times' />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='form-group'>
              <form>
                <table className='table performance-table'>
                  <tbody>
                    <tr>
                      <td style={{ paddingLeft: 0 }}>
                        <input
                          type='text'
                          className='form-control'
                          name='competency[]'
                          required
                          placeholder='Competency'
                        />
                      </td>
                      <td>
                        <textarea
                          style={{ height: 44 }}
                          rows={4}
                          cols={20}
                          className='form-control'
                          name='definition[]'
                          placeholder='Definition'
                          required
                          defaultValue={''}
                        />
                      </td>
                      <td
                        style={{
                          paddingRight: 0,
                          minWidth: 55,
                          maxWidth: 55,
                          width: 55,
                        }}
                      >
                        <button
                          type='button'
                          className='btn btn-white add_competency_performance'
                          data-bs-toggle='tooltip'
                          data-original-title='Add Competency'
                          style={{
                            height: 44,
                            fontSize: 16,
                            padding: '10px 15px',
                          }}
                        >
                          <i className='fa fa-plus-circle' />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <button
                    className='btn btn-primary'
                    type='submit'
                    id='create_offers_submit'
                  >
                    Create Competencies
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='col-md-12 col-lg-12'>
            <hr style={{ marginTop: 0 }} />
            <div className='form-group m-b-0'>
              <label>Choose Your Rating Scale</label>
              <div className='radio_input' id='rating_scale_select_competency'>
                <label className='radio-inline custom_radio'>
                  <input
                    type='radio'
                    name='rating_scale_competency'
                    defaultValue='rating_1_5'
                    required
                    className='rating_scale'
                    defaultChecked
                  />
                  1 - 5 <span className='checkmark' />
                </label>
                <label className='radio-inline custom_radio'>
                  <input
                    type='radio'
                    name='rating_scale_competency'
                    defaultValue='rating_1_10'
                    className='rating_scale'
                  />
                  1 - 10 <span className='checkmark' />
                </label>
                <label className='radio-inline custom_radio'>
                  <input
                    type='radio'
                    name='rating_scale_competency'
                    defaultValue='custom_rating'
                    className='rating_scale'
                  />
                  Custom <span className='checkmark' />
                </label>
              </div>
            </div>
            {/* 5 Ratings Content */}
            <div
              className='form-group'
              id='5ratings_cont_competency'
              style={{ display: 'block' }}
            >
              <div className='table-responsive'>
                <form>
                  <table className='table setting-performance-table'>
                    <thead>
                      <tr>
                        <th>Rating</th>
                        <th>Short Descriptive Word</th>
                        <th>Definition</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ width: 50 }}> 1 </td>
                        <td style={{ width: 300 }}>
                          <input
                            type='text'
                            name='rating_value[]'
                            className='form-control'
                            defaultValue='tst'
                            placeholder='Short word to describe rating of 1'
                            required
                          />
                        </td>
                        <td>
                          <textarea
                            rows={3}
                            name='definition[]'
                            className='form-control'
                            placeholder='Descriptive Rating Definition'
                            required
                            defaultValue={'Lorem ipsum'}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 50 }}> 2 </td>
                        <td style={{ width: 300 }}>
                          <input
                            type='text'
                            name='rating_value[]'
                            className='form-control'
                            defaultValue='dsgds'
                            placeholder='Short word to describe rating of 2'
                            required
                          />
                        </td>
                        <td>
                          <textarea
                            rows={3}
                            name='definition[]'
                            className='form-control'
                            placeholder='Descriptive Rating Definition'
                            required
                            defaultValue={'Lorem ipsum'}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 50 }}> 3 </td>
                        <td style={{ width: 300 }}>
                          <input
                            type='text'
                            name='rating_value[]'
                            className='form-control'
                            defaultValue='sdg'
                            placeholder='Short word to describe rating of 3'
                            required
                          />
                        </td>
                        <td>
                          <textarea
                            rows={3}
                            name='definition[]'
                            className='form-control'
                            placeholder='Descriptive Rating Definition'
                            required
                            defaultValue={'Lorem ipsum'}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 50 }}> 4 </td>
                        <td style={{ width: 300 }}>
                          <input
                            type='text'
                            name='rating_value[]'
                            className='form-control'
                            defaultValue='sdgsdg'
                            placeholder='Short word to describe rating of 4'
                            required
                          />
                        </td>
                        <td>
                          <textarea
                            rows={3}
                            name='definition[]'
                            className='form-control'
                            placeholder='Descriptive Rating Definition'
                            required
                            defaultValue={'Lorem ipsum'}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 50 }}> 5 </td>
                        <td style={{ width: 300 }}>
                          <input
                            type='text'
                            name='rating_value[]'
                            className='form-control'
                            defaultValue='sdg'
                            placeholder='Short word to describe rating of 5'
                            required
                          />
                        </td>
                        <td>
                          <textarea
                            rows={3}
                            name='definition[]'
                            className='form-control'
                            placeholder='Descriptive Rating Definition'
                            required
                            defaultValue={'Lorem ipsum'}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className='submit-section m-b-0'>
                    <button
                      className='btn btn-primary submit-btn create_goal_configuration_submit'
                      type='submit'
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* /5 Ratings Content */}
            {/* 10 Ratings Content */}
            <div
              className='form-group'
              id='10ratings_cont_competency'
              style={{ display: 'none' }}
            >
              <div className='table-responsive'>
                <form>
                  <table className='table setting-performance-table'>
                    <thead>
                      <tr>
                        <th>Rating</th>
                        <th>Short Descriptive Word</th>
                        <th>Definition</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{ width: 50 }}> 1 </td>
                        <td style={{ width: 300 }}>
                          <input
                            type='text'
                            name='rating_value_ten[]'
                            className='form-control'
                            placeholder='Short word to describe rating of 1'
                            required
                          />
                        </td>
                        <td>
                          <textarea
                            rows={3}
                            name='definition_ten[]'
                            className='form-control'
                            placeholder='Descriptive Rating Definition'
                            required
                            defaultValue={''}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 50 }}> 2 </td>
                        <td style={{ width: 300 }}>
                          <input
                            type='text'
                            name='rating_value_ten[]'
                            className='form-control'
                            placeholder='Short word to describe rating of 2'
                            required
                          />
                        </td>
                        <td>
                          <textarea
                            rows={3}
                            name='definition_ten[]'
                            className='form-control'
                            placeholder='Descriptive Rating Definition'
                            required
                            defaultValue={''}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 50 }}> 3 </td>
                        <td style={{ width: 300 }}>
                          <input
                            type='text'
                            name='rating_value_ten[]'
                            className='form-control'
                            placeholder='Short word to describe rating of 3'
                            required
                          />
                        </td>
                        <td>
                          <textarea
                            rows={3}
                            name='definition_ten[]'
                            className='form-control'
                            placeholder='Descriptive Rating Definition'
                            required
                            defaultValue={''}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 50 }}> 4 </td>
                        <td style={{ width: 300 }}>
                          <input
                            type='text'
                            name='rating_value_ten[]'
                            className='form-control'
                            placeholder='Short word to describe rating of 4'
                            required
                          />
                        </td>
                        <td>
                          <textarea
                            rows={3}
                            name='definition_ten[]'
                            className='form-control'
                            placeholder='Descriptive Rating Definition'
                            required
                            defaultValue={''}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 50 }}> 5 </td>
                        <td style={{ width: 300 }}>
                          <input
                            type='text'
                            name='rating_value_ten[]'
                            className='form-control'
                            placeholder='Short word to describe rating of 5'
                            required
                          />
                        </td>
                        <td>
                          <textarea
                            rows={3}
                            name='definition_ten[]'
                            className='form-control'
                            placeholder='Descriptive Rating Definition'
                            required
                            defaultValue={''}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 50 }}> 6 </td>
                        <td style={{ width: 300 }}>
                          <input
                            type='text'
                            name='rating_value_ten[]'
                            className='form-control'
                            placeholder='Short word to describe rating of 6'
                            required
                          />
                        </td>
                        <td>
                          <textarea
                            rows={3}
                            name='definition_ten[]'
                            className='form-control'
                            placeholder='Descriptive Rating Definition'
                            required
                            defaultValue={''}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 50 }}> 7 </td>
                        <td style={{ width: 300 }}>
                          <input
                            type='text'
                            name='rating_value_ten[]'
                            className='form-control'
                            placeholder='Short word to describe rating of 7'
                            required
                          />
                        </td>
                        <td>
                          <textarea
                            rows={3}
                            name='definition_ten[]'
                            className='form-control'
                            placeholder='Descriptive Rating Definition'
                            required
                            defaultValue={''}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 50 }}> 8 </td>
                        <td style={{ width: 300 }}>
                          <input
                            type='text'
                            name='rating_value_ten[]'
                            className='form-control'
                            placeholder='Short word to describe rating of 8'
                            required
                          />
                        </td>
                        <td>
                          <textarea
                            rows={3}
                            name='definition_ten[]'
                            className='form-control'
                            placeholder='Descriptive Rating Definition'
                            required
                            defaultValue={''}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 50 }}> 9 </td>
                        <td style={{ width: 300 }}>
                          <input
                            type='text'
                            name='rating_value_ten[]'
                            className='form-control'
                            placeholder='Short word to describe rating of 9'
                            required
                          />
                        </td>
                        <td>
                          <textarea
                            rows={3}
                            name='definition_ten[]'
                            className='form-control'
                            placeholder='Descriptive Rating Definition'
                            required
                            defaultValue={''}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={{ width: 50 }}> 10 </td>
                        <td style={{ width: 300 }}>
                          <input
                            type='text'
                            name='rating_value_ten[]'
                            className='form-control'
                            placeholder='Short word to describe rating of 10'
                            required
                          />
                        </td>
                        <td>
                          <textarea
                            rows={3}
                            name='definition_ten[]'
                            className='form-control'
                            placeholder='Descriptive Rating Definition'
                            required
                            defaultValue={''}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className='submit-section'>
                    <button
                      className='btn btn-primary submit-btn create_goal_configuration_submit'
                      type='submit'
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* 10 Ratings Content */}
            {/* Custom Ratings Content */}
            <div
              className='form-group'
              id='custom_rating_cont_competency'
              style={{ display: 'none' }}
            >
              <label>Custom Rating Count</label>
              <div className='form-group'>
                <input
                  type='text'
                  className='form-control custom_rating_input'
                  data-type='competency'
                  id='custom_rating_input1'
                  name='custom_rating_count'
                  defaultValue
                  placeholder={20}
                  style={{ width: 160 }}
                />
              </div>
              <div className='table-responsive'>
                <form>
                  <table className='table setting-performance-table'>
                    <thead>
                      <tr>
                        <th>Rating</th>
                        <th>Short Descriptive Word</th>
                        <th>Definition</th>
                      </tr>
                    </thead>
                    <tbody className='custom-value_competency'></tbody>
                  </table>
                  <div className='submit-section'>
                    <button
                      className='btn btn-primary submit-btn create_goal_configuration_submit'
                      type='submit'
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* /Custom Ratings Content */}
          </div>
        </div>
      </div>
      {/* /Compentency Config */}
    </>
  )
}

export default Compentency
