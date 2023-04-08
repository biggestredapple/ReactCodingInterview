import { LayoutEffect } from "../Components"

const LayoutEffectPage = () => {
  return (
    <div style={{ paddingTop: "40px", width: "70%", margin: "auto"  }}>
      <h1>Use useLayoutEffect</h1>
      <LayoutEffect />
    </div>
  )
}

export default LayoutEffectPage