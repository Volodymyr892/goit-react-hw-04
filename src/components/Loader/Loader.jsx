import css from './Loader.module.css'
import {CirclesWithBar} from 'react-loader-spinner'
export default function Loader() {
    return(
      <p className={css.container}>
           <CirclesWithBar
      height="50"
      width="50"
      color="#4fa94d"
      outerCircleColor="#4fa94d"
      innerCircleColor="#4fa94d"
      barColor="#4fa94d"
      ariaLabel="circles-with-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />
      </p>
    )
}