import React, { useState, useEffect, Fragment } from 'react'
import { getStory } from '../services/hnApi'

const Story = ({ storyId }) => {
  const [story, setStory] = useState()

  useEffect(() => {
    getStory(storyId)
      .then(data => data && data.url && setStory(data))
  }, [])

  return story && story.url ? (
    
    <a href={story.url} target='_blank'><h2>{story.title}</h2></a>

  ) : (null)
}

export default Story
