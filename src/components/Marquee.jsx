import { marqueeItems } from '../data/portfolio'

function MarqueeStrip({ direction, rotate }) {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems]

  return (
    <div style={{
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      background: 'var(--accent)',
      marginTop: '50px',
      padding: '10px 0',
      transform: 'rotate(' + rotate + 'deg)',
      borderTop: '3px solid rgba(0,0,0,0.2)',
      borderBottom: '3px solid rgba(0,0,0,0.2)',
    }}>
      <div style={{
        display: 'inline-block',
        animation: 'marquee-' + direction + ' 18s linear infinite',
      }}>
        {items.map((item, i) => (
          <span key={i} style={{
            fontFamily: 'var(--display)',
            fontWeight: 800,
            fontSize: '12px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--bg)',
            margin: '0 2rem',
          }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function Marquee() {
  return (
    <div style={{
      position: 'relative',
      overflow: 'hidden',
      height: '180px',
      backgroundColor: '#111',
    }}>
      <div style={{
        position: 'absolute',
        left: '-10%',
        right: '-10%',
        top: '10px',
      }}>
        <MarqueeStrip direction="left" rotate={-4} />
      </div>
      <div style={{
        position: 'absolute',
        left: '-10%',
        right: '-10%',
        top: '44px',
      }}>
        <MarqueeStrip direction="right" rotate={4} />
      </div>
    </div>
  )
}

export default Marquee