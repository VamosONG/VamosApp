import {useDispatch,useSelector} from "react-redux"
import { paginateConductores } from "../../redux/actions";

function Paginado() {

    const dispatch = useDispatch();

    const conductoresPmostrar= useSelector((state)=>state.pageConductores);
    const currentPage= useSelector((state)=>state.currentPage);

    const paginate = (e) => {
        dispatch(paginateConductores(e.target.name))
    }

    
    
    return (
              <div>
                <div>
                <div /* className={style.btnPage} */ >
                            <div /* className={style.btnIcon} */>
                                <button /* className={style.btn} */
                                    name="prev"
                                    onClick={paginate}> &lt;
                                </button>
                                <p /* className={style.btnText} */>Prev</p>
                            </div>

                            <div>{currentPage}</div>

                            <div /* className={style.btnIcon} */>
                                <button /* className={style.btn} */
                                    name="next"
                                    onClick={paginate}> &gt;
                                </button>
                                <p /* className={style.btnText} */>Next</p>
                            </div>

                        </div>
                </div>
                <div>
                    {conductoresPmostrar} {/* Esto es solo para probar, no debería ir aquí */}
                </div>
              </div>
    )
}


export default Paginado

/* const BtnPage = ({ name, onClick, active }) => (
    <div className={${style.btnIcon} ${active ? style.activeBtn : ''}}>
        <button className={style.btn} name={name} onClick={onClick}>
            {name === 'prev' ? '<' : '>'}
        </button>
        <p className={style.btnText}>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
    </div>
);

export default BtnPage; */