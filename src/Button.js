export default function Button({customClass,text,customStyle}){
    return(
        <button className={`btn ${customClass? customClass : ''}`}style ={customStyle}>{text}</button>
    )
}