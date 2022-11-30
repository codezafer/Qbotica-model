import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import "./calendar.css"
import Header from '../../../initialpage/Sidebar/header'
import Sidebar from '../../../initialpage/Sidebar/sidebar'
import Modal  from 'react-bootstrap/Modal'
import  Modalbox from "../../../_components/modelbox/modalbox"

const Calendar = (props) => {

    const [menu, setMenu] = useState(false)

	const toggleMobileMenu = () => {
		setMenu(!menu)
	  }
      
    const [startDate, setDate] = useState(new Date()),
            [showCategory, setshowCategory] = useState(false),
            [showmodel, setshowmodel] = useState(false),
            [showEvents, setshowEvents] = useState(false),
            [show, setshow] = useState(false),
            [iseditdelete, setiseditdelete] = useState(false),
            [addneweventobj, setaddneweventobj] = useState(null),
            [isnewevent, setisnewevent] = useState(false),
            [event_title, setevent_title] = useState(""),
            [category_color, setcategory_color] = useState(""),
            [calenderevent, setcalenderevent] = useState(""),
            [weekendsVisible, setweekendsVisible] = useState(true),
            [currentEvents, setscurrentEvents] = useState([]),
            defaultEvents = [{
                title: 'Event Name 4',
                start: Date.now() + 148000000,
                className: 'bg-purple'
              },
              {
                  title: 'Test Event 1',
                  start: Date.now(),
                  end: Date.now(),
                  className: 'bg-success'
              },
              {
                  title: 'Test Event 2',
                  start: Date.now() + 168000000,
                  className: 'bg-info'
              },
              {
                  title: 'Test Event 3',
                  start: Date.now() + 338000000,
                  className: 'bg-primary'
              }]
    ;
	
    const handleChange = (date) => {
        setDate(date)
    }
    const addEvent = () => {
        setshowEvents(true)
    }
    const categoryHandler = () => {
        setshowCategory(true)
    } 
      
      const handleClose=()=>{
          setisnewevent(false)
          setiseditdelete(false)
          setshow(false)
          setshowCategory(false)
          setshowEvents(false)
          setshowmodel(false)
    }
    const handleEventClick = (clickInfo) => {  
        setiseditdelete(false)
        setevent_title(clickInfo.event.title)
        setcalenderevent(clickInfo.event) 
    }
    
    const handleDateSelect = (selectInfo) => {
        setisnewevent(true)
        setaddneweventobj(selectInfo)
    }
    const addnewevent=()=>{
        let calendarApi = addneweventobj.view.calendar

        calendarApi.unselect() // clear date selection

        if (event_title) {
            calendarApi.addEvent({
            id: 10,
            title : event_title,
            className: category_color,
            start: addneweventobj.startStr,
            end: addneweventobj.endStr,
            allDay: addneweventobj.allDay
            })
        }   
        setisnewevent(false)
    }
      
    const onupdateModalClose=()=> {
        setiseditdelete(false)
        setevent_title('')
    }
    const oncreateeventModalClose=()=> {
        setevent_title("")
        setisnewevent(false)
    }
    const removeevent=()=>{
        calenderevent.remove()
        setiseditdelete(false)
    }
    const clickupdateevent=()=>{
        const newArray = defaultEvents
        for(let i=0;i<newArray.length;i++){
            if(newArray[i].id === parseInt(calenderevent.id)){
            newArray[i].title = event_title
            }
        }
        defaultEvents = newArray
        setiseditdelete(false)
    }
    
    const handleClick=()=>{
        setshow(true)
    }
   

  
        return (
        
            <div className={`main-wrapper ${menu ? 'slide-nav': ''}`}> 
          
            <Header onMenuClick={(value) => toggleMobileMenu()} />
            <Sidebar /> 

            <div className="page-wrapper">
                <div className="content container-fluid">
				
					{/* Page Header */ }
					<div className="page-header">
						<div className="row align-items-center">
							<div className="col">
								<h3 className="page-title">Calendar</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link to="/index">Dashboard</Link></li>
									<li className="breadcrumb-item active">Calendar</li>
								</ul>
							</div>
							<div className="col-auto text-end float-end ml-auto">
              <a href="#" className="btn add-btn" data-bs-toggle="modal" data-bs-target="#add_event"><i className="fa fa-plus" /> Add Event</a>
							</div>
						</div>
					</div>
					{/*  /Page Header */ }
					
					<div className="row">
						<div className="col-md-12">
							<div className="card bg-white calendarIndex">
								<div className="card-body">
                                <FullCalendar
                                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                                    headerToolbar={{
                                        left: 'prev,next today',
                                        center: 'title',
                                        right: 'dayGridMonth,timeGridWeek,timeGridDay',
                                    }}
                                    
                                    initialView='dayGridMonth'
                                    editable={true}
                                    selectable={true}
                                    selectMirror={true}
                                    dayMaxEvents={true}
                                    weekends={weekendsVisible}
                                    initialEvents={defaultEvents} // alternatively, use the `events` setting to fetch from a feed
                                    select={handleDateSelect}
                                    // eventContent={renderEventContent} // custom render function
                                    eventClick={clickInfo=>handleEventClick(clickInfo)}
                                    // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
                                    /* you can update a remote database when these fire:
                                    eventAdd={function(){}}
                                    eventChange={function(){}}
                                    eventRemove={function(){}}
                                    */
                                    />
								</div>
							</div>
						</div>
					</div>
				
				{/*  Add Event modal */ }
				<div id="add_event" className="modal custom-modal fade" role="dialog">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Add Event</h5>
								<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label>Event Name <span className="text-danger">*</span></label>
										<input className="form-control" type="text" />
									</div>
									<div className="form-group">
										<label>Event Date <span className="text-danger">*</span></label>
										<div >
											<input className="form-control" type="date" />
										</div>
									</div>
                  <div className="form-group mb-0">
                      <label>Choose Category Color</label>
                      <select className="form-control form-white" data-placeholder="Choose a color..." name="category-color">
                          <option value="success">Success</option>
                          <option value="danger">Danger</option>
                          <option value="info">Info</option>
                          <option value="primary">Primary</option>
                          <option value="warning">Warning</option>
                          <option value="inverse">Inverse</option>
                      </select>
                  </div>
									<div className="submit-section">
										<button className="btn btn-primary submit-btn">Submit</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				{/*  /Add Event modal */ }
				
                {/*  Create Event modal */ }
                <div className="modal custom-modal fade none-border" id="my_event">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Add Event</h4>
                                <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body"></div>
                            <div className="modal-footer justify-content-center">
                                <button type="button" className="btn btn-success save-event submit-btn">Create event</button>
                                <button type="button" className="btn btn-danger delete-event submit-btn" data-bs-dismiss="modal">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
				{/*  /Create Event modal */ }
			
                <Modalbox show={showmodel} handleClose={handleClose} />
				
				</div>			
			</div>
		</div>
		
        );
    
}
export default Calendar;