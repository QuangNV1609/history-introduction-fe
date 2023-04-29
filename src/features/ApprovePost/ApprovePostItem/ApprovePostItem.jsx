import styles from './ApprovePostItem.module.scss';
import { host } from '../../../api/axiosClient';
import { useEffect, useState } from 'react';

const CreatePostItem = ({ image, title, date, id, isChecked, idPost}) => {

    const [agreement, setAgreement] = useState(false);
    const [uId, setUid] = useState('');

    const handleChange = (e) => {
        isChecked(e.target.checked); 
        idPost(id);   
    }
    // console.log(agreement);
    // console.log(uId);

    return (
        <div className={styles.container}>
            <div className={styles.img_container}>
                <div className={styles.thumbnail_img}>
                    <img src={image} alt="thumbnail image" />
                    <input
                        type="checkbox"
                        id={id}
                        onChange={handleChange}
                    />
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