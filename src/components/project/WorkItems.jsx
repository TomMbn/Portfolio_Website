const openModal = (item) => {
  const modal = document.getElementById(item.id)
  modal.classList.add("active");
}

const WorkItems = ({item}) => {
  return (
    <div className="workCard" key={item.id} onClick={()=> openModal(item)}>
        <img src={item.image} alt={item.title} className="workImg"/>
        <h3 className="workTitle">{item.title}</h3>
        <a href={item.github} className="workButton" target="_blank" rel="noreferrer">
          Github <i className='bx bx-right-arrow-alt workButtonIcon'></i>
        </a>
    </div>
  )
}

export default WorkItems