import React, { useState, useEffect } from 'react'

import { getStoryIds, getStory } from '../services/hnApi'
import { StoriesWrapper, GlobalStyle } from '../styles/StoriesStyles'
import Story from '../components/Story'

function Stories() {
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    getStoryIds().then(data => setStoryIds(data))
  }, [])

  return (
    <div>
      <GlobalStyle>
        <StoriesWrapper data-testid="stories-container">
          <h1>Hacker New Stories</h1>
          {storyIds.map(storyId => (
            <Story key={storyId} storyId={storyId} />
          ))}
        </StoriesWrapper>
      </GlobalStyle>
    </div>
  )
}

export default Stories
