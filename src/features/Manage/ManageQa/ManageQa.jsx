import style from "./ManageQa.module.scss"
import Question from "../component/qaCreateItem/QaCreateItem"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import articleApi from "../../../api/article"
import qaApi from "../../../api/qa"

const ManageQa = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [update, setUpdate] = useState(false)
    const [article, setArticle] = useState([])
    useEffect(() => {
        document.body.style = 'background: #f1f1f1;';
        return (() => {
            document.body.style = 'background: white;';
        })
    }, [])
    const [listQuestion, setListQuestion] = useState([
        {
            content: "",
            articleId: -1,
            answers: [
                {
                    content: "",
                    answerTrue: 0
                }
            ]
        }
    ])

    const onAddQuestion = (index) => {
        let newList = [...listQuestion]
        newList.splice(index + 1, 0, {
            content: "",
            articleId: -1,
            answers: [
                {
                    content: "",
                    answerTrue: 0
                }
            ]
        })
        setListQuestion(newList)
    }

    const onQuestionChange = (index, question) => {
        let newList = [...listQuestion]
        newList[index].content = question
        setListQuestion(newList)
    }

    const onAddAnswer = (index, count) => {
        const newList = [...listQuestion]
        while (count >= newList[index].answers.length) {
            newList[index].answers.push({
                content: "",
                answerTrue: 0
            })
        }
        setListQuestion(newList)
    }

    const onAnswerChange = (indexQuest, indexAnswer, answer) => {
        let newList = [...listQuestion]
        while (indexAnswer >= newList[indexQuest].answers.length) {
            newList[indexQuest].answers.push({
                content: "",
                answerTrue: 0
            })
        }
        newList[indexQuest].answers[indexAnswer].content = answer
        setListQuestion(newList)
    }

    const onRemoveQuest = (index) => {
        const newList = [...listQuestion]
        newList.splice(index, 1)
        setListQuestion(newList)
    }

    const onRemoveAnswer = (indexQuest, indexAns) => {
        const newList = [...listQuestion]
        if (newList[indexQuest].answers[indexAns].answerTrue) {
            newList[indexQuest].answers[indexAns].answerTrue = null
        }
        newList[indexQuest].answers.splice(indexAns, 1)
        setListQuestion(newList)
    }

    const onAnswerChosen = (indexQuest, indexChosen) => {
        const newList = [...listQuestion]
        while (indexChosen >= newList[indexQuest].answers.length) {
            newList[indexQuest].answers.push({
                content: "",
                answerTrue: 0
            })
        }
        const length = newList[indexQuest].answers.length
        for (let i = 0; i < length; i++) {
            newList[indexQuest].answers[i].answerTrue = 0
        }
        newList[indexQuest].answers[indexChosen].answerTrue = 1
        console.log("answer choose: ", newList[indexQuest].answers)
        setListQuestion(newList)
    }

    const onArticleChange = (index, id) => {
        const newList = [...listQuestion]
        newList[index].articleId = id
        setListQuestion(newList)
    }

    const saveQa = () => {
        console.log(listQuestion)
        if (!location.state.isUpdate) {
            qaApi.saveQa(listQuestion)
            .then(res => {
                if (res.status == 200) {
                    navigate("/listqa")
                }
            })
            .catch(res => {
                alert(res.response.data.message)
                console.log(res)
            })
        } else {
            navigate("/listqa")
        }
    }

    useEffect(() => {
        if (location.state.isUpdate) {
            setUpdate(true)
            console.log(location.state.itemRequest)
            setListQuestion([location.state.itemRequest])
            setArticle([{
                id:location.state.itemRequest.articleId,
                title:location.state.itemRequest.articleTitle
            }])
        } else {
            const period = location.state.period
            articleApi.getArticleFollowPeriod(period)
                .then(result => setArticle(result.data))
        }
    }, [])

    return (
        <div className={style.container}>
            <div className={style.empty} />
            <div className={style.content}>
                <div>
                    {
                        listQuestion.map((item, index) => (
                            <Question
                                onAddQuestionClick={onAddQuestion}
                                onAnswerChange={onAnswerChange}
                                onQuestionChange={onQuestionChange}
                                onAddAnswer={onAddAnswer}
                                isShowRemoveQuest={listQuestion.length > 1}
                                onRemoveQuest={onRemoveQuest}
                                onRemoveAns={onRemoveAnswer}
                                onAnswerChosen={onAnswerChosen}
                                onArticleChange={onArticleChange}
                                index={index} item={item} key={index}
                                listArticle={article}
                                isUpdate={update} />
                        ))
                    }
                </div>

                <button onClick={saveQa}>Xuất bộ câu hỏi &gt;</button>
            </div>
        </div>
    )
}

export default ManageQa;
