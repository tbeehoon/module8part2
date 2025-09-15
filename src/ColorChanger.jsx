import { useState } from 'react'

function ColorChanger() {
  const [color, setColor] = useState('')

  // Check if the color is valid by trying to set it on a dummy element
  const isValidColor = (col) => {
    const s = new Option().style
    s.color = col
    return s.color !== ''
  }

  const boxStyle = {
    width: '320px',
    height: '100px',
    backgroundColor: isValidColor(color) ? color : '#eee',
    border: '1px solid #ccc',
    marginTop: '10px',
    transition: 'background 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#222',
  }

  return (
    <div className="card">
      <label htmlFor="color-input">Enter a color name:</label>
      <input
        id="color-input"
        type="text"
        value={color}
        onChange={e => setColor(e.target.value)}
        placeholder="e.g. blue, red, green"
        style={{ marginLeft: '10px' }}
      />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <div style={boxStyle}>
          {isValidColor(color) && color ? color : (
            <> 
                I am a boring box with no color. <br/> 
                Please enter a color to make me colorful.
            </>
            )}
        </div>
      </div>
    </div>
  )
}

export default ColorChanger
