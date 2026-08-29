import style from './card.module.css';

export default function CardPage(){
    return(
<div className={style.card}>
    <h1 className={style.title}>card Page</h1>
    <p>This is card page</p>
</div>

    );
}