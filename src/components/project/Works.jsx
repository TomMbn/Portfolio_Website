'use client'
import { useState, useEffect, useMemo } from 'react'
import { getProjectsData, getProjectsCategories } from './Data'
import WorkItems from './WorkItems'
import WorkItemsModal from './WorkItemsModal'
import { getT } from '../../utils/getTranslation'

const Works = ({ lang }) => {
  const t = useMemo(() => getT(lang), [lang])
  const projectsData = useMemo(() => getProjectsData(t), [t])
  const projectsCategories = useMemo(() => getProjectsCategories(t), [t])

  const [item, setItem] = useState(() => ({ name: getT(lang)('projects.categories.all') }))
  const [projects, setProjects] = useState(() => getProjectsData(getT(lang)))
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (item.name === t('projects.categories.all')) {
      setProjects(projectsData)
    } else {
      setProjects(projectsData.filter((p) => p.category === item.name))
    }
  }, [item, projectsData, t])

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent })
    setActive(index)
  }

  return (
    <>
      <div className="workFilters">
        {projectsCategories.map((cat, index) => (
          <span
            className={`${active === index ? 'activeWork' : ''} workItem`}
            key={index}
            onClick={(e) => handleClick(e, index)}
          >
            {cat.name}
          </span>
        ))}
      </div>
      <div className="workContainer container grid">
        {projects.map((item) => (
          <div key={item.id}>
            <WorkItems item={item} />
            <WorkItemsModal item={item} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Works
