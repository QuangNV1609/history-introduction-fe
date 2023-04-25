import styles from './CreatePostItem.module.scss';
import { host } from '../../../api/axiosClient';

const CreatePostItem = ({ image, title, date }) => {
    return (
        <div className={styles.container}>
            <div className={styles.img_container}>
                <div className={styles.edit_review}>
                    <a href=""><i className="fa-solid fa-pencil"></i></a>
                    <a href=""><i className="fa-solid fa-eye"></i></a>
                </div>
                <div className={styles.thumbnail_img}>
                    <img src={host + '/api/file/download/' + image} alt="thumbnail image" />
                </div>
            </div>
            <div>
                <a href="">{title}</a>
                <h4><i className="fa-solid fa-clock"></i>{date}</h4>
            </div>
        </div>
    )
}

export default CreatePostItem;