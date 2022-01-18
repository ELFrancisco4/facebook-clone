import React from 'react'
import styles from '../styles/friend-component.module.css'
function SVGComponent({svgSrc, height, width, viewbox, fill, d1, d2, fill2, svgClass}) {
    return (
      <div className={styles.svgContainer}>
          <svg className={svgClass} xmlns={svgSrc} height={height} width={width} fill={fill} viewBox={viewbox}>
          <path d={d1} fill={fill2}/><path d={d2}/>
        
      </svg>     
      </div>
    
    )
}

export default SVGComponent
