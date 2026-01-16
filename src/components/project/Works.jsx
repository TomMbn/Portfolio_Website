import { useState } from 'react'
import { useEffect } from 'react'
import { getProjectsData, getProjectsCategories } from './Data'
import WorkItems from './WorkItems'
import WorkItemsModal from './WorkItemsModal'
import { useTranslation } from '../../hooks/useTranslation'

const Works = () => {
  const { t } = useTranslation();
  const projectsData = getProjectsData(t);
  const projectsCategories = getProjectsCategories(t);

  const [item, setItem] = useState({ name: t('projects.categories.all') });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === t('projects.categories.all')) {
      setProjects(projectsData)
    }
    else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      })
      setProjects(newProjects);
    }
  }, [item, projectsData, t]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent })
    setActive(index)
  }

  return (
    <>
      <div className="workFilters">
        {projectsCategories.map((item, index) => {
          return (
            <span className={`${active === index ? "activeWork" : ""} workItem`} key={index} onClick={(e) => {
              handleClick(e, index);
            }}>{item.name}</span>
          )
        })}
      </div>
      <div className="workContainer container grid">
        {projects.map((item) => {
          return (
            <div key={item.id}>
              <WorkItems item={item} key={item.id} />
              <WorkItemsModal item={item} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Works
