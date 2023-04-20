import React from 'react';
import { dateFormat } from '../helper';
import TaskForm from './TaskForm';



function Popup(props) {
  const {type,data}=props;
  console.log(data);
    return (
        <div className="modal" tabIndex="-1" id='task-modal'>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {
                type==="view" ?
                <div className='p-3'>
                 <h5>{data?.title}</h5>
                 <p>{data?.description}</p>
                    <div className="d-flex">
                      <p>Created On:{dateFormat(data?.createdOn)}</p>
                      <p className='ms-auto'>Due On:{dateFormat(data?.dueDate)}</p>
                    </div>
                </div>:
                
                type==="edit"?
                <div>
                  <TaskForm isUpdate={true} data={data}/>
                </div>:
                <div>Delete</div>
              }
              
            
      
            
          </div>
      </div>
      </div>
      </div>
    );
}

export default Popup;
