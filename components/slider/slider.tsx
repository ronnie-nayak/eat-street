'use client'

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
export default function Slider() {

  return (
    <div>
      <Flicking
        align="prev"
        circular={true}
        onMoveEnd={e => {
          console.log(e);
        }}>
        <div className="panel">1</div>
        <div className="panel">2</div>
        <div className="panel">3</div>
      </Flicking>
    </div>
  )
}
