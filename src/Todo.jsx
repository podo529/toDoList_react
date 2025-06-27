import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'//폰트어썸 연결
import * as solid from '@fortawesome/free-solid-svg-icons'//아이콘 연결
import './assets/styles/reset.css';
import './assets/styles/Todo.css';


function Todo(){
    return (
        <main>
            <input type="text" placeholder="오늘의 할 일을 적어주세요" />
            <button type="button">
            <FontAwesomeIcon icon={solid.faPenToSquare} />
            </button>
        </main>
    )
}

export default Todo;