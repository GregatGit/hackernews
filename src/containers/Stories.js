import React, { useState, useEffect, memo } from 'react'

import { getStoryIds } from '../services/hnApi'
import { StoriesWrapper, GlobalStyle } from '../styles/StoriesStyles'
import Story from '../components/Story'
import { useInfinateScroll } from '../hooks/useInfinteScroll'

function Stories() {
  const [storyIds, setStoryIds] = useState([])
  const { count } = useInfinateScroll()

  console.log('count: ', count)
  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data))
  }, [])

  return (
    <div>
      <GlobalStyle />
      <StoriesWrapper data-testid="stories-container">
        <h1>Hacker New Stories</h1>
        {storyIds.slice(0, count).map(storyId => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesWrapper>
    </div>
  )
}

export default Stories
