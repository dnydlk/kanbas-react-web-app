import { useState } from "react"

interface Question {
  id: number
  title: string
  text: string
  points: number
  type: string
  answers: Array<{
    text: string
    isAnswer: boolean
    id: string
  }>
  userSelection?: { userId: string; choice: string }
}

function PreSingleAnswer({ q, user, setChosenAnswerId }: { q: any; user: any; setChosenAnswerId: any }) {
  // console.log("🚀 ~ PreSingleAnswer ~ currentUser:", currentUser)

  const handleClick = (answerId: string) => {
    const updatedQuestion = {
      ...q,
      records: {
        userId: user._id,
        chosenAnswer: answerId,
      },
    }
    // setQuestionList(updatedQuestion)
  }

  return (
    <div id="question-preview" className="container border">
      <div className="row bg-light">
        <div className="col text-start fs-5 p-3">{q.title}</div>
        <div className="col text-end fs-5 p-3">{q.points} pts</div>
      </div>
      <div className="row">
        <div className="col mb-3 p-3">{q.text}</div>
      </div>
      {q.answers.map((a: any) => (
        <>
          <div className="d-flex border-top p-2 align-items-center">
            {q.type === "FILL IN THE BLANK" ? (
              <>
                <label htmlFor={a.id}>Answer&nbsp;&nbsp;</label>
                <input
                  id={a.id}
                  type="text"
                  name="answer"
                  className="form-control"
                  onClick={() => {
                    setChosenAnswerId(a.id)
                  }}
                />
              </>
            ) : (
              <>
                <input
                  id={a.id}
                  type="radio"
                  name="answer"
                  onClick={() => {
                    setChosenAnswerId(a.id)
                  }}
                />
                <label htmlFor={a.id}>&nbsp;&nbsp;{a.text}</label>
              </>
            )}
          </div>
        </>
      ))}
      <div className="row">
        <div className="col"></div>
      </div>
      <hr />
    </div>
  )
}

export default PreSingleAnswer
