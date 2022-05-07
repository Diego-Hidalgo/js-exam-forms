import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import { getExamById } from '/pages/utils/manageExams'

export default function create() {

    let loadQuestions = async () => {
        var url_pieces = (window.location.href).split('/')
        console.log(url_pieces[6])
        let question = getExamById(url_pieces[6])
    }

    loadQuestions()
    
    return (
        <div>
            <Head>
                
            </Head>
            <main>
                <h1>It's possible to get to pages/student/[studentId]/exam/[examId]!!!</h1>
            </main>
        </div>
    )
}