import React from 'react'
import { useMediaQuery } from 'react-responsive'

function Svg(prop) {

    const styles = {
        position: prop.position? prop.position : 'absolute',
        top: prop.top?prop.top:'auto',
        left: prop.left? prop.left : 'auto',
        right: prop.right? prop.right : 'auto',
        bottom: prop.bottom? prop.bottom : 'auto',
        zIndex: prop.zIndex? prop.zIndex : 'inherit',
        transform: 'rotate(' + prop.rotate + 'deg)' + 'scale(' + prop.scale + ')',
        opacity: prop.opacity? prop.opacity : '1', 
        marginLeft: prop.marginLeft? prop.marginLeft : 'auto',
        marginRight: prop.marginRight? prop.marginRight : 'auto',
        marginBottom: prop.marginBottom? prop.marginBottom : 'auto',
        marginTop: prop.marginTop? prop.marginTop : 'auto',       
    };

    const mediastyles = {
        display: prop.mdisplay ? prop.mdisplay : 'auto',
        position: prop.mpositions ? prop.mpositions : 'absolute',
        top: prop.mtop?prop.mtop:prop.top?prop.top:'auto',
        left: prop.mleft?prop.mleft:prop.left?prop.left:'auto',
        right: prop.mright?prop.mright:prop.right?prop.right:'auto',
        bottom: prop.mbottom?prop.mbottom:prop.bottom?prop.bottom:'auto',
        zIndex: prop.mzIndex?prop.mzIndex:prop.zIndex?prop.zIndex:'inherit',
        transform: 'rotate(' + prop.mrotate + 'deg)' + 'scale(' + prop.mscale + ')',
        marginLeft: prop.mobilemarginLeft? prop.mobilemarginLeft : 'auto',
        marginRight: prop.mobilemarginRight? prop.mobilemarginRight : 'auto',
        marginBottom: prop.mobilemarginBottom? prop.mobilemarginBottom : 'auto',
        marginTop: prop.mobilemarginTop? prop.mobilemarginTop : 'auto',
    }
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return (
        <img src={prop.src} style={isTabletOrMobile ? mediastyles : styles}  />
    )
}

export default Svg
