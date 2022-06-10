import React from 'react'

export interface CheckProps {
    textLabel: string
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}
