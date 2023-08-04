import {Ring} from "./Loader.styled"
import { ColorRing } from 'react-loader-spinner'


export const Loader = () => {
  return (
<Ring>
    <ColorRing

  visible={true}
  height="80"
      width="80"
      wrapperClass = "loader"
  ariaLabel="blocks-loading"
  colors={['#F02EAA', '#F02EAA', '#F02EAA', '#F02EAA', '#F02EAA' ]
  }
      />
      </Ring>

  )
}
