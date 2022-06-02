import React, { useEffect, useRef } from 'react'
import data from '@emoji-mart/data'

export default function EmojiPicker(props: any) {
    const ref: any = useRef()

    useEffect(() => {
        import('emoji-mart').then((EmojiMart) => {
            new EmojiMart.Picker({ ...props, data, ref })
        })
    }, [])

    return (<div ref={ref} />)
}