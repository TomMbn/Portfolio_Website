import React from 'react'
import "./workItemsModal.css"

const closeModal = (item) => {
    const modal = document.getElementById(item.id)
    modal.classList.remove("active");
}

const WorkItemsModal = ({item}) => {
  return (
    <div className="workItemModal" id={item.id} onClick={(e) =>{
        if(e.target.closest(".modalContent") == null) {
            closeModal(item);          
        }
    }}>
        <div className="modalContent">
            <div className="modalContentHeader">
                <h2 className="modalTitle">{item.title}</h2>
                <i className="uil uil-times" onClick={() => closeModal(item)}></i>
            </div>
            <img src={item.image} alt={item.title + " modal image"} className="modalImage"/>
            <p className="projectDescription"><strong>Description : </strong>{item.description}</p>
            <p className="projectStack"><strong>Stack : </strong>{item.stack}</p>
        </div>

    </div>
  )
}

export default WorkItemsModal