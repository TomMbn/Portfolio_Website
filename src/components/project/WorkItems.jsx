import { trackProjectClick, trackExternalLink } from '../../utils/analytics';
import Icon from '../common/Icon';

const openModal = (item) => {
  const modal = document.getElementById(item.id)
  modal.classList.add("active");
  trackProjectClick(item.title);
}

const WorkItems = ({ item }) => {
  return (
    <div className="workCard" key={item.id} onClick={() => openModal(item)}>
      <img src={item.image} alt={item.title + " work screenshot"} className="workImg" loading="lazy" />
      <h3 className="workTitle">{item.title}</h3>
      <a
        href={item.github}
        className="workButton"
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.stopPropagation();
          trackExternalLink(item.github, `GitHub - ${item.title}`);
        }}
      >
        Source code for {item.title} on GitHub <Icon name="right-arrow-alt" className="workButtonIcon" />
      </a>
    </div>
  )
}

export default WorkItems