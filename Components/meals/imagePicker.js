import style from './imagePicker.module.scss'


export default function ImagePicker({label}){
    return <div className={style.picker}>
        <label htmlFor={names}>{label}</label>
        <div className={style.controls}>
            <input type='file' id="image " accept='image/png, image/jpeg' name={names} />

        </div>
    </div>
}