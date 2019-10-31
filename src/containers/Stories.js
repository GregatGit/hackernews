import React, { useState, useEffect } from 'react'

import { getStoryIds, getStory } from '../services/hnApi'


function Stories() {
  const [storyIds, setStoryIds] = useState([])

  useEffect(() => {
    
    getStoryIds().then(data => setStoryIds(data))
    getStory(21407015).then(data => console.log(data))
   
  }, [])

  return (
    <div className="App">
      <p>Stories</p>
    </div>
  );
}

export default Stories