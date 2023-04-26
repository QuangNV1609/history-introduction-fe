import styles from './ApprovePostItem.module.scss';
import { host } from '../../../api/axiosClient';

const CreatePostItem = ({ image, title, date, id}) => {
    const handleChange = (e) => {
        const {id, checked} = e.target;
    }
    return (
        <div className={styles.container}>
            <div className={styles.img_container}>
                <div className={styles.thumbnail_img}>
                    <img src={image} alt="thumbnail image" />
                    <input type="checkbox" name={id} onChange={handleChange}/>
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