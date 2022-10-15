import s from './Loader.module.css'

export const Loader = () => <div className={s.loader}>
    <div className={s.loaderInner}>
        <div className={s.loaderLineWrap}>
            <div className={s.loaderLine}></div>
        </div>
        <div className={s.loaderLineWrap}>
            <div className={s.loaderLine}></div>
        </div>
        <div className={s.loaderLineWrap}>
            <div className={s.loaderLine}></div>
        </div>
        <div className={s.loaderLineWrap}>
            <div className={s.loaderLine}></div>
        </div>
        <div className={s.loaderLineWrap}>
            <div className={s.loaderLine}></div>
        </div>
    </div>
</div>

