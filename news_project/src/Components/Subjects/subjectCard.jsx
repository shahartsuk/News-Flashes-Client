import React from 'react'

export const SubjectCard = ({imageSrc}) => {
  return (
<div class="card" >
    <div class="card-body">
       <img className='card-img-top' src={imageSrc} alt=""
          srcset=""/>
      <h5 className="card-title">Card title</h5>
    </div>
</div>
  )
}

// style="width: 18rem;"