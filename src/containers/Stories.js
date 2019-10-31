import React, { useState, useEffect } from 'react'

import { getStoryIds, getStory } from '../services/hnApi'
import Story from '../components/Story'

function Stories() {
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    
    getStoryIds().then(data => setStoryIds(data))
   
  }, [])

  return (
    <div>
    {storyIds.map(storyId => <Story key={storyId} storyId={storyId} />)}
    </div>
  );
}

export default Stories