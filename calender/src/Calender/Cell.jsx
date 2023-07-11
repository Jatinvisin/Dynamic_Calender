import clsx from "clsx"

const Cell = (props) => {
  return (
    <div 
      className={clsx("h-12 flex-center justify-center border-b border-r", props.className) } 
      onClick={props.onClick}
     >

      {props.children}
    </div>
  )
}

export default Cell
