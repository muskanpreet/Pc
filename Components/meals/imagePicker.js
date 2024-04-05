import style from './imagePicker.module.scss'


export default function ImagePicker(){
    return (<div className={style.picker}>
        <label for="file">Image</label>
        <div className={style.controls}>
            <input type='file' id="image " accept='image/png, image/jpeg' name="file" />
        </div>
    </div>)
}