import React, { useContext, useEffect, useState } from 'react'

const RelatedDoctors = ({speciality, docID}) => {

    const {doctors} = useContext(AppContext)

    const [relDoc, setRelDocs] = useState([])

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc)=> doc.speciality === speciality && doc._id !== docID)
            setRelDocs(doctorsData)
        }
    }, [doctors, speciality, docID])

  return (
    <div>
      
    </div>
  )
}

export default RelatedDoctors
