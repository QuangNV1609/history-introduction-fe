import { useState } from 'react';
import styles from './SearchPage.module.scss';

const SearchPage = () => {
    const [input, setInput] = useState('');
    const [inputState, setInputState] = useState();

    return (
        <div className={styles.main}>
            <div className={styles.input_wrapper}>
                <input
                    type="text"
                    placeholder='Tìm kiếm bài viết'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            {(inputState === undefined) && (
                <div>
                    <div className={styles.search_result_tag}>
                        <p>
                            <i className="fa-solid fa-fire"></i>
                            Được Xem Nhiều Nhất
                        </p>
                    </div>
                    <div className={styles.search_result_list}>

                    </div>
                </div>
            )}
            {(inputState !== undefined) && (
                <div>
                    <div className={styles.search_result_tag}>
                        <p>
                            <i className="fa-solid fa-sparkles"></i>
                            Kết quả tìm kiếm:
                            <span>Ngô Quyền</span>
                        </p>
                    </div>
                    <div className={styles.search_result_list}>

                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchPage;