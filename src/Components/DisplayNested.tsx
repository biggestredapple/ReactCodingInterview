import React from 'react';

interface Props {
  nestedObject: object
}

const DisplayNestedComponent: React.FC<Props> = ({nestedObject}) => {
  return (
    <>
      <div style={{ marginTop: "20px" }}>
        {
          Object.entries(nestedObject).map(([key, value]) => {
            if(typeof value === "object"){
              return (
                <>
                  <p>{`${key}: `}</p>
                  <div style={{ paddingLeft: 50 }}>
                    <DisplayNestedComponent nestedObject={value} />
                  </div>
                </>
              )
            } else {
              return (
                <>
                  <p>{`${key}: ${value}`}</p>
                </>
              )
            }
          })
        }
      </div>
    </>
  )
}

export default DisplayNestedComponent