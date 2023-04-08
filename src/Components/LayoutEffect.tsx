import { Link } from "react-router-dom";
import { ButtonWithTooltip, Tooltip, TooltipContainer } from "./LayoutEffect/index"

const LayoutEffect = () => {
  return (
    <div>
      <Link to={`https://react.dev/reference/react/useLayoutEffect#usage`}>useLayoutEffect Usage</Link>
      <ButtonWithTooltip
        tooltipContent={
          <div>
            This tooltip does not fit above the button
            <br />
            This is why it's displayed below instead!
          </div>
        }
      >
        Hover over me (tooltip above)
      </ButtonWithTooltip>
    </div>
  )
}

export default LayoutEffect;